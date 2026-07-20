/* WhichAI — sandbox test suite (v0.22)
   Run: node tests/run-tests.mjs   (from the project root)
   Pure Node, no dependencies. Exits 1 on any failure. */
import { readFileSync, existsSync } from "fs";
import { execSync } from "child_process";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

let pass = 0, fail = 0;
const failures = [];
function check(name, cond, detail) {
  if (cond) { pass++; console.log("  ok  " + name); }
  else { fail++; failures.push(name + (detail ? " — " + detail : "")); console.log("FAIL  " + name + (detail ? " — " + detail : "")); }
}

/* Node needs a window for the browser-style modules */
globalThis.window = globalThis;

/* ---------- 1. Syntax of every shipped JS file ---------- */
const jsFiles = ["js/engine.js", "js/benchmarks.js", "js/chains.js", "js/i18n.js", "js/models-db.js", "js/merge.js", "js/charts.js", "js/glossary.js", "js/finder.js", "js/modelcompare.js", "js/stack.js", "js/doctor.js", "js/app.js", "sw.js"];
for (const f of jsFiles) {
  try { execSync("node --check " + f, { stdio: "pipe" }); check("syntax " + f, true); }
  catch (e) { check("syntax " + f, false, String(e.stderr || e)); }
}

/* ---------- 2. Load data modules ---------- */
const Engine = require("../js/engine.js");
const Bench = require("../js/benchmarks.js");
const Chains = require("../js/chains.js");
const I18n = require("../js/i18n.js");
const DB = require("../js/models-db.js");
const Charts = require("../js/charts.js");
const Glossary = require("../js/glossary.js");
const Finder = require("../js/finder.js");
const MC = require("../js/modelcompare.js");
const Stack = require("../js/stack.js");
const Doctor = require("../js/doctor.js");

/* ---------- 3. models-db integrity ---------- */
{
  const ids = new Set();
  let dup = null, badTag = null, badCat = null, badPriv = null, badFam = null, badSpec = null, weakReview = null;
  const VALID_TAGS = ["free", "paid", "api", "open-weights", "prompt-target", "auto-run", "info-only", "private", "preview", "legacy", "rumored"];
  const VALID_LABELS = ["coding", "reasoning", "writing", "research", "agents", "speed", "value", "multilingual", "vision", "long-context", "local", "enterprise"];
  const FAMILIES = Engine.MODEL_ORDER;
  for (const m of DB.models) {
    if (ids.has(m.id)) dup = m.id; ids.add(m.id);
    for (const t of m.tags) if (!VALID_TAGS.includes(t)) badTag = m.id + ":" + t;
    for (const l of m.labels || []) if (!VALID_LABELS.includes(l)) badTag = m.id + ":" + l;
    if ((m.status === "private" || m.status === "rumored") && !m.tags.includes("info-only")) badPriv = m.id;
    if (m.family && !FAMILIES.includes(m.family)) badFam = m.id + ":" + m.family;
    if (m.score && m.score.cat) for (const c of Object.values(m.score.cat)) if (typeof c !== "number" || c < 0 || c > 100) badCat = m.id;
    if (m.spec) {
      if (m.spec.priceIn != null && typeof m.spec.priceIn !== "number") badSpec = m.id;
      if (m.spec.priceOut != null && typeof m.spec.priceOut !== "number") badSpec = m.id;
    }
    if (!m.review || m.review.length < 40) weakReview = m.id;
  }
  check("db: " + DB.models.length + " models, unique ids", !dup, dup);
  check("db: tags/labels valid", !badTag, badTag);
  check("db: private/rumored are info-only", !badPriv, badPriv);
  check("db: families exist in engine", !badFam, badFam);
  check("db: category scores 0-100", !badCat, badCat);
  check("db: spec price fields numeric", !badSpec, badSpec);
  check("db: reviews substantive", !weakReview, weakReview);
  check("db: kimi-k3 present with measured score", DB.models.some(m => m.id === "kimi-k3" && m.score.aa === 57.1 && !m.score.est));
  check("db: inkling present with measured score", DB.models.some(m => m.id === "inkling" && m.score.aa === 40.7 && !m.score.est));
  const specCount = DB.models.filter(m => m.spec).length;
  check("db: spec data on " + specCount + " models (>=15)", specCount >= 15);
  check("db: updated field refreshed", /July 19, 2026/.test(DB.updated));
}

