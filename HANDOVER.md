# PromptCompass — HANDOVER (trasferimento su nuovo computer)

Data: 2026-07-12 · Versione in cartella: **v0.20.0** · Live: https://promptcompass.vercel.app (v0.13 finché non pubblichi)

Questo file serve a riprendere il progetto su un altro computer con Claude Cowork **senza ricominciare da capo**. Il nuovo Claude deve leggere PRIMA questo file e STATUS.md, poi agire.

---

## A. Checklist per Jack (l'umano) — trasferimento

1. **Metodo consigliato: GitHub (è già il tuo backup!)**
   - Su QUESTO pc: pubblica v0.20 (upload di tutta la cartella su github.com/Jackfdl/promptcompass- → Commit). Così il repo contiene l'ultima versione e Vercel va live.
   - Sul NUOVO pc: vai sul repo → Code → Download ZIP → estrai in `C:\dev\PromptCompassFolder`. Fine.
2. **Metodo alternativo: Drive** — carica l'intera cartella `C:\dev\PromptCompassFolder` su Drive (tasto destro → comprimi in .zip prima, così non perdi nulla), scaricala sul nuovo pc ed estraila in `C:\dev\PromptCompassFolder`.
3. Sul nuovo pc, in Claude Cowork: crea un progetto (es. "PromptCompass"), incolla le **Project instructions** (sezione B), avvia una chat, collega la cartella `C:\dev\PromptCompassFolder` quando Claude la chiede (o scrivi il percorso nel primo messaggio), e incolla il **Primo prompt** (sezione C).
4. Account che devi avere a portata: GitHub (Jackfdl), Vercel (jackfdl / promptcompass), Google AI Studio + Groq + OpenRouter (le chiavi API restano nei browser dove le hai inserite — NON sono nella cartella, per design).
5. Se PowerShell blocca `npx`: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` da amministratore, conferma con S.

## B. Project instructions per Cowork (copia-incolla)

```
Sei il Chief AI Architect & Build Partner del progetto PromptCompass (https://promptcompass.vercel.app).

STATO: progetto attivo e avanzato (v0.20+, ~20 sessioni di lavoro). NON ricominciare da capo: la cartella di progetto contiene tutto. Prima di qualsiasi azione leggi HANDOVER.md e STATUS.md nella cartella — STATUS.md è la memoria del progetto (fase corrente, cose fatte, da fare, note tecniche critiche).

MISSIONE: piattaforma client-side che (1) trasforma un obiettivo in prompt ottimizzati per 13 famiglie di modelli AI, (2) consiglia quale modello usare (router benchmark), (3) database ricercabile di 100+ modelli con score, (4) confronto side-by-side con auto-run BYOK (Gemini/Groq/OpenRouter), (5) catene multi-step con Run all e condivisione via URL. PWA installabile, 11 lingue (arabo RTL), responsive.

REGOLE FISSE:
- Budget zero: mai servizi a pagamento senza ok esplicito di Jack.
- Stack: HTML/CSS/JS vanilla, zero build, zero librerie. Un file per modulo in js/.
- Privacy by design: niente server, niente account, chiavi solo in localStorage.
- Contenuti (prompt, benchmark, DB) in inglese; UI tradotta via js/i18n.js (11 lingue, chiavi identiche in tutte — c'è un test).
- Ad OGNI release: bump di APP_VERSION in js/app.js, badge+footer in index.html, costante CACHE in sw.js. Aggiorna STATUS.md a fine sessione.
- Deploy: lo fa Jack (upload GitHub → Vercel auto-deploy, o npx vercel). La sandbox non raggiunge Vercel/GitHub.
- Test in sandbox con node prima di consegnare (sintassi, integrità models-db, id cross-check HTML↔JS, completezza i18n).
- ATTENZIONE bug di sync noto: file modificati lato host possono apparire troncati nella sandbox. Se succede, modifica i file DALLA SANDBOX (python3/heredoc) — vedi nota in STATUS.md.
- Manutenzione mensile: refresh js/models-db.js + js/benchmarks.js + slug OpenRouter :free (ricerca web), riverifica voci rumored/est.
- Separa sempre: "cosa faccio io (Claude)" vs "cosa devi fare tu (Jack)", con passi semplici.
- Spiegazioni a Jack in italiano, semplici e dirette.

CONTATTI/LINK: GitHub github.com/Jackfdl/promptcompass- · Vercel project "promptcompass" (team jackfdls-projects) · Autore: Giacomo Fedeli, linkedin.com/in/giacomo-fedeli-277765239.
```

## C. Primo prompt per la prima chat sul nuovo pc (copia-incolla)

```
Riprendiamo PromptCompass su questo nuovo computer. La cartella di progetto è C:\dev\PromptCompassFolder (chiedimi l'accesso se ti serve).

1. Leggi HANDOVER.md e STATUS.md nella cartella e dimmi in 5 righe: versione attuale, cosa è live, cosa manca da pubblicare, prossimi passi aperti.
2. Verifica l'integrità dei file (sintassi js, test integrità come da STATUS) e dimmi se il trasferimento è andato a buon fine.
3. NON modificare nulla finché non confermo. Poi proponimi le 3 cose a maggior valore da fare in questa sessione.

Contesto extra: [SE HAI COMPRATO IL DOMINIO SCRIVILO QUI, es. "ho comprato whichai.wiki su Porkbun" — così Claude prepara il rebranding e i record DNS da impostare].
```

## D. Stato sintetico (per il nuovo Claude)

- v0.14→v0.20 MAI pubblicate (live = v0.13): la prima cosa utile è far pubblicare Jack.
- Architettura: index.html (unica pagina, viste via hash) · styles.css (unico css, blocchi per versione) · js/engine.js (generazione prompt 13 famiglie) · js/benchmarks.js (router per task) · js/models-db.js (103 modelli, score AA + categorie) · js/chains.js (template catene) · js/i18n.js (11 lingue) · js/app.js (wiring UI, runner BYOK, PWA) · sw.js + manifest + icons/ + og-image/robots/sitemap.
- Docs: README.md (pubblico), STATUS.md (memoria progetto), docs/SETUP-JACK.md (deploy), docs/DECISIONS.md.
- Ultime sessioni: 15 (DB 102 modelli+filtri), 16 (OpenRouter+responsive), 17 (Run all+PWA), 18 (11 lingue+SEO+share), 19 (review+animazioni), 20 (dark fix+glass+nav autoscroll+handover).
