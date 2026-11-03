/*
  Roadmap. Update this while you develop; the team sees it the next time you publish.

  status: "planned"      not started
          "in-progress"  being worked on
          "done"         finished in a development build (set "build" to that version)

  You never set "released" by hand. A "done" item shows as Released once a team
  release in data/releases.js has the same or a higher version than its build.
  Until then it shows as "Ready for next release".

  phase: "0" hotfixes, "1" foundation, "2" priority tools, "3" polish, "ideas" new tools
  tool:  a slug from data/site.js, or "core"
*/
window.BB = window.BB || {};

BB.phases = [
  { id: "0", en: "Hotfixes", de: "Sofortkorrekturen",
    blurb: { en: "Fix the bugs that could put wrong data in a model.", de: "Fehler beheben, die falsche Daten ins Modell schreiben könnten." } },
  { id: "1", en: "Foundation", de: "Grundlage",
    blurb: { en: "Revit 2025 and 2026, both languages, progress and cancel, installer, tests.", de: "Revit 2025 und 2026, beide Sprachen, Fortschritt und Abbrechen, Installer, Tests." } },
  { id: "2", en: "Priority tools", de: "Wichtigste Werkzeuge",
    blurb: { en: "Get Clash Detection and Parameter Automation ready for daily team use.", de: "Kollisionsprüfung und Parameter-Automatisierung fit für den täglichen Einsatz machen." } },
  { id: "3", en: "Polish", de: "Feinschliff",
    blurb: { en: "Faster access, better reports, more checks.", de: "Schnellerer Zugriff, bessere Berichte, mehr Prüfungen." } },
  { id: "ideas", en: "New tool ideas", de: "Ideen für neue Werkzeuge",
    blurb: { en: "Not scheduled yet. Tell Sascha which ones would save you the most time.", de: "Noch nicht eingeplant. Sag Sascha, welche dir am meisten Zeit sparen würden." } }
];

