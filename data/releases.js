/*
  Team releases: the versions you hand out to the team.

  You only add an entry here when you share a version. Development builds
  in between stay in CHANGELOG.md and don't need to be on the site.

  The roadmap reads this list: any roadmap item marked "done" in a build
  up to and including the newest version here shows as "Released".

  type in highlights: "new", "improved" or "fixed"
  tool: a slug from data/site.js, or "core" for things that affect every tool
*/
window.BB = window.BB || {};

BB.releases = [
  {
    version: "1.18.0",
    date: "2026-11-03",
    title: {
      en: "First team release",
      de: "Erste Team-Version"
    },
    summary: {
      en: "The first version for the whole team. It runs on Revit 2025 and 2026, works the same in English and German Revit, shows progress with a Cancel button on long runs, and fixes the unit and reset problems found in the review.",
      de: "Die erste Version für das ganze Team. Sie läuft in Revit 2025 und 2026, verhält sich in englischem und deutschem Revit gleich, zeigt bei langen Läufen einen Fortschritt mit Abbrechen-Schaltfläche und behebt die Einheiten- und Zurücksetzen-Fehler aus der Analyse."
    },
    highlights: [
      { type: "new", tool: "core",
        en: "Runs on Revit 2025 and Revit 2026 from the same installer.",
        de: "Läuft in Revit 2025 und Revit 2026 mit demselben Installer." },
      { type: "new", tool: "core",
        en: "Long runs show a progress window with Cancel. Cancelling a write tool changes nothing; cancelling a check keeps what it found so far.",
        de: "Lange Läufe zeigen ein Fortschrittsfenster mit Abbrechen. Bei Schreibwerkzeugen wird dann nichts geändert, bei Prüfungen bleiben die bisherigen Ergebnisse erhalten." },
      { type: "improved", tool: "core",
        en: "Saved settings work across Revit languages. A config saved in English Revit loads with the same categories and parameters in German Revit.",
        de: "Gespeicherte Einstellungen funktionieren sprachübergreifend. Eine in englischem Revit gespeicherte Konfiguration lädt in deutschem Revit dieselben Kategorien und Parameter." },
      { type: "fixed", tool: "parameter-automation",
        en: "Numbers are written in project units. 2500 on a length parameter in a millimetre project is now 2500 mm, not 2500 feet.",
        de: "Zahlen werden in Projekteinheiten geschrieben. 2500 auf einem Längenparameter in einem Millimeter-Projekt sind jetzt 2500 mm statt 2500 Fuß." },
      { type: "fixed", tool: "parameter-automation",
        en: "Greater than and less than compare numbers, so 900 mm is less than 1000 mm.",
        de: "„Ist größer als“ und „ist kleiner als“ vergleichen Zahlen, 900 mm ist also kleiner als 1000 mm." },
      { type: "fixed", tool: "core",
        en: "Write tools never change the whole model by accident. If the active view shows no model elements, they stop and change nothing.",
        de: "Schreibwerkzeuge ändern nie versehentlich das ganze Modell. Zeigt die aktive Ansicht keine Modellelemente, brechen sie ab und ändern nichts." },
      { type: "fixed", tool: "color-by-parameter",
        en: "Reset brings back the colours you set by hand, instead of clearing every override in the view. Same in Quality Control.",
        de: "Zurücksetzen stellt deine manuellen Farben wieder her, statt alle Überschreibungen der Ansicht zu löschen. Gleiches gilt für die Qualitätskontrolle." },
      { type: "fixed", tool: "level-mapping",
        en: "Correct levels when the Project Base Point is raised.",
        de: "Richtige Ebenen auch bei angehobenem Projektbasispunkt." },
      { type: "improved", tool: "clash-detection",
        en: "Fewer false clashes in connected duct and pipe runs, and approvals are stored per model, so two models in one folder no longer overwrite each other.",
        de: "Weniger falsche Kollisionen in verbundenen Kanal- und Rohrstrecken. Freigaben werden pro Modell gespeichert, zwei Modelle im selben Ordner überschreiben sich nicht mehr." },
      { type: "fixed", tool: "model-health",
        en: "Warnings are rated correctly in German Revit, and room areas are shown in real m².",
        de: "Warnungen werden in deutschem Revit richtig bewertet, Raumflächen werden in echten m² angezeigt." },
      { type: "fixed", tool: "loin-check",
        en: "Ja/Nein and German number formats pass the checks, and Family and Type matches the same elements in every Revit language.",
        de: "Ja/Nein und deutsche Zahlenformate werden erkannt, und „Familie und Typ“ findet in jeder Revit-Sprache dieselben Elemente." },
      { type: "new", tool: "quality-control",
        en: "New condition Must be empty. Double-click a finding to zoom to the element.",
        de: "Neue Bedingung „Muss leer sein“. Doppelklick auf einen Befund zoomt zum Element." },
      { type: "improved", tool: "core",
        en: "Windows redraw faster, long result lists no longer freeze Revit, and errors are written to a log you can send with a bug report.",
        de: "Fenster zeichnen schneller, lange Ergebnislisten frieren Revit nicht mehr ein, und Fehler landen in einem Protokoll, das du einem Fehlerbericht beilegen kannst." }
    ],
    // Development builds rolled into this release (from CHANGELOG.md)
    builds: [
      ["1.18.0", "All tools on the task queue"],
      ["1.17.1", "Zoom to Quality Control findings"],
      ["1.17.0", "Quality Control on the task queue"],
      ["1.16.1", "Fewer false clashes in connected MEP runs"],
      ["1.16.0", "Clash Detection on the task queue"],
      ["1.15.0", "Revit task queue"],
      ["1.14.0", "Dead code removed, colours in the theme"],
      ["1.13.5", "Faster clash insulation check"],
      ["1.13.4", "Errors no longer disappear"],
      ["1.13.3", "LOIN Check in German Revit"],
      ["1.13.2", "One parameter lookup"],
      ["1.13.1", "Automated tests"],
      ["1.13.0", "Team installer"],
      ["1.12.0", "Revit 2025 build"],
      ["1.11.1", "No doubled elements while resizing"],
      ["1.11.0", "Smoother windows"],
      ["1.10.3", "Clean startup"],
      ["1.10.2", "Fast lists in every tool"],
      ["1.10.1", "Quality Control with thousands of findings"],
      ["1.10.0", "Progress and cancel"],
      ["1.9.1", "Language-independent parameter names"],
      ["1.9.0", "Language independence"],
      ["1.8.5", "Phase 0 hotfixes"]
    ]
  }
];