/* ---------- 4. benchmarks integrity ---------- */
{
  let ok = true, msg = null;
  for (const t of Engine.TASK_ORDER) {
    const r = Bench.taskTypes[t];
    if (!r || !r.ranking || r.ranking.length !== 4) { ok = false; msg = t; break; }
    for (const item of r.ranking) if (!Bench.apps[item.app]) { ok = false; msg = t + ":" + item.app; }
    for (const sid of r.sourceIds) if (!Bench.sources.some(s => s.id === sid)) { ok = false; msg = t + " src " + sid; }
  }
  check("bench: 8 tasks × 4 apps, sources resolve", ok, msg);
  check("bench: updated July 19", /July 19, 2026/.test(Bench.updated));
  check("bench: recommend falls back", Bench.recommend("nope") === Bench.taskTypes.general);
}

/* ---------- 5. i18n completeness ---------- */
{
  const langs = I18n.LANGS.map(l => l.code);
  const en = Object.keys(I18n.STRINGS.en);
  let bad = null;
  for (const l of langs) {
    const d = I18n.STRINGS[l];
    for (const k of en) if (d[k] === undefined) bad = l + " missing " + k;
    for (const k of Object.keys(d)) if (!en.includes(k)) bad = l + " extra " + k;
  }
  check("i18n: " + en.length + " keys aligned across " + langs.length + " languages", !bad, bad);
  const newKeys = ["finderTitle", "glossTitle", "mcTitle", "footFaq", "chainMapTitle", "cmpTabSpecs", "specCompareBtn"];
  check("i18n: v0.22 keys present", newKeys.every(k => I18n.STRINGS.en[k] && I18n.STRINGS.ar[k] && I18n.STRINGS.ja[k]));
}

/* ---------- 6. engine + chains regression ---------- */
{
  const res = Engine.generate({ goal: "Write a launch email for a new app", context: "", taskType: "writing", models: Engine.MODEL_ORDER });
  check("engine: 13 prompts generated", res.length === 13 && res.every(r => r.prompt.length > 200));
  let ok = true;
  for (const t of Object.keys(Chains.TEMPLATES)) {
    const tpl = Chains.TEMPLATES[t];
    if (tpl.length !== 3 || !tpl.every(s => s.instruction.includes("{goal}"))) ok = false;
  }
  check("chains: templates 3 steps each with {goal}", ok);
}

/* ---------- 7. charts ---------- */
{
  const bar = Charts.barChart([{ label: "A<script>", value: 59.9 }, { label: "B", value: 40, est: true }], { max: 65 });
  check("charts: barChart svg + escaping", bar.startsWith("<svg") && !bar.includes("<script>") && bar.includes("wc-est"));
  const sc = Charts.scatter([{ x: 4, y: 53.4, label: "S" }, { x: 20, y: 59.9, label: "F" }], { xLabel: "x", yLabel: "y" });
  check("charts: scatter svg", sc.startsWith("<svg") && sc.includes("wc-dot"));
  const gb = Charts.groupedBars(["Coding"], [{ name: "M1", values: [90] }, { name: "M2", values: [null] }]);
  check("charts: groupedBars handles missing values", gb.includes("not available") && gb.includes("wc-s1"));
}

/* ---------- 8. glossary ---------- */
{
  check("glossary: >= 21 terms", Glossary.TERMS.length >= 21);
  check("glossary: every term has one-sentence def", Glossary.TERMS.every(t => t.term && t.def && t.def.length > 20));
  check("glossary: search works", Glossary.filter("token").some(t => t.id === "token") && Glossary.filter("zzzz").length === 0);
  const linked = Glossary.TERMS.filter(t => t.link);
  check("glossary: " + linked.length + " terms link into the app", linked.length >= 5 && linked.every(t => typeof t.link.hash === "string"));
}

/* ---------- 9. finder recommendation logic ---------- */
{
  const r1 = Finder._recommend({ step: 99, task: "writing", mode: "app", budget: "low", needs: [], extra: "creative" });
  check("finder: creative writing → Claude/Fable", r1.top.dbId === "fable-5", JSON.stringify(r1.top && r1.top.dbId));
  const r2 = Finder._recommend({ step: 99, task: "research", mode: "app", budget: "free", needs: ["web"], extra: "quick" });
  check("finder: sourced research → Perplexity", r2.top.app === "perplexity", r2.top && r2.top.name);
  const r3 = Finder._recommend({ step: 99, task: "coding", mode: "dev", budget: "free", needs: [], extra: "help" });
  check("finder: dev+free coding offers Qwen3 Coder", [r3.top].concat(r3.alts).some(o => o.dbId === "qwen3-coder"));
  const r4 = Finder._recommend({ step: 99, task: "general", mode: "app", budget: "free", needs: ["privacy"], extra: null });
  check("finder: privacy surfaces Inkling", [r4.top].concat(r4.alts).some(o => o.dbId === "inkling"));
  const r5 = Finder._recommend({ step: 99, task: "coding", mode: "dev", budget: "any", needs: [], extra: "agent" });
  check("finder: dev+any coding surfaces Kimi K3", [r5.top].concat(r5.alts).some(o => o.dbId === "kimi-k3"));
  check("finder: why lists populated", r1.top.why.length >= 1 && r2.top.why.length >= 1);
  check("finder: offers carry access + limit", [r1, r2, r3].every(r => r.top.access && r.top.limit));
}