BB.roadmap = [
  // ---------- Phase 0 ----------
  { id: "units", phase: "0", tool: "parameter-automation", status: "done", build: "1.8.5",
    en: "Write numbers in project units", de: "Zahlen in Projekteinheiten schreiben",
    note: { en: "Also accepts 2500 mm, 2,5 m and Ja/Nein.", de: "Akzeptiert auch 2500 mm, 2,5 m und Ja/Nein." } },
  { id: "numeric-compare", phase: "0", tool: "parameter-automation", status: "done", build: "1.8.5",
    en: "Compare numbers, not text, in rules", de: "In Regeln Zahlen statt Text vergleichen" },
  { id: "no-model-fallback", phase: "0", tool: "core", status: "done", build: "1.8.5",
    en: "Never write to the whole model by accident", de: "Nie versehentlich ins ganze Modell schreiben" },
  { id: "base-point", phase: "0", tool: "level-mapping", status: "done", build: "1.8.5",
    en: "Correct levels with a raised Project Base Point", de: "Richtige Ebenen bei angehobenem Projektbasispunkt" },
  { id: "keep-overrides", phase: "0", tool: "color-by-parameter", status: "done", build: "1.8.5",
    en: "Reset keeps your manual colours", de: "Zurücksetzen behält manuelle Farben" },
  { id: "must-be-empty", phase: "0", tool: "quality-control", status: "done", build: "1.8.5",
    en: "Must be empty condition", de: "Bedingung „Muss leer sein“" },
  { id: "clash-status", phase: "0", tool: "clash-detection", status: "done", build: "1.8.5",
    en: "Clash approvals stored per model", de: "Kollisionsfreigaben pro Modell speichern" },
  { id: "logging", phase: "0", tool: "core", status: "done", build: "1.8.5",
    en: "Error log for every user", de: "Fehlerprotokoll für alle Nutzer" },

  // ---------- Phase 1 ----------
  { id: "lang-categories", phase: "1", tool: "core", status: "done", build: "1.9.0",
    en: "Settings work in English and German Revit", de: "Einstellungen funktionieren in englischem und deutschem Revit",
    note: { en: "Categories in 1.9.0, built-in parameters in 1.9.1.", de: "Kategorien in 1.9.0, integrierte Parameter in 1.9.1." } },
  { id: "health-severity", phase: "1", tool: "model-health", status: "done", build: "1.9.0",
    en: "Rate warnings the same in every language", de: "Warnungen in jeder Sprache gleich bewerten" },
  { id: "lang-params", phase: "1", tool: "core", status: "done", build: "1.9.1",
    en: "Built-in parameter names across languages", de: "Integrierte Parameternamen sprachübergreifend" },
  { id: "progress", phase: "1", tool: "core", status: "done", build: "1.10.0",
    en: "Progress window with Cancel", de: "Fortschrittsfenster mit Abbrechen" },
  { id: "fast-lists", phase: "1", tool: "core", status: "done", build: "1.10.2",
    en: "Long result lists stay fast", de: "Lange Ergebnislisten bleiben schnell" },
  { id: "fast-windows", phase: "1", tool: "core", status: "done", build: "1.11.0",
    en: "Faster window drawing", de: "Schnelleres Zeichnen der Fenster" },
  { id: "revit-2025", phase: "1", tool: "core", status: "done", build: "1.12.0",
    en: "Revit 2025 support", de: "Unterstützung für Revit 2025" },
  { id: "installer", phase: "1", tool: "core", status: "done", build: "1.13.0",
    en: "Team installer for both Revit versions", de: "Team-Installer für beide Revit-Versionen" },
  { id: "tests", phase: "1", tool: "core", status: "done", build: "1.13.1",
    en: "Automated tests on every change", de: "Automatische Tests bei jeder Änderung" },
  { id: "error-log", phase: "1", tool: "core", status: "done", build: "1.13.4",
    en: "Errors the tools recover from are logged", de: "Abgefangene Fehler werden protokolliert" },
  { id: "task-queue", phase: "1", tool: "core", status: "done", build: "1.18.0",
    en: "Reliable Revit access in every tool", de: "Zuverlässiger Revit-Zugriff in allen Werkzeugen",
    note: { en: "Quick clicks are never lost and reads can't fail at random.", de: "Schnelle Klicks gehen nicht verloren, Lesezugriffe scheitern nicht mehr zufällig." } },
  { id: "type-writes", phase: "1", tool: "parameter-automation", status: "planned",
    en: "Safe writes to type parameters", de: "Sicheres Schreiben von Typparametern",
    note: { en: "Group by type and warn when instances of one type would get different values.", de: "Nach Typ gruppieren und warnen, wenn Exemplare eines Typs unterschiedliche Werte bekämen." } },
  { id: "translate-dialogs", phase: "1", tool: "core", status: "planned",
    en: "Translate the remaining English-only messages", de: "Restliche nur englische Meldungen übersetzen" },
  { id: "install-guide", phase: "1", tool: "core", status: "planned",
    en: "Install and update guide on this site", de: "Installations- und Update-Anleitung auf dieser Seite" },

  // ---------- Phase 2 ----------
  { id: "clash-cache", phase: "2", tool: "clash-detection", status: "planned",
    en: "Faster clash runs on large models", de: "Schnellere Kollisionsprüfung in großen Modellen" },
  { id: "clash-links", phase: "2", tool: "clash-detection", status: "planned",
    en: "Check against all linked models at once", de: "Gegen alle verknüpften Modelle gleichzeitig prüfen",
    note: { en: "Including link against link.", de: "Auch Verknüpfung gegen Verknüpfung." } },
  { id: "clash-tests", phase: "2", tool: "clash-detection", status: "planned",
    en: "Saved clash tests per project", de: "Gespeicherte Kollisionstests pro Projekt" },
  { id: "clash-tracking", phase: "2", tool: "clash-detection", status: "planned",
    en: "New, active and resolved between runs", de: "Neu, aktiv und gelöst zwischen Prüfläufen" },
  { id: "clash-bcf", phase: "2", tool: "clash-detection", status: "planned",
    en: "BCF export", de: "BCF-Export" },
  { id: "clash-openings", phase: "2", tool: "clash-detection", status: "planned",
    en: "Place openings and sleeves from clashes", de: "Durchbrüche und Hülsen aus Kollisionen setzen" },
  { id: "param-preview", phase: "2", tool: "parameter-automation", status: "planned",
    en: "Preview old and new values before writing", de: "Alte und neue Werte vor dem Schreiben anzeigen" },
  { id: "param-tokens", phase: "2", tool: "parameter-automation", status: "planned",
    en: "Formulas such as {Level}-{Mark}", de: "Formeln wie {Ebene}-{Kennzeichen}" },
  { id: "param-excel", phase: "2", tool: "parameter-automation", status: "planned",
    en: "Excel export and re-import", de: "Excel-Export und -Reimport" },
  { id: "spatial-links", phase: "2", tool: "spatial-parameters", status: "planned",
    en: "Rooms from linked models", de: "Räume aus verknüpften Modellen" },

  // ---------- Phase 3 ----------
  { id: "ribbon-buttons", phase: "3", tool: "core", status: "planned",
    en: "A ribbon button per tool, for keyboard shortcuts", de: "Eine Multifunktionsleisten-Schaltfläche pro Werkzeug, für Tastenkürzel" },
  { id: "pane-search", phase: "3", tool: "core", status: "planned",
    en: "Search, favourites and Run again in the pane", de: "Suche, Favoriten und „Erneut ausführen“ im Bereich" },
  { id: "health-score", phase: "3", tool: "model-health", status: "planned",
    en: "Fair score for large models, and trends over time", de: "Faire Bewertung großer Modelle und Verlauf über die Zeit" },
  { id: "qc-rules", phase: "3", tool: "quality-control", status: "planned",
    en: "Duplicate, range and allowed-value rules, Excel export", de: "Regeln für Duplikate, Bereiche und erlaubte Werte, Excel-Export" },
  { id: "light-theme", phase: "3", tool: "core", status: "planned",
    en: "Light theme that follows Revit", de: "Helles Design passend zu Revit" },

  // ---------- Ideas ----------
  { id: "renumbering", phase: "ideas", tool: "core", status: "planned",
    en: "Smart renumbering of doors, rooms and elements", de: "Intelligente Nummerierung von Türen, Räumen und Elementen" },
  { id: "sheets-excel", phase: "ideas", tool: "core", status: "planned",
    en: "Create sheets and views from Excel", de: "Pläne und Ansichten aus Excel erstellen" },
  { id: "warning-fixers", phase: "ideas", tool: "core", status: "planned",
    en: "One-click fixes for common warnings", de: "Häufige Warnungen mit einem Klick beheben" },
  { id: "view-audit", phase: "ideas", tool: "core", status: "planned",
    en: "View and template auditor", de: "Prüfung von Ansichten und Vorlagen" }
];
