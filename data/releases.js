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
    version: "1.60.0",
    date: "2026-11-09",
    title: {
      en: "BCF Viewer, clash markers and parameters in Excel",
      de: "BCF-Viewer, Kollisionsmarkierungen und Parameter in Excel"
    },
    summary: {
      en: "A new BCF Viewer opens issues from Solibri, BIMcollab and other programs and finds their elements in your model and its links. Clash Detection marks its clashes in the view and can put a picture of each clash into the BCF. Schedules in Excel gained a Parameters tab that needs no schedule, and Quality Control saves its findings to Excel. Plus themed dialogs, more German texts and a faster pane.",
      de: "Ein neuer BCF-Viewer öffnet Themen aus Solibri, BIMcollab und anderen Programmen und findet ihre Elemente im Modell und in seinen Verknüpfungen. Die Kollisionsprüfung markiert ihre Kollisionen in der Ansicht und kann jeder Kollision im BCF ein Bild mitgeben. Bauteillisten in Excel hat eine Registerkarte Parameter, die keine Bauteilliste braucht, und die Qualitätskontrolle speichert ihre Befunde in Excel. Dazu Dialoge im BusyBee-Design, mehr deutsche Texte und ein schnelleres Panel."
    },
    highlights: [
      { type: "new", tool: "bcf-viewer",
        en: "BCF Viewer: open BCF 2.0, 2.1 and 3.0 files, find each issue's elements by IFC GUID in the model and its links, select, zoom, isolate or box them, and go to the issue's viewpoint, aligned to your model automatically. Calibrate on one element when another office's coordinates are far off.",
        de: "BCF-Viewer: BCF-2.0-, 2.1- und 3.0-Dateien öffnen, die Elemente jedes Themas per IFC-GUID im Modell und seinen Verknüpfungen finden, auswählen, hinzoomen, isolieren oder in einen 3D-Bereich setzen und zum Ansichtspunkt springen, automatisch an dein Modell angeglichen. Liegen die Koordinaten eines anderen Büros weit daneben, kalibrierst du an einem Element." },
      { type: "new", tool: "clash-detection",
        en: "Show in view: red triangles at every listed clash in plans, sections and 3D views, on top of everything. Click one to find the clash in the list. They follow you into other views until you hide them.",
        de: "In Ansicht zeigen: rote Dreiecke an jeder gelisteten Kollision in Grundrissen, Schnitten und 3D-Ansichten, über allem anderen. Ein Klick findet die Kollision in der Liste. Sie folgen dir in andere Ansichten, bis du sie ausblendest." },
      { type: "new", tool: "clash-detection",
        en: "Snapshots in the BCF export, if you switch them on: a close-up of each clash with just its two elements in green and red, for BIMcollab, Solibri and the BCF Viewer.",
        de: "Bilder im BCF-Export, wenn du sie einschaltest: eine Nahaufnahme jeder Kollision mit nur ihren beiden Elementen in Grün und Rot, für BIMcollab, Solibri und den BCF-Viewer." },
      { type: "new", tool: "schedules-excel",
        en: "Parameters in Excel: export the parameters of the selection, the view or the whole model, one sheet per category, change them in Excel and import them back with a preview. Parameter Automation has an Excel… link to it.",
        de: "Parameter in Excel: die Parameter der Auswahl, der Ansicht oder des ganzen Modells exportieren, ein Blatt pro Kategorie, in Excel ändern und mit Vorschau zurücklesen. Die Parameter-Automatisierung hat einen Link Excel… dorthin." },
      { type: "new", tool: "quality-control",
        en: "Quality Control saves its findings to Excel: a summary per rule and one row per finding, with filters.",
        de: "Die Qualitätskontrolle speichert ihre Befunde in Excel: eine Übersicht pro Regel und eine Zeile pro Befund, mit Filtern." },
      { type: "improved", tool: "tag-tools",
        en: "Every Tag Tools button explains in its tooltip what it moves and where.",
        de: "Jede Schaltfläche der Beschriftungswerkzeuge erklärt in ihrem Tooltip, was sie wohin verschiebt." },
      { type: "improved", tool: "core",
        en: "Every confirmation uses the BusyBee dialog in light and dark, the remaining English texts are German too, the theme button simply switches between light and dark, and the pane reacts to the first click. Small tools are now called Utilities.",
        de: "Jede Rückfrage nutzt den BusyBee-Dialog in Hell und Dunkel, die restlichen englischen Texte gibt es auch auf Deutsch, die Design-Schaltfläche wechselt einfach zwischen Hell und Dunkel, und das Panel reagiert auf den ersten Klick. Die kleinen Helfer heißen jetzt Hilfsmittel." },
      { type: "fixed", tool: "core",
        en: "The pane follows the selection right away, Coloured tabs stop looking when a Revit update moves the tabs, and BusyBee lets go of all its Revit events when Revit closes.",
        de: "Das Panel folgt der Auswahl sofort, Farbige Reiter hören auf zu suchen, wenn ein Revit-Update die Reiter verschiebt, und BusyBee meldet sich beim Schließen von Revit von allen Revit-Ereignissen ab." }
    ],
    builds: [
      ["1.60.0", "Quality Control in Excel, clearer Tag Tools"],
      ["1.56.5", "Clash markers in every view"],
      ["1.56.4", "Show in view on German systems, thin snapshot lines"],
      ["1.56.2", "Clash markers on top and clickable"],
      ["1.56.0", "Clash markers in the view, closer snapshots"],
      ["1.55.0", "Clash BCF export with snapshots"],
      ["1.54.3", "BCF Viewer reads more files"],
      ["1.54.2", "Theme button: light or dark"],
      ["1.54.1", "Pane clicks, Utilities"],
      ["1.54.0", "BCF Viewer"],
      ["1.53.0", "Parameters in Excel"],
      ["1.52.0", "Themed dialogs and translated leftovers"]
    ]
  },
  {
    version: "1.51.0",
    date: "2026-11-07",
    title: {
      en: "Light theme, new tools and small helpers",
      de: "Helles Design, neue Werkzeuge und kleine Helfer"
    },
    summary: {
      en: "Three new tools: Schedules in Excel, Batch Export and Tag Tools. Eight one-click small tools and quick sections. Model Health got a fair score with a trend, warning fixes, a view audit and a links check. Color by Parameter is one window with presets and view filters. Fewer false clashes, a light theme, a help button and complete parameter lists in every tool.",
      de: "Drei neue Werkzeuge: Bauteillisten in Excel, Stapelexport und Beschriftungswerkzeuge. Acht kleine Helfer mit einem Klick und Schnellschnitte. Modellgesundheit hat eine faire Bewertung mit Verlauf, Warnungskorrekturen, eine Ansichtsprüfung und eine Prüfung der Verknüpfungen. Farbe nach Parameterwert ist ein Fenster mit Vorlagen und Ansichtsfiltern. Weniger falsche Kollisionen, ein helles Design, eine Hilfe-Schaltfläche und vollständige Parameterlisten in jedem Werkzeug."
    },
    highlights: [
      { type: "new", tool: "schedules-excel",
        en: "Schedules in Excel: export schedules to .xlsx, also into your company template, edit values in Excel and import the changes back with a preview. No Excel licence needed for the export.",
        de: "Bauteillisten in Excel: Bauteillisten als .xlsx exportieren, auch in die Firmenvorlage, Werte in Excel ändern und die Änderungen mit Vorschau zurücklesen. Für den Export ist keine Excel-Lizenz nötig." },
      { type: "new", tool: "batch-export",
        en: "Batch Export: ticked sheets to PDF and DWG and 3D views to IFC in one go, picked by sheet set or revision, with file names such as {SheetNumber}_{SheetName}.",
        de: "Stapelexport: angehakte Pläne als PDF und DWG und 3D-Ansichten als IFC in einem Durchgang, ausgewählt nach Plansatz oder Index, mit Dateinamen wie {SheetNumber}_{SheetName}." },
      { type: "new", tool: "tag-tools",
        en: "Tag Tools: align, stack and reset tags, copy their positions to other views, find untagged, overlapping and empty tags, tag what is missing without overlaps, and size tags along pipe and duct runs.",
        de: "Beschriftungswerkzeuge: Beschriftungen ausrichten, stapeln und zurücksetzen, Positionen in andere Ansichten kopieren, unbeschriftete, überlappende und leere finden, Fehlendes ohne Überlappung beschriften und Größen entlang von Rohr- und Kanalsträngen beschriften." },
      { type: "new", tool: "core",
        en: "Small tools: Who did that, Copy crop, Copy levels from a link, coloured view tabs per model, Reset overrides, room outlines in 3D, and quick sections by dragging a rectangle in a plan.",
        de: "Kleine Helfer: Wer war das, Zuschnitt kopieren, Ebenen aus einer Verknüpfung kopieren, farbige Ansichtsreiter pro Modell, Überschreibungen zurücksetzen, Raumumrisse in 3D und Schnellschnitte durch Aufziehen eines Rechtecks im Grundriss." },
      { type: "new", tool: "model-health",
        en: "Model Health: a fair score that compares models of any size, with a trend; one-click fixes for common warnings; a Views tab (not on a sheet, unused templates and filters, naming); a Links tab (not pinned, wrong workset, moved coordinates); open a linked DWG in AutoCAD.",
        de: "Modellgesundheit: eine faire Bewertung für Modelle jeder Größe, mit Verlauf; Korrekturen mit einem Klick für häufige Warnungen; ein Reiter Ansichten (nicht auf einem Plan, ungenutzte Vorlagen und Filter, Benennung); ein Reiter Verknüpfungen (nicht fixiert, falscher Bearbeitungsbereich, verschobene Koordinaten); eine verknüpfte DWG in AutoCAD öffnen." },
      { type: "improved", tool: "color-by-parameter",
        en: "Color by Parameter is one window with the legend built in, colour gradients for numbers, saved presets, and Revit view filters made from the legend.",
        de: "Farbe nach Parameterwert ist ein Fenster mit eingebauter Legende, Farbverläufen für Zahlen, gespeicherten Vorlagen und Revit-Ansichtsfiltern aus der Legende." },
      { type: "improved", tool: "spatial-parameters",
        en: "Level Mapping is the third tab of Spatial Parameters. All three tabs show a preview before writing, insulation follows its pipe or duct, and all tabs can be written at once.",
        de: "Die Ebenen-Zuordnung ist der dritte Reiter von Räume, Raster & Ebenen. Alle drei Reiter zeigen vor dem Schreiben eine Vorschau, Dämmung folgt ihrem Rohr oder Kanal, und alle Reiter lassen sich auf einmal schreiben." },
      { type: "improved", tool: "quality-control",
        en: "New Quality Control rules: unique value, number in range and allowed values. Double-click a finding to zoom to it.",
        de: "Neue Regeln in der Qualitätskontrolle: eindeutiger Wert, Zahl im Bereich und erlaubte Werte. Doppelklick auf einen Befund zoomt dorthin." },
      { type: "improved", tool: "core",
        en: "A light theme next to the dark one (or like Revit), one category picker in every tool, a Help button, and the time left for long runs.",
        de: "Ein helles Design neben dem dunklen (oder wie Revit), eine Kategorieauswahl in allen Werkzeugen, eine Hilfe-Schaltfläche und die verbleibende Zeit bei langen Läufen." },
      { type: "fixed", tool: "clash-detection",
        en: "Far fewer false clashes between round pipes and ducts and from thin slivers, found in a colleague's test. Isolating an insulation clash also shows its pipe or duct.",
        de: "Deutlich weniger falsche Kollisionen zwischen runden Rohren und Kanälen und durch dünne Splitter, gefunden im Test eines Kollegen. Beim Isolieren einer Dämmungskollision wird auch das Rohr oder der Kanal gezeigt." },
      { type: "fixed", tool: "parameter-automation",
        en: "Parameter dropdowns list the parameters of every family and type, not only of the first few elements. Same in Spatial Parameters, Quality Control and LOIN Check.",
        de: "Die Parameterlisten zeigen die Parameter aller Familien und Typen, nicht nur die der ersten Elemente. Gleiches gilt für Räume, Raster & Ebenen, Qualitätskontrolle und LOIN-Qualitätsprüfung." },
      { type: "fixed", tool: "core",
        en: "Errors that used to disappear are now in the log, including the warnings Revit reports for BusyBee changes. A test run for a preview never shows a Revit warning.",
        de: "Fehler, die früher verschwanden, stehen jetzt im Protokoll, auch die Warnungen, die Revit zu BusyBee-Änderungen meldet. Ein Testlauf für eine Vorschau zeigt nie eine Revit-Warnung." }
    ],
    builds: [
      ["1.51.0", "Complete parameter lists, quiet test runs, clean build"],
      ["1.50.1", "Errors that were hidden now reach the log"],
      ["1.50.0", "Size tags along pipe and duct runs"],
      ["1.49.0", "Links and coordinates check in Model Health"],
      ["1.48.0", "Tag tools"],
      ["1.47.0", "Batch export and opening CAD links in AutoCAD"],
      ["1.46.0", "Warning fixes and view auditor in Model Health"],
      ["1.45.0", "Colour presets and view filters"],
      ["1.44.0", "Schedules in Excel, Reset overrides, room outlines in 3D"],
      ["1.43.0", "Small tools: coloured tabs, help button, two-step Copy levels"],
      ["1.42.0", "Small tools"],
      ["1.41.0", "Color by Parameter in one window"],
      ["1.40.0", "Light theme"],
      ["1.39.0", "Time left and a Help button"],
      ["1.38.0", "Level Mapping and Spatial Parameters in one window"],
      ["1.37.0", "Preview and insulation in Level Mapping and Spatial Parameters"],
      ["1.36.0", "Parameter Automation: pick categories in one go"],
      ["1.35.0", "One category picker everywhere"],
      ["1.34.0", "More room for clashes, zoom on double-click"],
      ["1.33.0", "Fair health score with trend"],
      ["1.32.0", "New Quality Control rules"],
      ["1.31.0", "Fewer false clashes"]
    ]
  },
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
      en: "First release",
      de: "Erste Version"
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
      { type: "fixed", tool: "spatial-parameters",
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