/* ---------- 9b. stack optimizer + prompt doctor logic ---------- */
{
  const r1 = Stack._optimize({ tasks: ["writing", "research", "coding"], subs: ["chatgpt", "perplexity", "claude"], budget: "20", needs: ["web"], done: true });
  check("stack: $20 budget keeps 1 paid sub", r1.stack.filter(s => s.paid).length === 1 && r1.newCost <= 20);
  check("stack: redundancy detected", r1.redundant.length >= 1 && r1.currentCost === 60);
  const r2 = Stack._optimize({ tasks: ["writing"], subs: [], budget: "0", needs: [], done: true });
  check("stack: free-only budget costs 0", r2.newCost === 0 && r2.stack.every(s => !s.paid));
  const r3 = Stack._optimize({ tasks: ["research"], subs: [], budget: "nolimit", needs: ["web", "privacy"], done: true });
  check("stack: web need routes research to Perplexity", r3.stack.some(s => s.app === "perplexity"));
  check("stack: privacy extra surfaces local option", r3.extras.some(x => x.kind === "privacy" && x.dbId === "inkling"));
  const weak = Doctor._analyze("write something");
  const strong = Doctor._analyze("Act as a senior editor. Rewrite my article for beginner developers as a 5-bullet list, max 200 words, avoid jargon. Context: our company sells devtools. For example keep the tone like our blog. Make sure it is accurate; if unsure, ask clarifying questions. Cite sources.");
  check("doctor: weak prompt scores low (" + weak.score + ")", weak.score <= 20);
  check("doctor: strong prompt scores high (" + strong.score + ")", strong.score >= 85);
  check("doctor: 10 weighted checks with tips", Doctor._checks.length === 10 && Doctor._checks.every(c => c.tip && c.w > 0));
  const it = Doctor._analyze("Agisci come un editor esperto. Riscrivi il testo per principianti, al massimo 200 parole, evita il gergo. Ad esempio come il nostro blog. Se non sei sicuro chiedi. Cita le fonti.");
  check("doctor: Italian keywords recognized (" + it.score + ")", it.score >= 60);
  const v24keys = ["navMore", "stackTitle", "stackGo", "doctorTitle", "doctorGo", "demoTitle", "demoTry"];
  check("i18n: v0.24 keys in all languages", v24keys.every(k => I18n.STRINGS.en[k] && I18n.STRINGS.ar[k] && I18n.STRINGS.zh[k] && I18n.STRINGS.it[k]));
}

