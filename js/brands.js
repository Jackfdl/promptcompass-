/* WhichAI · centralized AI brand marks (v0.26)
 * Local SVG assets only: consistent sizing, offline-ready, no runtime CDN calls.
 * Product and vendor names remain trademarks of their respective owners.
 */
(function () {
  "use strict";

  var BASE = "assets/brands/";

  var FAMILIES = {
    claude:     { slug: "claude", icon: "claude-color.svg", wordmark: "claude-text.svg", wordmarkExact: true },
    chatgpt:    { slug: "openai", icon: "openai.svg", wordmark: "openai-text.svg", mono: true, font: "openai" },
    gemini:     { slug: "gemini", icon: "gemini-color.svg", wordmark: "gemini-text.svg", wordmarkExact: true },
    perplexity: { slug: "perplexity", icon: "perplexity-color.svg", wordmark: "perplexity-text.svg", wordmarkExact: true },
    grok:       { slug: "grok", icon: "grok.svg", wordmark: "grok-text.svg", wordmarkExact: true, mono: true },
    copilot:    { slug: "copilot", icon: "copilot-color.svg", wordmark: "copilot-text.svg", wordmarkExact: true },
    meta:       { slug: "meta", icon: "meta-color.svg", wordmark: "meta-text.svg", font: "meta" },
    llama:      { slug: "meta", icon: "meta-color.svg", wordmark: "meta-text.svg", font: "meta" },
    glm:        { slug: "zhipu", icon: "zhipu-color.svg", wordmark: "zhipu-text.svg" },
    kimi:       { slug: "kimi", icon: "kimi-color.svg", wordmark: "kimi-text.svg", wordmarkExact: true },
    nemotron:   { slug: "nvidia", icon: "nvidia-color.svg", wordmark: "nvidia-text.svg", font: "nvidia" },
    deepseek:   { slug: "deepseek", icon: "deepseek-color.svg", wordmark: "deepseek-text.svg", wordmarkExact: true },
    qwen:       { slug: "qwen", icon: "qwen-color.svg", wordmark: "qwen-text.svg", wordmarkExact: true }
  };

  var VENDORS = {
    "AI21 Labs":             { slug: "ai21", icon: "ai21.svg", wordmark: "ai21-text.svg", mono: true },
    "Ai2":                   { slug: "ai2", icon: "ai2-color.svg", wordmark: "ai2-text.svg" },
    "Alibaba":               { slug: "alibaba", icon: "alibaba-color.svg", wordmark: "alibaba-text.svg" },
    "Amazon":                { slug: "aws", icon: "aws-color.svg", wordmark: "aws-text.svg" },
    "Ant Group":             { slug: "antgroup", icon: "antgroup-color.svg", wordmark: "antgroup-text.svg" },
    "Anthropic":             { slug: "anthropic", icon: "anthropic.svg", wordmark: "anthropic-text.svg", mono: true },
    "Arcee AI":              { slug: "arcee", icon: "arcee-color.svg", wordmark: "arcee-text.svg" },
    "Baidu":                 { slug: "baidu", icon: "baidu-color.svg", wordmark: "baidu-text.svg" },
    "ByteDance":             { slug: "bytedance", icon: "bytedance-color.svg", wordmark: "bytedance-text.svg" },
    "Cohere":                { slug: "cohere", icon: "cohere-color.svg", wordmark: "cohere-text.svg" },
    "DeepSeek":              { slug: "deepseek", icon: "deepseek-color.svg", wordmark: "deepseek-text.svg" },
    "Google":                { slug: "google", icon: "google-color.svg", wordmark: "google-brand-color.svg" },
    "IBM":                   { slug: "ibm", icon: "ibm.svg", wordmark: "ibm-text.svg", mono: true },
    "Inception Labs":        { slug: "inception", icon: "inception.svg", wordmark: "inception-text.svg", mono: true },
    "LG AI Research":        { slug: "lg", icon: "lg-color.svg", wordmark: "lg-text.svg" },
    "Liquid AI":             { slug: "liquid", icon: "liquid.svg", wordmark: "liquid-text.svg", mono: true },
    "Meta":                  { slug: "meta", icon: "meta-color.svg", wordmark: "meta-text.svg" },
    "Microsoft":             { slug: "copilot", icon: "copilot-color.svg", wordmark: "copilot-text.svg" },
    "MiniMax":               { slug: "minimax", icon: "minimax-color.svg", wordmark: "minimax-text.svg" },
    "Mistral AI":            { slug: "mistral", icon: "mistral-color.svg", wordmark: "mistral-text.svg" },
    "Moonshot AI":           { slug: "moonshot", icon: "moonshot.svg", wordmark: "moonshot-text.svg", mono: true },
    "NVIDIA":                { slug: "nvidia", icon: "nvidia-color.svg", wordmark: "nvidia-text.svg" },
    "OpenAI":                { slug: "openai", icon: "openai.svg", wordmark: "openai-text.svg", mono: true },
    "Perplexity AI":         { slug: "perplexity", icon: "perplexity-color.svg", wordmark: "perplexity-text.svg" },
    "Reka AI":               { slug: "reka", icon: "reka-color.svg" },
    "Sarvam AI":             { slug: "sarvam", icon: "sarvam-color.svg", wordmark: "sarvam-text.svg" },
    "StepFun":               { slug: "stepfun", icon: "stepfun-color.svg", wordmark: "stepfun-text.svg" },
    "TII (UAE)":             { slug: "tii", icon: "tii-color.svg", wordmark: "tii-text.svg" },
    "Tencent":               { slug: "tencent", icon: "tencent-color.svg", wordmark: "tencent-text.svg" },
    "Thinking Machines Lab": { slug: "thinking-machines", icon: "thinking-machines-color.svg" },
    "Upstage":               { slug: "upstage", icon: "upstage-color.svg", wordmark: "upstage-text.svg" },
    "Xiaomi":                { slug: "xiaomimimo", icon: "xiaomimimo.svg", wordmark: "xiaomimimo-text.svg", mono: true },
    "Z.ai":                  { slug: "zhipu", icon: "zhipu-color.svg", wordmark: "zhipu-text.svg" },
    "xAI":                   { slug: "xai", icon: "xai.svg", wordmark: "xai-text.svg", mono: true }
  };

  /* A database model can borrow another family's prompt recipe. In that case its
     own maker must win, otherwise an Inkling card could incorrectly show Meta. */
  var FAMILY_VENDORS = {
    claude: ["Anthropic"], chatgpt: ["OpenAI"], gemini: ["Google"],
    perplexity: ["Perplexity AI"], grok: ["xAI"], copilot: ["Microsoft"],
    meta: ["Meta"], llama: ["Meta"], glm: ["Z.ai"], kimi: ["Moonshot AI"],
    nemotron: ["NVIDIA"], deepseek: ["DeepSeek"], qwen: ["Alibaba"]
  };

  function cloneBrand(b) {
    if (!b) return null;
    var out = {};
    Object.keys(b).forEach(function (k) { out[k] = b[k]; });
    return out;
  }

  function resolve(subject) {
    if (!subject) return null;
    if (typeof subject === "string") return cloneBrand(FAMILIES[subject] || VENDORS[subject]);
    if (subject.family && FAMILIES[subject.family] && (!subject.vendor || (FAMILY_VENDORS[subject.family] || []).indexOf(subject.vendor) !== -1)) {
      return cloneBrand(FAMILIES[subject.family]);
    }
    if (subject.vendor && VENDORS[subject.vendor]) return cloneBrand(VENDORS[subject.vendor]);
    if (subject.family && FAMILIES[subject.family]) return cloneBrand(FAMILIES[subject.family]);
    return null;
  }

  function asset(name, base) { return (base === undefined ? BASE : base) + name; }

  function createIcon(subject, extraClass) {
    var brand = resolve(subject);
    if (!brand || !brand.icon || typeof document === "undefined") return null;
    var frame = document.createElement("span");
    frame.className = "ai-brand-icon-frame" + (brand.mono ? " ai-brand-mono" : "") + (extraClass ? " " + extraClass : "");
    frame.setAttribute("aria-hidden", "true");
    frame.setAttribute("data-ai-logo", brand.slug);
    var img = document.createElement("img");
    img.className = "ai-brand-icon";
    img.src = asset(brand.icon);
    img.alt = "";
    img.decoding = "async";
    frame.appendChild(img);
    return frame;
  }

  function createWordmark(brand, label) {
    if (!brand || !brand.wordmark || typeof document === "undefined") return null;
    var img = document.createElement("img");
    img.className = "ai-brand-wordmark" + (brand.mono ? " ai-brand-mono" : "");
    img.src = asset(brand.wordmark);
    img.alt = label || "";
    img.decoding = "async";
    return img;
  }

  function createMark(subject, label, options) {
    options = options || {};
    var brand = resolve(subject);
    if (!brand || typeof document === "undefined") return null;
    var mark = document.createElement(options.tag || "span");
    mark.className = "ai-brand-mark ai-brand-" + brand.slug + (options.className ? " " + options.className : "");
    mark.setAttribute("data-ai-brand", brand.slug);
    if (label) mark.setAttribute("aria-label", label);
    var icon = createIcon(subject, options.small ? "ai-brand-icon-sm" : "");
    if (icon) mark.appendChild(icon);

    if (options.wordmark && brand.wordmark && (brand.wordmarkExact || (typeof subject === "string" && VENDORS[subject]))) {
      mark.appendChild(createWordmark(brand, label));
    } else {
      var name = document.createElement("span");
      name.className = "ai-brand-label" + (brand.font ? " ai-font-" + brand.font : "");
      name.textContent = label || "";
      mark.appendChild(name);
      if (options.providerWordmark && brand.wordmark) {
        var provider = createWordmark(brand, "");
        provider.classList.add("ai-brand-provider");
        provider.setAttribute("aria-hidden", "true");
        mark.appendChild(provider);
      }
    }
    return mark;
  }

  function setMark(el, subject, label, options) {
    if (!el) return false;
    var mark = createMark(subject, label, options);
    if (!mark) { el.textContent = label || ""; return false; }
    el.textContent = "";
    el.appendChild(mark);
    return true;
  }

  function enhanceControls(root) {
    if (typeof document === "undefined") return;
    root = root || document;
    Array.prototype.slice.call(root.querySelectorAll(".model-check[data-ai-brand]")).forEach(function (control) {
      if (control.querySelector(".ai-brand-icon-frame")) return;
      var target = control.querySelector("span");
      var icon = createIcon(control.getAttribute("data-ai-brand"), "ai-brand-icon-sm");
      if (target && icon) target.insertBefore(icon, target.firstChild);
    });
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function markHTML(subject, label, options) {
    options = options || {};
    var brand = resolve(subject);
    if (!brand) return esc(label);
    var base = options.base === undefined ? "/assets/brands/" : options.base;
    var mono = brand.mono ? " ai-brand-mono" : "";
    var icon = '<span class="ai-brand-icon-frame' + mono + '" aria-hidden="true" data-ai-logo="' + esc(brand.slug) + '"><img class="ai-brand-icon" src="' + esc(asset(brand.icon, base)) + '" alt="" /></span>';
    var name;
    if (options.wordmark && brand.wordmark && (brand.wordmarkExact || (typeof subject === "string" && VENDORS[subject]))) {
      name = '<img class="ai-brand-wordmark' + mono + '" src="' + esc(asset(brand.wordmark, base)) + '" alt="' + esc(label) + '" />';
    } else {
      name = '<span class="ai-brand-label">' + esc(label) + '</span>';
      if (options.providerWordmark && brand.wordmark) {
        name += '<img class="ai-brand-wordmark ai-brand-provider' + mono + '" src="' + esc(asset(brand.wordmark, base)) + '" alt="" aria-hidden="true" />';
      }
    }
    return '<span class="ai-brand-mark ai-brand-' + esc(brand.slug) + '" data-ai-brand="' + esc(brand.slug) + '" aria-label="' + esc(label) + '">' + icon + name + '</span>';
  }

  var API = {
    FAMILIES: FAMILIES,
    VENDORS: VENDORS,
    resolve: resolve,
    asset: asset,
    createIcon: createIcon,
    createMark: createMark,
    setMark: setMark,
    enhanceControls: enhanceControls,
    markHTML: markHTML
  };

  var root = typeof window !== "undefined" ? window : globalThis;
  root.WhichAIBrands = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
  if (typeof document !== "undefined") enhanceControls(document);
})();
