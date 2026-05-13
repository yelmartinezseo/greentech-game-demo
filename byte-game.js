// ════════════════════════════════════════════════════════════════════════════
// BYTE 404 Game — Greentech.game() v4.2
// © 2025 Yel Martínez · yel-martinez-portfolio.com
// GPL v2 — Se requiere atribución en derivaciones.
// ════════════════════════════════════════════════════════════════════════════
(function () {
'use strict';

// ── BYTE SVG ─────────────────────────────────────────────────────────────────
function byteSVG(size) {
  size = size || 80; var h = Math.round(size * 1.3);
  return '<svg width="'+size+'" height="'+h+'" viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg">'
    +'<line x1="50" y1="5" x2="50" y2="18" stroke="#ffe600" stroke-width="2.5" stroke-linecap="round"/>'
    +'<circle cx="50" cy="4" r="5" fill="#ffe600" stroke="#1a1830" stroke-width="1.8"><animate attributeName="opacity" values="1;0.1;1" dur="1.8s" repeatCount="indefinite"/></circle>'
    +'<path d="M22 34 Q10 26 12 46 Q10 64 20 72 Q24 75 28 72 L28 36Z" fill="#1a1830"/>'
    +'<path d="M78 34 Q90 26 88 46 Q90 64 80 72 Q76 75 72 72 L72 36Z" fill="#1a1830"/>'
    +'<path d="M22 36 Q28 12 50 10 Q72 12 78 36 L72 36 Q66 16 50 14 Q34 16 28 36Z" fill="#1a1830"/>'
    +'<ellipse cx="10" cy="8" rx="9" ry="6" fill="#ffe600" stroke="#1a1830" stroke-width="1.8" transform="rotate(-30 10 8)"/>'
    +'<circle cx="10" cy="8" r="2.8" fill="#1a1830"/>'
    +'<ellipse cx="90" cy="8" rx="9" ry="6" fill="#ffe600" stroke="#1a1830" stroke-width="1.8" transform="rotate(30 90 8)"/>'
    +'<circle cx="90" cy="8" r="2.8" fill="#1a1830"/>'
    +'<rect x="20" y="20" width="60" height="60" rx="18" fill="#fff" stroke="#1a1830" stroke-width="2"/>'
    +'<path d="M30 34 Q24 22 32 16 Q40 10 42 20 Q44 28 38 32 Q32 36 32 42 Q32 47 38 47" stroke="#1a1830" stroke-width="6" fill="none" stroke-linecap="round"/>'
    +'<ellipse cx="24" cy="52" rx="9" ry="6" fill="#ffb3c6" opacity=".8"/>'
    +'<ellipse cx="76" cy="52" rx="9" ry="6" fill="#ffb3c6" opacity=".8"/>'
    +'<ellipse cx="39" cy="40" rx="8" ry="9" fill="#fff" stroke="#1a1830" stroke-width="1.5"/>'
    +'<ellipse cx="39" cy="41" rx="5.5" ry="6.5" fill="#1a1830"/>'
    +'<ellipse cx="39" cy="41" rx="2.8" ry="3.2" fill="#ffe600"/>'
    +'<ellipse cx="39" cy="41" rx="1.4" ry="1.6" fill="#1a1830"/>'
    +'<circle cx="36" cy="38" r="1.6" fill="#fff"/>'
    +'<ellipse cx="61" cy="40" rx="8" ry="9" fill="#fff" stroke="#1a1830" stroke-width="1.5"/>'
    +'<ellipse cx="61" cy="41" rx="5.5" ry="6.5" fill="#1a1830"/>'
    +'<ellipse cx="61" cy="41" rx="2.8" ry="3.2" fill="#ffe600"/>'
    +'<ellipse cx="61" cy="41" rx="1.4" ry="1.6" fill="#1a1830"/>'
    +'<circle cx="58" cy="38" r="1.6" fill="#fff"/>'
    +'<circle cx="50" cy="54" r="2" fill="#ffb3c6"/>'
    +'<path d="M43 62 Q50 66 57 61" stroke="#ff9eb5" stroke-width="2.5" fill="none" stroke-linecap="round"/>'
    +'<rect x="38" y="79" width="14" height="10" rx="5" fill="#1a1830"/>'
    +'<circle cx="42" cy="84" r="2" fill="#ffe600"/><circle cx="48" cy="84" r="2" fill="#ffe600"/>'
    +'<path d="M24 90 Q22 107 23 118 Q25 124 32 124 L68 124 Q75 124 77 118 Q78 107 76 90 Q70 86 50 85 Q30 86 24 90Z" fill="#1a1830"/>'
    +'<rect x="32" y="94" width="26" height="20" rx="8" fill="#ffe600"/>'
    +'<circle cx="55" cy="104" r="3" fill="#1a1830"><animate attributeName="fill" values="#1a1830;#00ff88;#1a1830" dur="2.2s" repeatCount="indefinite"/></circle>'
    +'<path d="M23 116 Q16 126 18 130 L82 130 Q84 126 77 116Z" fill="#1a1830"/>'
    +'<path d="M23 94 Q12 100 10 114 Q8 122 14 124 Q18 124 20 118 L24 102Z" fill="#1a1830"/>'
    +'<ellipse cx="13" cy="126" rx="8" ry="7" fill="#ffe600" stroke="#1a1830" stroke-width="1.5"/>'
    +'<path d="M77 94 Q88 100 90 114 Q92 122 86 124 Q82 124 80 118 L76 102Z" fill="#1a1830"/>'
    +'<ellipse cx="87" cy="126" rx="8" ry="7" fill="#ffe600" stroke="#1a1830" stroke-width="1.5"/>'
    +'</svg>';
}

// ── ICONOS SVG ────────────────────────────────────────────────────────────────
var ICO = {
  lib:    '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="6" width="7" height="28" rx="2" fill="currentColor"/><rect x="13" y="10" width="7" height="24" rx="2" fill="currentColor" opacity=".7"/><rect x="22" y="4" width="7" height="30" rx="2" fill="currentColor"/><rect x="31" y="12" width="5" height="22" rx="2" fill="currentColor" opacity=".5"/><line x1="4" y1="36" x2="36" y2="36" stroke="currentColor" stroke-width="2.5"/></svg>',
  runner: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="28" cy="8" r="5" fill="currentColor"/><path d="M24 14 L18 26 L12 36" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M24 14 L30 22 L36 30" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M18 20 L10 23" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><rect x="2" y="36" width="36" height="3" rx="1.5" fill="currentColor" opacity=".5"/></svg>',
  tools:  '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="3" y="8" width="14" height="10" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="23" y="8" width="14" height="10" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="3" y="22" width="14" height="10" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="23" y="22" width="14" height="10" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="17" y1="13" x2="23" y2="13" stroke="currentColor" stroke-width="2" stroke-dasharray="2 2"/><line x1="17" y1="27" x2="23" y2="27" stroke="currentColor" stroke-width="2" stroke-dasharray="2 2"/></svg>',
  vf:     '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="4" width="32" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M11 20 L17 26 L29 13" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  audit:  '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="5" y="3" width="20" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="10" y1="10" x2="20" y2="10" stroke="currentColor" stroke-width="2"/><line x1="10" y1="15" x2="20" y2="15" stroke="currentColor" stroke-width="2"/><line x1="10" y1="20" x2="16" y2="20" stroke="currentColor" stroke-width="2"/><circle cx="29" cy="30" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="34.5" y1="35.5" x2="38" y2="39" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="29" cy="30" r="3.5" fill="currentColor"/></svg>',
};

// ── SUITE ESG ─────────────────────────────────────────────────────────────────
var SUITE = [
  {ico:'<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 4 L22 14 L33 14 L24 21 L27 32 L18 26 L9 32 L12 21 L3 14 L14 14Z" fill="currentColor"/></svg>',
   color:'#00ff88',
   name:{es:'Calculadora Huella CO₂',en:'Carbon Footprint Calc',ca:'Calculadora Empremta CO₂'},
   desc:{es:'Calcula emisiones Alcance 1, 2 y 3 según modelo SWD v3.',en:'Calculates Scope 1, 2 & 3 emissions using SWD v3 model.',ca:'Calcula emissions Abast 1, 2 i 3 segons model SWD v3.'},
   url:'https://yel-martinez-portfolio.com/herramienta-huella-carbono/'},
  {ico:'<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="8" width="28" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M10 18 L15 13 L20 18 L26 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
   color:'#00f5ff',
   name:{es:'Diagnóstico ESG',en:'ESG Diagnostic',ca:'Diagnòstic ESG'},
   desc:{es:'52 indicadores en 4 dimensiones para detectar gaps normativos.',en:'52 indicators in 4 dimensions to detect regulatory gaps.',ca:'52 indicadors en 4 dimensions per detectar gaps normatius.'},
   url:'https://yel-martinez-portfolio.com/herramienta-diagnostico-esg/'},
  {ico:'<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="5" y="4" width="20" height="26" rx="2" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="9" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2"/><line x1="9" y1="15" x2="21" y2="15" stroke="currentColor" stroke-width="2"/><line x1="9" y1="20" x2="17" y2="20" stroke="currentColor" stroke-width="2"/><path d="M22 22 L32 32" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="27" cy="27" r="6" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>',
   color:'#bf5fff',
   name:{es:'Auditoría Greenwashing',en:'Greenwashing Audit',ca:'Auditoria Greenwashing'},
   desc:{es:'Detecta afirmaciones ESG sin evidencia verificable.',en:'Detects ESG claims without verifiable evidence.',ca:'Detecta afirmacions ESG sense evidència verificable.'},
   url:'https://yel-martinez-portfolio.com/herramienta-auditoria-greenwashing/'},
  {ico:'<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="4" width="28" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M10 18 L15 23 L26 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
   color:'#ffe600',
   name:{es:'Generador Memoria GRI',en:'GRI Report Generator',ca:'Generador Memòria GRI'},
   desc:{es:'Produce memorias de sostenibilidad alineadas con GRI Standards.',en:'Produces sustainability reports aligned with GRI Standards.',ca:'Produeix memòries de sostenibilitat alineades amb GRI Standards.'},
   url:'https://yel-martinez-portfolio.com/herramienta-memoria-gri/'},
  {ico:'<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="13" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M18 10 L18 18 L24 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
   color:'#ff6b00',
   name:{es:'Migración Web Sostenible',en:'Sustainable Web Migration',ca:'Migració Web Sostenible'},
   desc:{es:'Asistente para migrar webs hacia hosting verde y bajo consumo.',en:'Wizard to migrate websites to green hosting and low consumption.',ca:'Assistent per migrar webs a hosting verd i baix consum.'},
   url:'https://yel-martinez-portfolio.com/herramienta-migracion-web/'},
  {ico:'<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 4 C10 4 4 10 4 18 C4 26 10 32 18 32 C26 32 32 26 32 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M26 4 L32 10 L26 16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="32" y1="10" x2="20" y2="10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
   color:'#ff2d55',
   name:{es:'SIR — Autodiagnóstico',en:'SIR — Self-Diagnostic',ca:'SIR — Autodiagnòstic'},
   desc:{es:'33 indicadores del Decreto 200/2022 en 4 dimensiones.',en:'33 indicators from Decree 200/2022 in 4 dimensions.',ca:'33 indicadors del Decret 200/2022 en 4 dimensions.'},
   url:'https://yel-martinez-portfolio.com/herramienta-sir/'},
];

// ── TEXTOS ────────────────────────────────────────────────────────────────────
var TX = {
  es:{
    tag:'Juego educativo ESG · Greentech',
    start:'EMPEZAR', next:'Continuar →', restart:'Jugar de nuevo',
    reveal:'Ver solución', skip:'Saltar nivel →',
    correct:'¡Correcto!', wrong:'Incorrecto',
    jump:'[ SALTAR ]', trueBtn:'VERDADERO', falseBtn:'FALSO',
    score:'PTS', lives:'VIDAS', backBtn:'← INICIO',
    introText:'Pon a prueba tu conocimiento sobre tecnología sostenible, normativa ESG y Greentech real.',
    introSub:'5 niveles · Sin registro · Gratis · BYTE te guía',
    pressStart:'— PULSA PARA COMENZAR —',
    byteLib:'Empieza por aquí. Estos son los términos que vas a necesitar en los siguientes niveles.',
    byteL1:'¡Hora de correr! Recoge los términos Greentech reales y esquiva los que no lo son.',
    byteL2:'Cada herramienta de la suite resuelve un problema concreto. ¿Sabes cuál es cuál?',
    byteL3:'Afirmaciones sobre Greentech y ESG. Algunas son trampa. Piensa antes de responder.',
    byteL4:'Aquí tienes decisiones técnicas reales de un proyecto. Arrastra al lado correcto.',
    byteOds:'17 ODS, una sola pregunta por cada uno. ¿Qué herramienta Greentech trabaja este objetivo?',
    byteHi:'Resultado sobresaliente. Dominas el ecosistema Greentech.',
    byteMid:'Buen trabajo. El conocimiento se está consolidando.',
    byteLow:'Hay margen. Vuelve a jugar y verás cómo sube.',
    lvl:['Glosario','Runner','Herramientas','V o F','Auditoría'],
    libTitle:'Glosario Greentech',
    libSub:'Toca cada tarjeta para ver su definición. Hay términos reales y términos que no son Greentech.',
    libHint:'Toca para ver definición',
    techTrue:'GREENTECH ✓', techFalse:'NO ES TECH ✗',
    l1Title:'Runner Greentech',
    l1Sub:'Recoge los bloques VERDES (Greentech real). Esquiva los ROJOS (tech vacía). Toca o pulsa Espacio para saltar.',
    l2Title:'¿Qué problema resuelve?',
    l2Sub:'Lee bien la herramienta y elige la respuesta correcta entre las dos opciones.',
    l2toolLabel:'HERRAMIENTA',
    l2q:'¿Para qué sirve esta herramienta?',
    l3Title:'¿Verdadero o Falso?',
    l3Sub:'Decide si la afirmación es correcta o incorrecta. BYTE explica cada respuesta.',
    l4Title:'Auditoría de proyecto',
    l4Sub:'Arrastra cada decisión técnica a la columna correcta: ¿es una buena práctica o un error?',
    l4good:'BUENA PRÁCTICA', l4bad:'ERROR TÉCNICO',
    l4drag:'Arrastra aquí',
    l4check:'Verificar',
    odsTitle:'BONUS — Los 17 ODS',
    odsSub:'¿Qué herramienta de la suite Greentech trabaja directamente este ODS? Elige la más relevante.',
    odsProgress:'ODS',
    noLives:'Sin vidas — avanzamos al siguiente nivel.',
    runWon:'¡100 pts! Nivel completado.',
    lvlDoneTitle:'Nivel completado',
    lvlDoneNext:'Siguiente nivel →',
    bonusUnlock:'🔓 NIVEL BONUS DESBLOQUEADO',
    bonusBtn:'JUGAR BONUS ODS →',
    bonusDesc:'Has completado el juego. Ahora pon a prueba tu conocimiento sobre los 17 Objetivos de Desarrollo Sostenible.',
    suiteTitle:'Suite de herramientas ESG gratuitas',
    suiteSub:'Todas desarrolladas por Yel Martínez. Sin registro. Funcionan en móvil.',
    suiteBtn:'Abrir herramienta →',
    resultsTitle:'GAME CLEAR',
    resultsSub:'PTS / 200',
    odsFinalTitle:'BONUS ODS COMPLETADO',
    odsFinalSub:'PTS BONUS',
    restart2:'Jugar otra vez',
  },
  en:{
    tag:'ESG educational game · Greentech',
    start:'START', next:'Continue →', restart:'Play again',
    reveal:'Show solution', skip:'Skip level →',
    correct:'Correct!', wrong:'Incorrect',
    jump:'[ JUMP ]', trueBtn:'TRUE', falseBtn:'FALSE',
    score:'PTS', lives:'LIVES', backBtn:'← HOME',
    introText:'Test your knowledge of sustainable technology, ESG regulations and real Greentech.',
    introSub:'5 levels · No sign-up · Free · BYTE guides you',
    pressStart:'— PRESS TO START —',
    byteLib:'Start here. These are the terms you will need in the next levels.',
    byteL1:'Time to run! Collect real Greentech terms and dodge the empty ones.',
    byteL2:'Each suite tool solves a specific problem. Do you know which is which?',
    byteL3:'Statements about Greentech and ESG. Some are traps. Think before answering.',
    byteL4:'Here are real technical decisions from a project. Drag them to the right side.',
    byteOds:'17 SDGs, one question each. Which Greentech tool works this goal?',
    byteHi:'Outstanding result. You master the Greentech ecosystem.',
    byteMid:'Good work. The knowledge is consolidating.',
    byteLow:'Room to improve. Play again and watch it rise.',
    lvl:['Glossary','Runner','Tools','T or F','Audit'],
    libTitle:'Greentech Glossary',
    libSub:'Tap each card to see its definition. Some terms are real Greentech, others are not.',
    libHint:'Tap to see definition',
    techTrue:'GREENTECH ✓', techFalse:'NOT TECH ✗',
    l1Title:'Greentech Runner',
    l1Sub:'Collect GREEN blocks (real Greentech). Dodge RED ones (empty tech). Tap or press Space to jump.',
    l2Title:'What problem does it solve?',
    l2Sub:'Read the tool carefully and choose the correct answer from the two options.',
    l2toolLabel:'TOOL',
    l2q:'What does this tool do?',
    l3Title:'True or False?',
    l3Sub:'Decide if the statement is correct or incorrect. BYTE explains each answer.',
    l4Title:'Project audit',
    l4Sub:'Drag each technical decision to the correct column: is it good practice or a mistake?',
    l4good:'GOOD PRACTICE', l4bad:'TECHNICAL ERROR',
    l4drag:'Drag here',
    l4check:'Check',
    odsTitle:'BONUS — The 17 SDGs',
    odsSub:'Which Greentech suite tool works this SDG directly? Choose the most relevant.',
    odsProgress:'SDG',
    noLives:'No lives left — moving to the next level.',
    runWon:'100 pts! Level completed.',
    lvlDoneTitle:'Level completed',
    lvlDoneNext:'Next level →',
    bonusUnlock:'🔓 BONUS LEVEL UNLOCKED',
    bonusBtn:'PLAY SDG BONUS →',
    bonusDesc:'You completed the game. Now test your knowledge of all 17 Sustainable Development Goals.',
    suiteTitle:'Free ESG tools suite',
    suiteSub:'All developed by Yel Martínez. No sign-up. Mobile-friendly.',
    suiteBtn:'Open tool →',
    resultsTitle:'GAME CLEAR',
    resultsSub:'PTS / 200',
    odsFinalTitle:'SDG BONUS COMPLETED',
    odsFinalSub:'BONUS PTS',
    restart2:'Play again',
  },
  ca:{
    tag:'Joc educatiu ESG · Greentech',
    start:'COMENÇAR', next:'Continuar →', restart:'Jugar de nou',
    reveal:'Veure solució', skip:'Saltar nivell →',
    correct:'Correcte!', wrong:'Incorrecte',
    jump:'[ SALTAR ]', trueBtn:'VERTADER', falseBtn:'FALS',
    score:'PTS', lives:'VIDES', backBtn:'← INICI',
    introText:'Posa a prova el teu coneixement sobre tecnologia sostenible, normativa ESG i Greentech real.',
    introSub:'5 nivells · Sense registre · Gratis · BYTE et guia',
    pressStart:'— PREM PER COMENÇAR —',
    byteLib:'Comença per ací. Aquests són els termes que necessitaràs als nivells següents.',
    byteL1:'Hora de córrer! Recull els termes Greentech reals i esquiva els que no ho són.',
    byteL2:'Cada eina de la suite resol un problema concret. Saps quina és quina?',
    byteL3:'Afirmacions sobre Greentech i ESG. Algunes són trampa. Pensa abans de respondre.',
    byteL4:'Ací tens decisions tècniques reals d\'un projecte. Arrossega al costat correcte.',
    byteOds:'17 ODS, una sola pregunta per cadascun. Quina eina Greentech treballa aquest objectiu?',
    byteHi:'Resultat excel·lent. Domines l\'ecosistema Greentech.',
    byteMid:'Bon treball. El coneixement s\'està consolidant.',
    byteLow:'Hi ha marge. Torna a jugar i veuràs com puja.',
    lvl:['Glossari','Runner','Eines','V o F','Auditoria'],
    libTitle:'Glossari Greentech',
    libSub:'Toca cada targeta per veure la seua definició. Hi ha termes reals i termes que no són Greentech.',
    libHint:'Toca per veure definició',
    techTrue:'GREENTECH ✓', techFalse:'NO ÉS TECH ✗',
    l1Title:'Runner Greentech',
    l1Sub:'Recull els blocs VERDS (Greentech real). Esquiva els ROJOS (tech buida). Toca o prem Espai per saltar.',
    l2Title:'Quin problema resol?',
    l2Sub:'Llig bé l\'eina i tria la resposta correcta entre les dues opcions.',
    l2toolLabel:'EINA',
    l2q:'Per a què serveix aquesta eina?',
    l3Title:'Vertader o Fals?',
    l3Sub:'Decideix si l\'afirmació és correcta o incorrecta. BYTE explica cada resposta.',
    l4Title:'Auditoria de projecte',
    l4Sub:'Arrossega cada decisió tècnica a la columna correcta: és una bona pràctica o un error?',
    l4good:'BONA PRÀCTICA', l4bad:'ERROR TÈCNIC',
    l4drag:'Arrossega ací',
    l4check:'Verificar',
    odsTitle:'BONUS — Els 17 ODS',
    odsSub:'Quina eina de la suite Greentech treballa directament aquest ODS? Tria la més rellevant.',
    odsProgress:'ODS',
    noLives:'Sense vides — avancem al nivell següent.',
    runWon:'100 pts! Nivell completat.',
    lvlDoneTitle:'Nivell completat',
    lvlDoneNext:'Nivell següent →',
    bonusUnlock:'🔓 NIVELL BONUS DESBLOQUEJAT',
    bonusBtn:'JUGAR BONUS ODS →',
    bonusDesc:'Has completat el joc. Ara posa a prova el teu coneixement sobre els 17 Objectius de Desenvolupament Sostenible.',
    suiteTitle:'Suite d\'eines ESG gratuïtes',
    suiteSub:'Totes desenvolupades per Yel Martínez. Sense registre. Funcionen en mòbil.',
    suiteBtn:'Obrir eina →',
    resultsTitle:'GAME CLEAR',
    resultsSub:'PTS / 200',
    odsFinalTitle:'BONUS ODS COMPLETAT',
    odsFinalSub:'PTS BONUS',
    restart2:'Jugar altra vegada',
  },
};

// ── DATOS BIBLIOTECA ──────────────────────────────────────────────────────────
var LIBRARY = [
  {es:'Greentech',en:'Greentech',ca:'Greentech',tag:'tech',d:{es:'Tecnología aplicada a resolver problemas ambientales de forma medible y verificable.',en:'Technology applied to solve environmental problems in a measurable, verifiable way.',ca:'Tecnologia aplicada a resoldre problemes ambientals de forma mesurable i verificable.'}},
  {es:'API de sostenibilidad',en:'Sustainability API',ca:'API de sostenibilitat',tag:'tech',d:{es:'Interfaz que integra datos de sostenibilidad entre plataformas automáticamente, sin intervención manual.',en:'Interface that automatically integrates sustainability data between platforms.',ca:'Interfície que integra dades de sostenibilitat entre plataformes automàticament.'}},
  {es:'IA generativa ESG',en:'Generative AI ESG',ca:'IA generativa ESG',tag:'tech',d:{es:'Uso de modelos de lenguaje para generar informes, diagnósticos y recomendaciones de sostenibilidad.',en:'Use of language models to generate sustainability reports, diagnostics and recommendations.',ca:'Ús de models de llenguatge per generar informes, diagnòstics i recomanacions de sostenibilitat.'}},
  {es:'Python + datos ESG',en:'Python + ESG data',ca:'Python + dades ESG',tag:'tech',d:{es:'Automatización de recogida, limpieza y análisis de indicadores de sostenibilidad con Python.',en:'Automation of collection, cleaning and analysis of sustainability indicators with Python.',ca:'Automatització de recollida, neteja i anàlisi d\'indicadors de sostenibilitat amb Python.'}},
  {es:'Smart grid',en:'Smart grid',ca:'Smart grid',tag:'tech',d:{es:'Red eléctrica inteligente que optimiza la distribución de energía renovable en tiempo real.',en:'Intelligent grid optimising renewable energy distribution in real time.',ca:'Xarxa elèctrica intel·ligent que optimitza la distribució d\'energia renovable en temps real.'}},
  {es:'CleanTech',en:'CleanTech',ca:'CleanTech',tag:'tech',d:{es:'Sector empresarial cuya actividad principal reduce el impacto ambiental de forma verificable.',en:'Business sector whose main activity reduces environmental impact in a verifiable way.',ca:'Sector empresarial la activitat principal del qual redueix l\'impacte ambiental de forma verificable.'}},
  {es:'Net zero digital',en:'Digital net zero',ca:'Net zero digital',tag:'tech',d:{es:'Estrategia de neutralidad climática monitorizada y verificada mediante plataformas tecnológicas.',en:'Climate neutrality strategy monitored and verified through technology platforms.',ca:'Estratègia de neutralitat climàtica monitoritzada i verificada mitjançant plataformes tecnològiques.'}},
  {es:'GHG Protocol digital',en:'Digital GHG Protocol',ca:'GHG Protocol digital',tag:'tech',d:{es:'Implementación tecnológica del estándar para cuantificar y reportar emisiones de gases de efecto invernadero.',en:'Technological implementation of the standard for quantifying and reporting greenhouse gas emissions.',ca:'Implementació tecnològica de l\'estàndard per quantificar i reportar emissions de gasos d\'efecte hivernacle.'}},
  {es:'Water tech',en:'Water tech',ca:'Water tech',tag:'tech',d:{es:'Tecnología para gestión eficiente, reutilización y monitorización de recursos hídricos.',en:'Technology for efficient management, reuse and monitoring of water resources.',ca:'Tecnologia per a gestió eficient, reutilització i monitoratge de recursos hídrics.'}},
  {es:'Datos abiertos ESG',en:'ESG open data',ca:'Dades obertes ESG',tag:'tech',d:{es:'Conjuntos de datos de sostenibilidad públicamente accesibles para análisis, auditoría e investigación.',en:'Publicly accessible sustainability data sets for analysis, auditing and research.',ca:'Conjunts de dades de sostenibilitat públicament accessibles per a anàlisi, auditoria i investigació.'}},
  {es:'Greenwashing digital',en:'Digital greenwashing',ca:'Greenwashing digital',tag:'empty',d:{es:'Uso de tecnología para aparentar sostenibilidad sin datos verificables que la respalden. Sancionable con la CSRD.',en:'Using technology to appear sustainable without verifiable data to support it. Sanctionable under CSRD.',ca:'Ús de tecnologia per aparentar sostenibilitat sense dades verificables. Sancionable amb la CSRD.'}},
  {es:'Informe Word manual',en:'Manual Word report',ca:'Informe Word manual',tag:'empty',d:{es:'Documento sin datos estructurados ni posibilidad de automatización ni auditoría.',en:'Document without structured data, automation or audit capability.',ca:'Document sense dades estructurades ni possibilitat d\'automatització ni auditoria.'}},
  {es:'Consultoría sin código',en:'Consulting without code',ca:'Consultoria sense codi',tag:'empty',d:{es:'Recomendaciones ESG sin entregables tecnológicos. No automatizable, no escalable, no auditable.',en:'ESG recommendations without tech deliverables. Not automatable, not scalable, not auditable.',ca:'Recomanacions ESG sense entregables tecnològics. No automatitzable, no escalable, no auditable.'}},
  {es:'PDF estático ESG',en:'Static ESG PDF',ca:'PDF estàtic ESG',tag:'empty',d:{es:'Informe en formato cerrado, sin datos dinámicos, sin trazabilidad y sin posibilidad de indexación semántica.',en:'Report in a closed format with no dynamic data, traceability or semantic indexing.',ca:'Informe en format tancat, sense dades dinàmiques, sense traçabilitat ni indexació semàntica.'}},
  {es:'Base de datos en papel',en:'Paper database',ca:'Base de dades en paper',tag:'empty',d:{es:'Registro físico de indicadores ESG. Sin trazabilidad digital, sin posibilidad de análisis automático.',en:'Physical record of ESG indicators. No digital traceability or automatic analysis.',ca:'Registre físic d\'indicadors ESG. Sense traçabilitat digital ni possibilitat d\'anàlisi automàtica.'}},
];

// ── DATOS NIVEL 2 ─────────────────────────────────────────────────────────────
var L2 = [
  {tool:{es:'Calculadora de Huella de Carbono',en:'Carbon Footprint Calculator',ca:'Calculadora d\'Empremta de Carboni'},
   icon:'<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="19" fill="none" stroke="#00ff88" stroke-width="2.5"/><path d="M24 12 L24 24 L32 24" stroke="#00ff88" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 34 L20 30" stroke="#00ff88" stroke-width="2" stroke-linecap="round"/><text x="24" y="44" text-anchor="middle" font-size="8" fill="#00ff88" font-family="monospace">CO₂</text></svg>',
   color:'#00ff88',
   cor:{es:'Cuantificar emisiones Alcance 1, 2 y 3 de una empresa',en:'Quantify Scope 1, 2 and 3 emissions of a company',ca:'Quantificar emissions Abast 1, 2 i 3 d\'una empresa'},
   wr:{es:'Publicar informes anuales de sostenibilidad en PDF',en:'Publish annual sustainability reports in PDF',ca:'Publicar informes anuals de sostenibilitat en PDF'},
   exp:{es:'La calculadora convierte datos operativos en kg CO₂eq usando el modelo SWD v3. Los PDFs son documentos estáticos — no calculan nada.',en:'The calculator converts operational data into kg CO₂eq using SWD v3. PDFs are static documents — they calculate nothing.',ca:'La calculadora converteix dades operatives en kg CO₂eq usant el model SWD v3. Els PDFs són documents estàtics — no calculen res.'}},
  {tool:{es:'Diagnóstico ESG',en:'ESG Diagnostic',ca:'Diagnòstic ESG'},
   icon:'<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="6" width="32" height="36" rx="4" fill="none" stroke="#00f5ff" stroke-width="2.5"/><line x1="14" y1="16" x2="34" y2="16" stroke="#00f5ff" stroke-width="2"/><line x1="14" y1="22" x2="34" y2="22" stroke="#00f5ff" stroke-width="2"/><line x1="14" y1="28" x2="26" y2="28" stroke="#00f5ff" stroke-width="2"/><circle cx="32" cy="34" r="7" fill="none" stroke="#00f5ff" stroke-width="2"/><path d="M30 34 L31.5 35.5 L34 32.5" stroke="#00f5ff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
   color:'#00f5ff',
   cor:{es:'Detectar gaps de cumplimiento normativo ESG en una empresa',en:'Detect ESG regulatory compliance gaps in a company',ca:'Detectar gaps de compliment normatiu ESG en una empresa'},
   wr:{es:'Generar código Python automáticamente para APIs',en:'Automatically generate Python code for APIs',ca:'Generar codi Python automàticament per a APIs'},
   exp:{es:'El diagnóstico analiza 52 indicadores en 4 dimensiones para identificar qué normativa no se cumple. No genera código.',en:'The diagnostic analyses 52 indicators in 4 dimensions to identify which regulations are not met. It doesn\'t generate code.',ca:'El diagnòstic analitza 52 indicadors en 4 dimensions per identificar quina normativa no es compleix. No genera codi.'}},
  {tool:{es:'Generador de Memoria GRI',en:'GRI Report Generator',ca:'Generador de Memòria GRI'},
   icon:'<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="6" width="24" height="32" rx="3" fill="none" stroke="#ffe600" stroke-width="2.5"/><line x1="13" y1="14" x2="27" y2="14" stroke="#ffe600" stroke-width="2"/><line x1="13" y1="19" x2="27" y2="19" stroke="#ffe600" stroke-width="2"/><line x1="13" y1="24" x2="22" y2="24" stroke="#ffe600" stroke-width="2"/><path d="M28 28 L40 40" stroke="#ffe600" stroke-width="2.5" stroke-linecap="round"/><circle cx="34" cy="34" r="7" fill="none" stroke="#ffe600" stroke-width="2"/></svg>',
   color:'#ffe600',
   cor:{es:'Producir memorias de sostenibilidad estructuradas según GRI',en:'Produce structured sustainability reports according to GRI',ca:'Produir memòries de sostenibilitat estructurades segons GRI'},
   wr:{es:'Monitorizar la huella de carbono web en tiempo real',en:'Monitor website carbon footprint in real time',ca:'Monitoritzar l\'empremta de carboni web en temps real'},
   exp:{es:'El generador GRI produce informes alineados con GRI Standards listos para auditoría. La monitorización en tiempo real requiere sensores y APIs específicos.',en:'The GRI generator produces audit-ready reports aligned with GRI Standards. Real-time monitoring requires specific sensors and APIs.',ca:'El generador GRI produeix informes llestos per a auditoria alineats amb GRI Standards. El monitoratge en temps real requereix sensors i APIs específics.'}},
  {tool:{es:'Auditoría de Greenwashing',en:'Greenwashing Audit',ca:'Auditoria de Greenwashing'},
   icon:'<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 8 L28 18 L40 18 L30 25 L34 36 L24 30 L14 36 L18 25 L8 18 L20 18Z" fill="none" stroke="#ff2d55" stroke-width="2.5" stroke-linejoin="round"/><line x1="24" y1="18" x2="24" y2="26" stroke="#ff2d55" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="30" r="1.5" fill="#ff2d55"/></svg>',
   color:'#ff2d55',
   cor:{es:'Detectar afirmaciones de sostenibilidad sin evidencia verificable',en:'Detect sustainability claims without verifiable evidence',ca:'Detectar afirmacions de sostenibilitat sense evidència verificable'},
   wr:{es:'Automatizar la generación de informes de emisiones anuales',en:'Automate annual emissions report generation',ca:'Automatitzar la generació d\'informes d\'emissions anuals'},
   exp:{es:'La auditoría verifica que cada afirmación ESG tenga datos que la respalden. Los informes de emisiones son función de la calculadora de huella.',en:'The audit verifies that each ESG claim has supporting data. Emissions reports are the carbon footprint calculator\'s function.',ca:'L\'auditoria verifica que cada afirmació ESG tinga dades que la recolzen. Els informes d\'emissions són funció de la calculadora d\'empremta.'}},
  {tool:{es:'Dashboard Python Interactivo',en:'Interactive Python Dashboard',ca:'Dashboard Python Interactiu'},
   icon:'<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="6" y="8" width="36" height="26" rx="3" fill="none" stroke="#bf5fff" stroke-width="2.5"/><rect x="10" y="26" width="6" height="6" fill="#bf5fff"/><rect x="18" y="20" width="6" height="12" fill="#bf5fff" opacity=".7"/><rect x="26" y="16" width="6" height="16" fill="#bf5fff" opacity=".9"/><rect x="34" y="22" width="4" height="10" fill="#bf5fff" opacity=".5"/><line x1="16" y1="38" x2="32" y2="38" stroke="#bf5fff" stroke-width="2"/></svg>',
   color:'#bf5fff',
   cor:{es:'Visualizar KPIs de sostenibilidad actualizados en tiempo real',en:'Visualise real-time sustainability KPIs',ca:'Visualitzar KPIs de sostenibilitat actualitzats en temps real'},
   wr:{es:'Redactar automáticamente memorias narrativas de sostenibilidad',en:'Automatically write narrative sustainability reports',ca:'Redactar automàticament memòries narratives de sostenibilitat'},
   exp:{es:'Un dashboard Python visualiza KPIs desde cualquier fuente de datos en tiempo real. La redacción narrativa es una función separada del generador GRI.',en:'A Python dashboard visualises KPIs from any data source in real time. Narrative writing is a separate function of the GRI generator.',ca:'Un dashboard Python visualitza KPIs des de qualsevol font de dades en temps real. La redacció narrativa és una funció separada del generador GRI.'}},
  {tool:{es:'Digitalización de Contenido Técnico',en:'Technical Content Digitalisation',ca:'Digitalització de Contingut Tècnic'},
   icon:'<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="6" y="8" width="20" height="28" rx="3" fill="none" stroke="#ff6b00" stroke-width="2.5"/><line x1="10" y1="16" x2="22" y2="16" stroke="#ff6b00" stroke-width="1.8"/><line x1="10" y1="21" x2="22" y2="21" stroke="#ff6b00" stroke-width="1.8"/><line x1="10" y1="26" x2="18" y2="26" stroke="#ff6b00" stroke-width="1.8"/><path d="M28 20 L40 20" stroke="#ff6b00" stroke-width="2.5" stroke-linecap="round"/><path d="M36 14 L42 20 L36 26" stroke="#ff6b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
   color:'#ff6b00',
   cor:{es:'Convertir PDFs invisibles en microsites indexables por buscadores',en:'Convert invisible PDFs into search engine-indexable microsites',ca:'Convertir PDFs invisibles en microsites indexables pels cercadors'},
   wr:{es:'Calcular automáticamente la huella de carbono de una web',en:'Automatically calculate a website\'s carbon footprint',ca:'Calcular automàticament l\'empremta de carboni d\'una web'},
   exp:{es:'Los PDFs no se indexan bien en buscadores. Un microsite con SEO técnico hace el mismo contenido visible y búscable. El cálculo de huella web es función de la calculadora.',en:'PDFs don\'t index well in search engines. A microsite with technical SEO makes the same content visible and searchable. Web footprint calculation is the calculator\'s function.',ca:'Els PDFs no s\'indexen bé als cercadors. Un microsite amb SEO tècnic fa el mateix contingut visible i cercable. El càlcul d\'empremta web és funció de la calculadora.'}},
];

// ── DATOS NIVEL 3 ─────────────────────────────────────────────────────────────
var L3 = [
  {q:{es:'Un PDF de sostenibilidad publicado en la web cuenta como dato estructurado ESG.',en:'A sustainability PDF on the web counts as structured ESG data.',ca:'Un PDF de sostenibilitat al web compta com a dada estructurada ESG.'},a:false,
   exp:{es:'Un PDF es un documento cerrado. Los datos ESG estructurados requieren JSON-LD o RDFa para que los motores de búsqueda los lean e indexen.',en:'A PDF is a closed document. Structured ESG data requires JSON-LD or RDFa so search engines can read and index it.',ca:'Un PDF és un document tancat. Les dades ESG estructurades requereixen JSON-LD o RDFa perquè els motors de cerca els puguen llegir i indexar.'}},
  {q:{es:'Python puede automatizar la recogida y análisis de indicadores de sostenibilidad.',en:'Python can automate the collection and analysis of sustainability indicators.',ca:'Python pot automatitzar la recollida i l\'anàlisi d\'indicadors de sostenibilitat.'},a:true,
   exp:{es:'Correcto. Con pandas, requests y APIs como Greencheck, Python automatiza toda la cadena de datos ESG: recogida, limpieza y análisis.',en:'Correct. With pandas, requests and APIs like Greencheck, Python automates the entire ESG data chain: collection, cleaning and analysis.',ca:'Correcte. Amb pandas, requests i APIs com Greencheck, Python automatitza tota la cadena de dades ESG: recollida, neteja i anàlisi.'}},
  {q:{es:'Declarar "somos 100% sostenibles" en la web es suficiente para cumplir la CSRD europea.',en:'Declaring "we are 100% sustainable" on the website is enough to comply with the European CSRD.',ca:'Declarar "som 100% sostenibles" al web és suficient per complir la CSRD europea.'},a:false,
   exp:{es:'Falso. La CSRD exige datos auditables, metodologías verificadas y reporting periódico. Una afirmación genérica sin datos es greenwashing, sancionable por la Directiva 2024/825/UE.',en:'False. CSRD requires auditable data, verified methodologies and periodic reporting. A generic claim without data is greenwashing, sanctionable under Directive 2024/825/EU.',ca:'Fals. La CSRD exigeix dades auditables, metodologies verificades i reporting periòdic. Una afirmació genèrica sense dades és greenwashing, sancionable per la Directiva 2024/825/UE.'}},
  {q:{es:'Una app de gestión de colonias felinas CES puede considerarse una herramienta Greentech.',en:'A feral cat colony (CES) management app can be considered a Greentech tool.',ca:'Una app de gestió de colònies felines CES pot considerar-se una eina Greentech.'},a:true,
   exp:{es:'Correcto. Gestionar colonias CES con datos digitales reduce sacrificios, optimiza recursos municipales y tiene impacto ambiental verificable. Tecnología para bienestar animal = Greentech.',en:'Correct. Managing CES colonies digitally reduces culling, optimises municipal resources and has verifiable environmental impact. Animal welfare tech = Greentech.',ca:'Correcte. Gestionar colònies CES digitalment redueix sacrificis, optimitza recursos municipals i té impacte ambiental verificable. Tecnologia per al benestar animal = Greentech.'}},
  {q:{es:'El modelo SWD v3 calcula la huella de carbono de páginas web usando el consumo energético.',en:'The SWD v3 model calculates website carbon footprint using energy consumption.',ca:'El model SWD v3 calcula l\'empremta de carboni de pàgines web usant el consum energètic.'},a:true,
   exp:{es:'Correcto. El Sustainable Web Design Model v3 usa datos de transferencia, tipo de hosting y mix energético del país para calcular kg CO₂eq por visita.',en:'Correct. The Sustainable Web Design Model v3 uses transfer data, hosting type and country energy mix to calculate kg CO₂eq per visit.',ca:'Correcte. El Sustainable Web Design Model v3 usa dades de transferència, tipus d\'allotjament i mix energètic del país per calcular kg CO₂eq per visita.'}},
  {q:{es:'La CSRD obliga a grandes empresas europeas a publicar datos ESG auditados desde 2025.',en:'The CSRD requires large European companies to publish audited ESG data from 2025.',ca:'La CSRD obliga les grans empreses europees a publicar dades ESG auditades des del 2025.'},a:true,
   exp:{es:'Correcto. La Corporate Sustainability Reporting Directive entró en vigor en 2024 para empresas de más de 500 empleados, con datos auditables a partir del ejercicio 2025.',en:'Correct. The Corporate Sustainability Reporting Directive came into force in 2024 for companies with 500+ employees, with auditable data from 2025.',ca:'Correcte. La Corporate Sustainability Reporting Directive va entrar en vigor el 2024 per a empreses de més de 500 empleats, amb dades auditables a partir de l\'exercici 2025.'}},
];

// ── DATOS NIVEL 4 — BLOQUES DRAG ─────────────────────────────────────────────
var L4_BLOCKS = [
  {id:0,t:{es:'Migrar informes ESG a PDF estático anual',en:'Migrate ESG reports to annual static PDF',ca:'Migrar informes ESG a PDF estàtic anual'},bad:true,
   why:{es:'Los PDFs no son interoperables ni auditables digitalmente. Los informes ESG modernos usan XBRL, JSON-LD o dashboards dinámicos.',en:'PDFs are not interoperable or digitally auditable. Modern ESG reports use XBRL, JSON-LD or dynamic dashboards.',ca:'Els PDFs no són interoperables ni auditables digitalment. Els informes ESG moderns usen XBRL, JSON-LD o dashboards dinàmics.'}},
  {id:1,t:{es:'Calcular emisiones con hoja de Excel manual',en:'Calculate emissions with a manual Excel sheet',ca:'Calcular emissions amb full d\'Excel manual'},bad:true,
   why:{es:'Excel no permite trazabilidad ni integración con APIs. Las calculadoras ESG requieren herramientas estructuradas y auditables.',en:'Excel doesn\'t allow traceability or API integration. ESG calculators require structured, auditable tools.',ca:'Excel no permet traçabilitat ni integració amb APIs. Les calculadores ESG requereixen eines estructurades i auditables.'}},
  {id:2,t:{es:'Declarar "100% sostenible" sin adjuntar evidencias',en:'Declare "100% sustainable" without attaching evidence',ca:'Declarar "100% sostenible" sense adjuntar evidències'},bad:true,
   why:{es:'Sin datos verificables, es greenwashing. La CSRD exige evidencia auditable y sanciona afirmaciones genéricas.',en:'Without verifiable data, it\'s greenwashing. CSRD requires auditable evidence and sanctions generic claims.',ca:'Sense dades verificables, és greenwashing. La CSRD exigeix evidència auditable i sanciona afirmacions genèriques.'}},
  {id:3,t:{es:'La consultoría externa no entregará artefactos tecnológicos',en:'External consulting will deliver no technological artifacts',ca:'La consultoria externa no lliurarà artefactes tecnològics'},bad:true,
   why:{es:'Una consultoría ESG sin entregables tecnológicos no es escalable. Debe incluir APIs, plugins, scripts o dashboards reutilizables.',en:'ESG consulting without tech deliverables is not scalable. It must include APIs, plugins, scripts or reusable dashboards.',ca:'Una consultoria ESG sense entregables tecnològics no és escalable. Ha d\'incloure APIs, plugins, scripts o dashboards reutilitzables.'}},
  {id:4,t:{es:'Estructurar el reporting usando estándares GRI',en:'Structure reporting using GRI standards',ca:'Estructurar el reporting usant estàndards GRI'},bad:false,
   why:{es:'GRI Standards es el marco internacional más usado para estructurar memorias de sostenibilidad auditables.',en:'GRI Standards is the most widely used international framework for structuring auditable sustainability reports.',ca:'GRI Standards és el marc internacional més usat per estructurar memòries de sostenibilitat auditables.'}},
  {id:5,t:{es:'Publicar los datos ESG en formato JSON-LD indexable',en:'Publish ESG data in indexable JSON-LD format',ca:'Publicar les dades ESG en format JSON-LD indexable'},bad:false,
   why:{es:'JSON-LD permite que los datos ESG sean leídos por buscadores y herramientas automáticas, cumpliendo con los requisitos de datos estructurados.',en:'JSON-LD allows ESG data to be read by search engines and automated tools, meeting structured data requirements.',ca:'JSON-LD permet que les dades ESG siguen llegides pels cercadors i eines automàtiques, complint els requisits de dades estructurades.'}},
  {id:6,t:{es:'Automatizar la recogida de KPIs con Python',en:'Automate KPI collection with Python',ca:'Automatitzar la recollida de KPIs amb Python'},bad:false,
   why:{es:'Automatizar con Python garantiza trazabilidad, reproducibilidad y posibilidad de auditoría de los datos ESG recogidos.',en:'Automating with Python guarantees traceability, reproducibility and auditability of collected ESG data.',ca:'Automatitzar amb Python garanteix traçabilitat, reproduïbilitat i possibilitat d\'auditoria de les dades ESG recollides.'}},
];

// ── DATOS NIVEL BONUS — ODS ───────────────────────────────────────────────────
// Mecánica: se muestra un ODS (número + nombre + icono SVG + color oficial ONU)
// El jugador elige cuál de las 3 herramientas de la suite lo trabaja directamente.
// Cada ronda muestra 1 ODS con 3 opciones (1 correcta + 2 distractores del mismo set).
// Puntuación: 10 pts por acierto, los 17 ODS completos.

var ODS_TOOLS = {
  co2:  {es:'Calculadora Huella CO₂', en:'Carbon Footprint Calc',   ca:'Calculadora Empremta CO₂'},
  esg:  {es:'Diagnóstico ESG',        en:'ESG Diagnostic',           ca:'Diagnòstic ESG'},
  gri:  {es:'Memoria GRI',            en:'GRI Report',               ca:'Memòria GRI'},
  gw:   {es:'Auditoría Greenwashing', en:'Greenwashing Audit',       ca:'Auditoria Greenwashing'},
  web:  {es:'Migración Web Sostenible',en:'Sustainable Web Migration',ca:'Migració Web Sostenible'},
  sir:  {es:'SIR Autodiagnóstico',    en:'SIR Self-Diagnostic',      ca:'SIR Autodiagnòstic'},
};

var ODS = [
  {n:1,  color:'#e5233d',
   name:{es:'Fin de la pobreza',en:'No poverty',ca:'Fi de la pobresa'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#e5233d"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 1</text><path d="M20 42 Q30 28 40 42" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="30" cy="30" r="6" fill="#fff"/><line x1="30" y1="36" x2="30" y2="44" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><line x1="24" y1="39" x2="36" y2="39" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>',
   tool:'sir',
   exp:{es:'El SIR Autodiagnóstico mide indicadores sociales y de gobernanza (Decreto 200/2022) que incluyen condiciones laborales y acceso a recursos económicos.',en:'The SIR Self-Diagnostic measures social and governance indicators (Decree 200/2022) including working conditions and access to economic resources.',ca:'El SIR Autodiagnòstic mesura indicadors socials i de governança (Decret 200/2022) que inclouen condicions laborals i accés a recursos econòmics.'}},
  {n:2,  color:'#dda63a',
   name:{es:'Hambre cero',en:'Zero hunger',ca:'Fam zero'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#dda63a"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 2</text><path d="M22 44 L22 30 Q22 24 30 24 Q38 24 38 30 L38 44" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/><line x1="18" y1="44" x2="42" y2="44" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><path d="M26 30 Q30 26 34 30" stroke="#fff" stroke-width="2" fill="none"/></svg>',
   tool:'esg',
   exp:{es:'El Diagnóstico ESG evalúa indicadores de cadena de suministro, uso de recursos y políticas de responsabilidad social vinculadas a la seguridad alimentaria.',en:'The ESG Diagnostic evaluates supply chain, resource use and social responsibility policy indicators linked to food security.',ca:'El Diagnòstic ESG avalua indicadors de cadena de subministrament, ús de recursos i polítiques de responsabilitat social vinculades a la seguretat alimentària.'}},
  {n:3,  color:'#4c9f38',
   name:{es:'Salud y bienestar',en:'Good health',ca:'Salut i benestar'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#4c9f38"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 3</text><path d="M30 42 L18 32 Q12 26 18 20 Q22 16 26 20 L30 24 L34 20 Q38 16 42 20 Q48 26 42 32 Z" fill="#fff"/></svg>',
   tool:'sir',
   exp:{es:'El SIR Autodiagnóstico incluye indicadores de bienestar laboral, seguridad en el trabajo y políticas de salud organizacional (Decreto 200/2022, dimensión social).',en:'The SIR Self-Diagnostic includes occupational wellbeing, workplace safety and organisational health policy indicators (Decree 200/2022, social dimension).',ca:'El SIR Autodiagnòstic inclou indicadors de benestar laboral, seguretat al treball i polítiques de salut organitzacional (Decret 200/2022, dimensió social).'}},
  {n:4,  color:'#c5192d',
   name:{es:'Educación de calidad',en:'Quality education',ca:'Educació de qualitat'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#c5192d"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 4</text><path d="M14 34 L30 26 L46 34 L30 42 Z" fill="#fff"/><line x1="40" y1="34" x2="40" y2="44" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><circle cx="40" cy="45" r="2" fill="#fff"/></svg>',
   tool:'web',
   exp:{es:'La Digitalización de Contenido Técnico convierte conocimiento técnico cerrado (PDFs, documentos) en microsites accesibles, indexables y educativos en abierto.',en:'Technical Content Digitalisation converts closed technical knowledge (PDFs, docs) into accessible, indexable, open educational microsites.',ca:'La Digitalització de Contingut Tècnic converteix coneixement tècnic tancat (PDFs, documents) en microsites accessibles, indexables i educatius en obert.'}},
  {n:5,  color:'#ff3a21',
   name:{es:'Igualdad de género',en:'Gender equality',ca:'Igualtat de gènere'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#ff3a21"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 5</text><circle cx="30" cy="32" r="9" fill="none" stroke="#fff" stroke-width="2.5"/><line x1="30" y1="41" x2="30" y2="48" stroke="#fff" stroke-width="2.5"/><line x1="25" y1="45" x2="35" y2="45" stroke="#fff" stroke-width="2.5"/><line x1="24" y1="26" x2="36" y2="32" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>',
   tool:'sir',
   exp:{es:'El SIR Autodiagnóstico incluye indicadores de igualdad, diversidad e inclusión de género en la estructura organizativa (Decreto 200/2022, dimensión social).',en:'The SIR Self-Diagnostic includes gender equality, diversity and inclusion indicators in organisational structure (Decree 200/2022, social dimension).',ca:'El SIR Autodiagnòstic inclou indicadors d\'igualtat, diversitat i inclusió de gènere en l\'estructura organitzativa (Decret 200/2022, dimensió social).'}},
  {n:6,  color:'#26bde2',
   name:{es:'Agua limpia y saneamiento',en:'Clean water',ca:'Aigua neta i sanejament'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#26bde2"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 6</text><path d="M30 44 Q18 36 18 28 Q18 20 30 18 Q42 20 42 28 Q42 36 30 44 Z" fill="#fff"/></svg>',
   tool:'co2',
   exp:{es:'La Calculadora de Huella de Carbono incluye el cálculo de consumo hídrico (huella de agua) en el modelo de emisiones, cuantificando el impacto sobre recursos hídricos.',en:'The Carbon Footprint Calculator includes water consumption calculation (water footprint) in the emissions model, quantifying impact on water resources.',ca:'La Calculadora d\'Empremta de Carboni inclou el càlcul de consum hídric (empremta d\'aigua) en el model d\'emissions, quantificant l\'impacte sobre recursos hídrics.'}},
  {n:7,  color:'#fcc30b',
   name:{es:'Energía asequible y no contaminante',en:'Affordable clean energy',ca:'Energia assequible i no contaminant'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#fcc30b"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 7</text><polygon points="30,16 34,28 46,28 36,36 40,48 30,40 20,48 24,36 14,28 26,28" fill="#fff"/></svg>',
   tool:'co2',
   exp:{es:'La Calculadora de Huella de Carbono cuantifica el mix energético (Alcance 2) y evalúa el impacto de migrar a fuentes renovables, clave para este ODS.',en:'The Carbon Footprint Calculator quantifies the energy mix (Scope 2) and evaluates the impact of migrating to renewable sources, key for this SDG.',ca:'La Calculadora d\'Empremta de Carboni quantifica el mix energètic (Abast 2) i avalua l\'impacte de migrar a fonts renovables, clau per a aquest ODS.'}},
  {n:8,  color:'#a21942',
   name:{es:'Trabajo decente y crecimiento económico',en:'Decent work',ca:'Treball decent i creixement econòmic'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#a21942"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 8</text><rect x="18" y="38" width="6" height="10" fill="#fff"/><rect x="27" y="30" width="6" height="18" fill="#fff"/><rect x="36" y="22" width="6" height="26" fill="#fff"/></svg>',
   tool:'esg',
   exp:{es:'El Diagnóstico ESG evalúa indicadores de condiciones laborales, derechos de los trabajadores, retribución justa y crecimiento económico sostenible (dimensión social y económica).',en:'The ESG Diagnostic evaluates labour conditions, workers\' rights, fair pay and sustainable economic growth indicators (social and economic dimensions).',ca:'El Diagnòstic ESG avalua indicadors de condicions laborals, drets dels treballadors, retribució justa i creixement econòmic sostenible (dimensió social i econòmica).'}},
  {n:9,  color:'#fd6925',
   name:{es:'Industria, innovación e infraestructura',en:'Industry & innovation',ca:'Indústria, innovació i infraestructura'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#fd6925"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 9</text><rect x="14" y="36" width="10" height="12" fill="#fff"/><rect x="25" y="28" width="10" height="20" fill="#fff"/><path d="M20 36 Q30 20 40 28" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="40" cy="28" r="4" fill="#fff"/></svg>',
   tool:'web',
   exp:{es:'La Digitalización de Contenido Técnico transforma infraestructura documental analógica en digital, habilitando innovación, acceso abierto e interoperabilidad técnica.',en:'Technical Content Digitalisation transforms analogue documentary infrastructure into digital, enabling innovation, open access and technical interoperability.',ca:'La Digitalització de Contingut Tècnic transforma infraestructura documental analògica en digital, habilitant innovació, accés obert i interoperabilitat tècnica.'}},
  {n:10, color:'#dd1367',
   name:{es:'Reducción de las desigualdades',en:'Reduced inequalities',ca:'Reducció de les desigualtats'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#dd1367"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 10</text><circle cx="22" cy="34" r="7" fill="#fff"/><circle cx="38" cy="34" r="7" fill="#fff"/><line x1="22" y1="34" x2="38" y2="34" stroke="#e5233d" stroke-width="2"/></svg>',
   tool:'sir',
   exp:{es:'El SIR Autodiagnóstico mide indicadores de equidad interna, igualdad salarial y políticas de inclusión (Decreto 200/2022), directamente ligados a la reducción de desigualdades.',en:'The SIR Self-Diagnostic measures internal equity, pay equality and inclusion policy indicators (Decree 200/2022), directly linked to reducing inequalities.',ca:'El SIR Autodiagnòstic mesura indicadors d\'equitat interna, igualtat salarial i polítiques d\'inclusió (Decret 200/2022), directament lligats a la reducció de desigualtats.'}},
  {n:11, color:'#fd9d24',
   name:{es:'Ciudades y comunidades sostenibles',en:'Sustainable cities',ca:'Ciutats i comunitats sostenibles'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#fd9d24"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 11</text><rect x="14" y="34" width="10" height="14" fill="#fff"/><rect x="26" y="26" width="8" height="22" fill="#fff"/><polygon points="30,18 38,26 22,26" fill="#fff"/><rect x="38" y="32" width="8" height="16" fill="#fff"/></svg>',
   tool:'esg',
   exp:{es:'El Diagnóstico ESG incluye indicadores de impacto territorial, movilidad sostenible y relación con la comunidad local, esenciales para ciudades y comunidades sostenibles.',en:'The ESG Diagnostic includes territorial impact, sustainable mobility and local community relationship indicators, essential for sustainable cities and communities.',ca:'El Diagnòstic ESG inclou indicadors d\'impacte territorial, mobilitat sostenible i relació amb la comunitat local, essencials per a ciutats i comunitats sostenibles.'}},
  {n:12, color:'#bf8b2e',
   name:{es:'Producción y consumo responsables',en:'Responsible consumption',ca:'Producció i consum responsables'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#bf8b2e"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 12</text><path d="M20 44 Q20 30 30 26 Q40 30 40 44" stroke="#fff" stroke-width="2.5" fill="none"/><path d="M26 26 Q30 18 34 26" stroke="#fff" stroke-width="2" fill="none"/><line x1="20" y1="36" x2="40" y2="36" stroke="#fff" stroke-width="2"/></svg>',
   tool:'gri',
   exp:{es:'La Memoria GRI documenta indicadores de consumo de recursos, gestión de residuos y cadena de suministro responsable, alineados con GRI 301, 302 y 308.',en:'The GRI Report documents resource consumption, waste management and responsible supply chain indicators, aligned with GRI 301, 302 and 308.',ca:'La Memòria GRI documenta indicadors de consum de recursos, gestió de residus i cadena de subministrament responsable, alineats amb GRI 301, 302 i 308.'}},
  {n:13, color:'#3f7e44',
   name:{es:'Acción por el clima',en:'Climate action',ca:'Acció pel clima'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#3f7e44"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 13</text><path d="M18 44 Q22 32 30 28 Q38 32 42 44" fill="#fff"/><path d="M26 28 Q30 16 34 28" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>',
   tool:'co2',
   exp:{es:'La Calculadora de Huella de Carbono es la herramienta central para cuantificar emisiones GEI y definir estrategias de reducción y compensación climática.',en:'The Carbon Footprint Calculator is the central tool for quantifying GHG emissions and defining climate reduction and compensation strategies.',ca:'La Calculadora d\'Empremta de Carboni és l\'eina central per quantificar emissions GEH i definir estratègies de reducció i compensació climàtica.'}},
  {n:14, color:'#0a97d9',
   name:{es:'Vida submarina',en:'Life below water',ca:'Vida submarina'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#0a97d9"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 14</text><path d="M14 36 Q22 28 30 34 Q38 40 46 32" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M14 42 Q22 34 30 40 Q38 46 46 38" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".6"/><ellipse cx="38" cy="30" rx="7" ry="4" fill="#fff" transform="rotate(-20 38 30)"/></svg>',
   tool:'co2',
   exp:{es:'La Calculadora de Huella de Carbono cuantifica el impacto de las operaciones sobre ecosistemas marinos mediante el cálculo de emisiones y huella de agua vinculada.',en:'The Carbon Footprint Calculator quantifies operations\' impact on marine ecosystems through emissions and linked water footprint calculation.',ca:'La Calculadora d\'Empremta de Carboni quantifica l\'impacte de les operacions sobre ecosistemes marins mitjançant el càlcul d\'emissions i empremta d\'aigua vinculada.'}},
  {n:15, color:'#56c02b',
   name:{es:'Vida de ecosistemas terrestres',en:'Life on land',ca:'Vida d\'ecosistemes terrestres'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#56c02b"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 15</text><path d="M30 46 L30 28" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M30 34 Q22 26 16 28" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M30 30 Q38 22 44 24" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M30 40 Q24 34 20 36" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
   tool:'esg',
   exp:{es:'El Diagnóstico ESG evalúa indicadores de uso del suelo, biodiversidad, impacto en ecosistemas y gestión forestal responsable (GRI 304).',en:'The ESG Diagnostic evaluates land use, biodiversity, ecosystem impact and responsible forest management indicators (GRI 304).',ca:'El Diagnòstic ESG avalua indicadors d\'ús del sòl, biodiversitat, impacte en ecosistemes i gestió forestal responsable (GRI 304).'}},
  {n:16, color:'#00689d',
   name:{es:'Paz, justicia e instituciones sólidas',en:'Peace & justice',ca:'Pau, justícia i institucions sòlides'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#00689d"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 16</text><path d="M20 44 L30 18 L40 44" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="22" y1="36" x2="38" y2="36" stroke="#fff" stroke-width="2"/></svg>',
   tool:'gw',
   exp:{es:'La Auditoría de Greenwashing verifica que las afirmaciones ESG sean transparentes, veraces y verificables — principios fundamentales para la integridad institucional y la lucha contra la corrupción.',en:'The Greenwashing Audit verifies that ESG claims are transparent, truthful and verifiable — fundamental principles for institutional integrity and anti-corruption.',ca:'L\'Auditoria de Greenwashing verifica que les afirmacions ESG siguen transparents, veraces i verificables — principis fonamentals per a la integritat institucional i la lluita contra la corrupció.'}},
  {n:17, color:'#19486a',
   name:{es:'Alianzas para lograr los objetivos',en:'Partnerships for the goals',ca:'Aliances per aconseguir els objectius'},
   ico:'<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#19486a"/><text x="30" y="22" text-anchor="middle" font-size="11" fill="#fff" font-family="monospace" font-weight="bold">ODS 17</text><circle cx="20" cy="34" r="6" fill="none" stroke="#fff" stroke-width="2"/><circle cx="40" cy="34" r="6" fill="none" stroke="#fff" stroke-width="2"/><circle cx="30" cy="22" r="6" fill="none" stroke="#fff" stroke-width="2"/><line x1="25" y1="30" x2="35" y2="30" stroke="#fff" stroke-width="1.5"/><line x1="23" y1="29" x2="27" y2="36" stroke="#fff" stroke-width="1.5"/><line x1="37" y1="29" x2="33" y2="36" stroke="#fff" stroke-width="1.5"/></svg>',
   tool:'gri',
   exp:{es:'La Memoria GRI es el estándar internacional que facilita la transparencia y las alianzas multi-actor al proporcionar un lenguaje común para reportar el progreso en los ODS.',en:'The GRI Report is the international standard that facilitates transparency and multi-stakeholder partnerships by providing a common language for reporting SDG progress.',ca:'La Memòria GRI és l\'estàndard internacional que facilita la transparència i les aliances multi-actor en proporcionar un llenguatge comú per reportar el progrés en els ODS.'}},
];

// ── RUNNER TÉRMINOS ───────────────────────────────────────────────────────────
var RUNNER_GOOD = ['API ESG','GRI Bot','JSON-LD','Python','CleanTech','SWD v3','Net Zero','Open Data','Smart Grid','CSRD','Water Tech','Low-code'];
var RUNNER_BAD  = ['PDF','Excel','Greenwash','Sin datos','Word','No API','Sin código','Manual'];

// ── ESTADO ────────────────────────────────────────────────────────────────────
var S = {
  lang:'es', screen:'intro', totalScore:0,
  libCards:[], libFlipped:[],
  l2Current:0, l2Results:[], l2Score:0, l2Answered:false, l2Chose:null, l2Opts:[],
  l3Current:0, l3Results:[], l3Score:0, l3Answered:false,
  l4Placed:{}, l4Checked:false, l4Score:0,
  runScore:0, runLives:3, runDead:false, runWon:false,
  animId:null, runActive:false,
  lvlDone:false, lvlDoneFrom:null,
  bonusUnlocked:false,
  odsCurrent:0, odsOrder:[], odsResults:[], odsScore:0, odsAnswered:false, odsOpts:[],
};

function t(k){ return TX[S.lang][k] || TX.es[k] || ''; }
function pick10(){ return LIBRARY.slice().sort(function(){return Math.random()-.5;}).slice(0,10); }
function shuffle(arr){ return arr.slice().sort(function(){return Math.random()-.5;}); }
function rand(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

// ── ROOT ──────────────────────────────────────────────────────────────────────
var ROOT;
function init(){
  ROOT = document.getElementById('byte-game-root');
  if(!ROOT) return;
  ROOT.innerHTML = '<div class="bg-wrap">'
    +'<div class="bg-header">'
    +'<span class="bg-logo">GREENTECH<span>.GAME()</span></span>'
    +'<div class="bg-lang" id="bg-lang">'
    +'<button onclick="bgSetLang(\'es\')">ES</button>'
    +'<button onclick="bgSetLang(\'en\')">EN</button>'
    +'<button onclick="bgSetLang(\'ca\')">CA</button>'
    +'</div></div>'
    +'<div class="bg-progbar" id="bg-progbar" style="display:none">'
    +'<button class="bg-back" onclick="bgGo(\'intro\')" id="bg-back"></button>'
    +'<div class="bg-dots" id="bg-dots">'
    +'<div class="bg-dot" id="bd0"></div><div class="bg-dot" id="bd1"></div>'
    +'<div class="bg-dot" id="bd2"></div><div class="bg-dot" id="bd3"></div>'
    +'<div class="bg-dot" id="bd4"></div>'
    +'</div>'
    +'<div class="bg-pts-live" id="bg-pts-live"></div>'
    +'</div>'
    +'<div id="bg-content"></div>'
    +'<div class="bg-footer"><span class="bg-footer-txt">© Yel Martínez · yel-martinez-portfolio.com</span><span class="bg-footer-txt">v4.2 · GPL v2</span></div>'
    +'</div>';
  render();
}

function render(){
  stopRunner();
  updateHeader();
  var c = document.getElementById('bg-content');
  if(!c) return;
  if(S.lvlDone){ c.innerHTML = renderLvlDone(); return; }
  switch(S.screen){
    case 'intro':   c.innerHTML = renderIntro(); break;
    case 'lib':     c.innerHTML = renderLib(); break;
    case 'l1':      c.innerHTML = renderL1(); startRunner(); break;
    case 'l2':      c.innerHTML = renderL2(); break;
    case 'l3':      c.innerHTML = renderL3(); break;
    case 'l4':      c.innerHTML = renderL4(); initDragDrop(); break;
    case 'results': c.innerHTML = renderResults(); animResults(); break;
    case 'ods':     c.innerHTML = renderODS(); break;
  }
}

function updateHeader(){
  // lang buttons
  var btns = document.querySelectorAll('#bg-lang button');
  var langs = ['es','en','ca'];
  btns.forEach(function(b,i){ b.className = langs[i]===S.lang?'active':''; });
  // back button
  var back = document.getElementById('bg-back');
  if(back) back.textContent = t('backBtn');
  // progress bar
  var pb = document.getElementById('bg-progbar');
  var screens = ['lib','l1','l2','l3','l4'];
  var idx = screens.indexOf(S.screen);
  pb.style.display = (idx>=0 || S.lvlDone) ? 'flex' : 'none';
  if(idx>=0){
    ['bd0','bd1','bd2','bd3','bd4'].forEach(function(id,i){
      var d = document.getElementById(id);
      if(!d) return;
      d.className = 'bg-dot'+(i<idx?' done':i===idx?' active':'');
    });
  }
  // pts live
  var live = document.getElementById('bg-pts-live');
  if(live && S.screen!=='intro' && S.screen!=='results'){
    live.textContent = S.totalScore+' '+t('score');
  }
}

// ── HELPERS HTML ──────────────────────────────────────────────────────────────
function byteBox(msg){
  return '<div class="bg-byte-box">'+byteSVG(56)
    +'<div class="bg-byte-text"><div class="bg-byte-label">BYTE</div>'
    +'<div class="bg-byte-msg">'+msg+'</div></div></div>';
}
function badge(n,label,color){
  return '<div class="bg-badge" style="color:'+color+';border-color:'+color+'"><span class="bg-badge-n">'+n+'</span><span>'+label+'</span></div>';
}
function pips(total,results,current,col){
  var h='<div class="bg-pips">';
  for(var i=0;i<total;i++){
    var cls='bg-pip'+(i<results.length?(results[i]?' ok':' bad'):i===current?' cur':'');
    if(i===current && col) cls='bg-pip cur-'+col;
    h+='<div class="'+cls+'"></div>';
  }
  return h+'</div>';
}
function fbk(type,html){
  return '<div class="bg-fbk bg-fbk--'+type+'">'+html+'</div>';
}
function btn(label,onclick,extra){
  extra = extra||'';
  return '<button class="bg-btn '+extra+'" onclick="'+onclick+'">'+label+'</button>';
}

// ── INTRO ─────────────────────────────────────────────────────────────────────
function renderIntro(){
  var chips = [
    {icon:ICO.lib,    color:'#00f5ff', n:'00', name:t('lvl')[0]},
    {icon:ICO.runner, color:'#00ff88', n:'01', name:t('lvl')[1]},
    {icon:ICO.tools,  color:'#ffe600', n:'02', name:t('lvl')[2]},
    {icon:ICO.vf,     color:'#bf5fff', n:'03', name:t('lvl')[3]},
    {icon:ICO.audit,  color:'#ff2d55', n:'04', name:t('lvl')[4]},
  ];
  return '<div class="bg-panel--flush">'
    +'<div class="bg-intro-hero">'
    +'<div class="bg-intro-tag"><span class="bg-pulse-dot"></span>'+t('tag')+'</div>'
    +'<div class="bg-intro-byte">'+byteSVG(100)+'</div>'
    +'<h1 class="bg-intro-h1">GREENTECH<span>.GAME()</span></h1>'
    +'<p class="bg-intro-desc">'+t('introText')+'</p>'
    +'<p class="bg-intro-sub">'+t('introSub')+'</p>'
    +'<div class="bg-insert-coin">'+t('pressStart')+'</div>'
    +'<button class="bg-cta" onclick="bgGo(\'lib\')">'+t('start')+' &#9654;</button>'
    +'</div>'
    +'<div class="bg-chips-row">'
    +chips.map(function(ch){
      return '<div class="bg-chip" style="color:'+ch.color+';border-top:2px solid '+ch.color+'">'
        +'<div class="bg-chip-icon">'+ch.icon+'</div>'
        +'<span class="bg-chip-n" style="color:'+ch.color+'">'+ch.n+'</span>'
        +'<span class="bg-chip-name">'+ch.name+'</span>'
        +'</div>';
    }).join('')
    +'</div></div>';
}

// ── PANTALLA NIVEL COMPLETADO ─────────────────────────────────────────────────
function renderLvlDone(){
  var from = S.lvlDoneFrom;
  var nextLabel = t('lvlDoneNext');
  var nextFn = 'bgLvlDoneNext()';
  var msgs = {lib:t('byteLib'),l1:t('byteL1'),l2:t('byteL2'),l3:t('byteL3'),l4:t('byteL4')};
  var colors = {lib:'#00f5ff',l1:'#00ff88',l2:'#ffe600',l3:'#bf5fff',l4:'#ff2d55'};
  var col = colors[from]||'#ffe600';
  return '<div class="bg-lvldone">'
    +'<div class="bg-lvldone-byte">'+byteSVG(80)+'</div>'
    +'<div class="bg-lvldone-check" style="color:'+col+'">&#10003;</div>'
    +'<div class="bg-lvldone-title" style="color:'+col+'">'+t('lvlDoneTitle').toUpperCase()+'</div>'
    +'<div class="bg-lvldone-pts">+'+S.lastLvlPts+' <span>'+t('score')+'</span></div>'
    +'<div class="bg-lvldone-total">Total: '+S.totalScore+' '+t('score')+'</div>'
    +'<div class="bg-lvldone-msg">'+msgs[from]+'</div>'
    +'<button class="bg-btn bg-btn--primary bg-btn--wide" onclick="'+nextFn+'">'+nextLabel+'</button>'
    +'</div>';
}

// ── BIBLIOTECA ────────────────────────────────────────────────────────────────
function renderLib(){
  if(!S.libCards.length) S.libCards = pick10();
  var cards = S.libCards.map(function(c,i){
    var flipped = S.libFlipped.indexOf(i)>=0;
    var isGreen = c.tag==='tech';
    var col = isGreen?'#00ff88':'#ff2d55';
    return '<div class="bg-lib-card'+(flipped?' flipped':'')+'" onclick="bgLibFlip('+i+')" style="'+(flipped?'border-color:'+col:'')+'"><div class="bg-lib-tag" style="color:'+col+'">'+( isGreen?t('techTrue'):t('techFalse'))+'</div>'
      +'<div class="bg-lib-term">'+(c[S.lang]||c.es)+'</div>'
      +(flipped
        ?'<div class="bg-lib-def">'+(c.d[S.lang]||c.d.es)+'</div>'
        :'<div class="bg-lib-hint">&#9654; '+t('libHint')+'</div>')
      +'</div>';
  }).join('');
  return '<div class="bg-panel">'
    +badge('00',t('libTitle'),'#00f5ff')
    +'<p class="bg-sub">'+t('libSub')+'</p>'
    +'<div class="bg-lib-grid">'+cards+'</div>'
    +byteBox(t('byteLib'))
    +btn(t('next'),'bgFinishLib()','bg-btn--primary bg-btn--wide')
    +'</div>';
}

// ── RUNNER ────────────────────────────────────────────────────────────────────
function renderL1(){
  var hearts='';
  for(var i=0;i<Math.max(0,S.runLives);i++) hearts+='<span class="bg-heart">&#9829;</span>';
  var html='<div class="bg-panel">'
    +badge('01',t('l1Title'),'#00ff88')
    +'<p class="bg-sub">'+t('l1Sub')+'</p>'
    +'<div class="bg-scorebar">'
    +'<div class="bg-score-item"><div class="bg-score-val" id="r-score">'+S.runScore+'</div><div class="bg-score-lbl">'+t('score')+'</div></div>'
    +'<div class="bg-score-item"><div class="bg-score-val" id="r-lives">'+hearts+'</div><div class="bg-score-lbl">'+t('lives')+'</div></div>'
    +'</div>'
    +'<canvas id="bg-canvas" width="600" height="180"></canvas>';
  if(S.runDead||S.runWon){
    html+=fbk(S.runWon?'ok':'warn','<strong>'+(S.runWon?t('runWon'):t('noLives'))+'</strong>');
    html+='<div class="bg-btn-row">'+btn(t('next'),'bgFinishL1()','bg-btn--primary')+'</div>';
  } else {
    html+='<button class="bg-jump-btn" id="bg-jump-btn">'+t('jump')+'</button>';
    html+='<div class="bg-btn-row">'+btn(t('skip'),'bgFinishL1()','bg-btn--ghost')+'</div>';
  }
  html+='</div>';
  return html;
}

// ── RUNNER LÓGICA ─────────────────────────────────────────────────────────────
var byteY=0,byteVY=0,byteGround=true;
var obstacles=[],runFrame=0,runSpeed=3;
var BYTE_W=32,BYTE_H=46,BYTE_X=60,GROUND_R=0.82;

function startRunner(){
  var cv=document.getElementById('bg-canvas');
  if(!cv||S.runDead||S.runWon) return;
  S.runActive=true;
  byteY=0;byteVY=0;byteGround=true;obstacles=[];runFrame=0;runSpeed=3;
  byteY=cv.height*GROUND_R-BYTE_H;
  var doJump=function(e){if(e&&e.preventDefault)e.preventDefault();if(byteGround&&S.runActive){byteVY=-13;byteGround=false;}};
  cv.addEventListener('touchstart',doJump,{passive:false});
  cv.addEventListener('mousedown',doJump);
  var jb=document.getElementById('bg-jump-btn');
  if(jb){jb.addEventListener('touchstart',doJump,{passive:false});jb.addEventListener('mousedown',doJump);}
  var kh=function(e){if(e.code==='Space'||e.code==='ArrowUp'){e.preventDefault();doJump();}};
  document.addEventListener('keydown',kh);
  runLoop(cv);
}
function stopRunner(){S.runActive=false;if(S.animId){cancelAnimationFrame(S.animId);S.animId=null;}}
function runLoop(cv){
  if(!S.runActive) return;
  var ctx=cv.getContext('2d'),W=cv.width,H=cv.height,GY=H*GROUND_R;
  if(!byteGround){byteVY+=0.55;byteY+=byteVY;}
  if(byteY>=GY-BYTE_H){byteY=GY-BYTE_H;byteGround=true;byteVY=0;}
  runFrame++;
  if(runSpeed<7&&runFrame%300===0) runSpeed+=0.4;
  if(runFrame%Math.round(Math.max(55,90-runFrame*0.03))===0){
    var good=Math.random()>0.4;
    var label=good?rand(RUNNER_GOOD):rand(RUNNER_BAD);
    var tw=Math.min(80,Math.max(50,label.length*7+14));
    obstacles.push({good:good,label:label,x:W+10,y:GY-26,w:tw,h:26});
  }
  // bg
  ctx.fillStyle='#050408';ctx.fillRect(0,0,W,H);
  // grid lines
  ctx.strokeStyle='rgba(0,245,255,0.04)';ctx.lineWidth=1;
  for(var g=0;g<8;g++){ctx.beginPath();ctx.moveTo(g*(W/7),0);ctx.lineTo(g*(W/7),H);ctx.stroke();}
  // stars
  ctx.fillStyle='#ffe600';
  for(var s=0;s<6;s++){var sx=((runFrame*0.4+s*97)%W);ctx.fillRect(sx,6+s*8,2,2);}
  // ground
  ctx.fillStyle='#2a2540';ctx.fillRect(0,GY,W,2);
  ctx.strokeStyle='rgba(255,230,0,0.2)';ctx.lineWidth=1;
  for(var gr=0;gr<10;gr++){var gx=((gr*70-runFrame*runSpeed*0.4)%W+W)%W;ctx.beginPath();ctx.moveTo(gx,GY+1);ctx.lineTo(gx+35,GY+1);ctx.stroke();}
  // obstacles
  obstacles.forEach(function(ob){
    ob.x-=runSpeed;
    // box
    ctx.fillStyle=ob.good?'rgba(0,255,136,0.15)':'rgba(255,45,85,0.15)';
    ctx.strokeStyle=ob.good?'#00ff88':'#ff2d55';
    ctx.lineWidth=1.5;
    ctx.beginPath();ctx.rect(ob.x,ob.y,ob.w,ob.h);ctx.fill();ctx.stroke();
    // label
    ctx.fillStyle=ob.good?'#00ff88':'#ff2d55';
    ctx.font='bold 10px "Share Tech Mono",monospace';
    ctx.textAlign='center';
    ctx.fillText(ob.label.slice(0,10),ob.x+ob.w/2,ob.y+17);
  });
  // BYTE — pixel art simple
  var bx=BYTE_X,by=byteY;
  var legA=byteGround?Math.sin(runFrame*0.25)*5:0;
  // body
  ctx.fillStyle='#13101f';ctx.strokeStyle='#ffe600';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.rect(bx,by+16,BYTE_W,BYTE_H-18);ctx.fill();ctx.stroke();
  // screen
  ctx.fillStyle='#ffe600';ctx.beginPath();ctx.rect(bx+4,by+20,BYTE_W-8,16);ctx.fill();
  // screen content pulse
  ctx.fillStyle=runFrame%40<20?'#050408':'#00ff88';ctx.beginPath();ctx.arc(bx+BYTE_W/2,by+28,4,0,Math.PI*2);ctx.fill();
  // head
  ctx.fillStyle='#fff';ctx.strokeStyle='#1a1830';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.rect(bx+2,by,BYTE_W-4,18);ctx.fill();ctx.stroke();
  // eyes
  ctx.fillStyle='#1a1830';ctx.beginPath();ctx.arc(bx+10,by+9,3,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(bx+22,by+9,3,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#ffe600';ctx.beginPath();ctx.arc(bx+10,by+9,1.5,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(bx+22,by+9,1.5,0,Math.PI*2);ctx.fill();
  // smile
  ctx.strokeStyle='#ff9eb5';ctx.lineWidth=1.5;ctx.beginPath();
  ctx.moveTo(bx+9,by+15);ctx.quadraticCurveTo(bx+16,by+19,bx+23,by+14);ctx.stroke();
  // legs
  ctx.fillStyle='#ffe600';ctx.strokeStyle='#1a1830';ctx.lineWidth=1;
  ctx.beginPath();ctx.rect(bx+4,by+BYTE_H-10+legA,10,10);ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.rect(bx+BYTE_W-14,by+BYTE_H-10-legA,10,10);ctx.fill();ctx.stroke();
  // collision
  var hit=false;
  obstacles=obstacles.filter(function(ob){
    if(ob.x+ob.w<0) return false;
    var coll=ob.x<bx+BYTE_W&&ob.x+ob.w>bx&&ob.y<by+BYTE_H&&ob.y+ob.h>by;
    if(coll){
      if(ob.good){S.runScore+=10;S.totalScore+=10;}else{S.runLives--;}
      hit=true; return false;
    }
    return true;
  });
  if(hit){
    var sc=document.getElementById('r-score');
    var lv=document.getElementById('r-lives');
    if(sc) sc.textContent=S.runScore;
    if(lv){var h2='';for(var q=0;q<Math.max(0,S.runLives);q++)h2+='<span class="bg-heart">&#9829;</span>';lv.innerHTML=h2;}
    if(S.runLives<=0){S.runDead=true;stopRunner();render();return;}
    if(S.runScore>=100){S.runWon=true;stopRunner();render();return;}
  }
  S.animId=requestAnimationFrame(function(){runLoop(cv);});
}

// ── NIVEL 2 ───────────────────────────────────────────────────────────────────
function renderL2(){
  var q=L2[S.l2Current];
  if(!S.l2Opts.length||!S.l2Answered){
    S.l2Opts=shuffle([{text:q.cor[S.lang],ok:true},{text:q.wr[S.lang],ok:false}]);
  }
  var html='<div class="bg-panel">'
    +badge('02',t('l2Title'),'#ffe600')
    +pips(L2.length,S.l2Results,S.l2Current,'l2')
    // herramienta visual
    +'<div class="bg-tool-card" style="border-color:'+q.color+'">'
    +'<div class="bg-tool-icon" style="color:'+q.color+'">'+q.icon+'</div>'
    +'<div class="bg-tool-name" style="color:'+q.color+'">'+q.tool[S.lang]+'</div>'
    +'<div class="bg-tool-q">'+t('l2q')+'</div>'
    +'</div>'
    +'<div class="bg-opts">';
  S.l2Opts.forEach(function(opt,i){
    var cls='bg-opt';
    if(S.l2Answered){
      cls+=opt.ok?' bg-opt--ok':' bg-opt--bad';
    }
    html+='<button class="'+cls+'" onclick="bgL2Answer('+i+')" '+(S.l2Answered?'disabled':'')+'>'+opt.text+'</button>';
  });
  html+='</div>';
  if(S.l2Answered){
    var chose=S.l2Opts[S.l2Chose];
    var ok=chose&&chose.ok;
    html+=fbk(ok?'ok':'bad','<strong>'+t(ok?'correct':'wrong')+'</strong><br>'+q.exp[S.lang]);
    html+='<div class="bg-btn-row">'+btn(t('next'),'bgL2Next()','bg-btn--primary')+'</div>';
  }
  html+='</div>';
  return html;
}

// ── NIVEL 3 ───────────────────────────────────────────────────────────────────
function renderL3(){
  var q=L3[S.l3Current];
  var html='<div class="bg-panel">'
    +badge('03',t('l3Title'),'#bf5fff')
    +pips(L3.length,S.l3Results,S.l3Current,'l3')
    +'<div class="bg-q-card">'
    +'<div class="bg-q-num">'+(S.l3Current+1)+' / '+L3.length+'</div>'
    +'<div class="bg-q-text">'+q.q[S.lang]+'</div>'
    +'</div>'
    +'<p class="bg-sub">'+t('l3Sub')+'</p>'
    +'<div class="bg-vf-row">'
    +'<button class="bg-vf-btn bg-vf-true'+(S.l3Answered&&q.a===true?' bg-vf-correct':S.l3Answered&&q.a!==true?' bg-vf-wrong':'')+'" onclick="bgL3Answer(true)" '+(S.l3Answered?'disabled':'')+'><span class="bg-vf-icon">&#10003;</span>'+t('trueBtn')+'</button>'
    +'<button class="bg-vf-btn bg-vf-false'+(S.l3Answered&&q.a===false?' bg-vf-correct':S.l3Answered&&q.a!==false?' bg-vf-wrong':'')+'" onclick="bgL3Answer(false)" '+(S.l3Answered?'disabled':'')+'><span class="bg-vf-icon">&#10007;</span>'+t('falseBtn')+'</button>'
    +'</div>';
  if(S.l3Answered){
    var last=S.l3Results[S.l3Results.length-1];
    html+=fbk(last?'ok':'bad','<strong>'+t(last?'correct':'wrong')+'</strong><br>'+q.exp[S.lang]);
    html+='<div class="bg-btn-row">'+btn(t('next'),'bgL3Next()','bg-btn--primary')+'</div>';
  }
  html+='</div>';
  return html;
}

// ── NIVEL 4 — DRAG & DROP ─────────────────────────────────────────────────────
function renderL4(){
  var blocks=shuffle(L4_BLOCKS);
  var html='<div class="bg-panel">'
    +badge('04',t('l4Title'),'#ff2d55')
    +'<p class="bg-sub">'+t('l4Sub')+'</p>'
    +'<div class="bg-drag-layout">'
    // bloques a colocar
    +'<div class="bg-drag-pool" id="bg-pool">';
  blocks.forEach(function(b){
    if(S.l4Placed[b.id]===undefined){
      html+='<div class="bg-drag-block" draggable="true" data-id="'+b.id+'" id="bl-'+b.id+'">'+b.t[S.lang]+'</div>';
    }
  });
  html+='</div>'
    // columnas
    +'<div class="bg-drag-cols">'
    +'<div class="bg-drag-col bg-col-good" id="col-good">'
    +'<div class="bg-col-title" style="color:#00ff88">'+t('l4good')+'</div>';
  // bloques ya colocados en good
  L4_BLOCKS.forEach(function(b){
    if(S.l4Placed[b.id]==='good'){
      var ok=!b.bad;
      html+='<div class="bg-placed-block '+(S.l4Checked?(ok?'bg-placed-ok':'bg-placed-err'):'bg-placed-neutral')+'" data-id="'+b.id+'">'+b.t[S.lang]+(S.l4Checked&&!ok?'<div class="bg-why">'+b.why[S.lang]+'</div>':'')+'</div>';
    }
  });
  html+='<div class="bg-drop-hint">'+t('l4drag')+'</div>'
    +'</div>'
    +'<div class="bg-drag-col bg-col-bad" id="col-bad">'
    +'<div class="bg-col-title" style="color:#ff2d55">'+t('l4bad')+'</div>';
  L4_BLOCKS.forEach(function(b){
    if(S.l4Placed[b.id]==='bad'){
      var ok2=b.bad;
      html+='<div class="bg-placed-block '+(S.l4Checked?(ok2?'bg-placed-ok':'bg-placed-err'):'bg-placed-neutral')+'" data-id="'+b.id+'">'+b.t[S.lang]+(S.l4Checked&&!ok2?'<div class="bg-why">'+b.why[S.lang]+'</div>':'')+'</div>';
    }
  });
  html+='<div class="bg-drop-hint">'+t('l4drag')+'</div>'
    +'</div></div></div>';
  // acciones
  var allPlaced=Object.keys(S.l4Placed).length===L4_BLOCKS.length;
  if(S.l4Checked){
    html+=fbk('info','<strong>'+t('l4title')+'</strong> '+{es:'Las marcadas en rojo tienen explicación abajo.',en:'Red-marked ones have an explanation below.',ca:'Les marcades en roig tenen explicació a baix.'}[S.lang]);
    html+='<div class="bg-btn-row">'+btn(t('next'),'bgFinishL4()','bg-btn--primary')+'</div>';
  } else {
    html+='<div class="bg-btn-row">';
    if(allPlaced) html+=btn(t('l4check'),'bgL4Check()','bg-btn--primary');
    html+=btn(t('reveal'),'bgL4Reveal()','bg-btn--ghost')+'</div>';
  }
  html+='</div>';
  return html;
}

function initDragDrop(){
  // draggable blocks
  var blocks=document.querySelectorAll('[draggable]');
  blocks.forEach(function(b){
    b.addEventListener('dragstart',function(e){e.dataTransfer.setData('text/plain',b.dataset.id);b.classList.add('dragging');});
    b.addEventListener('dragend',function(){b.classList.remove('dragging');});
    // touch
    b.addEventListener('touchstart',onTouchStart,{passive:true});
    b.addEventListener('touchmove',onTouchMove,{passive:false});
    b.addEventListener('touchend',onTouchEnd);
  });
  var cols=['col-good','col-bad'];
  cols.forEach(function(colId){
    var col=document.getElementById(colId);
    if(!col) return;
    col.addEventListener('dragover',function(e){e.preventDefault();col.classList.add('bg-col-over');});
    col.addEventListener('dragleave',function(){col.classList.remove('bg-col-over');});
    col.addEventListener('drop',function(e){
      e.preventDefault();col.classList.remove('bg-col-over');
      var id=parseInt(e.dataTransfer.getData('text/plain'));
      S.l4Placed[id]=colId==='col-good'?'good':'bad';
      var c=document.getElementById('bg-content');
      if(c){c.innerHTML=renderL4();initDragDrop();}
    });
  });
}

// touch drag para móvil
var touchBlock=null,touchClone=null,touchOffX=0,touchOffY=0;
function onTouchStart(e){
  touchBlock=e.currentTarget;
  var r=touchBlock.getBoundingClientRect();
  var t0=e.touches[0];
  touchOffX=t0.clientX-r.left; touchOffY=t0.clientY-r.top;
  touchClone=touchBlock.cloneNode(true);
  touchClone.style.cssText='position:fixed;z-index:9999;opacity:0.85;pointer-events:none;width:'+r.width+'px;left:'+(t0.clientX-touchOffX)+'px;top:'+(t0.clientY-touchOffY)+'px;';
  document.body.appendChild(touchClone);
}
function onTouchMove(e){
  e.preventDefault();
  if(!touchClone) return;
  var t0=e.touches[0];
  touchClone.style.left=(t0.clientX-touchOffX)+'px';
  touchClone.style.top=(t0.clientY-touchOffY)+'px';
}
function onTouchEnd(e){
  if(!touchClone) return;
  var t0=e.changedTouches[0];
  touchClone.remove(); touchClone=null;
  var id=parseInt(touchBlock.dataset.id);
  var good=document.getElementById('col-good');
  var bad=document.getElementById('col-bad');
  if(good&&bad){
    var rg=good.getBoundingClientRect(),rb=bad.getBoundingClientRect();
    if(t0.clientX>=rg.left&&t0.clientX<=rg.right&&t0.clientY>=rg.top&&t0.clientY<=rg.bottom) S.l4Placed[id]='good';
    else if(t0.clientX>=rb.left&&t0.clientX<=rb.right&&t0.clientY>=rb.top&&t0.clientY<=rb.bottom) S.l4Placed[id]='bad';
  }
  touchBlock=null;
  var c=document.getElementById('bg-content');
  if(c){c.innerHTML=renderL4();initDragDrop();}
}

// ── NIVEL BONUS — ODS ─────────────────────────────────────────────────────────
function renderODS(){
  if(!S.odsOrder.length){
    // mezclar los 17 ODS al inicio
    S.odsOrder = ODS.slice().sort(function(){return Math.random()-.5;});
    S.odsCurrent=0; S.odsResults=[]; S.odsScore=0; S.odsAnswered=false; S.odsOpts=[];
  }
  var ods = S.odsOrder[S.odsCurrent];
  // generar 3 opciones: correcta + 2 distractores únicos
  if(!S.odsOpts.length || !S.odsAnswered){
    var correctKey = ods.tool;
    var allKeys = Object.keys(ODS_TOOLS).filter(function(k){return k!==correctKey;});
    allKeys = allKeys.sort(function(){return Math.random()-.5;}).slice(0,2);
    var optsRaw = [correctKey].concat(allKeys).sort(function(){return Math.random()-.5;});
    S.odsOpts = optsRaw.map(function(k){return {key:k, label:ODS_TOOLS[k][S.lang]};});
  }
  var pct = Math.round((S.odsCurrent/17)*100);
  var html='<div class="bg-panel">'
    +'<div class="bg-ods-header">'
    +badge('BONUS',t('odsTitle'),'#ffe600')
    +'<div class="bg-ods-bar-wrap"><div class="bg-ods-bar-track"><div class="bg-ods-bar-fill" style="width:'+pct+'%"></div></div>'
    +'<span class="bg-ods-prog">'+t('odsProgress')+' '+(S.odsCurrent+1)+' / 17</span></div>'
    +'</div>'
    // ODS card visual
    +'<div class="bg-ods-card">'
    +'<div class="bg-ods-ico">'+ods.ico+'</div>'
    +'<div class="bg-ods-meta">'
    +'<div class="bg-ods-num" style="color:'+ods.color+'">ODS '+ods.n+'</div>'
    +'<div class="bg-ods-name">'+ods.name[S.lang]+'</div>'
    +'</div>'
    +'</div>'
    +'<p class="bg-sub">'+t('odsSub')+'</p>'
    // opciones
    +'<div class="bg-opts">';
  S.odsOpts.forEach(function(opt,i){
    var isCorrect = opt.key===ods.tool;
    var cls='bg-opt';
    if(S.odsAnswered){
      cls += isCorrect?' bg-opt--ok':' bg-opt--bad';
    }
    html+='<button class="'+cls+'" onclick="bgOdsAnswer(\''+opt.key+'\')" '+(S.odsAnswered?'disabled':'')+'>'+opt.label+'</button>';
  });
  html+='</div>';
  if(S.odsAnswered){
    var choseKey = S.odsLastChose;
    var ok = choseKey===ods.tool;
    html+=fbk(ok?'ok':'bad','<strong>'+t(ok?'correct':'wrong')+'</strong><br>'+ods.exp[S.lang]);
    var isLast = S.odsCurrent>=16;
    html+='<div class="bg-btn-row">'+btn(isLast?t('odsFinalTitle')+' →':t('next'),'bgOdsNext()','bg-btn--primary')+'</div>';
  }
  html+='</div>';
  return html;
}

// ── RESULTADOS ────────────────────────────────────────────────────────────────
function renderResults(){
  var pts=S.totalScore;
  var pct=Math.min(100,Math.round(pts/200*100));
  var rank=pct>=75?'S':pct>=55?'A':pct>=35?'B':'C';
  var rankCol=pct>=75?'#ffe600':pct>=55?'#00ff88':pct>=35?'#00f5ff':'#ff2d55';
  var byteMsg=pct>=75?t('byteHi'):pct>=40?t('byteMid'):t('byteLow');
  var suiteHtml=SUITE.map(function(tool){
    return '<a class="bg-suite-card" href="'+tool.url+'" target="_blank" rel="noopener" style="border-color:'+tool.color+'">'
      +'<div class="bg-suite-icon" style="color:'+tool.color+'">'+tool.ico+'</div>'
      +'<div class="bg-suite-name" style="color:'+tool.color+'">'+tool.name[S.lang]+'</div>'
      +'<div class="bg-suite-desc">'+tool.desc[S.lang]+'</div>'
      +'<div class="bg-suite-btn" style="color:'+tool.color+'">'+t('suiteBtn')+'</div>'
      +'</a>';
  }).join('');

  // bloque bonus ODS (siempre visible al terminar el juego)
  var bonusHtml = '<div class="bg-bonus-unlock">'
    +'<div class="bg-bonus-badge">'+t('bonusUnlock')+'</div>'
    +'<div class="bg-bonus-desc">'+t('bonusDesc')+'</div>'
    +(S.odsResults.length>0
      ?'<div class="bg-bonus-done">'+t('odsFinalTitle')+' · '+S.odsScore+' '+t('odsFinalSub')+'<br>'
        +'<div class="bg-ods-chips">'
        +S.odsOrder.slice(0,S.odsResults.length).map(function(o,i){
          return '<div class="bg-ods-chip" style="background:'+o.color+';opacity:'+(S.odsResults[i]?1:.4)+'" title="ODS '+o.n+'">'+o.n+'</div>';
        }).join('')
        +'</div></div>'
      :'')
    +'<button class="bg-btn bg-btn--bonus bg-btn--wide" onclick="bgStartOds()">'+t('bonusBtn')+'</button>'
    +'</div>';

  return '<div class="bg-results-wrap">'
    +'<div class="bg-results-top">'
    +'<div class="bg-results-byte">'+byteSVG(80)+'</div>'
    +'<div class="bg-results-title">'+t('resultsTitle')+'</div>'
    +'<div class="bg-results-rank" style="color:'+rankCol+';text-shadow:3px 3px 0 rgba(0,0,0,0.4),0 0 30px '+rankCol+'">'+rank+'</div>'
    +'<div class="bg-results-pts">'+pts+'</div>'
    +'<div class="bg-results-sub">'+t('resultsSub')+'</div>'
    +'<div class="bg-results-bar"><div class="bg-results-fill" id="bg-rfill" style="width:0%;background:'+rankCol+'"></div></div>'
    +byteBox(byteMsg)
    +bonusHtml
    +'<button class="bg-btn bg-btn--primary bg-btn--wide" onclick="bgRestart()" style="margin-top:12px">'+t('restart2')+'</button>'
    +'</div>'
    +'<div class="bg-suite-section">'
    +'<div class="bg-suite-header">'
    +'<div class="bg-suite-title">'+t('suiteTitle')+'</div>'
    +'<div class="bg-suite-sub">'+t('suiteSub')+'</div>'
    +'</div>'
    +'<div class="bg-suite-grid">'+suiteHtml+'</div>'
    +'</div>'
    +'</div>';
}
function animResults(){
  setTimeout(function(){
    var f=document.getElementById('bg-rfill');
    if(f) f.style.width=Math.min(100,Math.round(S.totalScore/200*100))+'%';
  },200);
}

// ── ACCIONES GLOBALES ─────────────────────────────────────────────────────────
window.bgSetLang=function(l){S.lang=l;render();};
window.bgGo=function(sc){
  if(sc==='l1'){S.runScore=0;S.runLives=3;S.runDead=false;S.runWon=false;}
  S.lvlDone=false;S.screen=sc;render();
};

window.bgLibFlip=function(i){
  var idx=S.libFlipped.indexOf(i);
  if(idx>=0) S.libFlipped.splice(idx,1); else S.libFlipped.push(i);
  var c=document.getElementById('bg-content');
  if(c) c.innerHTML=renderLib();
};
window.bgFinishLib=function(){
  S.lastLvlPts=0;S.lvlDoneFrom='lib';S.lvlDone=true;render();
};
window.bgLvlDoneNext=function(){
  var map={lib:'l1',l1:'l2',l2:'l3',l3:'l4',l4:'results'};
  var next=map[S.lvlDoneFrom];
  S.lvlDone=false;
  if(next==='l1'){S.runScore=0;S.runLives=3;S.runDead=false;S.runWon=false;}
  if(next==='l4'){S.l4Placed={};S.l4Checked=false;S.l4Score=0;}
  S.screen=next;render();
};
window.bgFinishL1=function(){
  stopRunner();
  S.lastLvlPts=S.runScore;S.lvlDoneFrom='l1';S.lvlDone=true;render();
};
window.bgL2Answer=function(i){
  if(S.l2Answered) return;
  var q=L2[S.l2Current];
  S.l2Chose=i;
  var ok=S.l2Opts[i]&&S.l2Opts[i].ok;
  S.l2Results.push(ok);
  if(ok){S.l2Score+=25;S.totalScore+=25;}
  S.l2Answered=true;
  var c=document.getElementById('bg-content');
  if(c) c.innerHTML=renderL2();
};
window.bgL2Next=function(){
  if(S.l2Current<L2.length-1){
    S.l2Current++;S.l2Answered=false;S.l2Chose=null;S.l2Opts=[];render();
  } else {
    S.lastLvlPts=S.l2Score;S.lvlDoneFrom='l2';S.lvlDone=true;render();
  }
};
window.bgL3Answer=function(pick){
  if(S.l3Answered) return;
  var q=L3[S.l3Current];
  var ok=pick===q.a;
  S.l3Results.push(ok);
  if(ok){S.l3Score+=25;S.totalScore+=25;}
  S.l3Answered=true;
  var c=document.getElementById('bg-content');
  if(c) c.innerHTML=renderL3();
};
window.bgL3Next=function(){
  if(S.l3Current<L3.length-1){
    S.l3Current++;S.l3Answered=false;render();
  } else {
    S.lastLvlPts=S.l3Score||0;S.lvlDoneFrom='l3';S.lvlDone=true;render();
  }
};
window.bgL4Check=function(){
  S.l4Checked=true;
  var correct=0;
  L4_BLOCKS.forEach(function(b){
    var placed=S.l4Placed[b.id];
    if(placed==='good'&&!b.bad){correct++;S.l4Score+=15;}
    if(placed==='bad'&&b.bad){correct++;S.l4Score+=15;}
  });
  S.totalScore+=S.l4Score;
  var c=document.getElementById('bg-content');
  if(c){c.innerHTML=renderL4();initDragDrop();}
};
window.bgL4Reveal=function(){
  L4_BLOCKS.forEach(function(b){ if(S.l4Placed[b.id]===undefined) S.l4Placed[b.id]=b.bad?'bad':'good'; });
  S.l4Checked=true;
  var c=document.getElementById('bg-content');
  if(c){c.innerHTML=renderL4();initDragDrop();}
};
window.bgFinishL4=function(){
  S.lastLvlPts=S.l4Score;S.lvlDoneFrom='l4';S.lvlDone=true;render();
};
window.bgStartOds=function(){
  S.odsOrder=[];S.odsCurrent=0;S.odsResults=[];S.odsScore=0;S.odsAnswered=false;S.odsOpts=[];S.odsLastChose=null;
  S.screen='ods';render();
};
window.bgOdsAnswer=function(key){
  if(S.odsAnswered) return;
  var ods=S.odsOrder[S.odsCurrent];
  S.odsLastChose=key;
  var ok=key===ods.tool;
  S.odsResults.push(ok);
  if(ok){S.odsScore+=10;S.totalScore+=10;}
  S.odsAnswered=true;
  var c=document.getElementById('bg-content');
  if(c) c.innerHTML=renderODS();
};
window.bgOdsNext=function(){
  if(S.odsCurrent>=16){
    // bonus terminado — volver a results
    S.screen='results';render();animResults();
  } else {
    S.odsCurrent++;S.odsAnswered=false;S.odsOpts=[];S.odsLastChose=null;
    var c=document.getElementById('bg-content');
    if(c) c.innerHTML=renderODS();
  }
};
window.bgRestart=function(){
  S={lang:S.lang,screen:'intro',totalScore:0,libCards:[],libFlipped:[],
     l2Current:0,l2Results:[],l2Score:0,l2Answered:false,l2Chose:null,l2Opts:[],
     l3Current:0,l3Results:[],l3Score:0,l3Answered:false,
     l4Placed:{},l4Checked:false,l4Score:0,
     runScore:0,runLives:3,runDead:false,runWon:false,
     animId:null,runActive:false,lvlDone:false,lvlDoneFrom:null,
     bonusUnlocked:false,
     odsCurrent:0,odsOrder:[],odsResults:[],odsScore:0,odsAnswered:false,odsOpts:[],odsLastChose:null};
  render();
};

// ── ARRANQUE ──────────────────────────────────────────────────────────────────
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
