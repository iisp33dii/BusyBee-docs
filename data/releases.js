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
    version: "1.30.0",
    date: "2026-11-04",
    title: {
      en: "Coordination release",
      de: "Koordinations-Version"
    },
    summary: {
      en: "A big step for Clash Detection and Parameter Automation. Clash Detection now checks against all links or one link against another, remembers tests, shows what's new and resolved, exports BCF and cuts openings. Parameter Automation shows a preview before writing and fills values with formulas. Every tool has its own ribbon button, and the messages are in German too.",
      de: "Ein großer Schritt für Kollisionsprüfung und Parameter-Automatisierung. Die Kollisionsprüfung prüft jetzt gegen alle Verknüpfungen oder eine Verknüpfung gegen eine andere, merkt sich Tests, zeigt Neues und Gelöstes, exportiert BCF und setzt Durchbrüche. Die Parameter-Automatisierung zeigt vor dem Schreiben eine Vorschau und füllt Werte mit Formeln. Jedes Werkzeug hat eine eigene Schaltfläche in der Multifunktionsleiste, und die Meldungen gibt es jetzt auch auf Deutsch."
    },
    highlights: [
      { type: "new", tool: "clash-detection",
        en: "Place Openings cuts a rectangular opening wherever a duct, pipe, cable tray or conduit passes a wall or floor, also for MEP elements in a link. Set the clearance in the settings.",
        de: "Durchbrüche setzen schneidet einen rechteckigen Durchbruch, wo ein Luftkanal, Rohr, eine Kabeltrasse oder ein Leerrohr eine Wand oder Decke kreuzt, auch für TGA-Elemente aus einer Verknüpfung. Den Abstand stellst du in den Einstellungen ein." },
      { type: "new", tool: "clash-detection",
        en: "Check against All Linked Models in one run, or one link against another, for example the HVAC link against the structural link.",
        de: "Gegen All Linked Models in einem Lauf prüfen oder eine Verknüpfung gegen eine andere, zum Beispiel Lüftung gegen Tragwerk." },
      { type: "new", tool: "clash-detection",
        en: "Saved clash tests per model, shared with everyone who opens it, and NEW, still there and resolved clashes since the last run.",
        de: "Gespeicherte Kollisionstests pro Modell, die alle sehen, die es öffnen, und Kollisionen, die seit dem letzten Lauf neu, weiterhin da oder gelöst sind." },
      { type: "new", tool: "clash-detection",
        en: "Export BCF for BIMcollab, Solibri, Navisworks and Revizto. Exporting again updates the same topics.",
        de: "BCF-Export für BIMcollab, Solibri, Navisworks und Revizto. Ein erneuter Export aktualisiert dieselben Themen." },
      { type: "new", tool: "parameter-automation",
        en: "A preview shows every value before anything is written. Nothing changes until you click Write.",
        de: "Eine Vorschau zeigt jeden Wert, bevor etwas geschrieben wird. Erst mit Schreiben ändert sich etwas." },
      { type: "new", tool: "parameter-automation",
        en: "Formulas such as {Level}-{Mark} give each element its own value. Parameter names work in both Revit languages.",
        de: "Formeln wie {Ebene}-{Kennzeichen} geben jedem Element seinen eigenen Wert. Parameternamen funktionieren in beiden Revit-Sprachen." },
      { type: "new", tool: "spatial-parameters",
        en: "Rooms and spaces from linked models, so an MEP model can write the architect's room numbers.",
        de: "Räume und MEP-Räume aus verknüpften Modellen, damit ein TGA-Modell die Raumnummern der Architektur schreiben kann." },
      { type: "new", tool: "core",
        en: "Every tool has its own button on the BusyBee ribbon tab and can get a keyboard shortcut. The panel has a search box, favourites and your three recently used tools.",
        de: "Jedes Werkzeug hat eine eigene Schaltfläche auf der Registerkarte BusyBee und kann ein Tastenkürzel bekommen. Der Bereich hat ein Suchfeld, Favoriten und deine drei zuletzt verwendeten Werkzeuge." },
      { type: "improved", tool: "core",
        en: "All messages are in German when BusyBee is set to German. Exported reports stay English.",
        de: "Alle Meldungen sind auf Deutsch, wenn BusyBee auf Deutsch steht. Exportierte Berichte bleiben englisch." },
      { type: "improved", tool: "clash-detection",
        en: "Much faster on large models, and the status bar shows how long a run took.",
        de: "Deutlich schneller bei großen Modellen, und die Statuszeile zeigt, wie lange ein Lauf gedauert hat." },
      { type: "fixed", tool: "parameter-automation",
        en: "Type parameters are written once per type. If its instances need different values, the type is left alone and named, instead of the last instance winning. Same in Level Mapping and Spatial Parameters.",
        de: "Typparameter werden einmal pro Typ geschrieben. Brauchen seine Exemplare unterschiedliche Werte, bleibt der Typ unverändert und wird genannt, statt dass das letzte Exemplar gewinnt. Gleiches gilt für Ebenen-Zuordnung und Raum- & Achsenparameter." },
      { type: "fixed", tool: "parameter-automation",
        en: "A unit typed with a value is used. 2,5 m in a millimetre project is 2500 mm, not 2.5 mm.",
        de: "Eine mit dem Wert eingegebene Einheit wird beachtet. 2,5 m in einem Millimeter-Projekt sind 2500 mm, nicht 2,5 mm." },
      { type: "fixed", tool: "core",
        en: "Results are no longer read from English text, so German runs no longer show success as a failure. LOIN Check now shows its errors.",
        de: "Ergebnisse werden nicht mehr aus englischem Text gelesen, deutsche Läufe zeigen Erfolg also nicht mehr als Fehler an. Die LOIN-Qualitätsprüfung zeigt jetzt ihre Fehler an." }
    ],
    builds: [
      ["1.30.0", "Openings from clashes"],
      ["1.29.0", "Faster clash runs"],
      ["1.28.0", "Linked models in Clash Detection and Spatial Parameters"],
      ["1.27.0", "BCF export of clashes"],
      ["1.26.0", "Saved clash tests, and new / resolved clashes between runs"],
      ["1.25.0", "Search, favourites and recently used tools in the pane"],
      ["1.24.0", "A ribbon button per tool"],
      ["1.23.0", "Formulas in Parameter Automation"],
      ["1.22.0", "Preview before writing in Parameter Automation"],
      ["1.21.0", "German messages, part 2: all other tools"],
      ["1.20.0", "German messages, part 1: Clash Detection and Parameter Automation"],
      ["1.19.0", "Safe writes to type parameters"]
    ]
  },
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
