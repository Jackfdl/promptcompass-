/*
 * WhichAI — Merge studio (v0.21.0)
 * Read model outputs side by side and hand-pick the best parts into one draft.
 * Fully manual by design: the human stays the editor. No network calls.
 * Optional highlight: sentences that appear in 2+ sources get marked, so
 * agreements (and unique ideas) are visible at a glance.
 */
(function () {
  "use strict";

  var LS_KEY = "pc_merge_v1";

  var state = {
    sources: [],   // [{ label, text }]
    draft: "",
    goal: "",
    highlight: false
  };

  function I18n() { return window.PromptCompassI18n || null; }

  function lang() {
    try { return localStorage.getItem("pc_lang") || "en"; } catch (e) { return "en"; }
  }

  function t(key) {
    var i = I18n();
    return i ? i.t(lang(), key) : key;
  }

  function save() {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({ sources: state.sources, draft: state.draft, goal: state.goal }));
    } catch (e) { /* ignore */ }
  }

  function restore() {
    try {
      var d = JSON.parse(localStorage.getItem(LS_KEY)) || {};
      if (d.sources && d.sources.length) state.sources = d.sources;
      if (typeof d.draft === "string") state.draft = d.draft;
      if (typeof d.goal === "string") state.goal = d.goal;
    } catch (e) { /* ignore */ }
  }

  /* ---------- sentence overlap ---------- */

  function splitSentences(text) {
    return (text.match(/[^.!?\n]+[.!?]*\s*/g) || [text]);
  }

  function normalize(sent) {
    return sent.toLowerCase().replace(/[^a-z0-9À-ɏЀ-ӿ؀-ۿ一-鿿]+/g, " ").trim();
  }

  // Map normalized sentence -> number of DISTINCT sources containing it.
  function sharedMap() {
    var map = {};
    state.sources.forEach(function (src) {
      var seen = {};
      splitSentences(src.text).forEach(function (sent) {
        var n = normalize(sent);
        if (n.length < 18) return; // ignore trivial fragments
        if (seen[n]) return;
        seen[n] = true;
        map[n] = (map[n] || 0) + 1;
      });
    });
    return map;
  }

  /* ---------- DOM ---------- */

  var els = {};
  var wired = false;

  function grab() {
    els.view = document.getElementById("merge-view");
    els.empty = document.getElementById("merge-empty");
    els.wrap = document.getElementById("merge-wrap");
    els.sources = document.getElementById("merge-sources");
    els.draft = document.getElementById("merge-draft");
    els.count = document.getElementById("merge-count");
    els.copy = document.getElementById("merge-copy");
    els.exportBtn = document.getElementById("merge-export");
    els.clear = document.getElementById("merge-clear");
    els.msg = document.getElementById("merge-msg");
    els.highlight = document.getElementById("merge-highlight");
    els.srcName = document.getElementById("merge-src-name");
    els.srcText = document.getElementById("merge-src-text");
    els.srcAdd = document.getElementById("merge-src-add");
  }

  function flash(text) {
    if (!els.msg) return;
    els.msg.textContent = text;
    els.msg.hidden = false;
    clearTimeout(flash._t);
    flash._t = setTimeout(function () { els.msg.hidden = true; }, 2200);
  }

  function updateCount() {
    if (!els.count) return;
    var words = state.draft.trim() ? state.draft.trim().split(/\s+/).length : 0;
    els.count.textContent = words + " " + t("mergeWords");
  }

  function appendToDraft(text) {
    var add = (text || "").trim();
    if (!add) return;
    state.draft = state.draft.trim() ? state.draft.replace(/\s+$/, "") + "\n\n" + add : add;
    if (els.draft) els.draft.value = state.draft;
    updateCount();
    save();
  }

  function sourceCard(src, idx, shared) {
    var card = document.createElement("div");
    card.className = "card merge-source";

    var head = document.createElement("div");
    head.className = "merge-source-head";
    var name = document.createElement("strong");
    name.textContent = src.label;
    head.appendChild(name);

    var actions = document.createElement("div");
    actions.className = "merge-source-actions";

    function mkBtn(labelKey, fn, cls) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = cls || "btn-copy";
      b.textContent = t(labelKey);
      b.addEventListener("click", fn);
      actions.appendChild(b);
      return b;
    }

    mkBtn("mergeBase", function () {
      if (state.draft.trim() && !window.confirm(t("mergeBase") + "?")) return;
      state.draft = src.text.trim();
      if (els.draft) els.draft.value = state.draft;
      updateCount();
      save();
    });

    mkBtn("mergeAddSel", function () {
      var sel = window.getSelection ? String(window.getSelection()) : "";
      if (sel && sel.trim()) appendToDraft(sel);
      else flash(t("mergeAddSel"));
    });

    mkBtn("mergeAddAll", function () { appendToDraft(src.text); });

    var rm = document.createElement("button");
    rm.type = "button";
    rm.className = "btn-link danger merge-x";
    rm.textContent = "×";
    rm.setAttribute("aria-label", t("deleteBtn"));
    rm.addEventListener("click", function () {
      state.sources.splice(idx, 1);
      save();
      render();
    });
    actions.appendChild(rm);

    head.appendChild(actions);
    card.appendChild(head);

    var body = document.createElement("div");
    body.className = "merge-source-text";
    splitSentences(src.text).forEach(function (sent) {
      var span = document.createElement("span");
      span.textContent = sent;
      var n = normalize(sent);
      var c = shared[n] || 0;
      if (n.length >= 18 && c >= 2) {
        span.className = "mg-shared";
        span.title = c + "×";
      }
      body.appendChild(span);
    });
    card.appendChild(body);
    return card;
  }

  function render() {
    if (typeof document === "undefined") return; // Node (tests)
    grab();
    if (!els.view) return;
    var has = state.sources.length > 0;
    if (els.empty) els.empty.hidden = has;
    if (els.wrap) els.wrap.hidden = false; // editor & add-source always usable
    if (els.sources) {
      els.sources.innerHTML = "";
      var shared = sharedMap();
      state.sources.forEach(function (src, i) {
        els.sources.appendChild(sourceCard(src, i, shared));
      });
      els.sources.classList.toggle("mg-hl", !!state.highlight);
    }
    if (els.draft && els.draft.value !== state.draft) els.draft.value = state.draft;
    if (els.highlight) els.highlight.checked = !!state.highlight;
    updateCount();
    wire();
  }

  function wire() {
    if (wired) return;
    wired = true;
    if (els.draft) {
      els.draft.addEventListener("input", function () {
        state.draft = els.draft.value;
        updateCount();
        save();
      });
    }
    if (els.highlight) {
      els.highlight.addEventListener("change", function () {
        state.highlight = els.highlight.checked;
        if (els.sources) els.sources.classList.toggle("mg-hl", state.highlight);
      });
    }
    if (els.copy) {
      els.copy.addEventListener("click", function () {
        var done = function () { flash(t("copied")); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(state.draft).then(done, function () { fallbackCopy(); done(); });
        } else { fallbackCopy(); done(); }
      });
    }
    if (els.exportBtn) {
      els.exportBtn.addEventListener("click", exportMd);
    }
    if (els.clear) {
      els.clear.addEventListener("click", function () {
        if (state.draft.trim() && !window.confirm(t("mergeClear") + "?")) return;
        state.draft = "";
        if (els.draft) els.draft.value = "";
        updateCount();
        save();
      });
    }
    if (els.srcAdd) {
      els.srcAdd.addEventListener("click", function () {
        var text = (els.srcText.value || "").trim();
        if (!text) { els.srcText.focus(); return; }
        var label = (els.srcName.value || "").trim() || "Source " + (state.sources.length + 1);
        state.sources.push({ label: label, text: text });
        els.srcText.value = "";
        els.srcName.value = "";
        save();
        render();
      });
    }
  }

  function fallbackCopy() {
    var ta = document.createElement("textarea");
    ta.value = state.draft;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  function exportMd() {
    var lines = [];
    lines.push("# WhichAI — merged draft");
    lines.push("");
    if (state.goal) { lines.push("- Goal: " + state.goal); }
    lines.push("- Date: " + new Date().toLocaleString());
    lines.push("- Sources: " + (state.sources.map(function (s) { return s.label; }).join(", ") || "—"));
    lines.push("");
    lines.push("## Draft");
    lines.push("");
    lines.push(state.draft || "_(empty)_");
    lines.push("");
    lines.push("---");
    lines.push("Assembled by hand in WhichAI Merge studio — https://whichai.wiki");
    var blob = new Blob([lines.join("\n")], { type: "text/markdown" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "whichai-merged-draft.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
  }

  restore();

  var Merge = {
    /** load(sources, meta) — called from Compare. Replaces sources, keeps a non-empty draft. */
    load: function (sources, meta) {
      if (sources && sources.length) state.sources = sources.map(function (s) { return { label: s.label, text: s.text }; });
      if (meta && meta.goal) state.goal = meta.goal;
      save();
      render();
    },
    render: render,
    onLanguageChange: function () {
      var v = typeof document !== "undefined" ? document.getElementById("merge-view") : null;
      if (v && !v.hidden) render();
    },
    _state: state // exposed for tests
  };

  var root = typeof window !== "undefined" ? window : globalThis;
  root.WhichAIMerge = Merge;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Merge;
  }
})();
