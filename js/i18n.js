/*
 * WhichAI (formerly WhichAI) — UI translations (v0.21.0) — 11 languages
 * Interface chrome in 8 languages. Content (generated prompts, benchmark notes,
 * catalog, chain step instructions) intentionally stays in English: prompt
 * quality and benchmark data are tuned for English. The langNote string
 * explains this to the user whenever a non-English language is active.
 */
(function () {
  "use strict";

  var LANGS = [
    { code: "en", label: "English" },
    { code: "it", label: "Italiano" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" },
    { code: "pt", label: "Português" },
    { code: "zh", label: "中文" },
    { code: "hi", label: "हिन्दी" },
    { code: "ru", label: "Русский" },
    { code: "ja", label: "日本語" },
    { code: "ar", label: "العربية" }
  ];

  var S = {};

  S.en = {
    navGenerator: "Generator", navGuide: "Model guide", navCompare: "Compare", navChains: "Chains", navSettings: "Settings",
    privacyPill: "Private by design",
    privacyTip: "Runs entirely in your browser. No account, no server, no tracking. API keys stay on your device.",
    trustLine: "No account · No server · Nothing leaves your browser",
    langNote: "",
    genTitle: "Describe your goal",
    genSubtitle: "WhichAI turns it into a prompt tailored to each AI model — and tells you which model is the best fit for the job, in plain language.",
    goalLabel: "Goal ", optionalTag: "(optional)", tryExample: "Try an example",
    goalPh: "e.g., Write a landing page headline and subheadline for a budgeting app aimed at freelancers",
    goalErr: "Describe your goal to generate prompts.",
    contextLabel: "Context ", contextPh: "Background, audience, constraints, examples — anything the AI should know",
    taskLabel: "Task type", formatLabel: "Output format", lengthLabel: "Length", toneLabel: "Tone",
    targetsLabel: "Target models", groupAssistants: "AI assistants", groupEco: "Ecosystem assistants", groupOpen: "Open models ",
    modelsErr: "Select at least one target model.", generateBtn: "Generate prompts",
    emptyLead: "Your optimized prompts will appear here — one version per model, plus a recommendation of which model fits this task best.",
    step1: "Describe your goal", step2: "Copy the prompt tailored to each AI", step3: "Compare the answers and iterate",
    resultsTitle: "Optimized prompts", toCompareBtn: "Compare outputs →",
    optNone: "No preference", optProse: "Plain prose", optMarkdown: "Markdown", optBullets: "Bullet points", optTable: "Table", optJson: "JSON", optCode: "Code",
    optShort: "Short", optMedium: "Medium", optLong: "Long & detailed",
    optProfessional: "Professional", optFriendly: "Friendly", optCasual: "Casual", optPersuasive: "Persuasive", optAcademic: "Academic",
    autoDetect: "Auto-detect", detected: "Detected:",
    task_writing: "Writing & content", task_coding: "Coding & development", task_analysis: "Analysis & data", task_research: "Research & summarization",
    task_brainstorming: "Brainstorming & ideas", task_education: "Education & explanation", task_business: "Business & marketing", task_general: "General / other",
    routerTitle: "Which model for this task?", bestPick: "Best pick:", benchLabel: "Benchmarks:",
    fullRanking: "Full ranking, free tiers and sources", freeTier: "Free tier:", sourcesLabel: "Sources:",
    whyPrefix: "Why this prompt is built this way for", copy: "Copy", copied: "Copied", copyPrompt: "Copy prompt",
    guideTitle: "Model guide", guideSub: "Which AI app fits each kind of task — public benchmarks translated into plain language.",
    catalogTitle: "Model catalog",
    compareTitle: "Compare outputs",
    compareSub: "Run the same optimized prompt in each AI app, paste (or auto-run) the answers, and score them side by side. Everything stays in your browser.",
    compareEmptyText: "No active comparison. Generate prompts first, then click \"Compare outputs\" to bring them here. ",
    goGenerator: "Go to the Generator",
    saveCmp: "Save comparison", newVersion: "New version", exportMd: "Export .md", savedCmps: "Saved comparisons",
    notScored: "Not scored", winner: "Winner", tied: "Tied", tie: "Tie", winnerPrefix: "Winner:", openBtn: "Open", deleteBtn: "Delete",
    chainsTitle: "Chains",
    chainsSub: "Break a complex goal into linked steps: each step gets its own optimized prompt, and the output of one step feeds the next. Auto-run steps where you have a free key; copy & paste elsewhere.",
    buildChain: "Build chain", saveChain: "Save chain", savedChains: "Saved chains",
    promptForStep: "Prompt for this step", stepOutput: "Step output",
    settingsTitle: "Settings",
    settingsSub: "API keys enable automatic execution in Compare. Keys are stored only in this browser and are sent only to the provider you call — never to any WhichAI server (there is none).",
    saveSettings: "Save settings", prefsReset: "Reset remembered preferences",
    footerText: "Runs entirely in your browser: no account, no server, your keys and data never leave your device."
  };

  S.it = {
    navGenerator: "Generatore", navGuide: "Guida modelli", navCompare: "Confronta", navChains: "Catene", navSettings: "Impostazioni",
    privacyPill: "Privacy by design",
    privacyTip: "Funziona interamente nel tuo browser. Nessun account, nessun server, nessun tracciamento. Le chiavi API restano sul tuo dispositivo.",
    trustLine: "Nessun account · Nessun server · Nulla esce dal tuo browser",
    langNote: "Interfaccia in italiano. Nota: i prompt generati, le note sui benchmark e il rilevamento automatico del tipo di task sono ottimizzati per l'inglese (tutti i modelli AI rendono al meglio con istruzioni in inglese). Puoi comunque scrivere il tuo obiettivo in qualsiasi lingua: l'AI risponderà nella tua lingua.",
    genTitle: "Descrivi il tuo obiettivo",
    genSubtitle: "WhichAI lo trasforma in un prompt su misura per ogni modello AI — e ti dice quale modello è il più adatto, in parole semplici.",
    goalLabel: "Obiettivo ", optionalTag: "(facoltativo)", tryExample: "Prova un esempio",
    goalPh: "es. Scrivi titolo e sottotitolo per la landing page di un'app di budgeting per freelance",
    goalErr: "Descrivi il tuo obiettivo per generare i prompt.",
    contextLabel: "Contesto ", contextPh: "Sfondo, pubblico, vincoli, esempi — tutto ciò che l'AI dovrebbe sapere",
    taskLabel: "Tipo di task", formatLabel: "Formato output", lengthLabel: "Lunghezza", toneLabel: "Tono",
    targetsLabel: "Modelli di destinazione", groupAssistants: "Assistenti AI", groupEco: "Assistenti di ecosistema", groupOpen: "Modelli open ",
    modelsErr: "Seleziona almeno un modello.", generateBtn: "Genera i prompt",
    emptyLead: "I tuoi prompt ottimizzati appariranno qui — una versione per modello, più il consiglio su quale modello è il migliore per questo task.",
    step1: "Descrivi il tuo obiettivo", step2: "Copia il prompt su misura per ogni AI", step3: "Confronta le risposte e itera",
    resultsTitle: "Prompt ottimizzati", toCompareBtn: "Confronta gli output →",
    optNone: "Nessuna preferenza", optProse: "Prosa semplice", optMarkdown: "Markdown", optBullets: "Elenco puntato", optTable: "Tabella", optJson: "JSON", optCode: "Codice",
    optShort: "Breve", optMedium: "Media", optLong: "Lunga e dettagliata",
    optProfessional: "Professionale", optFriendly: "Amichevole", optCasual: "Informale", optPersuasive: "Persuasivo", optAcademic: "Accademico",
    autoDetect: "Rilevamento automatico", detected: "Rilevato:",
    task_writing: "Scrittura e contenuti", task_coding: "Codice e sviluppo", task_analysis: "Analisi e dati", task_research: "Ricerca e sintesi",
    task_brainstorming: "Brainstorming e idee", task_education: "Formazione e spiegazioni", task_business: "Business e marketing", task_general: "Generale / altro",
    routerTitle: "Quale modello per questo task?", bestPick: "Scelta migliore:", benchLabel: "Benchmark:",
    fullRanking: "Classifica completa, piani gratuiti e fonti", freeTier: "Piano gratuito:", sourcesLabel: "Fonti:",
    whyPrefix: "Perché questo prompt è costruito così per", copy: "Copia", copied: "Copiato", copyPrompt: "Copia prompt",
    guideTitle: "Guida ai modelli", guideSub: "Quale app AI è adatta a ogni tipo di task — benchmark pubblici tradotti in parole semplici.",
    catalogTitle: "Catalogo modelli",
    compareTitle: "Confronta gli output",
    compareSub: "Esegui lo stesso prompt ottimizzato in ogni app AI, incolla (o esegui in automatico) le risposte e valutale fianco a fianco. Tutto resta nel tuo browser.",
    compareEmptyText: "Nessun confronto attivo. Genera prima i prompt, poi clicca \"Confronta gli output\". ",
    goGenerator: "Vai al Generatore",
    saveCmp: "Salva confronto", newVersion: "Nuova versione", exportMd: "Esporta .md", savedCmps: "Confronti salvati",
    notScored: "Non valutato", winner: "Vincitore", tied: "Pareggio", tie: "Pareggio", winnerPrefix: "Vincitore:", openBtn: "Apri", deleteBtn: "Elimina",
    chainsTitle: "Catene",
    chainsSub: "Spezza un obiettivo complesso in passi collegati: ogni passo ha il suo prompt ottimizzato e l'output di un passo alimenta il successivo. Esecuzione automatica dove hai una chiave gratuita; copia e incolla altrove.",
    buildChain: "Costruisci catena", saveChain: "Salva catena", savedChains: "Catene salvate",
    promptForStep: "Prompt per questo passo", stepOutput: "Output del passo",
    settingsTitle: "Impostazioni",
    settingsSub: "Le chiavi API abilitano l'esecuzione automatica nel Confronto. Restano solo in questo browser e vengono inviate solo al provider che chiami — mai a un server WhichAI (che non esiste).",
    saveSettings: "Salva impostazioni", prefsReset: "Ripristina preferenze predefinite",
    footerText: "Funziona interamente nel tuo browser: nessun account, nessun server, chiavi e dati non lasciano mai il tuo dispositivo."
  };

  S.fr = {
    navGenerator: "Générateur", navGuide: "Guide des modèles", navCompare: "Comparer", navChains: "Chaînes", navSettings: "Paramètres",
    privacyPill: "Privé par conception",
    privacyTip: "Fonctionne entièrement dans votre navigateur. Pas de compte, pas de serveur, pas de suivi. Les clés API restent sur votre appareil.",
    trustLine: "Pas de compte · Pas de serveur · Rien ne quitte votre navigateur",
    langNote: "Interface en français. Remarque : les prompts générés, les notes de benchmark et la détection automatique du type de tâche sont optimisés pour l'anglais (tous les modèles d'IA fonctionnent mieux avec des instructions en anglais). Vous pouvez écrire votre objectif dans n'importe quelle langue : l'IA répondra dans votre langue.",
    genTitle: "Décrivez votre objectif",
    genSubtitle: "WhichAI le transforme en un prompt adapté à chaque modèle d'IA — et vous dit quel modèle convient le mieux, en langage simple.",
    goalLabel: "Objectif ", optionalTag: "(facultatif)", tryExample: "Essayer un exemple",
    goalPh: "ex. Rédigez le titre d'une landing page pour une app de budget destinée aux freelances",
    goalErr: "Décrivez votre objectif pour générer les prompts.",
    contextLabel: "Contexte ", contextPh: "Contexte, public, contraintes, exemples — tout ce que l'IA devrait savoir",
    taskLabel: "Type de tâche", formatLabel: "Format de sortie", lengthLabel: "Longueur", toneLabel: "Ton",
    targetsLabel: "Modèles cibles", groupAssistants: "Assistants IA", groupEco: "Assistants d'écosystème", groupOpen: "Modèles ouverts ",
    modelsErr: "Sélectionnez au moins un modèle.", generateBtn: "Générer les prompts",
    emptyLead: "Vos prompts optimisés apparaîtront ici — une version par modèle, plus une recommandation du modèle le mieux adapté.",
    step1: "Décrivez votre objectif", step2: "Copiez le prompt adapté à chaque IA", step3: "Comparez les réponses et itérez",
    resultsTitle: "Prompts optimisés", toCompareBtn: "Comparer les réponses →",
    optNone: "Sans préférence", optProse: "Prose simple", optMarkdown: "Markdown", optBullets: "Liste à puces", optTable: "Tableau", optJson: "JSON", optCode: "Code",
    optShort: "Court", optMedium: "Moyen", optLong: "Long et détaillé",
    optProfessional: "Professionnel", optFriendly: "Chaleureux", optCasual: "Décontracté", optPersuasive: "Persuasif", optAcademic: "Académique",
    autoDetect: "Détection automatique", detected: "Détecté :",
    task_writing: "Rédaction et contenu", task_coding: "Code et développement", task_analysis: "Analyse et données", task_research: "Recherche et synthèse",
    task_brainstorming: "Brainstorming et idées", task_education: "Éducation et explication", task_business: "Business et marketing", task_general: "Général / autre",
    routerTitle: "Quel modèle pour cette tâche ?", bestPick: "Meilleur choix :", benchLabel: "Benchmarks :",
    fullRanking: "Classement complet, offres gratuites et sources", freeTier: "Offre gratuite :", sourcesLabel: "Sources :",
    whyPrefix: "Pourquoi ce prompt est construit ainsi pour", copy: "Copier", copied: "Copié", copyPrompt: "Copier le prompt",
    guideTitle: "Guide des modèles", guideSub: "Quelle app d'IA convient à chaque type de tâche — benchmarks publics traduits en langage simple.",
    catalogTitle: "Catalogue des modèles",
    compareTitle: "Comparer les réponses",
    compareSub: "Exécutez le même prompt optimisé dans chaque app d'IA, collez (ou exécutez automatiquement) les réponses et notez-les côte à côte. Tout reste dans votre navigateur.",
    compareEmptyText: "Aucune comparaison active. Générez d'abord les prompts, puis cliquez sur « Comparer les réponses ». ",
    goGenerator: "Aller au Générateur",
    saveCmp: "Enregistrer", newVersion: "Nouvelle version", exportMd: "Exporter .md", savedCmps: "Comparaisons enregistrées",
    notScored: "Non noté", winner: "Gagnant", tied: "Égalité", tie: "Égalité", winnerPrefix: "Gagnant :", openBtn: "Ouvrir", deleteBtn: "Supprimer",
    chainsTitle: "Chaînes",
    chainsSub: "Découpez un objectif complexe en étapes liées : chaque étape a son prompt optimisé, et la sortie d'une étape alimente la suivante. Exécution automatique avec une clé gratuite ; copier-coller sinon.",
    buildChain: "Construire la chaîne", saveChain: "Enregistrer la chaîne", savedChains: "Chaînes enregistrées",
    promptForStep: "Prompt de cette étape", stepOutput: "Sortie de l'étape",
    settingsTitle: "Paramètres",
    settingsSub: "Les clés API activent l'exécution automatique. Elles restent uniquement dans ce navigateur et ne sont envoyées qu'au fournisseur appelé — jamais à un serveur WhichAI (il n'y en a pas).",
    saveSettings: "Enregistrer", prefsReset: "Réinitialiser les préférences",
    footerText: "Fonctionne entièrement dans votre navigateur : pas de compte, pas de serveur, vos clés et données ne quittent jamais votre appareil."
  };

  S.es = {
    navGenerator: "Generador", navGuide: "Guía de modelos", navCompare: "Comparar", navChains: "Cadenas", navSettings: "Ajustes",
    privacyPill: "Privado por diseño",
    privacyTip: "Funciona por completo en tu navegador. Sin cuenta, sin servidor, sin rastreo. Las claves API se quedan en tu dispositivo.",
    trustLine: "Sin cuenta · Sin servidor · Nada sale de tu navegador",
    langNote: "Interfaz en español. Nota: los prompts generados, las notas de benchmarks y la detección automática del tipo de tarea están optimizados para el inglés (todos los modelos de IA rinden mejor con instrucciones en inglés). Puedes escribir tu objetivo en cualquier idioma: la IA responderá en tu idioma.",
    genTitle: "Describe tu objetivo",
    genSubtitle: "WhichAI lo convierte en un prompt a medida para cada modelo de IA — y te dice qué modelo encaja mejor, en lenguaje sencillo.",
    goalLabel: "Objetivo ", optionalTag: "(opcional)", tryExample: "Probar un ejemplo",
    goalPh: "p. ej., Escribe el titular de una landing page para una app de presupuestos para freelancers",
    goalErr: "Describe tu objetivo para generar los prompts.",
    contextLabel: "Contexto ", contextPh: "Antecedentes, público, restricciones, ejemplos — todo lo que la IA deba saber",
    taskLabel: "Tipo de tarea", formatLabel: "Formato de salida", lengthLabel: "Longitud", toneLabel: "Tono",
    targetsLabel: "Modelos de destino", groupAssistants: "Asistentes de IA", groupEco: "Asistentes de ecosistema", groupOpen: "Modelos abiertos ",
    modelsErr: "Selecciona al menos un modelo.", generateBtn: "Generar prompts",
    emptyLead: "Tus prompts optimizados aparecerán aquí — una versión por modelo, más una recomendación del modelo que mejor encaja.",
    step1: "Describe tu objetivo", step2: "Copia el prompt a medida de cada IA", step3: "Compara las respuestas e itera",
    resultsTitle: "Prompts optimizados", toCompareBtn: "Comparar respuestas →",
    optNone: "Sin preferencia", optProse: "Prosa simple", optMarkdown: "Markdown", optBullets: "Viñetas", optTable: "Tabla", optJson: "JSON", optCode: "Código",
    optShort: "Corta", optMedium: "Media", optLong: "Larga y detallada",
    optProfessional: "Profesional", optFriendly: "Cercano", optCasual: "Informal", optPersuasive: "Persuasivo", optAcademic: "Académico",
    autoDetect: "Detección automática", detected: "Detectado:",
    task_writing: "Escritura y contenido", task_coding: "Código y desarrollo", task_analysis: "Análisis y datos", task_research: "Investigación y síntesis",
    task_brainstorming: "Lluvia de ideas", task_education: "Educación y explicación", task_business: "Negocios y marketing", task_general: "General / otro",
    routerTitle: "¿Qué modelo para esta tarea?", bestPick: "Mejor opción:", benchLabel: "Benchmarks:",
    fullRanking: "Clasificación completa, planes gratuitos y fuentes", freeTier: "Plan gratuito:", sourcesLabel: "Fuentes:",
    whyPrefix: "Por qué este prompt está construido así para", copy: "Copiar", copied: "Copiado", copyPrompt: "Copiar prompt",
    guideTitle: "Guía de modelos", guideSub: "Qué app de IA encaja con cada tipo de tarea — benchmarks públicos traducidos a lenguaje sencillo.",
    catalogTitle: "Catálogo de modelos",
    compareTitle: "Comparar respuestas",
    compareSub: "Ejecuta el mismo prompt optimizado en cada app de IA, pega (o ejecuta automáticamente) las respuestas y puntúalas lado a lado. Todo se queda en tu navegador.",
    compareEmptyText: "No hay comparación activa. Genera primero los prompts y pulsa \"Comparar respuestas\". ",
    goGenerator: "Ir al Generador",
    saveCmp: "Guardar comparación", newVersion: "Nueva versión", exportMd: "Exportar .md", savedCmps: "Comparaciones guardadas",
    notScored: "Sin puntuar", winner: "Ganador", tied: "Empate", tie: "Empate", winnerPrefix: "Ganador:", openBtn: "Abrir", deleteBtn: "Eliminar",
    chainsTitle: "Cadenas",
    chainsSub: "Divide un objetivo complejo en pasos enlazados: cada paso tiene su prompt optimizado y la salida de un paso alimenta el siguiente. Ejecución automática donde tengas una clave gratuita; copiar y pegar en el resto.",
    buildChain: "Construir cadena", saveChain: "Guardar cadena", savedChains: "Cadenas guardadas",
    promptForStep: "Prompt de este paso", stepOutput: "Salida del paso",
    settingsTitle: "Ajustes",
    settingsSub: "Las claves API activan la ejecución automática. Se guardan solo en este navegador y se envían solo al proveedor que llamas — nunca a un servidor de WhichAI (no existe).",
    saveSettings: "Guardar ajustes", prefsReset: "Restablecer preferencias",
    footerText: "Funciona por completo en tu navegador: sin cuenta, sin servidor, tus claves y datos nunca salen de tu dispositivo."
  };

  S.de = {
    navGenerator: "Generator", navGuide: "Modell-Guide", navCompare: "Vergleichen", navChains: "Ketten", navSettings: "Einstellungen",
    privacyPill: "Privat by Design",
    privacyTip: "Läuft vollständig in deinem Browser. Kein Konto, kein Server, kein Tracking. API-Schlüssel bleiben auf deinem Gerät.",
    trustLine: "Kein Konto · Kein Server · Nichts verlässt deinen Browser",
    langNote: "Oberfläche auf Deutsch. Hinweis: Generierte Prompts, Benchmark-Notizen und die automatische Aufgabenerkennung sind für Englisch optimiert (alle KI-Modelle arbeiten mit englischen Anweisungen am besten). Dein Ziel kannst du in jeder Sprache schreiben — die KI antwortet in deiner Sprache.",
    genTitle: "Beschreibe dein Ziel",
    genSubtitle: "WhichAI macht daraus einen auf jedes KI-Modell zugeschnittenen Prompt — und sagt dir in einfachen Worten, welches Modell am besten passt.",
    goalLabel: "Ziel ", optionalTag: "(optional)", tryExample: "Beispiel laden",
    goalPh: "z. B. Schreibe die Headline einer Landingpage für eine Budget-App für Freelancer",
    goalErr: "Beschreibe dein Ziel, um Prompts zu generieren.",
    contextLabel: "Kontext ", contextPh: "Hintergrund, Zielgruppe, Einschränkungen, Beispiele — alles, was die KI wissen sollte",
    taskLabel: "Aufgabentyp", formatLabel: "Ausgabeformat", lengthLabel: "Länge", toneLabel: "Ton",
    targetsLabel: "Zielmodelle", groupAssistants: "KI-Assistenten", groupEco: "Ökosystem-Assistenten", groupOpen: "Offene Modelle ",
    modelsErr: "Wähle mindestens ein Modell.", generateBtn: "Prompts generieren",
    emptyLead: "Deine optimierten Prompts erscheinen hier — eine Version pro Modell, plus eine Empfehlung, welches Modell am besten passt.",
    step1: "Beschreibe dein Ziel", step2: "Kopiere den auf jede KI zugeschnittenen Prompt", step3: "Vergleiche die Antworten und iteriere",
    resultsTitle: "Optimierte Prompts", toCompareBtn: "Antworten vergleichen →",
    optNone: "Keine Präferenz", optProse: "Fließtext", optMarkdown: "Markdown", optBullets: "Stichpunkte", optTable: "Tabelle", optJson: "JSON", optCode: "Code",
    optShort: "Kurz", optMedium: "Mittel", optLong: "Lang & detailliert",
    optProfessional: "Professionell", optFriendly: "Freundlich", optCasual: "Locker", optPersuasive: "Überzeugend", optAcademic: "Akademisch",
    autoDetect: "Automatisch erkennen", detected: "Erkannt:",
    task_writing: "Schreiben & Inhalte", task_coding: "Code & Entwicklung", task_analysis: "Analyse & Daten", task_research: "Recherche & Zusammenfassung",
    task_brainstorming: "Brainstorming & Ideen", task_education: "Bildung & Erklärung", task_business: "Business & Marketing", task_general: "Allgemein / Sonstiges",
    routerTitle: "Welches Modell für diese Aufgabe?", bestPick: "Beste Wahl:", benchLabel: "Benchmarks:",
    fullRanking: "Komplettes Ranking, Gratis-Angebote und Quellen", freeTier: "Gratis-Angebot:", sourcesLabel: "Quellen:",
    whyPrefix: "Warum dieser Prompt so aufgebaut ist für", copy: "Kopieren", copied: "Kopiert", copyPrompt: "Prompt kopieren",
    guideTitle: "Modell-Guide", guideSub: "Welche KI-App zu welcher Aufgabe passt — öffentliche Benchmarks in einfache Worte übersetzt.",
    catalogTitle: "Modellkatalog",
    compareTitle: "Antworten vergleichen",
    compareSub: "Führe denselben optimierten Prompt in jeder KI-App aus, füge die Antworten ein (oder führe sie automatisch aus) und bewerte sie nebeneinander. Alles bleibt in deinem Browser.",
    compareEmptyText: "Kein aktiver Vergleich. Generiere zuerst Prompts und klicke dann auf „Antworten vergleichen“. ",
    goGenerator: "Zum Generator",
    saveCmp: "Vergleich speichern", newVersion: "Neue Version", exportMd: ".md exportieren", savedCmps: "Gespeicherte Vergleiche",
    notScored: "Nicht bewertet", winner: "Gewinner", tied: "Unentschieden", tie: "Unentschieden", winnerPrefix: "Gewinner:", openBtn: "Öffnen", deleteBtn: "Löschen",
    chainsTitle: "Ketten",
    chainsSub: "Zerlege ein komplexes Ziel in verknüpfte Schritte: Jeder Schritt bekommt seinen eigenen optimierten Prompt, und die Ausgabe eines Schritts speist den nächsten. Automatische Ausführung mit Gratis-Schlüssel; sonst Copy & Paste.",
    buildChain: "Kette erstellen", saveChain: "Kette speichern", savedChains: "Gespeicherte Ketten",
    promptForStep: "Prompt für diesen Schritt", stepOutput: "Schritt-Ausgabe",
    settingsTitle: "Einstellungen",
    settingsSub: "API-Schlüssel aktivieren die automatische Ausführung. Sie bleiben nur in diesem Browser und gehen nur an den aufgerufenen Anbieter — nie an einen WhichAI-Server (es gibt keinen).",
    saveSettings: "Einstellungen speichern", prefsReset: "Einstellungen zurücksetzen",
    footerText: "Läuft vollständig in deinem Browser: kein Konto, kein Server, deine Schlüssel und Daten verlassen nie dein Gerät."
  };

  S.pt = {
    navGenerator: "Gerador", navGuide: "Guia de modelos", navCompare: "Comparar", navChains: "Cadeias", navSettings: "Configurações",
    privacyPill: "Privado por design",
    privacyTip: "Funciona inteiramente no seu navegador. Sem conta, sem servidor, sem rastreamento. As chaves de API ficam no seu dispositivo.",
    trustLine: "Sem conta · Sem servidor · Nada sai do seu navegador",
    langNote: "Interface em português. Nota: os prompts gerados, as notas de benchmark e a detecção automática do tipo de tarefa são otimizados para o inglês (todos os modelos de IA funcionam melhor com instruções em inglês). Você pode escrever seu objetivo em qualquer idioma: a IA responderá no seu idioma.",
    genTitle: "Descreva seu objetivo",
    genSubtitle: "O WhichAI o transforma em um prompt sob medida para cada modelo de IA — e diz qual modelo é o mais adequado, em linguagem simples.",
    goalLabel: "Objetivo ", optionalTag: "(opcional)", tryExample: "Testar um exemplo",
    goalPh: "ex.: Escreva o título de uma landing page para um app de orçamento para freelancers",
    goalErr: "Descreva seu objetivo para gerar os prompts.",
    contextLabel: "Contexto ", contextPh: "Contexto, público, restrições, exemplos — tudo o que a IA deve saber",
    taskLabel: "Tipo de tarefa", formatLabel: "Formato de saída", lengthLabel: "Comprimento", toneLabel: "Tom",
    targetsLabel: "Modelos de destino", groupAssistants: "Assistentes de IA", groupEco: "Assistentes de ecossistema", groupOpen: "Modelos abertos ",
    modelsErr: "Selecione pelo menos um modelo.", generateBtn: "Gerar prompts",
    emptyLead: "Seus prompts otimizados aparecerão aqui — uma versão por modelo, mais a recomendação do modelo mais adequado.",
    step1: "Descreva seu objetivo", step2: "Copie o prompt sob medida para cada IA", step3: "Compare as respostas e itere",
    resultsTitle: "Prompts otimizados", toCompareBtn: "Comparar respostas →",
    optNone: "Sem preferência", optProse: "Prosa simples", optMarkdown: "Markdown", optBullets: "Tópicos", optTable: "Tabela", optJson: "JSON", optCode: "Código",
    optShort: "Curto", optMedium: "Médio", optLong: "Longo e detalhado",
    optProfessional: "Profissional", optFriendly: "Amigável", optCasual: "Informal", optPersuasive: "Persuasivo", optAcademic: "Acadêmico",
    autoDetect: "Detecção automática", detected: "Detectado:",
    task_writing: "Escrita e conteúdo", task_coding: "Código e desenvolvimento", task_analysis: "Análise e dados", task_research: "Pesquisa e síntese",
    task_brainstorming: "Brainstorming e ideias", task_education: "Educação e explicação", task_business: "Negócios e marketing", task_general: "Geral / outro",
    routerTitle: "Qual modelo para esta tarefa?", bestPick: "Melhor escolha:", benchLabel: "Benchmarks:",
    fullRanking: "Classificação completa, planos gratuitos e fontes", freeTier: "Plano gratuito:", sourcesLabel: "Fontes:",
    whyPrefix: "Por que este prompt é construído assim para", copy: "Copiar", copied: "Copiado", copyPrompt: "Copiar prompt",
    guideTitle: "Guia de modelos", guideSub: "Qual app de IA combina com cada tipo de tarefa — benchmarks públicos traduzidos em linguagem simples.",
    catalogTitle: "Catálogo de modelos",
    compareTitle: "Comparar respostas",
    compareSub: "Execute o mesmo prompt otimizado em cada app de IA, cole (ou execute automaticamente) as respostas e avalie-as lado a lado. Tudo fica no seu navegador.",
    compareEmptyText: "Nenhuma comparação ativa. Gere os prompts primeiro e clique em \"Comparar respostas\". ",
    goGenerator: "Ir para o Gerador",
    saveCmp: "Salvar comparação", newVersion: "Nova versão", exportMd: "Exportar .md", savedCmps: "Comparações salvas",
    notScored: "Sem nota", winner: "Vencedor", tied: "Empate", tie: "Empate", winnerPrefix: "Vencedor:", openBtn: "Abrir", deleteBtn: "Excluir",
    chainsTitle: "Cadeias",
    chainsSub: "Divida um objetivo complexo em etapas ligadas: cada etapa tem seu prompt otimizado e a saída de uma etapa alimenta a próxima. Execução automática onde houver chave gratuita; copiar e colar no resto.",
    buildChain: "Construir cadeia", saveChain: "Salvar cadeia", savedChains: "Cadeias salvas",
    promptForStep: "Prompt desta etapa", stepOutput: "Saída da etapa",
    settingsTitle: "Configurações",
    settingsSub: "As chaves de API ativam a execução automática. Ficam apenas neste navegador e são enviadas somente ao provedor chamado — nunca a um servidor do WhichAI (não existe).",
    saveSettings: "Salvar configurações", prefsReset: "Redefinir preferências",
    footerText: "Funciona inteiramente no seu navegador: sem conta, sem servidor, suas chaves e dados nunca saem do seu dispositivo."
  };

  S.zh = {
    navGenerator: "生成器", navGuide: "模型指南", navCompare: "对比", navChains: "任务链", navSettings: "设置",
    privacyPill: "隐私优先设计",
    privacyTip: "完全在您的浏览器中运行。无需账户、无服务器、无跟踪。API 密钥仅保存在您的设备上。",
    trustLine: "无需账户 · 无服务器 · 数据不离开浏览器",
    langNote: "界面为中文。请注意：生成的提示词、基准测试说明和任务类型自动检测均针对英文优化（所有 AI 模型对英文指令的表现最佳）。您仍可用任何语言描述目标，AI 会用您的语言回答。",
    genTitle: "描述您的目标",
    genSubtitle: "WhichAI 将其转化为针对每个 AI 模型定制的提示词，并用通俗语言告诉您哪个模型最适合这项任务。",
    goalLabel: "目标 ", optionalTag: "（可选）", tryExample: "试试示例",
    goalPh: "例如：为一款面向自由职业者的记账应用撰写落地页标题和副标题",
    goalErr: "请描述您的目标以生成提示词。",
    contextLabel: "背景 ", contextPh: "背景、受众、限制、示例——任何 AI 应该知道的信息",
    taskLabel: "任务类型", formatLabel: "输出格式", lengthLabel: "长度", toneLabel: "语气",
    targetsLabel: "目标模型", groupAssistants: "AI 助手", groupEco: "生态系统助手", groupOpen: "开源模型 ",
    modelsErr: "请至少选择一个模型。", generateBtn: "生成提示词",
    emptyLead: "优化后的提示词将显示在这里——每个模型一个版本，并推荐最适合此任务的模型。",
    step1: "描述您的目标", step2: "复制为每个 AI 定制的提示词", step3: "对比回答并迭代",
    resultsTitle: "优化的提示词", toCompareBtn: "对比输出 →",
    optNone: "无偏好", optProse: "普通文本", optMarkdown: "Markdown", optBullets: "要点列表", optTable: "表格", optJson: "JSON", optCode: "代码",
    optShort: "简短", optMedium: "中等", optLong: "详细",
    optProfessional: "专业", optFriendly: "亲切", optCasual: "随意", optPersuasive: "有说服力", optAcademic: "学术",
    autoDetect: "自动检测", detected: "检测到：",
    task_writing: "写作与内容", task_coding: "编程与开发", task_analysis: "分析与数据", task_research: "研究与总结",
    task_brainstorming: "头脑风暴", task_education: "教育与讲解", task_business: "商业与营销", task_general: "通用 / 其他",
    routerTitle: "这项任务用哪个模型？", bestPick: "最佳选择：", benchLabel: "基准测试：",
    fullRanking: "完整排名、免费方案与来源", freeTier: "免费方案：", sourcesLabel: "来源：",
    whyPrefix: "为什么这样为其构建提示词：", copy: "复制", copied: "已复制", copyPrompt: "复制提示词",
    guideTitle: "模型指南", guideSub: "哪个 AI 应用适合哪类任务——把公开基准测试翻译成通俗语言。",
    catalogTitle: "模型目录",
    compareTitle: "对比输出",
    compareSub: "在每个 AI 应用中运行同一优化提示词，粘贴（或自动运行）回答并并排打分。一切都保存在您的浏览器中。",
    compareEmptyText: "暂无进行中的对比。请先生成提示词，然后点击“对比输出”。 ",
    goGenerator: "前往生成器",
    saveCmp: "保存对比", newVersion: "新版本", exportMd: "导出 .md", savedCmps: "已保存的对比",
    notScored: "未评分", winner: "胜者", tied: "并列", tie: "平局", winnerPrefix: "胜者：", openBtn: "打开", deleteBtn: "删除",
    chainsTitle: "任务链",
    chainsSub: "将复杂目标拆分为连贯的步骤：每一步都有专属优化提示词，上一步的输出会输入下一步。有免费密钥的模型可自动运行，其余复制粘贴即可。",
    buildChain: "构建任务链", saveChain: "保存任务链", savedChains: "已保存的任务链",
    promptForStep: "此步骤的提示词", stepOutput: "步骤输出",
    settingsTitle: "设置",
    settingsSub: "API 密钥用于自动运行。密钥仅保存在本浏览器中，只发送给您调用的提供商——绝不会发送到 WhichAI 服务器（根本不存在服务器）。",
    saveSettings: "保存设置", prefsReset: "重置偏好设置",
    footerText: "完全在您的浏览器中运行：无需账户、无服务器，您的密钥和数据绝不离开设备。"
  };

  S.hi = {
    navGenerator: "जनरेटर", navGuide: "मॉडल गाइड", navCompare: "तुलना", navChains: "चेन", navSettings: "सेटिंग्स",
    privacyPill: "डिज़ाइन से निजी",
    privacyTip: "पूरी तरह आपके ब्राउज़र में चलता है। कोई खाता नहीं, कोई सर्वर नहीं, कोई ट्रैकिंग नहीं। API कुंजियाँ आपके डिवाइस पर ही रहती हैं।",
    trustLine: "कोई खाता नहीं · कोई सर्वर नहीं · कुछ भी ब्राउज़र से बाहर नहीं जाता",
    langNote: "इंटरफ़ेस हिन्दी में है। ध्यान दें: जनरेट किए गए प्रॉम्प्ट, बेंचमार्क नोट्स और कार्य-प्रकार की स्वतः पहचान अंग्रेज़ी के लिए अनुकूलित हैं (सभी AI मॉडल अंग्रेज़ी निर्देशों पर सबसे अच्छा काम करते हैं)। आप अपना लक्ष्य किसी भी भाषा में लिख सकते हैं: AI आपकी भाषा में उत्तर देगा।",
    genTitle: "अपना लक्ष्य बताइए",
    genSubtitle: "WhichAI इसे हर AI मॉडल के लिए तैयार प्रॉम्प्ट में बदलता है — और सरल भाषा में बताता है कि कौन सा मॉडल सबसे उपयुक्त है।",
    goalLabel: "लक्ष्य ", optionalTag: "(वैकल्पिक)", tryExample: "उदाहरण आज़माएँ",
    goalPh: "जैसे: फ्रीलांसरों के लिए बजट ऐप की लैंडिंग पेज हेडलाइन लिखें",
    goalErr: "प्रॉम्प्ट बनाने के लिए अपना लक्ष्य बताइए।",
    contextLabel: "संदर्भ ", contextPh: "पृष्ठभूमि, दर्शक, सीमाएँ, उदाहरण — जो कुछ AI को पता होना चाहिए",
    taskLabel: "कार्य का प्रकार", formatLabel: "आउटपुट फ़ॉर्मेट", lengthLabel: "लंबाई", toneLabel: "लहजा",
    targetsLabel: "लक्षित मॉडल", groupAssistants: "AI सहायक", groupEco: "इकोसिस्टम सहायक", groupOpen: "ओपन मॉडल ",
    modelsErr: "कम से कम एक मॉडल चुनें।", generateBtn: "प्रॉम्प्ट बनाएँ",
    emptyLead: "आपके अनुकूलित प्रॉम्प्ट यहाँ दिखेंगे — हर मॉडल के लिए एक संस्करण, साथ ही सबसे उपयुक्त मॉडल की सिफ़ारिश।",
    step1: "अपना लक्ष्य बताइए", step2: "हर AI के लिए तैयार प्रॉम्प्ट कॉपी करें", step3: "उत्तरों की तुलना करें और सुधारें",
    resultsTitle: "अनुकूलित प्रॉम्प्ट", toCompareBtn: "आउटपुट की तुलना करें →",
    optNone: "कोई प्राथमिकता नहीं", optProse: "सादा गद्य", optMarkdown: "Markdown", optBullets: "बुलेट सूची", optTable: "तालिका", optJson: "JSON", optCode: "कोड",
    optShort: "छोटा", optMedium: "मध्यम", optLong: "लंबा और विस्तृत",
    optProfessional: "पेशेवर", optFriendly: "मैत्रीपूर्ण", optCasual: "अनौपचारिक", optPersuasive: "प्रेरक", optAcademic: "अकादमिक",
    autoDetect: "स्वतः पहचान", detected: "पहचाना गया:",
    task_writing: "लेखन और सामग्री", task_coding: "कोडिंग और विकास", task_analysis: "विश्लेषण और डेटा", task_research: "शोध और सारांश",
    task_brainstorming: "विचार-मंथन", task_education: "शिक्षा और व्याख्या", task_business: "व्यवसाय और मार्केटिंग", task_general: "सामान्य / अन्य",
    routerTitle: "इस कार्य के लिए कौन सा मॉडल?", bestPick: "सर्वश्रेष्ठ विकल्प:", benchLabel: "बेंचमार्क:",
    fullRanking: "पूरी रैंकिंग, मुफ़्त प्लान और स्रोत", freeTier: "मुफ़्त प्लान:", sourcesLabel: "स्रोत:",
    whyPrefix: "यह प्रॉम्प्ट इस तरह क्यों बनाया गया है:", copy: "कॉपी", copied: "कॉपी हो गया", copyPrompt: "प्रॉम्प्ट कॉपी करें",
    guideTitle: "मॉडल गाइड", guideSub: "किस तरह के कार्य के लिए कौन सा AI ऐप उपयुक्त है — सार्वजनिक बेंचमार्क सरल भाषा में।",
    catalogTitle: "मॉडल कैटलॉग",
    compareTitle: "आउटपुट की तुलना करें",
    compareSub: "हर AI ऐप में वही अनुकूलित प्रॉम्प्ट चलाएँ, उत्तर चिपकाएँ (या स्वतः चलाएँ) और साथ-साथ अंक दें। सब कुछ आपके ब्राउज़र में रहता है।",
    compareEmptyText: "कोई सक्रिय तुलना नहीं। पहले प्रॉम्प्ट बनाएँ, फिर \"आउटपुट की तुलना करें\" दबाएँ। ",
    goGenerator: "जनरेटर पर जाएँ",
    saveCmp: "तुलना सहेजें", newVersion: "नया संस्करण", exportMd: ".md निर्यात करें", savedCmps: "सहेजी गई तुलनाएँ",
    notScored: "अंक नहीं", winner: "विजेता", tied: "बराबर", tie: "बराबरी", winnerPrefix: "विजेता:", openBtn: "खोलें", deleteBtn: "हटाएँ",
    chainsTitle: "चेन",
    chainsSub: "जटिल लक्ष्य को जुड़े हुए चरणों में बाँटें: हर चरण का अपना अनुकूलित प्रॉम्प्ट होता है और एक चरण का आउटपुट अगले में जाता है। मुफ़्त कुंजी होने पर स्वतः चलाएँ; बाकी में कॉपी-पेस्ट करें।",
    buildChain: "चेन बनाएँ", saveChain: "चेन सहेजें", savedChains: "सहेजी गई चेन",
    promptForStep: "इस चरण का प्रॉम्प्ट", stepOutput: "चरण का आउटपुट",
    settingsTitle: "सेटिंग्स",
    settingsSub: "API कुंजियाँ स्वतः-चालन सक्षम करती हैं। ये केवल इस ब्राउज़र में रहती हैं और सिर्फ़ उसी प्रदाता को भेजी जाती हैं जिसे आप कॉल करते हैं — कभी किसी WhichAI सर्वर को नहीं (कोई सर्वर है ही नहीं)।",
    saveSettings: "सेटिंग्स सहेजें", prefsReset: "प्राथमिकताएँ रीसेट करें",
    footerText: "पूरी तरह आपके ब्राउज़र में चलता है: कोई खाता नहीं, कोई सर्वर नहीं, आपकी कुंजियाँ और डेटा कभी डिवाइस से बाहर नहीं जाते।"
  };


  S.en.dbTitle = "Model database"; S.en.dbSub = "Every notable AI model we track — including private and preview models, listed for information. Estimated scores are marked."; S.en.dbSearchPh = "Search models, vendors, tags…"; S.en.dbNoResults = "No models match your search.";
  S.it.dbTitle = "Database dei modelli"; S.it.dbSub = "Tutti i modelli AI rilevanti che seguiamo — inclusi quelli privati e in anteprima, presenti a scopo informativo. I punteggi stimati sono contrassegnati."; S.it.dbSearchPh = "Cerca modelli, produttori, tag…"; S.it.dbNoResults = "Nessun modello corrisponde alla ricerca.";
  S.fr.dbTitle = "Base de données des modèles"; S.fr.dbSub = "Tous les modèles d'IA notables que nous suivons — y compris privés et en préversion, à titre informatif. Les scores estimés sont signalés."; S.fr.dbSearchPh = "Rechercher modèles, éditeurs, tags…"; S.fr.dbNoResults = "Aucun modèle ne correspond à votre recherche.";
  S.es.dbTitle = "Base de datos de modelos"; S.es.dbSub = "Todos los modelos de IA relevantes que seguimos — incluidos privados y en vista previa, con fines informativos. Las puntuaciones estimadas están marcadas."; S.es.dbSearchPh = "Buscar modelos, proveedores, etiquetas…"; S.es.dbNoResults = "Ningún modelo coincide con tu búsqueda.";
  S.de.dbTitle = "Modell-Datenbank"; S.de.dbSub = "Alle relevanten KI-Modelle, die wir verfolgen — einschließlich privater und Preview-Modelle, zur Information. Geschätzte Werte sind markiert."; S.de.dbSearchPh = "Modelle, Anbieter, Tags suchen…"; S.de.dbNoResults = "Keine Modelle entsprechen deiner Suche.";
  S.pt.dbTitle = "Banco de dados de modelos"; S.pt.dbSub = "Todos os modelos de IA relevantes que acompanhamos — incluindo privados e em prévia, para fins informativos. Pontuações estimadas estão marcadas."; S.pt.dbSearchPh = "Buscar modelos, fornecedores, tags…"; S.pt.dbNoResults = "Nenhum modelo corresponde à sua busca.";
  S.zh.dbTitle = "模型数据库"; S.zh.dbSub = "我们追踪的所有重要 AI 模型——包括私有和预览模型，仅供参考。估算分数已标注。"; S.zh.dbSearchPh = "搜索模型、厂商、标签…"; S.zh.dbNoResults = "没有匹配的模型。";
  S.hi.dbTitle = "मॉडल डेटाबेस"; S.hi.dbSub = "हम जिन सभी उल्लेखनीय AI मॉडलों पर नज़र रखते हैं — निजी और पूर्वावलोकन मॉडल सहित, केवल जानकारी के लिए। अनुमानित स्कोर चिह्नित हैं।"; S.hi.dbSearchPh = "मॉडल, विक्रेता, टैग खोजें…"; S.hi.dbNoResults = "आपकी खोज से कोई मॉडल मेल नहीं खाता।";


  S.ru = {
    navGenerator: "Генератор",
    navGuide: "Гид по моделям",
    navCompare: "Сравнение",
    navChains: "Цепочки",
    navSettings: "Настройки",
    privacyPill: "Приватность по умолчанию",
    privacyTip: "Работает полностью в вашем браузере. Без аккаунта, без сервера, без трекинга. API-ключи остаются на вашем устройстве.",
    trustLine: "Без аккаунта · Без сервера · Ничего не покидает ваш браузер",
    langNote: "Интерфейс на русском. Примечание: сгенерированные промпты, заметки о бенчмарках и автоопределение типа задачи оптимизированы для английского (все ИИ-модели работают лучше с англоязычными инструкциями). Цель можно писать на любом языке — ИИ ответит на вашем языке.",
    genTitle: "Опишите вашу цель",
    genSubtitle: "WhichAI превратит её в промпт, адаптированный под каждую ИИ-модель, и простым языком подскажет, какая модель лучше подходит для задачи.",
    goalLabel: "Цель ",
    optionalTag: "(необязательно)",
    tryExample: "Показать пример",
    goalPh: "напр., Напиши заголовок и подзаголовок лендинга для приложения бюджетирования для фрилансеров",
    goalErr: "Опишите цель, чтобы сгенерировать промпты.",
    contextLabel: "Контекст ",
    contextPh: "Фон, аудитория, ограничения, примеры — всё, что ИИ должен знать",
    taskLabel: "Тип задачи",
    formatLabel: "Формат ответа",
    lengthLabel: "Длина",
    toneLabel: "Тон",
    targetsLabel: "Целевые модели",
    groupAssistants: "ИИ-ассистенты",
    groupEco: "Экосистемные ассистенты",
    groupOpen: "Открытые модели ",
    modelsErr: "Выберите хотя бы одну модель.",
    generateBtn: "Сгенерировать промпты",
    emptyLead: "Здесь появятся ваши оптимизированные промпты — по версии на модель, плюс рекомендация, какая модель лучше подходит.",
    step1: "Опишите цель",
    step2: "Скопируйте промпт под каждую ИИ",
    step3: "Сравните ответы и улучшайте",
    resultsTitle: "Оптимизированные промпты",
    toCompareBtn: "Сравнить ответы →",
    optNone: "Не важно",
    optProse: "Обычный текст",
    optMarkdown: "Markdown",
    optBullets: "Маркированный список",
    optTable: "Таблица",
    optJson: "JSON",
    optCode: "Код",
    optShort: "Коротко",
    optMedium: "Средне",
    optLong: "Подробно",
    optProfessional: "Профессиональный",
    optFriendly: "Дружелюбный",
    optCasual: "Неформальный",
    optPersuasive: "Убедительный",
    optAcademic: "Академический",
    autoDetect: "Автоопределение",
    detected: "Определено:",
    task_writing: "Тексты и контент",
    task_coding: "Код и разработка",
    task_analysis: "Анализ и данные",
    task_research: "Исследования и обзоры",
    task_brainstorming: "Брейншторм и идеи",
    task_education: "Обучение и объяснения",
    task_business: "Бизнес и маркетинг",
    task_general: "Общее / другое",
    routerTitle: "Какая модель для этой задачи?",
    bestPick: "Лучший выбор:",
    benchLabel: "Бенчмарки:",
    fullRanking: "Полный рейтинг, бесплатные тарифы и источники",
    freeTier: "Бесплатный тариф:",
    sourcesLabel: "Источники:",
    whyPrefix: "Почему промпт устроен так для",
    copy: "Копировать",
    copied: "Скопировано",
    copyPrompt: "Копировать промпт",
    guideTitle: "Гид по моделям",
    guideSub: "Какая ИИ подходит для каждого типа задач — публичные бенчмарки простым языком.",
    catalogTitle: "Каталог моделей",
    compareTitle: "Сравнение ответов",
    compareSub: "Запустите один и тот же промпт в каждой ИИ, вставьте (или запустите автоматически) ответы и оцените их рядом. Всё остаётся в вашем браузере.",
    compareEmptyText: "Нет активного сравнения. Сначала сгенерируйте промпты и нажмите «Сравнить ответы». ",
    goGenerator: "К генератору",
    saveCmp: "Сохранить сравнение",
    newVersion: "Новая версия",
    exportMd: "Экспорт .md",
    savedCmps: "Сохранённые сравнения",
    notScored: "Без оценки",
    winner: "Победитель",
    tied: "Ничья",
    tie: "Ничья",
    winnerPrefix: "Победитель:",
    openBtn: "Открыть",
    deleteBtn: "Удалить",
    chainsTitle: "Цепочки",
    chainsSub: "Разбейте сложную цель на связанные шаги: каждый шаг получает свой промпт, а результат одного шага питает следующий. Автозапуск там, где есть бесплатный ключ; в остальных — копипаст.",
    buildChain: "Построить цепочку",
    saveChain: "Сохранить цепочку",
    savedChains: "Сохранённые цепочки",
    promptForStep: "Промпт для этого шага",
    stepOutput: "Результат шага",
    settingsTitle: "Настройки",
    settingsSub: "API-ключи включают автозапуск в Сравнении. Ключи хранятся только в этом браузере и отправляются только выбранному провайдеру — никогда на сервер WhichAI (его нет).",
    saveSettings: "Сохранить настройки",
    prefsReset: "Сбросить запомненные предпочтения",
    footerText: "Работает полностью в вашем браузере: без аккаунта, без сервера, ключи и данные не покидают устройство.",
    dbTitle: "База моделей",
    dbSub: "Все значимые ИИ-модели, которые мы отслеживаем, включая приватные и превью — для информации. Оценочные баллы помечены.",
    dbSearchPh: "Поиск моделей, вендоров, тегов…",
    dbNoResults: "Ничего не найдено.",
    navAbout: "О проекте",
    dbHint: "моделей в базе — начните вводить (частичные имена работают)."
  };

  S.ja = {
    navGenerator: "ジェネレーター",
    navGuide: "モデルガイド",
    navCompare: "比較",
    navChains: "チェーン",
    navSettings: "設定",
    privacyPill: "プライバシー第一",
    privacyTip: "すべてブラウザ内で動作。アカウント不要、サーバーなし、トラッキングなし。APIキーは端末内に保存されます。",
    trustLine: "アカウント不要 · サーバーなし · データはブラウザの外に出ません",
    langNote: "インターフェースは日本語です。注: 生成されるプロンプト、ベンチマークの注記、タスク自動判定は英語向けに最適化されています（どのAIモデルも英語の指示で最高の性能を発揮します）。目標はどの言語で書いてもかまいません — AIはあなたの言語で回答します。",
    genTitle: "目標を記述してください",
    genSubtitle: "WhichAIがそれを各AIモデルに合わせたプロンプトに変換し、どのモデルが最適かをわかりやすく提案します。",
    goalLabel: "目標 ",
    optionalTag: "（任意）",
    tryExample: "例を試す",
    goalPh: "例: フリーランサー向け家計簿アプリのランディングページの見出しとサブ見出しを書いて",
    goalErr: "プロンプトを生成するには目標を記述してください。",
    contextLabel: "コンテキスト ",
    contextPh: "背景、対象読者、制約、例など — AIが知っておくべきこと",
    taskLabel: "タスクの種類",
    formatLabel: "出力形式",
    lengthLabel: "長さ",
    toneLabel: "トーン",
    targetsLabel: "対象モデル",
    groupAssistants: "AIアシスタント",
    groupEco: "エコシステム型アシスタント",
    groupOpen: "オープンモデル ",
    modelsErr: "対象モデルを1つ以上選択してください。",
    generateBtn: "プロンプトを生成",
    emptyLead: "最適化されたプロンプトがここに表示されます — モデルごとに1つ、さらに最適モデルの推薦付き。",
    step1: "目標を記述",
    step2: "各AI向けのプロンプトをコピー",
    step3: "回答を比較して改善",
    resultsTitle: "最適化されたプロンプト",
    toCompareBtn: "出力を比較 →",
    optNone: "指定なし",
    optProse: "通常の文章",
    optMarkdown: "Markdown",
    optBullets: "箇条書き",
    optTable: "表",
    optJson: "JSON",
    optCode: "コード",
    optShort: "短い",
    optMedium: "普通",
    optLong: "長く詳細に",
    optProfessional: "プロフェッショナル",
    optFriendly: "フレンドリー",
    optCasual: "カジュアル",
    optPersuasive: "説得力重視",
    optAcademic: "アカデミック",
    autoDetect: "自動判定",
    detected: "判定結果:",
    task_writing: "文章・コンテンツ",
    task_coding: "コーディング・開発",
    task_analysis: "分析・データ",
    task_research: "リサーチ・要約",
    task_brainstorming: "ブレスト・アイデア",
    task_education: "教育・解説",
    task_business: "ビジネス・マーケティング",
    task_general: "一般 / その他",
    routerTitle: "このタスクに最適なモデルは？",
    bestPick: "ベストチョイス:",
    benchLabel: "ベンチマーク:",
    fullRanking: "全ランキング・無料枠・出典",
    freeTier: "無料枠:",
    sourcesLabel: "出典:",
    whyPrefix: "このプロンプトの設計理由 —",
    copy: "コピー",
    copied: "コピー済み",
    copyPrompt: "プロンプトをコピー",
    guideTitle: "モデルガイド",
    guideSub: "タスクごとに最適なAIアプリ — 公開ベンチマークをわかりやすく翻訳。",
    catalogTitle: "モデルカタログ",
    compareTitle: "出力を比較",
    compareSub: "同じプロンプトを各AIで実行し、回答を貼り付け（または自動実行）して並べて採点。すべてブラウザ内に保存されます。",
    compareEmptyText: "アクティブな比較はありません。まずプロンプトを生成し、「出力を比較」をクリックしてください。 ",
    goGenerator: "ジェネレーターへ",
    saveCmp: "比較を保存",
    newVersion: "新バージョン",
    exportMd: ".mdエクスポート",
    savedCmps: "保存済みの比較",
    notScored: "未採点",
    winner: "勝者",
    tied: "同点",
    tie: "引き分け",
    winnerPrefix: "勝者:",
    openBtn: "開く",
    deleteBtn: "削除",
    chainsTitle: "チェーン",
    chainsSub: "複雑な目標を連結ステップに分解: 各ステップが専用プロンプトを持ち、前の出力が次の入力になります。無料キーがあれば自動実行、なければコピペで。",
    buildChain: "チェーンを作成",
    saveChain: "チェーンを保存",
    savedChains: "保存済みチェーン",
    promptForStep: "このステップのプロンプト",
    stepOutput: "ステップの出力",
    settingsTitle: "設定",
    settingsSub: "APIキーで比較の自動実行が有効になります。キーはこのブラウザにのみ保存され、呼び出すプロバイダーだけに送信されます — WhichAIのサーバーには送信されません（存在しません）。",
    saveSettings: "設定を保存",
    prefsReset: "記憶した設定をリセット",
    footerText: "すべてブラウザ内で動作: アカウント不要、サーバーなし、キーとデータは端末から出ません。",
    dbTitle: "モデルデータベース",
    dbSub: "追跡中の注目AIモデルすべて — 非公開・プレビュー版も情報として掲載。推定スコアには印が付いています。",
    dbSearchPh: "モデル・ベンダー・タグを検索…",
    dbNoResults: "該当するモデルがありません。",
    navAbout: "概要",
    dbHint: "件のモデルを収録 — 入力して検索（部分一致OK）。"
  };

  S.ar = {
    navGenerator: "المولّد",
    navGuide: "دليل النماذج",
    navCompare: "مقارنة",
    navChains: "السلاسل",
    navSettings: "الإعدادات",
    privacyPill: "خصوصية بالتصميم",
    privacyTip: "يعمل بالكامل في متصفحك. بلا حساب، بلا خادم، بلا تتبّع. مفاتيح API تبقى على جهازك.",
    trustLine: "بلا حساب · بلا خادم · لا شيء يغادر متصفحك",
    langNote: "الواجهة بالعربية. ملاحظة: البرومبتات المولّدة وملاحظات المعايير والكشف التلقائي لنوع المهمة مُحسّنة للإنجليزية (كل النماذج تعمل بأفضل أداء مع تعليمات إنجليزية). يمكنك كتابة هدفك بأي لغة — وسيجيب الذكاء الاصطناعي بلغتك.",
    genTitle: "صِف هدفك",
    genSubtitle: "يحوّله WhichAI إلى برومبت مُخصّص لكل نموذج ذكاء اصطناعي — ويخبرك بلغة بسيطة أي نموذج هو الأنسب للمهمة.",
    goalLabel: "الهدف ",
    optionalTag: "(اختياري)",
    tryExample: "جرّب مثالاً",
    goalPh: "مثال: اكتب عنواناً رئيسياً وفرعياً لصفحة هبوط لتطبيق ميزانية موجّه للمستقلين",
    goalErr: "صِف هدفك لتوليد البرومبتات.",
    contextLabel: "السياق ",
    contextPh: "الخلفية، الجمهور، القيود، أمثلة — كل ما يجب أن يعرفه الذكاء الاصطناعي",
    taskLabel: "نوع المهمة",
    formatLabel: "صيغة المخرجات",
    lengthLabel: "الطول",
    toneLabel: "النبرة",
    targetsLabel: "النماذج المستهدفة",
    groupAssistants: "مساعدو الذكاء الاصطناعي",
    groupEco: "مساعدو المنظومات",
    groupOpen: "نماذج مفتوحة ",
    modelsErr: "اختر نموذجاً واحداً على الأقل.",
    generateBtn: "ولّد البرومبتات",
    emptyLead: "ستظهر برومبتاتك المُحسّنة هنا — نسخة لكل نموذج، مع توصية بالنموذج الأنسب لهذه المهمة.",
    step1: "صِف هدفك",
    step2: "انسخ البرومبت المخصص لكل ذكاء اصطناعي",
    step3: "قارن الإجابات وحسّن",
    resultsTitle: "برومبتات محسّنة",
    toCompareBtn: "قارن المخرجات ←",
    optNone: "بلا تفضيل",
    optProse: "نص عادي",
    optMarkdown: "Markdown",
    optBullets: "نقاط",
    optTable: "جدول",
    optJson: "JSON",
    optCode: "كود",
    optShort: "قصير",
    optMedium: "متوسط",
    optLong: "طويل ومفصّل",
    optProfessional: "مهني",
    optFriendly: "ودّي",
    optCasual: "غير رسمي",
    optPersuasive: "إقناعي",
    optAcademic: "أكاديمي",
    autoDetect: "كشف تلقائي",
    detected: "تم الكشف:",
    task_writing: "كتابة ومحتوى",
    task_coding: "برمجة وتطوير",
    task_analysis: "تحليل وبيانات",
    task_research: "بحث وتلخيص",
    task_brainstorming: "عصف ذهني وأفكار",
    task_education: "تعليم وشرح",
    task_business: "أعمال وتسويق",
    task_general: "عام / أخرى",
    routerTitle: "أي نموذج لهذه المهمة؟",
    bestPick: "الخيار الأفضل:",
    benchLabel: "المعايير:",
    fullRanking: "الترتيب الكامل والفئات المجانية والمصادر",
    freeTier: "الفئة المجانية:",
    sourcesLabel: "المصادر:",
    whyPrefix: "لماذا بُني هذا البرومبت هكذا لـ",
    copy: "نسخ",
    copied: "تم النسخ",
    copyPrompt: "انسخ البرومبت",
    guideTitle: "دليل النماذج",
    guideSub: "أي تطبيق ذكاء اصطناعي يناسب كل نوع مهمة — معايير عامة مترجمة بلغة بسيطة.",
    catalogTitle: "كتالوج النماذج",
    compareTitle: "قارن المخرجات",
    compareSub: "شغّل البرومبت المُحسّن نفسه في كل تطبيق، الصق الإجابات (أو شغّلها تلقائياً) وقيّمها جنباً إلى جنب. كل شيء يبقى في متصفحك.",
    compareEmptyText: "لا توجد مقارنة نشطة. ولّد البرومبتات أولاً ثم اضغط «قارن المخرجات». ",
    goGenerator: "إلى المولّد",
    saveCmp: "احفظ المقارنة",
    newVersion: "نسخة جديدة",
    exportMd: "تصدير .md",
    savedCmps: "مقارنات محفوظة",
    notScored: "بدون تقييم",
    winner: "الفائز",
    tied: "تعادل",
    tie: "تعادل",
    winnerPrefix: "الفائز:",
    openBtn: "افتح",
    deleteBtn: "احذف",
    chainsTitle: "السلاسل",
    chainsSub: "قسّم هدفاً معقداً إلى خطوات مترابطة: لكل خطوة برومبت خاص، ومخرجات كل خطوة تغذّي التالية. تشغيل تلقائي حيث لديك مفتاح مجاني؛ ونسخ ولصق في الباقي.",
    buildChain: "ابنِ السلسلة",
    saveChain: "احفظ السلسلة",
    savedChains: "سلاسل محفوظة",
    promptForStep: "برومبت هذه الخطوة",
    stepOutput: "مخرجات الخطوة",
    settingsTitle: "الإعدادات",
    settingsSub: "مفاتيح API تتيح التشغيل التلقائي في المقارنة. تُحفظ المفاتيح في هذا المتصفح فقط وتُرسل فقط إلى المزوّد الذي تستدعيه — أبداً إلى خادم WhichAI (لا يوجد أصلاً).",
    saveSettings: "احفظ الإعدادات",
    prefsReset: "إعادة ضبط التفضيلات المحفوظة",
    footerText: "يعمل بالكامل في متصفحك: بلا حساب، بلا خادم، مفاتيحك وبياناتك لا تغادر جهازك.",
    dbTitle: "قاعدة النماذج",
    dbSub: "كل نموذج ذكاء اصطناعي مهم نتتبعه — بما في ذلك الخاصة والتجريبية، للمعلومة. الدرجات التقديرية مُعلّمة.",
    dbSearchPh: "ابحث في النماذج والشركات والوسوم…",
    dbNoResults: "لا نماذج تطابق بحثك.",
    navAbout: "حول",
    dbHint: "نموذجاً في القاعدة — ابدأ الكتابة للبحث (الأسماء الجزئية تعمل)."
  };

  S.en.navAbout = "About"; S.en.dbHint = "models tracked — start typing to search (partial names work).";
  S.it.navAbout = "Info"; S.it.dbHint = "modelli censiti — inizia a digitare per cercare (valgono anche nomi parziali).";
  S.fr.navAbout = "À propos"; S.fr.dbHint = "modèles suivis — tapez pour rechercher (noms partiels acceptés).";
  S.es.navAbout = "Acerca de"; S.es.dbHint = "modelos registrados — escribe para buscar (valen nombres parciales).";
  S.de.navAbout = "Über"; S.de.dbHint = "Modelle erfasst — tippe, um zu suchen (Teilnamen genügen).";
  S.pt.navAbout = "Sobre"; S.pt.dbHint = "modelos registrados — digite para buscar (nomes parciais funcionam).";
  S.zh.navAbout = "关于"; S.zh.dbHint = "个模型已收录——输入即可搜索（支持部分名称）。";
  S.hi.navAbout = "परिचय"; S.hi.dbHint = "मॉडल दर्ज हैं — खोजने के लिए टाइप करें (आंशिक नाम भी चलेंगे)।";


  /* ---------- v0.21: settings tests, AI refine, merge studio, themes ---------- */

  S.en.setGuideTitle = "How to get free API keys";
  S.en.setTestBtn = "Test key";
  S.en.setTesting = "Testing…";
  S.en.setKeyOk = "Key works";
  S.en.setKeyFail = "Key check failed:";
  S.en.setKeyMissing = "Paste a key first";
  S.en.themeTip = "Theme: light → dark → sepia";
  S.en.refineBtn = "Refine with AI";
  S.en.refineHint = "Uses your free API key to make the goal clearer and more complete — you review before applying.";
  S.en.refineApply = "Use this version";
  S.en.refineDiscard = "Keep mine";
  S.en.refineNeedKey = "Add a free API key in Settings first (Gemini, Groq or OpenRouter).";
  S.en.refineWorking = "Refining…";
  S.en.refineErr = "Could not refine:";
  S.en.refineLabel = "Suggested goal (editable):";
  S.en.mergeOpenBtn = "Merge studio →";
  S.en.mergeTitle = "Merge studio";
  S.en.mergeSub = "Read every answer side by side and hand-pick the best parts into one final draft. Nothing is automatic — you stay the editor.";
  S.en.mergeBase = "Use as base";
  S.en.mergeAddSel = "Add selection";
  S.en.mergeAddAll = "Append all";
  S.en.mergeHighlight = "Highlight sentences shared by 2+ models";
  S.en.mergeDraftLabel = "Your merged draft";
  S.en.mergeDraftPh = "Pick a base output or add selections from the sources…";
  S.en.mergeCopy = "Copy draft";
  S.en.mergeClear = "Clear";
  S.en.mergeWords = "words";
  S.en.mergeEmpty = "No outputs yet — run or paste answers in Compare first.";
  S.en.mergeBack = "← Back to Compare";
  S.en.mergeAddSource = "Add another output";
  S.en.mergeSourceName = "Label (e.g. GPT-5.6)";
  S.en.mergeSourcePh = "Paste an output you got elsewhere…";
  S.en.mergeSourceAdd = "Add source";

  S.it.setGuideTitle = "Come ottenere chiavi API gratuite";
  S.it.setTestBtn = "Prova chiave";
  S.it.setTesting = "Verifica…";
  S.it.setKeyOk = "La chiave funziona";
  S.it.setKeyFail = "Verifica fallita:";
  S.it.setKeyMissing = "Prima incolla una chiave";
  S.it.themeTip = "Tema: chiaro → scuro → seppia";
  S.it.refineBtn = "Rifinisci con l'AI";
  S.it.refineHint = "Usa la tua chiave API gratuita per rendere l'obiettivo più chiaro e completo — lo rivedi prima di applicarlo.";
  S.it.refineApply = "Usa questa versione";
  S.it.refineDiscard = "Tieni il mio";
  S.it.refineNeedKey = "Aggiungi prima una chiave API gratuita nelle Impostazioni (Gemini, Groq o OpenRouter).";
  S.it.refineWorking = "Rifinitura…";
  S.it.refineErr = "Rifinitura non riuscita:";
  S.it.refineLabel = "Obiettivo suggerito (modificabile):";
  S.it.mergeOpenBtn = "Merge studio →";
  S.it.mergeTitle = "Merge studio";
  S.it.mergeSub = "Leggi tutte le risposte fianco a fianco e scegli a mano le parti migliori per un'unica bozza finale. Niente è automatico: l'editor sei tu.";
  S.it.mergeBase = "Usa come base";
  S.it.mergeAddSel = "Aggiungi selezione";
  S.it.mergeAddAll = "Aggiungi tutto";
  S.it.mergeHighlight = "Evidenzia frasi comuni a 2+ modelli";
  S.it.mergeDraftLabel = "La tua bozza unificata";
  S.it.mergeDraftPh = "Scegli una base o aggiungi selezioni dalle fonti…";
  S.it.mergeCopy = "Copia bozza";
  S.it.mergeClear = "Svuota";
  S.it.mergeWords = "parole";
  S.it.mergeEmpty = "Nessun output — esegui o incolla le risposte in Confronta prima.";
  S.it.mergeBack = "← Torna a Confronta";
  S.it.mergeAddSource = "Aggiungi un altro output";
  S.it.mergeSourceName = "Etichetta (es. GPT-5.6)";
  S.it.mergeSourcePh = "Incolla un output ottenuto altrove…";
  S.it.mergeSourceAdd = "Aggiungi fonte";

  S.fr.setGuideTitle = "Comment obtenir des clés API gratuites";
  S.fr.setTestBtn = "Tester la clé";
  S.fr.setTesting = "Vérification…";
  S.fr.setKeyOk = "La clé fonctionne";
  S.fr.setKeyFail = "Échec de la vérification :";
  S.fr.setKeyMissing = "Collez d'abord une clé";
  S.fr.themeTip = "Thème : clair → sombre → sépia";
  S.fr.refineBtn = "Affiner avec l'IA";
  S.fr.refineHint = "Utilise votre clé API gratuite pour clarifier et compléter l'objectif — vous validez avant d'appliquer.";
  S.fr.refineApply = "Utiliser cette version";
  S.fr.refineDiscard = "Garder le mien";
  S.fr.refineNeedKey = "Ajoutez d'abord une clé API gratuite dans les Réglages (Gemini, Groq ou OpenRouter).";
  S.fr.refineWorking = "Affinage…";
  S.fr.refineErr = "Affinage impossible :";
  S.fr.refineLabel = "Objectif suggéré (modifiable) :";
  S.fr.mergeOpenBtn = "Studio de fusion →";
  S.fr.mergeTitle = "Studio de fusion";
  S.fr.mergeSub = "Lisez toutes les réponses côte à côte et composez à la main la meilleure version finale. Rien n'est automatique : l'éditeur, c'est vous.";
  S.fr.mergeBase = "Utiliser comme base";
  S.fr.mergeAddSel = "Ajouter la sélection";
  S.fr.mergeAddAll = "Tout ajouter";
  S.fr.mergeHighlight = "Surligner les phrases communes à 2+ modèles";
  S.fr.mergeDraftLabel = "Votre brouillon fusionné";
  S.fr.mergeDraftPh = "Choisissez une base ou ajoutez des sélections depuis les sources…";
  S.fr.mergeCopy = "Copier le brouillon";
  S.fr.mergeClear = "Vider";
  S.fr.mergeWords = "mots";
  S.fr.mergeEmpty = "Aucune sortie — exécutez ou collez d'abord des réponses dans Comparer.";
  S.fr.mergeBack = "← Retour à Comparer";
  S.fr.mergeAddSource = "Ajouter une autre sortie";
  S.fr.mergeSourceName = "Étiquette (ex. GPT-5.6)";
  S.fr.mergeSourcePh = "Collez une sortie obtenue ailleurs…";
  S.fr.mergeSourceAdd = "Ajouter la source";

  S.es.setGuideTitle = "Cómo obtener claves API gratis";
  S.es.setTestBtn = "Probar clave";
  S.es.setTesting = "Comprobando…";
  S.es.setKeyOk = "La clave funciona";
  S.es.setKeyFail = "Comprobación fallida:";
  S.es.setKeyMissing = "Pega primero una clave";
  S.es.themeTip = "Tema: claro → oscuro → sepia";
  S.es.refineBtn = "Refinar con IA";
  S.es.refineHint = "Usa tu clave API gratuita para hacer el objetivo más claro y completo — lo revisas antes de aplicarlo.";
  S.es.refineApply = "Usar esta versión";
  S.es.refineDiscard = "Mantener el mío";
  S.es.refineNeedKey = "Añade primero una clave API gratuita en Ajustes (Gemini, Groq u OpenRouter).";
  S.es.refineWorking = "Refinando…";
  S.es.refineErr = "No se pudo refinar:";
  S.es.refineLabel = "Objetivo sugerido (editable):";
  S.es.mergeOpenBtn = "Estudio de fusión →";
  S.es.mergeTitle = "Estudio de fusión";
  S.es.mergeSub = "Lee todas las respuestas lado a lado y elige a mano lo mejor para un borrador final. Nada es automático: el editor eres tú.";
  S.es.mergeBase = "Usar como base";
  S.es.mergeAddSel = "Añadir selección";
  S.es.mergeAddAll = "Añadir todo";
  S.es.mergeHighlight = "Resaltar frases comunes a 2+ modelos";
  S.es.mergeDraftLabel = "Tu borrador fusionado";
  S.es.mergeDraftPh = "Elige una base o añade selecciones desde las fuentes…";
  S.es.mergeCopy = "Copiar borrador";
  S.es.mergeClear = "Vaciar";
  S.es.mergeWords = "palabras";
  S.es.mergeEmpty = "Sin salidas — ejecuta o pega respuestas en Comparar primero.";
  S.es.mergeBack = "← Volver a Comparar";
  S.es.mergeAddSource = "Añadir otra salida";
  S.es.mergeSourceName = "Etiqueta (p. ej. GPT-5.6)";
  S.es.mergeSourcePh = "Pega una salida obtenida en otro sitio…";
  S.es.mergeSourceAdd = "Añadir fuente";

  S.de.setGuideTitle = "So bekommst du kostenlose API-Schlüssel";
  S.de.setTestBtn = "Schlüssel testen";
  S.de.setTesting = "Prüfe…";
  S.de.setKeyOk = "Schlüssel funktioniert";
  S.de.setKeyFail = "Prüfung fehlgeschlagen:";
  S.de.setKeyMissing = "Zuerst einen Schlüssel einfügen";
  S.de.themeTip = "Design: hell → dunkel → sepia";
  S.de.refineBtn = "Mit KI verfeinern";
  S.de.refineHint = "Nutzt deinen kostenlosen API-Schlüssel, um das Ziel klarer und vollständiger zu machen — du prüfst vor dem Übernehmen.";
  S.de.refineApply = "Diese Version verwenden";
  S.de.refineDiscard = "Meins behalten";
  S.de.refineNeedKey = "Füge zuerst einen kostenlosen API-Schlüssel in den Einstellungen hinzu (Gemini, Groq oder OpenRouter).";
  S.de.refineWorking = "Verfeinere…";
  S.de.refineErr = "Verfeinern fehlgeschlagen:";
  S.de.refineLabel = "Vorgeschlagenes Ziel (bearbeitbar):";
  S.de.mergeOpenBtn = "Merge-Studio →";
  S.de.mergeTitle = "Merge-Studio";
  S.de.mergeSub = "Lies alle Antworten nebeneinander und stelle die besten Teile von Hand zu einem finalen Entwurf zusammen. Nichts ist automatisch — du bleibst der Redakteur.";
  S.de.mergeBase = "Als Basis verwenden";
  S.de.mergeAddSel = "Auswahl hinzufügen";
  S.de.mergeAddAll = "Alles anhängen";
  S.de.mergeHighlight = "Sätze markieren, die 2+ Modelle teilen";
  S.de.mergeDraftLabel = "Dein zusammengeführter Entwurf";
  S.de.mergeDraftPh = "Wähle eine Basis oder füge Auswahlen aus den Quellen hinzu…";
  S.de.mergeCopy = "Entwurf kopieren";
  S.de.mergeClear = "Leeren";
  S.de.mergeWords = "Wörter";
  S.de.mergeEmpty = "Noch keine Ausgaben — führe erst Antworten in Vergleichen aus oder füge sie ein.";
  S.de.mergeBack = "← Zurück zu Vergleichen";
  S.de.mergeAddSource = "Weitere Ausgabe hinzufügen";
  S.de.mergeSourceName = "Bezeichnung (z. B. GPT-5.6)";
  S.de.mergeSourcePh = "Füge eine anderswo erhaltene Ausgabe ein…";
  S.de.mergeSourceAdd = "Quelle hinzufügen";

  S.pt.setGuideTitle = "Como obter chaves de API gratuitas";
  S.pt.setTestBtn = "Testar chave";
  S.pt.setTesting = "Verificando…";
  S.pt.setKeyOk = "A chave funciona";
  S.pt.setKeyFail = "Falha na verificação:";
  S.pt.setKeyMissing = "Cole uma chave primeiro";
  S.pt.themeTip = "Tema: claro → escuro → sépia";
  S.pt.refineBtn = "Refinar com IA";
  S.pt.refineHint = "Usa sua chave de API gratuita para tornar o objetivo mais claro e completo — você revisa antes de aplicar.";
  S.pt.refineApply = "Usar esta versão";
  S.pt.refineDiscard = "Manter o meu";
  S.pt.refineNeedKey = "Adicione primeiro uma chave de API gratuita em Configurações (Gemini, Groq ou OpenRouter).";
  S.pt.refineWorking = "Refinando…";
  S.pt.refineErr = "Não foi possível refinar:";
  S.pt.refineLabel = "Objetivo sugerido (editável):";
  S.pt.mergeOpenBtn = "Estúdio de fusão →";
  S.pt.mergeTitle = "Estúdio de fusão";
  S.pt.mergeSub = "Leia todas as respostas lado a lado e escolha a dedo as melhores partes para um rascunho final. Nada é automático — o editor é você.";
  S.pt.mergeBase = "Usar como base";
  S.pt.mergeAddSel = "Adicionar seleção";
  S.pt.mergeAddAll = "Anexar tudo";
  S.pt.mergeHighlight = "Destacar frases comuns a 2+ modelos";
  S.pt.mergeDraftLabel = "Seu rascunho unificado";
  S.pt.mergeDraftPh = "Escolha uma base ou adicione seleções das fontes…";
  S.pt.mergeCopy = "Copiar rascunho";
  S.pt.mergeClear = "Limpar";
  S.pt.mergeWords = "palavras";
  S.pt.mergeEmpty = "Sem saídas — execute ou cole respostas em Comparar primeiro.";
  S.pt.mergeBack = "← Voltar a Comparar";
  S.pt.mergeAddSource = "Adicionar outra saída";
  S.pt.mergeSourceName = "Rótulo (ex.: GPT-5.6)";
  S.pt.mergeSourcePh = "Cole uma saída obtida em outro lugar…";
  S.pt.mergeSourceAdd = "Adicionar fonte";

  S.zh.setGuideTitle = "如何获取免费 API 密钥";
  S.zh.setTestBtn = "测试密钥";
  S.zh.setTesting = "正在检测…";
  S.zh.setKeyOk = "密钥可用";
  S.zh.setKeyFail = "检测失败：";
  S.zh.setKeyMissing = "请先粘贴密钥";
  S.zh.themeTip = "主题：浅色 → 深色 → 棕褐";
  S.zh.refineBtn = "用 AI 优化";
  S.zh.refineHint = "使用你的免费 API 密钥，让目标更清晰完整——应用前由你审核。";
  S.zh.refineApply = "使用此版本";
  S.zh.refineDiscard = "保留我的";
  S.zh.refineNeedKey = "请先在设置中添加免费 API 密钥（Gemini、Groq 或 OpenRouter）。";
  S.zh.refineWorking = "优化中…";
  S.zh.refineErr = "优化失败：";
  S.zh.refineLabel = "建议的目标（可编辑）：";
  S.zh.mergeOpenBtn = "合并工作台 →";
  S.zh.mergeTitle = "合并工作台";
  S.zh.mergeSub = "并排阅读所有回答，手动挑选最佳部分，合成最终草稿。没有任何自动操作——编辑权在你。";
  S.zh.mergeBase = "设为底稿";
  S.zh.mergeAddSel = "添加所选";
  S.zh.mergeAddAll = "全部追加";
  S.zh.mergeHighlight = "高亮 2 个以上模型共有的句子";
  S.zh.mergeDraftLabel = "你的合并草稿";
  S.zh.mergeDraftPh = "选择一个底稿，或从来源中添加所选内容…";
  S.zh.mergeCopy = "复制草稿";
  S.zh.mergeClear = "清空";
  S.zh.mergeWords = "词";
  S.zh.mergeEmpty = "还没有输出——请先在对比页运行或粘贴回答。";
  S.zh.mergeBack = "← 返回对比";
  S.zh.mergeAddSource = "添加其他输出";
  S.zh.mergeSourceName = "标签（如 GPT-5.6）";
  S.zh.mergeSourcePh = "粘贴你在别处获得的输出…";
  S.zh.mergeSourceAdd = "添加来源";

  S.hi.setGuideTitle = "मुफ़्त API कुंजियाँ कैसे पाएँ";
  S.hi.setTestBtn = "कुंजी जाँचें";
  S.hi.setTesting = "जाँच हो रही है…";
  S.hi.setKeyOk = "कुंजी काम करती है";
  S.hi.setKeyFail = "जाँच विफल:";
  S.hi.setKeyMissing = "पहले कुंजी चिपकाएँ";
  S.hi.themeTip = "थीम: हल्की → गहरी → सीपिया";
  S.hi.refineBtn = "AI से निखारें";
  S.hi.refineHint = "आपकी मुफ़्त API कुंजी से लक्ष्य को स्पष्ट और पूर्ण बनाता है — लागू करने से पहले आप समीक्षा करते हैं।";
  S.hi.refineApply = "यह संस्करण उपयोग करें";
  S.hi.refineDiscard = "मेरा ही रखें";
  S.hi.refineNeedKey = "पहले सेटिंग्स में एक मुफ़्त API कुंजी जोड़ें (Gemini, Groq या OpenRouter)।";
  S.hi.refineWorking = "निखार जारी…";
  S.hi.refineErr = "निखार विफल:";
  S.hi.refineLabel = "सुझाया गया लक्ष्य (संपादन योग्य):";
  S.hi.mergeOpenBtn = "मर्ज स्टूडियो →";
  S.hi.mergeTitle = "मर्ज स्टूडियो";
  S.hi.mergeSub = "सभी उत्तर साथ-साथ पढ़ें और सर्वश्रेष्ठ हिस्से चुनकर एक अंतिम मसौदा बनाएँ। कुछ भी स्वचालित नहीं — संपादक आप हैं।";
  S.hi.mergeBase = "आधार बनाएँ";
  S.hi.mergeAddSel = "चयन जोड़ें";
  S.hi.mergeAddAll = "सब जोड़ें";
  S.hi.mergeHighlight = "2+ मॉडलों में साझा वाक्य हाइलाइट करें";
  S.hi.mergeDraftLabel = "आपका मर्ज किया मसौदा";
  S.hi.mergeDraftPh = "एक आधार चुनें या स्रोतों से चयन जोड़ें…";
  S.hi.mergeCopy = "मसौदा कॉपी करें";
  S.hi.mergeClear = "खाली करें";
  S.hi.mergeWords = "शब्द";
  S.hi.mergeEmpty = "अभी कोई आउटपुट नहीं — पहले तुलना में उत्तर चलाएँ या चिपकाएँ।";
  S.hi.mergeBack = "← तुलना पर लौटें";
  S.hi.mergeAddSource = "एक और आउटपुट जोड़ें";
  S.hi.mergeSourceName = "लेबल (जैसे GPT-5.6)";
  S.hi.mergeSourcePh = "कहीं और मिला आउटपुट चिपकाएँ…";
  S.hi.mergeSourceAdd = "स्रोत जोड़ें";

  S.ru.setGuideTitle = "Как получить бесплатные API-ключи";
  S.ru.setTestBtn = "Проверить ключ";
  S.ru.setTesting = "Проверка…";
  S.ru.setKeyOk = "Ключ работает";
  S.ru.setKeyFail = "Проверка не удалась:";
  S.ru.setKeyMissing = "Сначала вставьте ключ";
  S.ru.themeTip = "Тема: светлая → тёмная → сепия";
  S.ru.refineBtn = "Улучшить с ИИ";
  S.ru.refineHint = "Использует ваш бесплатный API-ключ, чтобы сделать цель яснее и полнее — вы проверяете перед применением.";
  S.ru.refineApply = "Использовать эту версию";
  S.ru.refineDiscard = "Оставить мою";
  S.ru.refineNeedKey = "Сначала добавьте бесплатный API-ключ в настройках (Gemini, Groq или OpenRouter).";
  S.ru.refineWorking = "Улучшение…";
  S.ru.refineErr = "Не удалось улучшить:";
  S.ru.refineLabel = "Предложенная цель (можно править):";
  S.ru.mergeOpenBtn = "Студия слияния →";
  S.ru.mergeTitle = "Студия слияния";
  S.ru.mergeSub = "Читайте все ответы рядом и вручную собирайте лучшее в один финальный черновик. Ничего автоматического — редактор здесь вы.";
  S.ru.mergeBase = "Взять за основу";
  S.ru.mergeAddSel = "Добавить выделенное";
  S.ru.mergeAddAll = "Добавить всё";
  S.ru.mergeHighlight = "Подсветить фразы, общие для 2+ моделей";
  S.ru.mergeDraftLabel = "Ваш объединённый черновик";
  S.ru.mergeDraftPh = "Выберите основу или добавляйте выделенное из источников…";
  S.ru.mergeCopy = "Копировать черновик";
  S.ru.mergeClear = "Очистить";
  S.ru.mergeWords = "слов";
  S.ru.mergeEmpty = "Пока нет ответов — сначала запустите или вставьте их в «Сравнить».";
  S.ru.mergeBack = "← Назад к сравнению";
  S.ru.mergeAddSource = "Добавить ещё один ответ";
  S.ru.mergeSourceName = "Метка (напр. GPT-5.6)";
  S.ru.mergeSourcePh = "Вставьте ответ, полученный в другом месте…";
  S.ru.mergeSourceAdd = "Добавить источник";

  S.ja.setGuideTitle = "無料APIキーの入手方法";
  S.ja.setTestBtn = "キーをテスト";
  S.ja.setTesting = "確認中…";
  S.ja.setKeyOk = "キーは有効です";
  S.ja.setKeyFail = "確認に失敗：";
  S.ja.setKeyMissing = "先にキーを貼り付けてください";
  S.ja.themeTip = "テーマ：ライト → ダーク → セピア";
  S.ja.refineBtn = "AIで磨き上げる";
  S.ja.refineHint = "無料のAPIキーを使って目標をより明確で完全にします。適用前にあなたが確認します。";
  S.ja.refineApply = "この案を使う";
  S.ja.refineDiscard = "自分の案を残す";
  S.ja.refineNeedKey = "先に設定で無料APIキーを追加してください（Gemini、Groq、OpenRouter）。";
  S.ja.refineWorking = "調整中…";
  S.ja.refineErr = "調整できませんでした：";
  S.ja.refineLabel = "提案された目標（編集可）：";
  S.ja.mergeOpenBtn = "マージスタジオ →";
  S.ja.mergeTitle = "マージスタジオ";
  S.ja.mergeSub = "すべての回答を並べて読み、良い部分を手作業で選んで最終ドラフトに。自動処理は一切なし。編集者はあなたです。";
  S.ja.mergeBase = "ベースにする";
  S.ja.mergeAddSel = "選択部分を追加";
  S.ja.mergeAddAll = "全文を追加";
  S.ja.mergeHighlight = "2つ以上のモデルに共通する文をハイライト";
  S.ja.mergeDraftLabel = "統合ドラフト";
  S.ja.mergeDraftPh = "ベースを選ぶか、ソースから選択部分を追加…";
  S.ja.mergeCopy = "ドラフトをコピー";
  S.ja.mergeClear = "クリア";
  S.ja.mergeWords = "語";
  S.ja.mergeEmpty = "まだ出力がありません。先に比較で回答を実行または貼り付けてください。";
  S.ja.mergeBack = "← 比較に戻る";
  S.ja.mergeAddSource = "別の出力を追加";
  S.ja.mergeSourceName = "ラベル（例：GPT-5.6）";
  S.ja.mergeSourcePh = "他所で得た出力を貼り付け…";
  S.ja.mergeSourceAdd = "ソースを追加";

  S.ar.setGuideTitle = "كيفية الحصول على مفاتيح API مجانية";
  S.ar.setTestBtn = "اختبار المفتاح";
  S.ar.setTesting = "جارٍ الفحص…";
  S.ar.setKeyOk = "المفتاح يعمل";
  S.ar.setKeyFail = "فشل الفحص:";
  S.ar.setKeyMissing = "الصق مفتاحًا أولًا";
  S.ar.themeTip = "السمة: فاتح → داكن → بُنّي";
  S.ar.refineBtn = "تحسين بالذكاء الاصطناعي";
  S.ar.refineHint = "يستخدم مفتاح API المجاني الخاص بك لجعل الهدف أوضح وأكمل — أنت تراجع قبل التطبيق.";
  S.ar.refineApply = "استخدم هذه النسخة";
  S.ar.refineDiscard = "احتفظ بنسختي";
  S.ar.refineNeedKey = "أضف أولًا مفتاح API مجانيًا في الإعدادات (Gemini أو Groq أو OpenRouter).";
  S.ar.refineWorking = "جارٍ التحسين…";
  S.ar.refineErr = "تعذّر التحسين:";
  S.ar.refineLabel = "الهدف المقترح (قابل للتعديل):";
  S.ar.mergeOpenBtn = "استوديو الدمج ←";
  S.ar.mergeTitle = "استوديو الدمج";
  S.ar.mergeSub = "اقرأ كل الإجابات جنبًا إلى جنب واختر يدويًا أفضل الأجزاء في مسودة نهائية واحدة. لا شيء تلقائي — أنت المحرر.";
  S.ar.mergeBase = "اجعله الأساس";
  S.ar.mergeAddSel = "أضف التحديد";
  S.ar.mergeAddAll = "أضف الكل";
  S.ar.mergeHighlight = "إبراز الجمل المشتركة بين نموذجين أو أكثر";
  S.ar.mergeDraftLabel = "مسودتك المدمجة";
  S.ar.mergeDraftPh = "اختر أساسًا أو أضف تحديدات من المصادر…";
  S.ar.mergeCopy = "انسخ المسودة";
  S.ar.mergeClear = "مسح";
  S.ar.mergeWords = "كلمات";
  S.ar.mergeEmpty = "لا مخرجات بعد — شغّل أو الصق الإجابات في «قارن» أولًا.";
  S.ar.mergeBack = "← الرجوع إلى المقارنة";
  S.ar.mergeAddSource = "أضف مخرجًا آخر";
  S.ar.mergeSourceName = "تسمية (مثل GPT-5.6)";
  S.ar.mergeSourcePh = "الصق مخرجًا حصلت عليه في مكان آخر…";
  S.ar.mergeSourceAdd = "أضف المصدر";

  var I18n = {
    LANGS: LANGS,
    STRINGS: S,
    t: function (lang, key) {
      var d = S[lang] || S.en;
      return d[key] !== undefined && d[key] !== "" ? d[key] : S.en[key];
    }
  };

  var root = typeof window !== "undefined" ? window : globalThis;
  root.PromptCompassI18n = I18n;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = I18n;
  }
})();
