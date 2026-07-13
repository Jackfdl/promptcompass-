# Guida operativa per Jack

**Setup iniziale: COMPLETATO** (2026-07-06) — account GitHub e Vercel attivi (giacomofedeli05@gmail.com), repository `promptcompass` creato, sito live su **https://promptcompass.vercel.app**, connettore Vercel collegato a Claude.

Questa guida ora serve per una sola cosa: **pubblicare gli aggiornamenti** che Claude prepara nella cartella.

---

## Come pubblicare un aggiornamento (scegli UNA delle due opzioni)

### Opzione A — Upload su GitHub (consigliata: tiene il codice sempre allineato online)

1. Vai sul tuo repository: https://github.com/ → apri `promptcompass`.
2. Clicca **Add file** → **Upload files**.
3. Apri Esplora File nella cartella `PromptCompassFolder`, seleziona tutto (Ctrl+A) e trascina i file nella pagina. Le cartelle `js/` e `docs/` vanno trascinate così come sono: GitHub sovrascrive i file con lo stesso nome.
4. In basso clicca **Commit changes**.
5. Vercel pubblica da solo in ~30 secondi. Ricarica https://promptcompass.vercel.app e verifica (es. il badge versione nell'header deve cambiare).

### Opzione B — Un comando dal tuo PC (usa il tuo Node.js)

Solo la prima volta:
1. Apri il menu Start, scrivi `powershell`, apri Windows PowerShell.
2. Scrivi: `cd C:\dev\PromptCompassFolder` e premi Invio.
3. Scrivi: `npx vercel login` e premi Invio. Se chiede di installare il pacchetto, conferma con `y`. Scegli **Continue with GitHub**: si apre il browser, autorizza e torna al terminale.

Ogni volta che vuoi pubblicare:
1. PowerShell → `cd C:\dev\PromptCompassFolder`
2. `npx vercel deploy --prod --yes`
3. Alla fine appare l'URL: il sito è aggiornato.

Nota: l'opzione B pubblica subito ma NON aggiorna il codice su GitHub. Se usi spesso la B, ogni tanto fai anche un upload come nell'opzione A per tenere il repository allineato.

---

## Chiavi API gratuite (più avanti, non ora)

Serviranno in Fase 1.5/2. Te lo chiederò io al momento giusto:
- Google AI Studio (Gemini): https://aistudio.google.com
- Groq: https://console.groq.com