/* ---------- 10. HTML ↔ JS id cross-check ---------- */
{
  const html = readFileSync("index.html", "utf8");
  const htmlIds = new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));
  const missing = [];
  for (const f of ["js/app.js", "js/merge.js"]) {
    const src = readFileSync(f, "utf8");
    for (const m of src.matchAll(/getElementById\("([^"]+)"\)/g)) {
      const id = m[1];
      if (id.includes("-" + '" +')) continue;
      if (/\$\{|" \+/.test(id)) continue;
      if (["test-gemini", "test-groq", "test-openrouter"].includes(id)) continue; // dynamic prefix ids exist
      if (!htmlIds.has(id) && !["chain-map", "glossary-view", "update-toast"].includes(id)) {
        // dynamically created ids are allowed only if created in JS
        if (!/createElement/.test(src.slice(Math.max(0, m.index - 400), m.index)) && !htmlIds.has(id)) missing.push(f + ":" + id);
      }
    }
  }
  const reallyMissing = missing.filter(x => {
    const id = x.split(":")[1];
    return !htmlIds.has(id);
  });
  check("ids: every getElementById exists in HTML", reallyMissing.length === 0, reallyMissing.join(", "));
  for (const must of ["finder-wrap", "cmp-specs-wrap", "cmp-outputs-wrap", "glossary-list", "chain-map", "chain-addstep", "foot-faq", "foot-glossary", "insights-wrap", "chart-top", "chart-pp", "mode-goal", "mode-finder", "about-faq", "about-similar", "about-contribute"]) {
    if (!htmlIds.has(must)) check("ids: required v0.22 id " + must, false);
  }
  check("ids: v0.22 required ids present", true);
}

/* ---------- 11. version coherence ---------- */
{
  const html = readFileSync("index.html", "utf8");
  const app = readFileSync("js/app.js", "utf8");
  const sw = readFileSync("sw.js", "utf8");
  check("version: badge v0.24", html.includes(">v0.24 · Growth<"));
  check("version: footer v0.24", html.includes("WhichAI v0.24"));
  check("version: APP_VERSION v0.24", app.includes('APP_VERSION = "v0.24"'));
  check("version: SW cache v0.24", sw.includes('"whichai-v0.24.0"'));
  check("v0.24: nav More + new views ids", ["nav-more", "nav-more-panel", "nav-stack", "nav-doctor", "nav-glossary", "stack-view", "doctor-view", "stack-wrap", "doctor-wrap", "demo-card", "open-doctor"].every(id => html.includes('id="' + id + '"')));
  check("v0.24: SW precaches stack + doctor", sw.includes("js/stack.js") && sw.includes("js/doctor.js"));
  check("v0.23: CSP meta present", html.includes("Content-Security-Policy") && html.includes("connect-src 'self' https://generativelanguage.googleapis.com"));
  check("v0.23: key storage + data tools ids", ["keymode-session", "keymode-local", "keys-clear", "data-export", "data-import", "data-wipe", "data-file"].every(id => html.includes('id="' + id + '"')));
  check("v0.23: methodology card", html.includes('id="about-methodology"') && html.includes("Methodology v1.0"));
  check("v0.23: SW precaches shell", sw.includes("js/finder.js") && sw.includes("icons/icon-512.png") && sw.includes("addAll"));
  {
    const noDash = ["js/i18n.js", "js/models-db.js", "js/benchmarks.js", "js/engine.js", "js/finder.js", "js/glossary.js", "js/modelcompare.js", "js/charts.js", "js/app.js", "js/merge.js", "js/chains.js", "index.html", "manifest.webmanifest"];
    const dirty = noDash.filter(f => readFileSync(f, "utf8").includes("\u2014"));
    check("v0.23: no em dashes in visible files", dirty.length === 0, dirty.join(", "));
  }
  {
    const sm = readFileSync("sitemap.xml", "utf8");
    const urlCount = (sm.match(/<loc>/g) || []).length;
    check("v0.23: sitemap has 150+ urls (" + urlCount + ")", urlCount >= 150);
    check("v0.23: model page generated + clean", existsSync("models/fable-5.html") && existsSync("models/index.html") && !readFileSync("models/fable-5.html", "utf8").includes("\u2014"));
    check("v0.23: best-ai-for + glossary + compare + dataset", existsSync("best-ai-for/coding.html") && existsSync("glossary/token.html") && existsSync("compare/fable-5-vs-gpt-5-6-sol.html") && existsSync("data/models.json"));
    const ds = JSON.parse(readFileSync("data/models.json", "utf8"));
    check("v0.23: open dataset valid (" + ds.count + " models)", ds.count === ds.models.length && ds.count >= 105);
  }
  check("version: scripts include new modules", ["charts.js", "glossary.js", "finder.js", "modelcompare.js"].every(s => html.includes("js/" + s)));
}

/* ---------- 12. CSS sanity ---------- */
{
  const css = readFileSync("styles.css", "utf8");
  check("css: braces balanced", css.split("{").length === css.split("}").length);
  check("css: clip fix present", css.includes("padding-block: 5px") && css.includes("margin-block: -5px"));
  check("css: focus-visible ring", css.includes(":focus-visible"));
  check("css: sepia take 2", css.includes("#f1e5cd"));
  check("css: dark focus fix + color-scheme", css.includes('[data-theme="dark"] { --focus: #60a5fa; color-scheme: dark; }'));
  check("css: unified radii tokens", css.includes("--r-card: 14px") && css.includes("--r-ctl: 10px"));
  check("css: update toast", css.includes(".update-toast"));
  check("css: chain map + finder + mc styles", ["chain-node", "finder-opt", "mc-grid", "footer-links", "wc-chart"].every(c => css.includes(c)));
}

/* ---------- 13. manifest ---------- */
{
  try {
    const man = JSON.parse(readFileSync("manifest.webmanifest", "utf8"));
    check("manifest: valid JSON with icons", Array.isArray(man.icons) && man.icons.length >= 2 && man.icons.every(i => existsSync(i.src)));
  } catch (e) { check("manifest: valid JSON", false, String(e)); }
}

console.log("\n" + pass + " passed, " + fail + " failed" + (fail ? "\n\nFAILURES:\n" + failures.join("\n") : " — ALL GREEN"));
process.exit(fail ? 1 : 0);
