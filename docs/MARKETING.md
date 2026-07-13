# WhichAI — Piano marketing a costo zero (v1, 13 luglio 2026)

Obiettivo: far conoscere https://whichai.wiki spendendo 0€ e ~30 minuti a settimana dopo il lancio.
Pitch in una riga (IT): **"Quale AI usare per questo compito? WhichAI te lo dice — e ti scrive il prompt ottimizzato. Gratis, senza account."**
Pitch (EN): **"Which AI should do this? WhichAI picks the model and writes the optimized prompt — free, private, no account."**

I tuoi assi nella manica: il dominio è la keyword ("which ai" viene cercato ogni giorno), privacy totale (niente server = storia credibile), 100% gratis, 11 lingue, PWA installabile, open source.

---

## Fase 0 — Prerequisiti (questa settimana, una tantum, ~40 min)

1. **Pubblica v0.21** su GitHub (rebranding: il sito deve dire WhichAI prima di qualunque promozione).
2. **Vercel → Domains**: imposta `whichai.wiki` come primario (oggi reindirizza a www).
3. **Google Search Console** (gratis, 10 min) — è la mossa SEO più importante:
   - vai su search.google.com/search-console → Aggiungi proprietà → "Dominio" → `whichai.wiki`
   - Google ti dà un record TXT → Porkbun → whichai.wiki → DNS Records → aggiungi TXT → verifica
   - poi Sitemaps → invia `https://whichai.wiki/sitemap.xml`
   - (facoltativo) fai lo stesso su Bing Webmaster Tools: importa direttamente da GSC.
4. **GitHub repo**: aggiungi i topics `ai, prompt-engineering, llm, benchmarks, model-comparison, pwa, vanilla-js, free` (Settings → Topics), metti whichai.wiki nella descrizione del repo e nel campo Website.
5. **LinkedIn di Giacomo**: aggiorna il profilo con "Creator of WhichAI (whichai.wiki)" — ogni post futuro rimanda lì.

## Fase 1 — Lancio soft (settimana 1)

**LinkedIn (IT) — testo pronto:**
> Ogni giorno esce un nuovo modello AI e la domanda è sempre la stessa: "ma io quale uso?"
> Ho costruito WhichAI per rispondere una volta per tutte: descrivi il tuo obiettivo, lui ti dice quale modello è il più adatto (con i benchmark tradotti in linguaggio umano) e ti genera il prompt ottimizzato per 13 famiglie di AI diverse.
> Gratis, senza account, tutto nel tuo browser: nessun dato esce dal tuo dispositivo.
> 103 modelli in database, 11 lingue, confronto side-by-side e catene multi-step.
> → whichai.wiki
> Feedback brutali benvenuti: è un progetto open source, costruito in pubblico.

**X/Twitter (EN) — thread pronto (3 tweet):**
> 1/ Every week a new "best" AI model drops. Nobody tells you WHICH one to use for YOUR task.
> So I built WhichAI: describe your goal → it recommends the model (real benchmarks, plain language) and writes an optimized prompt for each of 13 AI families. → whichai.wiki
> 2/ It's 100% free and private by design: no server, no account, no tracking. Your keys and data never leave the browser. Works as an installable PWA in 11 languages.
> 3/ Built with zero frameworks — vanilla JS, open source. Feedback welcome, especially where the benchmarks feel wrong.

Regola d'oro: rispondi a OGNI commento nelle prime 3 ore. L'algoritmo premia la conversazione.

## Fase 2 — Community launch (settimana 2)

**Hacker News — Show HN (martedì-giovedì, 15:00-17:00 ora italiana):**
- Titolo: `Show HN: WhichAI – tells you which AI model to use, then writes the prompt for it`
- Primo commento (tuo, subito dopo il post):
> I kept seeing the same question everywhere: "which AI should I actually use?" — so I built a client-only answer. You describe a goal; it recommends a model per task (benchmark data translated into plain language, sources linked, near-ties declared as ties) and generates prompts tuned to each family's quirks (XML for Claude, PTCF for Gemini, etc.). Everything runs in the browser: no server, no account; BYOK if you want auto-run via free Gemini/Groq/OpenRouter keys. 103 models tracked, honest "estimated" flags where leaderboards don't publish scores. Vanilla JS, no build step, open source. Happy to answer anything — especially where you think the rankings are wrong.
- Regole HN: zero marketing speak, ammetti i limiti, rispondi a tutto per 4-5 ore. Se floppa, riprova tra un mese con un angolo diverso (è permesso).

