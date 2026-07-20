/*
 * WhichAI - Prompt Doctor (v0.24.0)
 * Static prompt analysis, 100% client-side: checklist, score, and a
 * before/after view powered by the existing prompt engine. No API calls.
 * Check names and tips are English by design (content policy).
 */
(function () {
  "use strict";

  var deps = null; // { T, useInGenerator(text), copy(text, btn) }
  var root = null;
  var lastText = "";
  var lastModel = "claude";

  function Engine() { return window.PromptCompassEngine || null; }

  /* Each check: id, label, weight, test(text) -> bool, tip shown when missing.
     Regexes are generous and bilingual (EN + IT) on purpose. */
  var CHECKS = [
    { id: "length", label: "Clear, specific request", w: 15,
      test: function (t) { return t.trim().split(/\s+/).length >= 8; },
      tip: "One line is rarely enough. Say what, for whom, and what a good result looks like." },
    { id: "role", label: "Role or perspective", w: 10,
      test: function (t) { return /(act as|you are|as an? |sei un|agisci come|nei panni)/i.test(t); },
      tip: "Telling the model who to be ('act as a senior editor') sharpens tone and depth." },
    { id: "audience", label: "Audience", w: 10,
      test: function (t) { return /(audience|for (beginners|experts|kids|students|developers|clients)|aimed at|target|per (principianti|esperti|bambini|studenti|clienti)|rivolto a)/i.test(t); },
      tip: "Who will read the answer? The same content changes completely for experts vs beginners." },
    { id: "format", label: "Output format", w: 12,
      test: function (t) { return /(bullet|list|table|tabella|json|markdown|paragraph|paragrafi|\bwords\b|\bparole\b|steps|outline|schema|codice|code block|email|slide)/i.test(t); },
      tip: "Name the shape you want: a table, 5 bullets, 200 words, runnable code, an email." },
    { id: "constraints", label: "Constraints and limits", w: 12,
      test: function (t) { return /(must|avoid|do not|don't|no more than|at (least|most)|within|under|limit|max|min|senza|evita|non usare|entro|al massimo|almeno|\d+\s*(words|parole|righe|lines|items|bullet))/i.test(t); },
      tip: "Limits (length, tone, things to avoid) prevent the answer you do not want." },
    { id: "context", label: "Context / background", w: 10,
      test: function (t) { return /(context|background|given that|we are|our (company|team|product)|contesto|premessa|la nostra|il nostro|siamo)/i.test(t) || t.trim().split(/\s+/).length >= 40; },
      tip: "Two lines of background (project, situation, prior attempts) beat a page of guessing." },
    { id: "examples", label: "Examples", w: 8,
      test: function (t) { return /(for example|e\.g\.|example:|such as|like this|ad esempio|per esempio|esempio:)/i.test(t); },
      tip: "One example of the style or output you want is worth many adjectives." },
    { id: "quality", label: "Quality criteria", w: 8,
      test: function (t) { return /(criteria|success|make sure|ensure|should be (accurate|concise|clear)|high.quality|verifica|assicurati|criteri|deve essere)/i.test(t); },
      tip: "Say how you will judge the result: accuracy? brevity? originality? runnable code?" },
    { id: "uncertainty", label: "Uncertainty handling", w: 7,
      test: function (t) { return /(if (you are |you're )?(unsure|uncertain|not sure)|ask (me )?(clarifying|questions|before)|state your assumptions|se non (sei sicuro|sai)|chiedi|dichiara le assunzioni)/i.test(t); },
      tip: "Tell the model what to do when it does not know: ask, or state assumptions. This cuts hallucinations." },
    { id: "sources", label: "Sources / citations", w: 8,
      test: function (t) { return /(sources?|cite|citation|references?|links?|fonti|cita|riferimenti)/i.test(t); },
      tip: "For anything factual, ask for sources or citations you can check." }
  ];

  function analyze(text) {
    var results = CHECKS.map(function (c) {
      return { id: c.id, label: c.label, w: c.w, pass: c.test(text), tip: c.tip };
    });
    var got = results.reduce(function (s, r) { return s + (r.pass ? r.w : 0); }, 0);
    var total = CHECKS.reduce(function (s, c) { return s + c.w; }, 0);
    var score = Math.round((got / total) * 100);
    var eng = Engine();
    var task = eng ? eng.detectTaskType(text) : "general";
    return { results: results, score: score, task: task };
  }

  /* What the engine's optimized version adds on top of the user's prompt */
  var ENGINE_ADDS = {
    role: "an explicit expert role",
    format: "a structured output contract",
    constraints: "task-specific rules and guardrails",
    context: "a dedicated context section",
    quality: "a quality bar and self-check before finalizing",
    uncertainty: "instructions to state assumptions instead of guessing"
  };

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function scoreClass(s) { return s >= 75 ? "good" : s >= 45 ? "mid" : "low"; }

  function render() {
    if (!root) return;
    root.innerHTML = "";
    var eng = Engine();

    var card = el("div", "card finder-card doctor-card");
    card.appendChild(el("h2", "finder-title", deps.T("doctorTitle")));
    card.appendChild(el("p", "finder-sub", deps.T("doctorSub")));

    var ta = document.createElement("textarea");
    ta.id = "doctor-input";
    ta.rows = 5;
    ta.placeholder = deps.T("doctorPh");
    ta.value = lastText;
    card.appendChild(ta);

    var row = el("div", "compare-actions");
    var go = el("button", "btn-primary btn-inline", deps.T("doctorGo"));
    go.type = "button";
    go.addEventListener("click", function () {
      lastText = ta.value.trim();
      render();
      var res = document.querySelector(".doctor-result");
      if (res) res.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    row.appendChild(go);
    card.appendChild(row);
    root.appendChild(card);

    if (!lastText) return;
    var a = analyze(lastText);

    var result = el("div", "doctor-result");

    // score card (conclusion first)
    var sc = el("div", "card finder-result doctor-score-card");
    var shead = el("div", "db-row-head");
    var big = el("span", "doctor-score " + scoreClass(a.score), a.score + "/100");
    shead.appendChild(big);
    shead.appendChild(el("span", "badge", deps.T("doctorDetected") + " " + (deps.T("task_" + a.task) || a.task)));
    sc.appendChild(shead);
    var track = el("div", "cat-track doctor-track");
    var fill = el("span", "cat-fill doctor-fill " + scoreClass(a.score));
    fill.style.width = Math.max(3, a.score) + "%";
    track.appendChild(fill);
    sc.appendChild(track);
    var missing = a.results.filter(function (r) { return !r.pass; });
    sc.appendChild(el("p", "finder-line", missing.length
      ? deps.T("doctorMissingLead") + " " + missing.slice(0, 3).map(function (m) { return m.label.toLowerCase(); }).join(", ") + (missing.length > 3 ? "…" : "")
      : deps.T("doctorAllGood")));
    result.appendChild(sc);

    // checklist
    var cl = el("div", "card finder-result");
    cl.appendChild(el("p", "finder-block-title", deps.T("doctorChecklist")));
    var ul = el("ul", "doctor-checks");
    a.results.forEach(function (r) {
      var li = el("li", "doctor-check " + (r.pass ? "pass" : "miss"));
      var mark = el("span", "doctor-mark", r.pass ? "✓" : "✗");
      li.appendChild(mark);
      var body = el("div", "doctor-check-body");
      body.appendChild(el("strong", null, r.label));
      if (!r.pass) body.appendChild(el("span", "doctor-tip", r.tip));
      li.appendChild(body);
      ul.appendChild(li);
    });
    cl.appendChild(ul);
    result.appendChild(cl);

    // optimized version + before/after
    if (eng) {
      var opt = el("div", "card finder-result doctor-opt");
      opt.appendChild(el("p", "finder-block-title", deps.T("doctorOptimized")));

      var selRow = el("div", "mc-selrow");
      var sel = document.createElement("select");
      sel.className = "mc-select";
      eng.MODEL_ORDER.forEach(function (mid) {
        var o = document.createElement("option");
        o.value = mid;
        o.textContent = eng.MODELS[mid].label;
        sel.appendChild(o);
      });
      sel.value = lastModel;
      var selectedBrand = el("span", "doctor-selected-brand");
      function refreshSelectedBrand() {
        var label = eng.MODELS[sel.value] ? eng.MODELS[sel.value].label : sel.value;
        if (window.WhichAIBrands) {
          window.WhichAIBrands.setMark(selectedBrand, sel.value, label, { providerWordmark: true });
        } else selectedBrand.textContent = label;
      }
      refreshSelectedBrand();
      selRow.appendChild(selectedBrand);
      selRow.appendChild(sel);
      opt.appendChild(selRow);

      var panes = el("div", "doctor-panes");
      var p1 = el("div", "doctor-pane");
      p1.appendChild(el("p", "compare-label", deps.T("doctorBefore")));
      var pre1 = el("pre", "prompt-text prompt-text-sm doctor-before");
      pre1.textContent = lastText;
      p1.appendChild(pre1);
      var p2 = el("div", "doctor-pane");
      p2.appendChild(el("p", "compare-label", deps.T("doctorAfter")));
      var pre2 = el("pre", "prompt-text prompt-text-sm doctor-after");
      p2.appendChild(pre2);
      panes.appendChild(p1);
      panes.appendChild(p2);
      opt.appendChild(panes);

      var whyBox = el("div", "doctor-why");
      opt.appendChild(whyBox);

      var acts = el("div", "compare-actions");
      var copyB = el("button", "btn-copy", deps.T("copyPrompt"));
      copyB.type = "button";
      var openB = el("button", "btn-copy", deps.T("doctorToGen"));
      openB.type = "button";
      openB.addEventListener("click", function () { deps.useInGenerator(lastText); });
      acts.appendChild(copyB);
      acts.appendChild(openB);
      opt.appendChild(acts);
      opt.appendChild(el("p", "router-meta", deps.T("doctorNote")));

      var current = { prompt: "" };
      function build() {
        var out = eng.generate({ goal: lastText, context: "", taskType: a.task, models: [sel.value] })[0];
        current.prompt = out.prompt;
        pre2.textContent = out.prompt;
        whyBox.innerHTML = "";
        whyBox.appendChild(el("p", "finder-block-title", deps.T("doctorChanges")));
        var wUl = el("ul", "finder-why");
        // structural additions the engine guarantees, minus what the user already had
        Object.keys(ENGINE_ADDS).forEach(function (id) {
          var had = a.results.some(function (r) { return r.id === id && r.pass; });
          if (!had) wUl.appendChild(el("li", null, "Added " + ENGINE_ADDS[id] + "."));
        });
        (out.why || []).slice(0, 3).forEach(function (w) { wUl.appendChild(el("li", null, w)); });
        whyBox.appendChild(wUl);
      }
      sel.addEventListener("change", function () { lastModel = sel.value; refreshSelectedBrand(); build(); });
      copyB.addEventListener("click", function () { deps.copy(current.prompt, copyB); });
      build();
      result.appendChild(opt);
    }

    root.appendChild(result);
  }

  var Doctor = {
    init: function (rootEl, dependencies) {
      root = rootEl;
      deps = dependencies;
      render();
    },
    rerender: function () { if (root && deps) render(); },
    load: function (text) { lastText = (text || "").trim(); if (root && deps) render(); },
    /* exposed for tests */
    _analyze: analyze,
    _checks: CHECKS
  };

  var g = typeof window !== "undefined" ? window : globalThis;
  g.WhichAIDoctor = Doctor;
  if (typeof module !== "undefined" && module.exports) module.exports = Doctor;
})();
