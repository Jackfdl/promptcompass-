# WhichAI  
*(formerly PromptCompass — same project, new home: [whichai.wiki](https://whichai.wiki))*

Turn a plain-language goal into prompts optimized for each AI model — and know which model to use for the job.

**Live:** https://whichai.wiki · **Status:** Growth · v0.18.0 · zero-cost architecture (free tiers only) · responsive & installable (PWA)

**Thirteen prompt targets, grouped.** AI assistants (Claude, ChatGPT, Gemini, Perplexity), ecosystem assistants (Grok, Copilot, Meta AI) and open models (Llama, GLM, Kimi, Nemotron, DeepSeek, Qwen), each with its own prompt style and "why it works" notes. The **Model catalog** in the guide covers 22 models across five categories with access and pricing notes.

**Private by design.** No account, no server, no tracking: everything runs client-side, and API keys never leave the browser.

**Auto-run with your own free keys (BYOK).** Compare and Chains can execute prompts directly from the browser with free keys: Google AI Studio (Gemini), Groq (Llama) and OpenRouter (Nemotron 3 Ultra and Qwen3 Coder on genuinely free ":free" routes — ~20 requests/min, 200/day). Keys never leave the browser.

**Searchable model database.** 103 models from 33 vendors — public, private (Claude Mythos 5), preview, legacy and clearly-flagged rumored entries (GPT-6, Grok 5, Llama 5…). A prominent search bar at the top of the Model guide matches partial names, vendors, tags and strengths; clickable filter chips narrow by status (Free, Open weights, In Generator, Rumored…) and by strength (coding, reasoning, writing, research…). Every model gets an overall score (Artificial Analysis index where published, clearly-marked estimates elsewhere) plus four 0–100 category ratings — Coding, Reasoning, Writing, Agents — shown as bars in its detail card, with a "Use in Generator" shortcut. Nothing renders until you search, so the page stays fast.

**About & FAQ.** An honest About page: what the project is (open, free, sincere), a 7-question FAQ, a fair list of similar prompting tools and what each does better (PromptPerfect, AIPRM, PromptBase, PromptLayer, vendor consoles), plus how to contribute on [GitHub](https://github.com/Jackfdl/promptcompass-) or reach the author on [LinkedIn](https://www.linkedin.com/in/giacomo-fedeli-277765239/).

**11 languages & dark mode.** Interface in English, Italiano, Français, Español, Deutsch, Português, 中文, हिन्दी, Русский, 日本語 and العربية — with full right-to-left layout for Arabic (generated prompts stay English-optimized, with a transparent in-app note), plus a persistent light/dark theme that follows your system preference by default.

**Share a chain.** One click copies a link that rebuilds your chain (goal, steps, chosen models) on anyone's device — outputs and keys are never included in the URL.

**Chains.** Break a complex goal into linked steps (`#chains`): each step gets its own optimized prompt, the output of one step automatically feeds the next, and each step can use a different model — recommended by the router, auto-run where you have a free key. **Run all steps** executes the whole chain in sequence (pausing politely at manual-paste steps so you can fill them and resume), and **Export .md** downloads the full chain — prompts and outputs — as Markdown.

**Installable (PWA).** Add WhichAI to your phone's home screen (or install from the browser on desktop): standalone app window, compass icon, offline fallback via a network-first service worker that never serves stale versions.

**Preference memory.** The Generator remembers the last options you used (models, task type, format, length, tone) and restores them on your next visit — resettable in Settings.

**BYOK auto-run.** Add your own free API keys (Google AI Studio, Groq) in **Settings**: the Compare view can then run Gemini and Llama automatically, straight from your browser. Keys live only in localStorage — there is no server. Claude and ChatGPT (no free API) stay copy-and-paste.

## What it does today

**Generator.** Describe your goal, add optional context and preferences (task type — auto-detected from your text — output format, length, tone), and WhichAI generates a tailored prompt for each selected model:

- **Claude** (Anthropic) — XML-tagged structure, explicit role and quality criteria
- **ChatGPT** (OpenAI) — Markdown sections, numbered requirements, clarifying-question behavior
- **Gemini** (Google) — Persona / Task / Context / Format structure

Each prompt comes with a short explanation of *why* it is shaped that way for that model.

**Model router.** Alongside the prompts, WhichAI recommends which AI app fits the task best — public benchmarks (LMArena, SWE-bench, Artificial Analysis) translated into plain language, with confidence levels, free-tier notes and linked sources. A standalone **Model guide** view (`#guide`) lets you browse recommendations for every task type.

**Compare.** Run the same optimized prompt in each AI app, paste the answers into the **Compare** view (`#compare`), score them side by side (1-5 stars, winner badge), and save comparisons in your browser — no API keys, no cost.

**Versioning & export.** Prompts in a comparison are editable: tweak one, start a **New version** (v1 → v2 → …) with outputs cleared, and see whether your changes improved the results. Any comparison exports as a Markdown file.

Everything runs client-side in the browser: no account, no server, no API key, no data leaves your device.

## Run locally

Open `index.html` in any modern browser. No installation or build step required.

## Deploy

Static site: deploy the folder as-is to any static host (Vercel, Netlify, GitHub Pages).

## Roadmap

1. **Phase 1 — MVP:** goal-to-prompt engine, minimal web UI, public deploy — done
2. **Phase 2 — Model router + benchmark explainer:** per-task recommendations, Model guide — done
3. **Phase 3 (current):** side-by-side comparison with manual paste and scoring — done; next: prompt versioning, optional bring-your-own-key execution
4. **Phase 4:** user preference memory, multi-agent orchestration, prompt chaining

## Architecture principles

- **Zero cost:** free tiers only, no paid services
- **Static-first:** no backend until a feature truly requires one
- **BYOK (bring your own key):** future API-based features use the user's own free-tier keys, stored locally
- **Manual paste mode:** closed models without free APIs are supported by pasting prompts/outputs manually
- **Honest data:** benchmark snapshot is dated, confidence-labeled and source-linked; near-ties are stated as ties

## Project structure

```
index.html         — app entry point (Generator + Model guide views)
styles.css         — design system (neutral, minimal)
js/engine.js       — prompt generation engine + task type auto-detection
js/benchmarks.js   — curated benchmark dataset + model router (update ~monthly)
js/chains.js       — multi-step workflow templates per task type
js/app.js          — UI wiring
docs/              — internal docs (Italian): operations guide, decision log
STATUS.md          — project state and roadmap (Italian)
```