**Reddit (1 subreddit al giorno, MAI stesso testo):**
- r/SideProject — angolo "ho costruito questo, feedback?": racconta la storia (zero budget, vanilla JS, 21 sessioni di build con AI).
- r/InternetIsBeautiful — angolo "sito utile e gratis": titolo tipo "A free site that tells you which AI model fits your task (and writes the prompt)".
- r/PromptEngineering — angolo tecnico: come i prompt cambiano per famiglia (XML vs Markdown vs PTCF), chiedi feedback sui template.
- r/artificial o r/ChatGPT — angolo "router": "I compared 103 models' benchmarks so you don't have to".
- Leggi le regole di ogni sub prima di postare; alcuni vogliono il flair "Self-promo" o il post solo in giorni specifici.

**Directory AI gratuite (una tantum, ~45 min totali):**
| Directory | URL submit | Note |
|---|---|---|
| There's An AI For That | theresanaiforthat.com/submit | la più trafficata; gratis con coda |
| Futurepedia | futurepedia.io/submit-tool | gratis (opzione base) |
| TopAI.tools | topai.tools/submit | gratis |
| Toolify | toolify.ai/submit | gratis base |
| AlternativeTo | alternativeto.net (Add application) | posizionati come alternativa a PromptPerfect/AIPRM |
| SaaSHub | saashub.com/submit | gratis |
| Product Hunt | vedi Fase 3 | non ora |

## Fase 3 — Product Hunt (settimana 3-4, quando hai qualche feedback e 10+ stelle GitHub)

- Prepara: tagline (max 60 char) `Which AI should do this? The model picker + prompt writer`, 3-5 screenshot (Generator, router card, Merge studio, Model DB, tema scuro), og-image come gallery cover, primo commento "maker story" (riusa quello HN, più personale).
- Lancia martedì o mercoledì alle 9:01 ora di San Francisco (= 18:01 in Italia... in pratica: programma il lancio dalle 00:01 PT).
- Quel giorno: condividi il link PH su LinkedIn/X chiedendo feedback (non "upvote" esplicito, è contro le regole).

## Fase 4 — Regime (30 min/settimana, per sempre)

- **Lunedì 9:00**: l'automazione Cowork "whichai-post-settimanali" ti consegna 3 post pronti (LinkedIn IT, LinkedIn/X EN, commento Reddit/HN). Tu: copia, incolla, rispondi ai commenti. Fine.
- **1° del mese 9:30**: l'automazione "whichai-manutenzione-mensile" aggiorna DB/benchmark (freschezza dei dati = credibilità = SEO).
- Quando trovi thread "which AI should I use for X" (Reddit/HN/Quora): rispondi con valore vero + link in una riga. Cerca su Google: `site:reddit.com "which ai" OR "which model" [mese corrente]`.
- Articolo tecnico (quando hai voglia, alto ROI): "How I built a client-only AI model router — no backend, no build step, 11 languages" su dev.to + Hashnode (canonical → whichai.wiki). L'angolo "zero framework" piace moltissimo.

## SEO — cosa è già fatto e cosa guardare

Fatto in v0.21: canonical + og + JSON-LD su whichai.wiki, sitemap, robots, title con keyword ("which AI model to use"), FAQ nella pagina About (ottima per i rich snippet).
Da guardare in GSC dopo 2-3 settimane: per quali query appari (attese: "which ai to use", "which ai model is best for writing", "ai model comparison"). Se una query tira, si può dedicare una sezione della About/guide a quella domanda.

## KPI (guardali 1 volta a settimana, non di più)

- GSC: impression e click (attesa: 0 → poche decine in 3-4 settimane; la SEO è lenta)
- GitHub stars e issue aperte da estranei (= vero interesse)
- Vercel Analytics base (gratis): visite e referrer
- Conversione qualitativa: qualcuno ti scrive su LinkedIn? Screenshot che girano?

## Regole d'oro

1. Mai lo stesso testo su due canali. 2. Rispondi a tutti, subito. 3. Ammetti i limiti (è la cosa più disarmante e apprezzata). 4. Un canale alla volta, fatto bene. 5. Il prodotto aggiornato è il marketing migliore: la manutenzione mensile non si salta.
