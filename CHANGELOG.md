# WhichAI - Changelog

(Older release-by-release history lives in `STATUS.md`, the project's working memory.)

## v0.23.0 (2026-07-20)

Dark-theme legibility, typography cleanup, and phase 1 of the growth plan: static wiki pages, key hardening, data backup, real offline PWA, versioned methodology.

### Fixed
- **Dark theme legibility**: the accent color used by every action link, focus ring and highlight stayed at the light-theme dark blue (#2563eb), which is nearly unreadable on dark gray. Dark now uses #60a5fa. Also added `color-scheme: light/dark` per theme so native controls (select dropdowns, scrollbars) match the theme.
- **Typography**: removed all 497 em dashes from user-visible text (UI strings in 11 languages, database reviews, benchmark notes, prompts, HTML, manifest). Separator-style usages became a middle dot, prose became plain hyphens or rephrasing, and the missing-data symbol is now "n/a" everywhere (charts, comparison table, footnotes).
- **Unified corner radii**: one radius language app-wide via tokens (surfaces 14px, controls 10px; pills and chips stay fully rounded by design).

### Added
- **Static wiki (SEO)**: `tools/build-seo.mjs` regenerates 156 plain-HTML pages from the database: 106 model pages (`/models/<id>.html` + index), 8 task rankings (`/best-ai-for/<task>.html` + index), 26 glossary entries (`/glossary/<id>.html` + index), 12 curated head-to-heads (`/compare/a-vs-b.html` + index), plus `sitemap.xml` with 157 URLs. Pages are JS-free, styled by the existing stylesheet, carry canonical/OG tags, the data snapshot date, honest n/a and estimate marks, and deep-link CTAs into the app. Rerun the script after every data refresh.
- **Deep links**: `/#model=<id>` opens a model card directly in the app (used by the wiki pages).
- **Open dataset**: `data/models.json` (CC BY 4.0) exposes the full 105-model database for reuse and backlinks.
- **API key hardening**: keys now default to session-only storage (cleared when the browser closes); saving on the device is an explicit opt-in in Settings, with an honest explanation of client-side storage risk. One-click "Clear all API keys". Existing users who already saved keys keep the on-device mode.
- **Content Security Policy** meta: scripts restricted to self plus the hashed inline theme snippet; connections restricted to the three BYOK API hosts; objects blocked.
- **Your data section (Settings)**: export a full JSON backup, import it on another device, or delete everything, with clear confirmation prompts. 16 new i18n keys in all 11 languages (210 total).
- **Real offline PWA**: the service worker now precaches the full app shell at install, falls back to the cached app for offline navigations, and the app shows a small "new version ready" toast when an update is waiting.
- **Methodology v1.0** card in About: scores, category blends, router, pricing sources, status labels, independence statement and limits, with the update date.

### Tests
- Static suite grew to 69 checks (CSP, key-storage ids, sitemap, generated pages, dataset validity, no-em-dash guard, dark focus fix, radius tokens); DOM smoke grew to 39 (session-first keys, storage-mode migration, clear keys, data tools, `#model=` deep link). **108/108 green.**

### Known limitations / pending
- Personal Benchmark, Blind Arena, Council Mode and Consensus Map are deliberately postponed: they need output generation across many providers, while BYOK currently covers only Gemini, Groq and OpenRouter free routes; results would be biased toward those three. Documented in STATUS.md.
- Static pages must be regenerated (one command) after each data refresh; there is no CI yet.

## v0.22.0 - 2026-07-19

The "one big session" release: guided finder, glossary, two-mode Compare, charts, chain roadmap, footer, warmer sepia, clip-safe buttons, and a full data refresh.

### Fixed
- **Button clipping** - `.site-nav` (one-row header) is an `overflow-x: auto` scroll container, which also clips vertically: pills were cut at the top on hover (`translateY(-1px)`) and at the bottom at rest. Fixed by giving the scroll container inner breathing room (`padding-block: 5px; margin-block: -5px`, inline equivalents) instead of removing the animation.
- Visible, consistent `:focus-visible` rings on links, buttons, tabs and summaries (2px, offset, themed).
- Secondary buttons (`.btn-copy`) got a coherent hover lift (transform only - zero layout shift); long model names now wrap instead of overflowing.
- `compareTitle` said "Compare outputs" while the view now has two modes → renamed "Compare" (11 languages).

### Added
- **Guided finder** (`js/finder.js`, Generator → "Guided finder" mode, also at `#finder`): 4–5 adaptive questions (task, usage mode, budget, essential needs, one task-specific question) → transparent rule-based recommendation with "Why this pick", best-for, honest limitation, access/price, links into Model guide and Generator. No prompt required. Every boost is explained; facts come from `models-db.js`/`benchmarks.js`, never invented.
- **Glossary** (`js/glossary.js`, `#glossary`, linked from the footer): 26 AI terms in one-sentence plain language with everyday examples, live search, progressive disclosure (collapsed by default), cross-links into app features.
- **Compare split into two modes** (subtabs): *Output comparison* (the existing side-by-side output flow, unchanged) and *Model comparison* (`js/modelcompare.js`, `#compare-specs`): pick 2–3 of the 105 models and compare AA index (bar chart), category profiles (grouped bars), release, context window, modalities, API price, speed, access, strengths and one-line review - with explicit "n/a" for unpublished values and "~" for estimates, plus a warning against reading estimate-vs-measured deltas as real.
- **Charts** (`js/charts.js`): dependency-free SVG helpers (horizontal bars, scatter, grouped bars), theme-aware via CSS variables, native tooltips, reduced-motion safe. Used by the new *Market at a glance* section in the Model guide (Top-12 measured AA scores; price-vs-performance scatter of the 10 models with published price + measured score). A context-window chart was deliberately **not** built: every current frontier model in the dataset is at 1M tokens, so the chart would carry no information.
- **Chains roadmap**: visual workflow strip above the steps - numbered connected nodes (arrows, RTL-aware, vertical on mobile) showing each step's model, purpose and input→output flow; nodes turn green when their output is filled; click scrolls to the step. Steps can now be **reordered (↑/↓), removed (✕) and added** ("+ Add step" creates a custom step with an editable instruction; `{goal}` inserts the goal). Prompts are always rebuilt fresh, so reordering stays consistent.
- **Footer on every view**: FAQ · Similar tools · Contribute (deep links into About via `#about-faq/-similar/-contribute` anchors) · Glossary. Compact, themed, translated.
- **Model detail specs** in the Model guide card: released, context window, modalities, API price, speed where sourced, plus a data-provenance line and a "Compare →" shortcut into Model comparison.

### Changed
- **Sepia theme, take 2**: clearly distinct warm palette (cream `#f1e5cd` background, warm browns, muted amber accents, warmer aurora and warm chart palette), with contrast kept accessible (body text ≈ 9.7:1, muted ≈ 4.9:1, links darkened to `#7a4d20` ≈ 5:1); no saturated yellows, no health claims.
- Mobile: mode switch and subtabs become full-width segments; finder options single-column; comparison grid compacts; roadmap goes vertical with ↓ connectors; insights stack. All new controls are ≥40px touch targets; reduced-motion disables every new animation.
- `sw.js` cache → `whichai-v0.22.0`; `APP_VERSION` → v0.22; badge + footer bumped.

### Data refresh (sources retrieved 2026-07-19)
- **AA Intelligence Index snapshot July 16, 2026** (BenchLM mirror - benchlm.ai/benchmarks/artificialAnalysis): DB re-aligned to one consistent scale. Corrections: Fable 5 60→59.9, GPT-5.6 Sol 59→58.9, Opus 4.8 56→55.7, Muse Spark 1.1 43.1→50.6, Hunyuan 3.0 33.6→41.2, Kimi K2.5 38.1→35.4, Step 3.7 Flash 29.7→30.3.
- **New models** (105 total, 34 vendors): **Kimi K3** (Moonshot, July 16 - 2.8T MoE, 1M ctx, native vision, AA 57.1 #3, $3/$15, weights announced July 27 Modified MIT; sources: VentureBeat, simonwillison.net, kie.ai) and **Inkling** (Thinking Machines Lab, July 15 - 975B/41B MoE, multimodal, 1M ctx, Apache 2.0, AA 40.7; sources: thinkingmachines.ai, artificialanalysis.ai, TechCrunch).
- **Spec fields** (`spec: {released, ctx, modal, priceIn, priceOut, speed, note}`) added to 17 models from vendor pages / pricing mirrors: Anthropic $10/$50 (Fable 5), $5/$25 (Opus 4.8), $2/$10 intro→$3/$15 Sept (Sonnet 5), 1M ctx line-wide (benchlm.ai/anthropic/api-pricing, aipricing.guru); Gemini 3.1 Pro $2/$12 (>200K $4/$18), 3.5 Flash $1.50/$9, 1M ctx (benchlm.ai, devtk.ai); GPT-5.6 Sol/Terra/Luna $5/$30, $2.50/$15, $1/$6 (July 9); Grok 4.5 $2/$6, ~80 tok/s (tokencost.app, eesel.ai). GPT-5.5 price: not published → left blank, excluded from the price chart.
- **benchmarks.js** (snapshot July 19): LMArena July 16 update (top-10 within ~28 Elo; Fable 5 leads the coding board; Kimi K3 #1 Frontend Code Arena at 1679 at launch - swfte.com, metatext.io); catalog notes corrected to the rebased scale (Kimi K2.6 44.2, DeepSeek V4 Pro 44.3, Nemotron 3 Ultra 37.8, GLM-5.2 top open at 51.1); Kimi K3 + Inkling added to the catalog; 3 new linked sources.
- **OpenRouter free routes re-verified** (costgoat.com/pricing/openrouter-free-models): defaults `nvidia/nemotron-3-ultra-550b-a55b:free` and `qwen/qwen3-coder:free` still valid; DeepSeek/Mistral still have no free route; Tencent Hy3 free listing ends July 21 (deliberately not set as a default).

### Files
- **New:** `js/charts.js`, `js/finder.js`, `js/glossary.js`, `js/modelcompare.js`, `tests/run-tests.mjs`, `tests/smoke-dom.mjs`, `CHANGELOG.md`.
- **Modified:** `index.html`, `styles.css`, `js/app.js`, `js/i18n.js` (+56 keys ×11 languages → 193 keys, completeness test green), `js/models-db.js`, `js/benchmarks.js`, `sw.js`, `README.md`, `STATUS.md`.

### Tests
- `node tests/run-tests.mjs` - 57 static checks (syntax ×12 files, DB integrity, benchmark integrity, i18n completeness ×11, engine/chains regression, charts escaping, glossary, finder recommendation logic ×7 scenarios, HTML↔JS id cross-check, version coherence, CSS braces, manifest): **57/57 green**.
- `node tests/smoke-dom.mjs` (jsdom) - boots the real app and walks every view: finder full flow, generate, glossary search, guide + insights + model detail, compare specs (2→3 models), chain build/add/reorder/remove, About anchors, live language switch (IT + Arabic RTL), theme cycle: **32/32 green**.

### Known limitations
- Chain **share links** carry goal/context/task/models but not custom steps (URL kept short and private by design).
- GPT-5.5 API price not published → absent from the price-performance chart.
- Finder copy (questions/answers) is English by design, same policy as prompts/benchmarks; its chrome (buttons, headings) is translated in all 11 languages.
