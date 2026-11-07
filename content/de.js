/*
  Deutscher Text für die BusyBee-Seite. Wir duzen.
  [[Label]] zeigt eine Schaltfläche oder ein Feld in BusyBee. `text` zeigt Code oder einen Pfad.
*/
window.BB = window.BB || {};
BB.text = BB.text || {};

BB.text.de = {
  ui: {
    skip: "Zum Inhalt springen",
    nav: { home: "Übersicht", install: "Installation", start: "Schnellstart", tools: "Werkzeuge", issues: "Bekannte Probleme", changes: "Änderungen", roadmap: "Roadmap" },
    theme: { toDark: "Dunkles Design", toLight: "Helles Design" },
    langName: "English",
    langSwitch: "Read in English",
    menu: "Menü",
    status: { stable: "Stabil", beta: "Beta", experimental: "Experimentell" },
    statusHelp: {
      stable: "Läuft zuverlässig. Für Projektarbeit geeignet.",
      beta: "Funktioniert, aber prüf die Ergebnisse und melde, was dir auffällt.",
      experimental: "Probier es erst an einer Modellkopie aus."
    },
    groups: { automation: "Parameter- und Modell-Automatisierung", audit: "Prüfung und Qualitätskontrolle", utility: "Hilfswerkzeuge" },
    revit: "Revit",
    teamRelease: "Team-Version",
    released: "Veröffentlicht",
    search: "Dokumentation durchsuchen",
    searchPlaceholder: "Werkzeuge, Schaltflächen, Probleme suchen…",
    searchEmpty: "Keine Treffer. Versuch es mit einem Schaltflächennamen wie Freigeben oder einem Revit-Begriff wie Ebene.",
    footer: "BusyBee ist unser internes Revit-Add-in. Fragen und Fehlermeldungen gehen an Sascha.",
    updated: "Stand der Seite:",
    toc: "Auf dieser Seite",
    whenToUse: "Wann du es brauchst",
    howTo: "Schritt für Schritt",
    settings: "Optionen erklärt",
    tips: "Tipps",
    limits: "Bekannte Grenzen",
    allIssues: "Alle bekannten Probleme",
    prev: "Vorheriges Werkzeug",
    next: "Nächstes Werkzeug",
    workaround: "So kommst du drum herum",
    affects: "Betrifft",
    planned: "Lösung geplant",
    seeRoadmap: "auf der Roadmap",
    builds: "Entwicklungsversionen in dieser Version",
    highlightType: { new: "Neu", improved: "Verbessert", fixed: "Behoben" },
    core: "Alle Werkzeuge",
    rm: {
      released: "Veröffentlicht",
      ready: "Fertig für die nächste Version",
      "in-progress": "In Entwicklung",
      planned: "Geplant",
      doneIn: "Fertig in Build",
      inRelease: "In Team-Version",
      filterAll: "Alles",
      filterTool: "Werkzeug",
      allTools: "Alle Werkzeuge",
      legend: "Jede Zelle ist ein Roadmap-Punkt. Gefüllte Zellen sind veröffentlicht, umrandete sind fertig, aber noch nicht verteilt, halb gefüllte sind in Arbeit.",
      progress: "veröffentlicht"
    },
    notFound: "Diese Seite gibt es nicht. Wähl ein Werkzeug aus der Liste.",
    caption: "Screenshot aus Revit 2026 mit BusyBee auf Englisch. Mit der Flagge unten rechts im BusyBee-Bereich schaltest du auf Deutsch um. Klick drauf, um ihn in voller Größe zu sehen.",
    captionDe: "Screenshot aus Revit 2026 mit BusyBee auf Deutsch. Klick drauf, um ihn in voller Größe zu sehen.",
    close: "Schließen",
    oldShot: "Dieser Screenshot stammt aus Version 1.18. Das Fenster hat inzwischen mehr Optionen, siehe unten."
  },

  home: {
    title: "BusyBee für Revit",
    lead: "Unser Revit-Add-in für Kollisionsprüfung, Parameterarbeit und Modellqualität. Es sitzt in einem Bereich neben dem Projektbrowser und läuft in Revit 2025 und 2026, auf Deutsch oder Englisch.",
    ctaStart: "Mit dem Schnellstart loslegen",
    ctaTools: "Werkzeuge ansehen",
    current: "Aktuelle Team-Version",
    toolsTitle: "Was BusyBee kann",
    toolsLead: "Elf Werkzeuge in drei Gruppen. Du öffnest alle aus dem BusyBee-Bereich.",
    whatsNew: "Neu in dieser Version",
    allChanges: "Alle Änderungen",
    next: "Als Nächstes",
    nextLead: "Woran Sascha gerade arbeitet, direkt aus der Roadmap.",
    fullRoadmap: "Roadmap öffnen",
    paneAlt: "Der BusyBee-Bereich in Revit mit aufgeklappten Werkzeuggruppen",
    paneLabel: "Der BusyBee-Bereich",
    shotsLabel: "Screenshots der Werkzeuge",
    model: {
      title: "So sieht es im Modell aus",
      lead: "Eine kleine Beispiel-Zwischendecke mit Kanälen, Rohren und einer Kabeltrasse, und was zwei der Werkzeuge damit machen.",
      steps: [
        { h: "Das Modell", p: "Kanäle, Rohre und Trassen aller Gewerke, so wie sie aus Revit kommen." },
        { p: "Jedes System bekommt eine eigene Farbe und eine Legende. So liest du das Modell auf einen Blick." },
        { p: "Kollisionen zwischen den Gewerken werden gefunden und markiert, bevor etwas gebaut wird." }
      ],
      legend: ["Zuluft", "Abluft", "Heizung", "Kaltwasser", "Kabeltrasse"],
      clashes: "3 Kollisionen gefunden",
      hint: "Zum Drehen ziehen",
      label: "Animiertes 3D-Beispiel einer Zwischendecke mit Haustechnik"
    }
  },

  install: {
    title: "Installieren und aktualisieren",
    lead: "BusyBee ist in etwa einer Minute für deinen eigenen Windows-Benutzer installiert. Du brauchst keine Administratorrechte, und ein Installer deckt Revit 2025 und 2026 ab.",
    needTitle: "Was du brauchst",
    need: [
      "Windows mit Revit 2025 oder 2026.",
      "Die BusyBee-ZIP-Datei, zum Beispiel `BusyBee-1.30.0.zip`. Die aktuelle bekommst du von Sascha.",
      "Keine Administratorrechte. BusyBee wird in deinen eigenen Benutzerordner installiert und betrifft niemand anderen am PC."
    ],
    sections: [
      { id: "install", h: "Installieren",
        steps: [
          { h: "Revit schließen", p: "Schließ alle Revit-Fenster. Solange Revit läuft, bricht der Installer ab und ändert nichts." },
          { h: "Die ganze ZIP-Datei entpacken", p: "Rechtsklick auf die ZIP-Datei, Alle extrahieren wählen und den entpackten Ordner öffnen. Direkt aus der ZIP-Datei heraus funktioniert der Installer nicht." },
          { h: "Installer starten", p: "Doppelklick auf `Install BusyBee.cmd`. Ein schwarzes Fenster zeigt, was passiert, und endet mit \"BusyBee … is installed for Revit 2025 and 2026\". Drück eine beliebige Taste, um es zu schließen." },
          { h: "Revit starten und BusyBee laden", p: "Revit fragt einmal, ob BusyBee geladen werden soll, weil das Add-in nicht signiert ist. Wähl [[Immer laden]]. Öffne dann die Registerkarte BusyBee und klick auf [[BusyBee Manager]]." },
          { h: "Version prüfen", p: "Die Version steht oben im BusyBee-Bereich neben dem Namen, zum Beispiel v1.30.0." }
        ] },
      { id: "update", h: "Auf eine neue Version aktualisieren",
        steps: [
          { h: "Revit schließen und die neue ZIP-Datei entpacken", p: "Nimm für jede Version einen neuen Ordner, damit sich alte und neue Dateien nicht mischen." },
          { h: "Installer aus dem neuen Ordner starten", p: "Doppelklick auf `Install BusyBee.cmd`. Er ersetzt die alte Version; vorher deinstallieren musst du nicht." },
          { h: "Deine Einstellungen bleiben", p: "Sprache, Anordnung des Bereichs, gespeicherte Kollisionsfreigaben, LOIN-Zuordnungen und der Verlauf von ID auswählen bleiben erhalten. Sie liegen außerhalb des Add-ins." },
          { h: "Version prüfen", p: "Starte Revit und schau oben in den BusyBee-Bereich. Nutze dieselbe Version wie der Rest deines Projektteams: Einstellungen aus einer neueren Version kann eine ältere nicht immer lesen." }
        ] },
      { id: "uninstall", h: "Deinstallieren",
        steps: [
          { h: "Revit schließen", p: "Auch die Deinstallation bricht ab und ändert nichts, solange Revit läuft." },
          { h: "Deinstallation starten", p: "Doppelklick auf `Uninstall BusyBee.cmd` in einem beliebigen entpackten BusyBee-Ordner. Beim nächsten Start von Revit ist die Registerkarte BusyBee weg." },
          { h: "Auf Wunsch auch die Einstellungen löschen", p: "Deine Einstellungen und Protokolle bleiben erhalten, falls du wieder installierst. Wenn du sie loswerden willst, lösch die beiden BusyBee-Ordner aus der Liste \"Wo BusyBee seine Dateien ablegt\"." }
        ] }
    ],
    helpTitle: "Wenn etwas nicht klappt",
    help: [
      { q: "Im Fenster steht \"Please close Revit first\"",
        a: "Revit läuft noch, manchmal ohne sichtbares Fenster. Schließ es oder beende Revit im Task-Manager und starte den Installer noch einmal." },
      { q: "Im Fenster steht \"Please extract the whole ZIP first\" oder \"BusyBee.bundle was not found\"",
        a: "Der Installer wurde direkt aus der ZIP-Datei gestartet, oder es wurden nur einzelne Dateien kopiert. Entpack die ganze ZIP-Datei und starte ihn aus dem entpackten Ordner." },
      { q: "Windows zeigt vor dem Start eine Warnung",
        a: "Windows markiert Dateien, die per E-Mail oder aus dem Internet kommen. Prüf, ob die ZIP-Datei von Sascha stammt. Blocken die Firmeneinstellungen den Installer, sag Sascha Bescheid." },
      { q: "Die Registerkarte BusyBee erscheint nicht in Revit",
        a: "BusyBee läuft nur in Revit 2025 und 2026. Hat Revit nach dem Laden gefragt und du hast [[Nicht laden]] gewählt, schließ Revit, starte es neu und wähl [[Immer laden]]. Fehlt die Registerkarte dann immer noch, starte den Installer erneut und schick Sascha einen Screenshot des schwarzen Fensters." },
      { q: "BusyBee zeigt einen Fehler oder verhält sich seltsam",
        a: "Schick Sascha eine kurze Notiz, was du gemacht hast, und die heutige Protokolldatei aus `%LOCALAPPDATA%\\BusyBee\\logs`." }
    ],
    filesTitle: "Wo BusyBee seine Dateien ablegt",
    filesLead: "Füg einen Pfad in die Adresszeile des Datei-Explorers ein, um ihn zu öffnen.",
    filesHead: ["Ordner", "Was drin ist"],
    files: [
      ["%APPDATA%\\Autodesk\\ApplicationPlugins\\BusyBee.bundle", "Das Add-in selbst, für beide Revit-Versionen. Installieren ersetzt es, Deinstallieren entfernt es."],
      ["%APPDATA%\\BusyBee", "Deine Einstellungen: Sprache, Anordnung des Bereichs, Kollisionsfreigaben, LOIN-Zuordnungen und der Verlauf von ID auswählen."],
      ["%LOCALAPPDATA%\\BusyBee\\logs", "Fehlerprotokolle, eine Datei pro Tag, 14 Tage lang aufbewahrt. Schick die heutige Datei mit, wenn du einen Fehler meldest."]
    ]
  },

  start: {
    title: "Schnellstart",
    lead: "Deine ersten zehn Minuten mit BusyBee. BusyBee muss in Revit 2025 oder 2026 installiert sein; falls noch nicht, fang mit der Seite Installation an.",
    steps: [
      { h: "BusyBee-Bereich öffnen",
        p: "Öffne in Revit die Registerkarte BusyBee und klick auf [[BusyBee Manager]]. Der Bereich dockt neben dem Projektbrowser an. Du kannst ihn wie jeden Revit-Bereich verschieben. Jedes Werkzeug hat außerdem eine eigene Schaltfläche auf der Registerkarte BusyBee, du kannst es also auch ohne den Bereich öffnen." },
      { h: "Sprache wählen",
        p: "Mit der Flagge unten rechts im Bereich schaltest du BusyBee zwischen Deutsch und Englisch um. Das gilt sofort und bleibt gespeichert. Deine Revit-Sprache spielt keine Rolle: BusyBee funktioniert mit beiden." },
      { h: "Eine Ansicht mit den richtigen Elementen öffnen",
        p: "Die meisten Werkzeuge arbeiten mit den Elementen der aktiven Ansicht. Öffne vorher eine 3D-Ansicht, einen Grundriss oder Schnitt, der diese Elemente zeigt. Schreibwerkzeuge ändern nichts, wenn die Ansicht keine Modellelemente zeigt." },
      { h: "Werkzeug öffnen und einrichten",
        p: "Klick auf den Namen eines Werkzeugs, um sein Fenster zu öffnen. Der Pfeil rechts zeigt vorher eine kurze Beschreibung. Um ein Werkzeug schnell zu finden, tipp einen Teil seines Namens ins Suchfeld oben im Bereich, auf Deutsch oder Englisch. Die Fenster bleiben offen, während du in Revit weiterarbeitest." },
      { h: "Auf Starten klicken",
        p: "Jedes Werkzeug hat unten rechts eine gelbe Schaltfläche [[Starten]]. Lange Läufe zeigen ein Fortschrittsfenster mit [[Abbrechen]]. Jede Änderung ist ein einziger Rückgängig-Schritt in Revit, Strg+Z nimmt also einen ganzen Lauf zurück." },
      { h: "Einrichtung fürs Projekt speichern",
        p: "Mit [[Projekt speichern]] legst du die Einstellungen aller offenen Werkzeuge in einem Ordner ab, zum Beispiel neben dem Modell. Beim nächsten Mal klickst du auf [[Projekt öffnen]] und wählst diesen Ordner." }
    ],
    goodToKnow: "Gut zu wissen",
    notes: [
      "Mit dem Stern neben einem Werkzeug landet es oben im Bereich unter Favoriten. Darunter stehen deine drei zuletzt verwendeten Werkzeuge.",
      "Jedes Werkzeug kann ein Tastenkürzel bekommen: In Revit unter Ansicht > Benutzeroberfläche > Tastaturbefehle nach BusyBee suchen.",
      "Revit fragt einmal, ob BusyBee geladen werden soll, weil das Add-in nicht signiert ist. Wähl [[Immer laden]].",
      "Während ein Werkzeug läuft, ist Revit selbst beschäftigt. Das Fortschrittsfenster reagiert trotzdem, Abbrechen greift nach dem aktuellen Element.",
      "Probleme? Schick Sascha eine kurze Notiz und die heutige Protokolldatei aus `%LOCALAPPDATA%\\BusyBee\\logs`."
    ],
    glossaryTitle: "Revit-Begriffe auf Deutsch und Englisch",
    glossaryLead: "Die Anleitungen nennen die deutschen Revit-Begriffe. Ist dein Revit auf Englisch, hilft dir diese Liste.",
    glossaryEn: "Englisches Revit",
    glossaryDe: "Deutsches Revit"
  },

  tools: {
    "parameter-automation": {
      name: "Parameter-Automatisierung",
      tagline: "Parameter mit WENN- und SONST-WENN-Regeln oder Formeln füllen und jede Änderung vor dem Schreiben prüfen.",
      summary: "Liest einen Quellparameter, prüft ihn gegen eine oder mehrere Bedingungen und schreibt einen Wert in einen Zielparameter. Der Wert kann fester Text sein oder eine Formel wie `{Ebene}-{Kennzeichen}`. Die Regeln sind in Kategoriegruppen organisiert, eine Einrichtung kann also Luftkanäle, Rohre und Formteile gleichzeitig abdecken. Bevor etwas geschrieben wird, zeigt eine Vorschau jede Änderung.",
      when: [
        "Kommentare, Kennzeichen oder einen Projektparameter aus einem anderen Parameter füllen, etwa aus Ebene oder Systemname.",
        "Werte aus anderen Parametern zusammensetzen, zum Beispiel Türnummern als `{Ebene}-{Kennzeichen}`.",
        "Kürzel in lesbare Werte übersetzen, zum Beispiel SA_F → Zuluft.",
        "Nur die leeren Werte in einem Modell füllen, das jemand anderes angefangen hat."
      ],
      steps: [
        "Öffne eine Ansicht mit den Elementen, die du bearbeiten willst.",
        "Wähl unter [[Kategorie]] eine Kategorie und klick auf [[+ Neue Kategoriegruppe]]. Mit [[+ Kategorie hinzufügen]] nimmst du weitere Kategorien in dieselbe Gruppe.",
        "Klick auf [[+ Parameter-Zuordnung]]. Wähl den [[Quellparameter]], der gelesen wird, und den [[Zielparameter]], der geschrieben wird.",
        "Wähl unter [[Bedingte Regeln]] einen Operator wie [[ist gleich]] oder [[enthält]], gib den gesuchten Wert ein und nach dem Pfeil den Wert, der geschrieben wird. Der Wert darf `{Parameter}`-Formeln enthalten.",
        "Mit [[+ Bedingung hinzufügen]] kommen weitere Fälle dazu. Sie werden als SONST-WENN von oben nach unten geprüft; der erste Treffer gilt.",
        "Klick auf [[Starten]]. Noch wird nichts geschrieben: Eine Vorschau listet jedes Element, dessen Wert sich ändern würde, mit dem Wert jetzt und nach dem Schreiben. Ein Doppelklick auf eine Zeile wählt das Element aus und zoomt hin.",
        "Klick auf [[N Änderung(en) schreiben]], um sie zu schreiben, oder schließ die Vorschau, dann bleibt das Modell unverändert. Eine Zusammenfassung zeigt, was geändert wurde, und ein Strg+Z nimmt den ganzen Lauf zurück."
      ],
      settings: [
        ["Operatoren", "ist gleich, ist ungleich, größer oder kleiner als (auch mit gleich), enthält, beginnt mit, endet mit und deren Gegenteile, hat einen Wert, hat keinen Wert. Größer und kleiner vergleichen Zahlen, auch wenn Revit Einheiten anzeigt."],
        ["Formeln", "`{Ebene}-{Kennzeichen}` gibt jedem Element seinen eigenen Wert, etwa EG-101. Jeder Parameter des Elements oder seines Typs geht, mit dem Namen, den Revit anzeigt. `{Ebene}` funktioniert auch in englischem Revit und `{Level}` in deutschem. Für eine geschweifte Klammer schreibst du `{{` oder `}}`. Fehlt einem Element ein Parameter aus der Formel, steht es in der Vorschau als Nicht schreibbar und bleibt unverändert."],
        ["Zahlen und Einheiten", "Werte werden gelesen wie in der Eigenschaftenpalette: 2500 nutzt die Projekteinheit, 2500 mm, 2,5 m oder 8' 2\" die eingegebene Einheit. Eine unpassende Einheit, etwa kg bei einer Länge, steht als Nicht schreibbar da. Ja/Nein-Parameter verstehen Ja, Nein, Yes und No."],
        ["Typparameter", "Werden einmal pro Typ geschrieben. Bräuchten die Exemplare eines Typs unterschiedliche Werte, etwa Türen eines Typs auf zwei Ebenen, bleibt der Typ unverändert und steht als Typ übersprungen da."],
        ["Gleichbleibende Werte zeigen", "In der Vorschau. Werte, die sich nicht ändern würden, sind ausgeblendet, bis du das anhakst."],
        ["Nur leere Parameter beschreiben", "In den Einstellungen (Zahnrad). Überspringt Elemente, deren Zielparameter schon einen Wert hat. Gilt auch für Typparameter."],
        ["Konfiguration speichern / laden", "Speichert die Regeln als Datei, damit du sie in einem anderen Projekt wiederverwenden kannst."]
      ],
      tips: [
        "Mit dem Kopiersymbol duplizierst du eine Kategoriegruppe als Ausgangspunkt für ähnliche Regeln.",
        "Geschrieben wird mit den Regeln, wie sie beim Klick auf Starten waren. Änderst du sie, während die Vorschau offen ist, ändert das nichts am Ergebnis.",
        "Fährst du mit der Maus über ein Wertefeld, erscheint eine kurze Hilfe zu Formeln."
      ],
      issues: ["type-param-writes", "english-messages", "reports-english"],
      shots: [{ src: "param-rules.webp", alt: "Parameter-Automatisierung mit einer WENN- und einer SONST-WENN-Regel für Luftdurchlässe" }]
    },

    "spatial-parameters": {
      name: "Räume, Raster & Ebenen",
      tagline: "Den Raum, die Rasterposition oder den Ebenenbereich in jedes Element schreiben.",
      summary: "Ein Fenster mit drei Reitern. Die Raum-Zuordnung findet den Raum oder MEP-Raum, in dem ein Element liegt, und schreibt Nummer und Name, auch aus Räumen in verknüpften Modellen. Die Raster-Zuordnung findet die nächsten Rasterlinien oder den Schnittpunkt und schreibt sie als Text, etwa C-4. Die Ebenen-Zuordnung schreibt für jeden Bereich zwischen zwei Ebenen einen Wert deiner Wahl. Bevor etwas geschrieben wird, zeigt eine Vorschau jeden alten und neuen Wert.",
      when: [
        "Türen, Möbeln, Sanitärobjekten oder TGA-Auslässen Raumnummern für Bauteillisten geben.",
        "Tragwerks- oder TGA-Elementen eine Achsangabe geben.",
        "Elemente mit Geschoss- oder Zonennamen versehen oder einen hohen Schacht oder Steigstrang nach Ebenen aufteilen."
      ],
      steps: [
        "Hak unter [[Zielkategorien]] die Kategorien an. Sie bleiben angehakt, wenn du den Reiter wechselst.",
        "Für Räume: Öffne [[Raum-Zuordnung]], wähl ein [[Parameterformat]], den oder die Zielparameter und den [[Referenzpunkt-Modus]]: Mitte, Unterkante oder Oberkante des Elements.",
        "Für Raster: Öffne [[Raster-Zuordnung]], wähl den Zielparameter und einen [[Erkennungsmodus]]. Für Rasterschnittpunkte legst du das Format fest, zum Beispiel `[X-Grid]-[Y-Grid]`.",
        "Für Ebenen: Öffne [[Ebenen-Zuordnung]], wähl den [[Zielparameter]] und einen [[Räumlicher Erkennungsmodus]]. Klick für jeden Bereich auf [[+ Bereich hinzufügen]] und leg die beiden Ebenen und den [[Parameterwert]] fest. Weiter oben stehende Bereiche gewinnen bei Überlappung; ordne sie per Ziehen oder mit den Pfeilen.",
        "Klick auf [[Starten]]. Die Vorschau zeigt jeden Wert, der sich ändern würde, alt und neu. Mit [[Schreiben]] wird geschrieben; schließt du die Vorschau, ändert sich nichts.",
        "In der Ebenen-Zuordnung färbt [[Nach Wert färben]] das Ergebnis in der Ansicht ein."
      ],
      settings: [
        ["Parameterformat", "Nummer und Name in einem Parameter, nur Nummer, nur Name oder Nummer und Name in zwei getrennten Parametern."],
        ["Rasterschnittpunkt", "Schreibt den nächsten Schnittpunkt zweier Rasterlinien im festgelegten Format."],
        ["Nächstgelegene Rasterlinie", "Schreibt die nächste einzelne Rasterlinie."],
        ["Nächste Rasterlinie links und unten", "Schreibt die nächste Rasterlinie links und unterhalb, so wie Rasterfelder oft benannt werden."],
        ["Schwerpunkt / Unterkante / Oberkante", "Ebenen-Zuordnung: Der Mittelpunkt, der tiefste oder der höchste Punkt des Elements entscheidet."],
        ["Vollständig enthalten / Schneidet", "Ebenen-Zuordnung: Das Element muss ganz im Bereich liegen, oder jede Überlappung zählt."],
        ["Nur leere Parameter beschreiben", "In den Einstellungen (Zahnrad), für alle drei Reiter."],
        ["Konfig. speichern / laden", "Eine Datei enthält alle drei Reiter, die angehakten Kategorien und den offenen Reiter. Ältere Dateien von Raum- & Achsenparametern oder vom früheren Fenster Ebenen-Zuordnung lassen sich weiter laden."]
      ],
      tips: [
        "Rohr- und Kanaldämmung bekommt denselben Wert wie ihr Rohr oder Kanal, wenn sie einen Parameter dieses Namens hat.",
        "Liegt der Mittelpunkt nicht in einem Raum, versucht BusyBee auch die Enden, die Anschlüsse und kleine Versätze.",
        "Räume werden in der Phase des Elements gesucht.",
        "Liegt ein Element in keinem Raum des geöffneten Modells, sucht BusyBee in allen geladenen Verknüpfungen, in der Phase der Verknüpfung mit demselben Namen wie die der Ansicht. So kann ein TGA-Modell die Raumnummern der Architektur schreiben. Die Zusammenfassung zeigt, wie viele aus Verknüpfungen kamen.",
        "Ebenen werden mit der Projekthöhe verglichen, ein angehobener Projektbasispunkt ergibt also richtige Ergebnisse. Mit „Vollständig enthalten“ findest du Elemente, die über eine Ebene hinausgehen: Sie bekommen keinen Wert.",
        "Typparameter werden einmal pro Typ geschrieben. Brauchen seine Exemplare verschiedene Werte, bleibt der Typ unverändert und wird im Ergebnis genannt.",
        "Die Ebenen-Zuordnung war früher ein eigenes Fenster mit eigener Schaltfläche; seit 1.38 ist sie der dritte Reiter hier."
      ],
      issues: ["spatial-linked-rooms", "type-param-writes"],
      shots: [
        { src: "spatial-room.webp", alt: "Räume, Raster & Ebenen auf dem Reiter Raum-Zuordnung" },
        { src: "spatial-grid.webp", alt: "Räume, Raster & Ebenen auf dem Reiter Raster-Zuordnung mit dem Format [X-Grid]-[Y-Grid]" },
        { src: "level-mapping.webp", old: true, alt: "Das frühere Fenster Ebenen-Zuordnung mit zwei Höhenbereichen für Luftkanäle und Luftdurchlässe" }
      ]
    },

    "color-by-parameter": {
      name: "Farbe nach Parameterwert",
      tagline: "Elemente nach Wert einfärben, mit Live-Legende.",
      summary: "Gruppiert die ausgewählten Elemente nach dem Wert eines Parameters und gibt jedem Wert eine eigene Farbe in der aktiven Ansicht. Ein Legendenfenster listet jeden Wert mit Anzahl, und du kannst Elemente nach Wert isolieren oder auswählen.",
      when: [
        "Auf einen Blick sehen, welche Elemente ein System, eine Phase oder eine Feuerwiderstandsklasse teilen.",
        "Lücken finden: Leere Werte bekommen auch eine eigene Farbe.",
        "Geschwindigkeits- oder Größenbereiche mit Farbbereichen zeigen."
      ],
      steps: [
        "Wähl Elemente in Revit aus und klick auf [[Auswahl laden]].",
        "Wähl einen [[Parameter]]. Mit [[Alle Parameter anzeigen]] siehst du mehr als die gemeinsamen.",
        "Für Zahlenbereiche hakst du [[Farbbereiche]] an und gibst die [[Grenzen]] ein.",
        "Klick auf [[Starten]]. Die Legende öffnet sich.",
        "Klick in der Legende auf einen Wert (Strg oder Umschalt für mehrere) und nutz [[Isolieren]] oder [[Isolierung aufheben]].",
        "Mit [[Farben zurücksetzen]] kommen die Farben zurück, die die Ansicht vorher hatte."
      ],
      settings: [
        ["Auswahl laden", "Übernimmt die aktuelle Revit-Auswahl. Du kannst auch in der Legende starten."],
        ["Farben zurücksetzen", "Stellt die vorherigen Farben jedes Elements wieder her, auch deine manuellen. Nach einem Revit-Neustart hat BusyBee keine Aufzeichnung und fragt, bevor es die Ansicht leert."]
      ],
      tips: ["Der Reiter Ebenen-Zuordnung in Räume, Raster & Ebenen hat eine eigene Schaltfläche „Nach Wert färben“, die dieselbe Legende öffnet."],
      issues: ["color-repeat"],
      shots: [
        { src: "color-by-param.webp", alt: "Farbe nach Parameterwert mit 4.546 geladenen Elementen und Kategorie als Parameter" },
        { src: "legend.webp", alt: "Farblegende mit Kategorien und Elementanzahl" }
      ]
    },

    "clash-detection": {
      name: "Kollisionsprüfung",
      tagline: "Harte Kollisionen und Abstandsprobleme finden, zwischen Läufen verfolgen, als BCF exportieren und Durchbrüche setzen.",
      summary: "Prüft eine Gruppe von Kategorien gegen eine andere: im Hauptmodell, gegen ein verknüpftes Modell, gegen alle Verknüpfungen auf einmal oder eine Verknüpfung gegen eine andere. Typische Fehlmeldungen werden ignoriert: verbundene Kanal- und Rohrstrecken, Dämmung, gehostete Bauteile, verschachtelte Familien und verbundene Geometrie. Du kannst die Einrichtung als Test speichern, siehst, welche Kollisionen seit dem letzten Lauf neu oder gelöst sind, gibst Kollisionen frei, exportierst sie als BCF oder CSV und setzt Durchbrüche, wo Kanäle und Rohre Wände und Decken kreuzen.",
      when: [
        "Kanäle und Rohre vor einer Koordinationsbesprechung gegen Decken und Wände prüfen.",
        "Das Lüftungsmodell gegen das Tragwerksmodell prüfen, ohne eines der beiden zu öffnen.",
        "Enge Stellen mit einer Abstandsprüfung finden, zum Beispiel 50 mm um Kabeltrassen.",
        "Sehen, was sich seit dem Lauf letzte Woche geändert hat, und die offenen Kollisionen als BCF an BIMcollab, Solibri, Navisworks oder Revizto geben.",
        "Im Architekturmodell die Durchbrüche für die verknüpften Kanäle der TGA setzen."
      ],
      steps: [
        "Willst du eine gespeicherte Einrichtung nutzen, wähl sie oben links unter [[Test]]. Sonst richtest du die Prüfung so ein:",
        "Wähl unter [[1. Primärkategorien in]], woher die Primärelemente kommen, [[Hauptmodell]] oder eine Verknüpfung, und hak ihre Kategorien an, zum Beispiel Luftkanäle und Luftkanalformteile.",
        "Wähl unter [[2. Kollision mit]] das Modell, gegen das geprüft wird: [[Hauptmodell]], eine Verknüpfung oder [[All Linked Models]]. Hak dann die Kategorien an, zum Beispiel Geschossdecken und Wände.",
        "Wähl unter [[3. Kollisionsmodus & Toleranz]] [[Harte Kollision]] oder [[Abstand (Weich)]] und trag den Abstand in mm ein.",
        "Klick auf [[Starten]]. Die Statuszeile zeigt, wie viele Kollisionen seit dem letzten Lauf mit denselben Einstellungen neu, weiterhin da und gelöst sind, und wie lange der Lauf gedauert hat.",
        "Klick auf ein Ergebnis, um beide Elemente zu sehen. Mit [[3D-Zoom]], [[Elemente isolieren]], [[3D-Schnittbereich]] oder [[Elemente einfärben]] schaust du es dir an. Neue Kollisionen haben ein blaues NEU, und [[Nur neue]] zeigt nur diese.",
        "Drück die Leertaste oder [[Freigeben]] für Kollisionen, die in Ordnung sind. Ergänz bei Bedarf eine Notiz. [[Freigegebene ausblenden]] nimmt sie aus der Liste.",
        "Teil das Ergebnis mit [[BCF-Export]] oder [[CSV-Export]], oder sichere es mit [[Kollisionen speichern]]. Um die Einrichtung fürs nächste Mal zu behalten, gib unter [[Test]] einen Namen ein und klick auf Speichern.",
        "Für Durchbrüche filterst du die Liste auf die gewünschten Kollisionen und klickst auf [[Durchbrüche setzen]]."
      ],
      settings: [
        ["Harte Kollision", "Elemente überschneiden sich mindestens um die Toleranz."],
        ["Abstand (Weich)", "Elemente kommen sich näher als der Abstand, auch ohne Berührung."],
        ["All Linked Models", "In der Liste der Zielmodelle. Prüft die Primärelemente in einem Lauf gegen alle geladenen Verknüpfungen. Die Listen enthalten auch Kategorien, die nur eine Verknüpfung hat."],
        ["Test", "Benannte Einstellungen aus Kategorien, Modellen, Modus, Toleranz und Prüfbereich, gespeichert neben dem Modell in `<Modell>.BusyBeeClashTests.json`. So sieht das ganze Team dieselben Tests. Sie funktionieren in deutschem und englischem Revit."],
        ["NEU, weiterhin, gelöst", "Jeder Lauf wird mit dem vorigen Lauf mit denselben Einstellungen in derselben Ansicht verglichen. Der Link N gelöst listet die Kollisionen, die weg sind. Abgebrochene Läufe und Läufe nur auf ausgewählten Elementen werden nicht verglichen."],
        ["BCF-Export", "Schreibt die angezeigten Kollisionen als BCF-2.1-Datei, ein Thema pro Kollision mit Kameraansicht und beiden Elementen. Suche, Kategoriefilter, Freigegebene ausblenden und Nur neue bestimmen, was hineinkommt. Freigegebene Kollisionen sind geschlossen, und ein erneuter Export aktualisiert dieselben Themen, statt Kopien anzulegen."],
        ["Durchbrüche setzen", "Setzt für jede Kollision der Liste, bei der ein Luftkanal, Rohr, eine Kabeltrasse oder ein Leerrohr eine Wand oder Decke des geöffneten Modells kreuzt, einen rechteckigen Durchbruch. Das TGA-Element darf in einer Verknüpfung liegen. Der Durchbruch ist so groß wie das Element plus Abstand auf jeder Seite. Freigegebene Kollisionen werden übersprungen, ein vorhandener Durchbruch wird nicht doppelt gesetzt, neue Durchbrüche nennen die Kollision in ihren Kommentaren, und ein Strg+Z entfernt alle Durchbrüche eines Klicks."],
        ["Durchbruch-Abstand (mm)", "In den Einstellungen (Zahnrad). Der Abstand zwischen Element und Rand des Durchbruchs, standardmäßig 50 mm."],
        ["Gruppierung", "Flach, nach Primärelement, nach Kategorien, nach Ebene oder nach System."],
        ["Nur sichtbare Objekte prüfen", "In den Einstellungen. Beschränkt beide Seiten auf das, was die aktive Ansicht zeigt."],
        ["Nur ausgewählte Elemente", "In den Einstellungen. Prüft nur die Revit-Auswahl."]
      ],
      tips: [
        "Die Primärelemente kommen immer aus der aktiven Ansicht. Ein Lauf in einer 3D-Ansicht und einer im Grundriss prüfen also unterschiedliche Elemente, und jede Ansicht hat ihren eigenen Verlauf für neu und gelöst.",
        "Freigaben, Tests und Verlauf liegen neben dem Modell, bei Cloud-Modellen in deinem AppData-Ordner. Bei einem späteren Lauf sind sie noch da.",
        "Große Modelle laufen deutlich schneller als früher: Die Geometrie jedes Elements wird nur einmal pro Lauf gelesen.",
        "Jede Rücksetz-Schaltfläche macht ihre eigene Aktion rückgängig: Isolierung aufheben, Schnittbereich zurücksetzen, Farben zurücksetzen. Beim Schließen des Fensters wird die Isolierung ebenfalls aufgehoben."
      ],
      issues: ["openings-limits", "linked-primary", "clash-one-link", "clash-no-bcf", "revit-busy"],
      shots: [{ src: "clash-de.webp", de: true, old: true, alt: "Kollisionsprüfung mit Luftkanälen gegen Geschossdecken im verknüpften Architekturmodell" }]
    },

    "model-health": {
      name: "Modellgesundheit",
      tagline: "Das Modell bewerten und Warnungen, ungenutzte Familien und Ballast bereinigen.",
      summary: "Durchsucht das ganze Projekt und vergibt eine Bewertung von 0 bis 100. Drei Registerkarten führen dich durch die Warnungen, bereinigen ungenutzte Familien und Typen und entfernen CAD-Importe, Projektfamilien und nicht platzierte Räume.",
      when: [
        "Bevor du ein Modell übergibst oder in eine gemeinsame Umgebung hochlädst.",
        "Wenn ein Modell langsam wirkt oder die Datei immer größer wird."
      ],
      steps: [
        "Öffne das Werkzeug. Die Prüfung startet von selbst; [[Audit starten]] prüft erneut.",
        "Auf [[Dashboard]] siehst du die Bewertung und vier Summen. [[Warnungen prüfen]] und [[Bereinigungs-Manager]] springen zu den Details.",
        "Auf [[Warnungen]] filterst du nach Kritisch, Mittel oder Niedrig. Klapp eine Gruppe auf, um die Elemente auszuwählen, hinzuzoomen, zu isolieren oder in einen Schnittbereich zu setzen.",
        "Auf [[Ungenutzte & Familien]] lässt du [[Nur ungenutzte]] aktiv, hakst an, was weg soll, und klickst auf [[Ausgewählte bereinigen]].",
        "Auf [[Modell-Sauberkeit]] löschst du importierte CAD-Dateien, findest Projektfamilien und entfernst nicht platzierte Räume.",
        "Teil das Ergebnis mit [[HTML-Bericht exportieren]], [[CSV-Übersicht exportieren]] oder [[Zusammenfassung kopieren]]."
      ],
      settings: [
        ["Bewertung", "Startet bei 100. Jede Warnung kostet Punkte (1,5 kritisch, 0,75 mittel, 0,2 niedrig), jeder CAD-Import 4, jede Projektfamilie 2,5, jeder nicht platzierte Raum 1, dazu ein Abzug, wenn mehr als 30 % der Familien ungenutzt sind."],
        ["Schweregrad", "Kommt vom Warnungstyp in Revit, nicht vom Text, ist also in deutschem und englischem Revit gleich."],
        ["Systemfamilien-Typen einbeziehen", "Listet auch ungenutzte Wand-, Decken- und andere Systemtypen."]
      ],
      tips: [
        "Bereinigen und Löschen fragen immer vorher nach und sind jeweils ein Rückgängig-Schritt.",
        "Verknüpfte CAD-Dateien sind unproblematisch und zählen nicht. Nur importierte CAD-Dateien zählen."
      ],
      issues: ["health-score-size", "health-low-severity"],
      shots: [
        { src: "health-dashboard.webp", alt: "Dashboard der Modellgesundheit mit Bewertung, Warnungen, ungenutzten Familien und Ballast" },
        { src: "health-warnings.webp", alt: "Warnungen nach Typ gruppiert mit Elementanzahl" },
        { src: "health-families.webp", alt: "Liste ungenutzter Familien mit Bereinigen-Schaltflächen" }
      ]
    },

    "quality-control": {
      name: "Qualitätskontrolle",
      tagline: "Parameter gegen deine Regeln prüfen und Fehler hervorheben.",
      summary: "Du baust eine Vorlage aus Regeln, etwa „Türkennzeichen müssen gefüllt sein“ oder „Plannummern müssen einem Muster folgen“. BusyBee prüft die Elemente der aktiven Ansicht, bewertet die Einhaltung, färbt Fehler ein und listet sie, damit du sie abarbeiten kannst.",
      when: [
        "Vor dem Planversand: Sind alle Kennzeichen, Nummern und Feuerwiderstandsklassen gefüllt?",
        "Benennungen per Muster gegen den Bürostandard prüfen."
      ],
      steps: [
        "Klick auf [[+ Neue Regel konfigurieren]]. Gib einen [[Regelname]] ein und wähl die Kategorien.",
        "Wähl den [[Zielparameter-Name]] und eine [[Prüfbedingung]].",
        "Wähl eine Hervorhebungsfarbe und lass [[Fehler in Ansicht hervorheben]] aktiv.",
        "Klick auf [[Regel zur Vorlage hinzufügen]]. Hak die Regeln an, die laufen sollen.",
        "Klick auf [[Starten]]. Die Befunde erscheinen rechts, nach Kategorie gruppiert.",
        "Ein Klick auf einen Befund wählt das Element aus, ein Doppelklick zoomt hin. Mit [[Mängel isolieren]] siehst du nur die Fehler.",
        "Am Ende klickst du auf [[Hervorhebungen zurücksetzen]]. Die Regeln sicherst du mit „Vorlage speichern“."
      ],
      settings: [
        ["Wert erforderlich (melden, wenn leer)", "Meldet, wenn der Parameter leer ist."],
        ["Muss leer sein (melden, wenn befüllt)", "Meldet, wenn der Parameter einen Wert hat."],
        ["Entspricht Regex", "Meldet, wenn der Wert nicht zum Muster passt, etwa `^W-[0-9]{3}$` für W-001."],
        ["Abweichung Exemplar vs. Typ", "Meldet, wenn Exemplar- und Typwert eines Parameters verschieden sind."],
        ["Ansicht nach QA-Status einfärben", "In den Einstellungen (Zahnrad). Färbt auch fehlerfreie Elemente."]
      ],
      tips: [
        "Wähl gezielt Kategorien. Mit „Alle Kategorien“ werden Elemente ohne den Parameter, etwa Modelllinien, als fehlend gemeldet.",
        "Zurücksetzen stellt die vorherigen Farben wieder her, auch deine eigenen."
      ],
      issues: ["qc-all-categories"],
      shots: [{ src: "qc.webp", alt: "Qualitätskontrolle mit Regeln, Bewertung und Befunden für Luftkanäle" }]
    },

    "loin-check": {
      name: "LOIN-Qualitätsprüfung",
      tagline: "Das Modell gegen deine LOIN-Matrix prüfen.",
      summary: "Lad die LOIN-Matrix aus Excel, ordne ihre Attribute Revit-Parametern zu und prüf, welche Elemente die geforderten Informationen für jede Leistungsphase (LPH 1–9) haben. Das Dashboard zeigt die Einhaltung pro Parameter und lässt sich bis zu den einzelnen fehlerhaften Elementen aufklappen.",
      when: [
        "Zu Phasenabschlüssen prüfen, ob das Modell die Informationen aus dem BAP enthält.",
        "Jedem Familientyp eine ELEMENT-Klassifizierung geben, damit die Matrix ihn findet."
      ],
      steps: [
        "Klick auf [[Excel-Matrix laden]] und wähl deine Matrix. Die Registerkarte [[Konfiguration]] listet alle LOIN-Attribute.",
        "Leg den [[Primärer Element-Identifikator]] fest: den gemeinsamen Parameter ALG_Element, die Kategorie oder Familie und Typ. Er muss zu den Elementnamen in den Spalten deiner Matrix passen.",
        "Klick auf [[Auto-Zuordnung]], um Attribute gleichnamigen Revit-Parametern zuzuordnen. Den Rest ordnest du über die Auswahllisten zu und klickst auf [[Änderungen speichern]].",
        "Wähl den [[Prüfbereich]]: Aktive Ansicht oder Gesamtes Modell.",
        "Klick auf [[Starten]]. Das [[Dashboard]] zeigt eine Bewertung und einen Balken pro Parameter. Klapp eine Zeile auf, um fehlerhafte Elemente zu zoomen oder zu isolieren.",
        "Oben filterst du nach Phase und Anwendungsfall; mit [[Prüfbericht exportieren (CSV)]] teilst du das Ergebnis.",
        "Auf [[Elementtyp-Zuordnung]] füllst du ELEMENT- und TYPE-Werte pro Familientyp, überträgst sie innerhalb einer Familie und klickst auf [[Änderungen ins Modell übernehmen]]."
      ],
      settings: [
        ["Matrixformat", "Ein Blatt mit den Überschriften Attribut / Parameter, Datentyp und ab LPH in den ersten 10 Zeilen, danach eine Spalte pro Element. Markier die Zellen mit x (Pflicht), a (automatisch) oder z (bedingt). Eine Anforderung gilt ab ihrer LPH bis LPH 9."],
        ["Zuordnungen importieren / exportieren", "Speichert die Parameterzuordnung als Datei für andere Projekte."]
      ],
      tips: [
        "Lad unten die Beispielmatrix herunter, um das Format zu sehen, und ersetz die Elementspalten durch deine eigenen.",
        "Ja/Nein-Prüfungen verstehen Ja und Nein, Zahlen im deutschen Format werden erkannt."
      ],
      download: { href: "downloads/BusyBee-LOIN-sample-matrix.xlsx", label: "Beispiel-LOIN-Matrix herunterladen (.xlsx)" },
      issues: ["loin-headers"],
      shots: [
        { src: "loin-dashboard.webp", alt: "LOIN-Dashboard mit Einhaltung pro Parameter" },
        { src: "loin-config.webp", alt: "LOIN-Konfiguration mit zugeordneten Revit-Parametern" }
      ]
    },

    "schedules-excel": {
      name: "Bauteillisten in Excel",
      tagline: "Bauteillisten nach Excel, dort bearbeiten und mit Vorschau zurück in Revit.",
      summary: "Exportiert Revit-Bauteillisten als .xlsx-Dateien, auch ohne installiertes Excel. „Bearbeitbar“ liefert eine Zeile pro Element mit seiner Revit-ID, sodass du Werte in Excel ändern und wieder einlesen kannst. „Wie in Revit angezeigt“ behält Gruppierung, Überschriften und Summen für Mengenlisten. Eine Firmenvorlage mit Logo und Kopf kann befüllt werden.",
      when: [
        "Jemand füllt Tür- oder Raumdaten in Excel aus.",
        "Du brauchst Mengen im Firmenlayout für eine Kostenschätzung.",
        "Du willst viele Werte auf einmal mit Excels Ausfüllen und Suchen korrigieren."
      ],
      steps: [
        "Öffne [[Bauteillisten in Excel]] und hake die Bauteillisten an.",
        "Wähl [[Bearbeitbar, zum Zurücklesen]] oder [[Wie in Revit angezeigt, für Mengen]].",
        "Wähl bei Bedarf eine Excel-Vorlage und einen Ordner und klick auf [[… nach Excel exportieren]].",
        "Ändere Werte in den gelben Spalten. Graue Spalten sind nur zum Lesen. Lass die Überschriften und die Spalte Revit-ID stehen.",
        "Klick auf [[Aus Excel einlesen…]] und wähl die Dateien. BusyBee zeigt dir zuerst jede Änderung; [[… Änderung(en) schreiben]] schreibt sie in einem Rückgängig-Schritt."
      ],
      settings: [
        ["Bearbeitbar, zum Zurücklesen", "Eine Zeile pro Element mit seiner Revit-ID. Berechnete Werte, Anzahlen und Raumfelder fehlen, weil sie sich nicht zurückschreiben lassen."],
        ["Wie in Revit angezeigt, für Mengen", "Gruppierung, Überschriften und Summen wie in der Bauteilliste, Zahlen als echte Excel-Zahlen. Lässt sich nicht einlesen."],
        ["Excel-Vorlage", "Eine .xlsx mit deinem Logo und Kopf. Schreib `{Table}` in die Zelle, in der die Tabelle beginnen soll. `{Project}` und ähnliche Platzhalter werden ausgefüllt."]
      ],
      tips: [
        "Eine Datei aus einem anderen Modell wird beim Einlesen übersprungen, damit ihre IDs keine falschen Elemente treffen.",
        "Zeilen ohne Revit-ID werden übersprungen: Neue Elemente lassen sich aus Excel nicht anlegen.",
        "Schließ die Datei in Excel, bevor du sie noch einmal exportierst."
      ],
      issues: [],
      shots: []
    },

    "batch-export": {
      name: "Stapelexport",
      tagline: "Pläne als PDF und DWG, 3D-Ansichten als IFC, in einem Durchgang.",
      summary: "Exportiert die angehakten Pläne als PDF (eins pro Plan oder alle in einem) und DWG und die angehakten 3D-Ansichten als IFC. Die Dateinamen kommen aus einem Muster wie `{SheetNumber}_{SheetName}`, sodass sie jedes Mal gleich heißen.",
      when: [
        "Ein Plansatz geht an Bauherrn oder Firma.",
        "Nur die Pläne des letzten Index sollen raus.",
        "Ein IFC zur Koordination aus einer vorbereiteten 3D-Ansicht."
      ],
      steps: [
        "Öffne [[Stapelexport]] und hake Pläne an, oder wähl einen Revit-Plansatz oder einen Index, um dessen Pläne anzuhaken.",
        "Wähl die Formate: [[Ein PDF pro Plan]] oder [[Alle Pläne in einem PDF]], DWG mit einer [[Einstellung]], [[IFC (3D-Ansichten)]].",
        "Prüf die Dateinamen-Muster und wähl einen Ordner.",
        "Klick auf [[… Dateien exportieren]]. Dateien, die es schon gibt, werden vor dem Ersetzen aufgelistet."
      ],
      settings: [
        ["Dateinamen", "`{SheetNumber}` `{SheetName}` `{Revision}` `{RevisionDate}` `{Project}` `{ProjectNumber}` `{Date}` `{Model}` `{ViewName}` oder jeder Plan-, Ansichts- oder Projektparameter in geschweiften Klammern. Zeichen, die Windows nicht erlaubt, werden entfernt."],
        ["Einstellung", "Die im Projekt gespeicherte DWG-Exporteinstellung mit Layern, Farben und Einheiten."],
        ["Ein Unterordner pro Format", "Legt PDF-, DWG- und IFC-Dateien in eigene Unterordner."]
      ],
      tips: ["IFC exportiert, was die 3D-Ansicht zeigt. Blende vorher aus, was nicht raus soll."],
      issues: [],
      shots: []
    },

    "tag-tools": {
      name: "Beschriftungswerkzeuge",
      tagline: "Beschriftungen ordnen, Unbeschriftetes finden und Rohr- und Kanalstränge beschriften.",
      summary: "Links arbeitest du mit den ausgewählten Beschriftungen: ausrichten, verteilen, in einer Spalte mit sauberen Führungslinien stapeln, zurücksetzen, den Typ ändern oder ihre Positionen in andere Ansichten kopieren. Rechts prüfst du die aktive Ansicht auf unbeschriftete Elemente sowie überlappende, leere oder verwaiste Beschriftungen, beschriftest das Unbeschriftete ohne Überlappung und setzt Größenbeschriftungen entlang von Rohr- und Kanalsträngen.",
      when: [
        "Einen Plan aufräumen, bevor er rausgeht.",
        "Sicherstellen, dass jede Tür, jeder Raum oder jedes Gerät beschriftet ist.",
        "Größenbeschriftungen auf einem ganzen TGA-Plan mit einem Klick."
      ],
      steps: [
        "Öffne [[Beschriftungswerkzeuge]] in einem Grundriss oder Schnitt.",
        "Wähl Beschriftungen in der Ansicht aus (oder drück eine Schaltfläche und wähl sie dann), und nutz [[Ausrichten]], [[Waagrecht verteilen]], [[Senkrecht verteilen]], [[Beschriftungen stapeln]] oder [[Zurücksetzen]].",
        "Um eine Anordnung zu übertragen, hak andere Ansichten an und klick auf [[Positionen kopieren]]. Die Beschriftungen derselben Elemente dort bekommen dieselbe Position.",
        "Rechts hakst du Kategorien an und klickst auf [[Prüfen]]. Mit [[Auswählen]] oder [[Löschen]] arbeitest du mit dem Gefundenen weiter, oder mit [[Unbeschriftete beschriften]].",
        "Für TGA stell [[Eine Beschriftung alle]] ein und klick auf [[Stränge beschriften]]."
      ],
      settings: [
        ["Beschriftungen stapeln", "Setzt die Beschriftungen in eine Spalte neben das Beschriftete, in derselben Reihenfolge von oben nach unten, mit Führungslinien, die einmal knicken und sich nicht kreuzen. [[Abstand]] und [[Entfernung]] sind Millimeter auf dem gedruckten Plan."],
        ["Unbeschriftete beschriften", "Nimmt die Beschriftung der jeweiligen Kategorie und setzt sie dorthin, wo sie keine andere überlappt. [[Führungslinie, wenn verschoben]] ergänzt eine Führungslinie, wenn eine Beschriftung ausweichen musste."],
        ["Stränge beschriften", "Ein Strang läuft durch Bögen und Muffen weiter und endet bei einem Größenwechsel. Eine Beschriftung pro angefangener Länge, kurze Stücke werden übersprungen, und Stränge mit Beschriftung lassen sich überspringen."]
      ],
      tips: ["Jede Schaltfläche ist ein Rückgängig-Schritt.", "Verwaiste Beschriftungen gehören meist zu Elementen eines verknüpften Modells, das verschoben oder entladen wurde."],
      issues: [],
      shots: []
    },

    "small-tools": {
      name: "Kleine Helfer",
      tagline: "Helfer mit einem Klick für die tägliche Arbeit in Revit.",
      summary: "Der Abschnitt Kleine Helfer im Bereich und eine eigene Gruppe in der Multifunktionsleiste enthalten schnelle Helfer, die kein Fenster brauchen. Die beiden Schnitt-Schaltflächen sitzen unten im Bereich.",
      when: ["Kleine Aufgaben, die du sonst viele Male am Tag von Hand erledigst."],
      steps: [
        "Öffne den Abschnitt Kleine Helfer im BusyBee-Bereich oder nutz die Gruppe Kleine Helfer in der Multifunktionsleiste.",
        "Klick auf einen Helfer. Fahr vorher mit der Maus darüber, um zu sehen, was er tut."
      ],
      settings: [
        ["Wer war das", "Wer das ausgewählte Element erstellt und zuletzt geändert hat und wer es gerade ausgeliehen hat, dazu Bearbeitungsbereich, Phasen, Gruppe und Entwurfsoption. Braucht ein Modell mit Bearbeitungsbereichen."],
        ["Zuschnitt kopieren", "Überträgt den Zuschneidebereich des offenen Grundrisses auf andere. Anders gedrehte Pläne und Pläne mit Bereichsrahmen werden ausgelassen."],
        ["Ebenen kopieren", "Kopiert Ebenen aus einem verknüpften Modell: erst das Modell wählen, dann seine Ebenen. Vorhandene Ebenen bleiben, wie sie sind."],
        ["Farbige Reiter", "Jedes offene Modell bekommt eine eigene Farbe auf seinen Ansichtsreitern. Bleibt an, bis du es ausschaltest."],
        ["Überschreibungen zurücksetzen", "Entfernt alle Grafiküberschreibungen von Elementen in der aktuellen Ansicht, egal wer sie gesetzt hat. Ein Rückgängig-Schritt."],
        ["Raumumrisse 3D", "Zeigt Raum- und MEP-Raum-Umrisse in 3D-Ansichten, auch Räume aus verknüpften Modellen. Nur auf dem Bildschirm gezeichnet, im Modell ändert sich nichts."],
        ["Schnitt ↔ / Schnitt ↕", "Zieh in einem Grundriss ein Rechteck auf: Du bekommst einen Schnitt an der Kante, an der du angefangen hast, mit Blick in Zugrichtung, so tief wie das Rechteck und so hoch wie der Ansichtsbereich. Jeder hat je einen, der immer wieder benutzt wird."]
      ],
      tips: ["Jeder kleine Helfer hat eine Schaltfläche in der Multifunktionsleiste, also kannst du ihm ein Tastenkürzel geben."],
      issues: [],
      shots: []
    },

    "select-by-id": {
      name: "ID auswählen",
      tagline: "Element-IDs einfügen und direkt hinspringen.",
      summary: "Füg eine oder mehrere Element-IDs ein, etwa aus einem Kollisionsbericht oder einer Warnung. BusyBee wählt die Elemente aus, zoomt hin und kann sie isolieren, in einen Schnittbereich setzen oder hervorheben. Nicht vorhandene IDs werden markiert.",
      when: [
        "Elemente aus einem Navisworks- oder Solibri-Bericht finden.",
        "Jemandem eine Liste von Elementen schicken: „Auswahl holen“ kopiert die IDs."
      ],
      steps: [
        "Klick unten im Bereich auf [[ID auswählen]].",
        "Füg die IDs mit [[Einfügen]] ein oder tipp sie ein, getrennt durch Semikolon, Komma oder Leerzeichen.",
        "Schalt die gewünschten Aktionen ein: [[Zoomen]], [[3D-Schnittbereich]], [[Isolieren]], [[Hervorheben]].",
        "Drück Enter oder [[OK]]. Die Liste zeigt jede ID mit Kategorie, Typ und Ebene.",
        "Ein Klick auf eine Zeile fokussiert das Element. [[Isolierung aufheben]] stellt die Ansicht wieder her."
      ],
      settings: [
        ["Auswahl holen", "Übernimmt die IDs der aktuellen Revit-Auswahl ins Feld und kopiert sie in die Zwischenablage."],
        ["Verlauf", "Deine letzten ID-Listen aus dieser Sitzung."],
        ["Hervorheben", "Gibt den Elementen kräftige temporäre Farben, damit du zwei kollidierende Elemente leicht unterscheidest."]
      ],
      tips: [],
      issues: ["select-id-links"],
      shots: [{ src: "select-id.webp", alt: "ID auswählen mit drei gefundenen Elementen und einer fehlenden ID" }]
    },

    "inspect-categories": {
      name: "Kategorien prüfen",
      tagline: "Sehen, welche Kategorien deine Auswahl enthält.",
      summary: "Listet die Kategorien der ausgewählten Elemente und kopiert sie in die Zwischenablage. Praktisch, wenn du für eine Regel oder einen Filter genaue Kategorienamen brauchst.",
      when: ["Du hast gemischte Elemente ausgewählt und brauchst ihre genauen Kategorienamen."],
      steps: [
        "Wähl Elemente in Revit aus.",
        "Klick unten im Bereich auf [[Kategorien prüfen]].",
        "Mit [[In Zwischenablage kopieren]] fügst du die Liste woanders ein."
      ],
      settings: [],
      tips: ["Die Liste ist eine Momentaufnahme. Für eine neue Auswahl öffnest du das Fenster einfach neu."],
      issues: [],
      shots: [{ src: "object-categories.webp", alt: "Fenster mit den ausgewählten Kategorien Luftkanäle und Luftkanalformteile" }]
    },

    "project-workspace": {
      name: "Projekt-Arbeitsbereich",
      tagline: "Die Einrichtung aller Werkzeuge für ein Projekt speichern und wieder öffnen.",
      summary: "Speichert die Einstellungen aller offenen BusyBee-Werkzeuge in einem Ordner, etwa Regeln, Höhenbereiche, Kollisionskategorien und LOIN-Zuordnungen. Öffnest du den Ordner später oder gibst ihn weiter, sind die Werkzeuge gleich eingerichtet.",
      when: [
        "Du hast Regeln für ein Projekt eingerichtet und willst sie nächste Woche wieder nutzen.",
        "Jemand übernimmt das Projekt und soll mit denselben Einstellungen arbeiten."
      ],
      steps: [
        "Öffne und richte die Werkzeuge ein, die du behalten willst.",
        "Klick im Bereich auf [[Projekt speichern]] und wähl einen Ordner, zum Beispiel neben dem Modell.",
        "Beim nächsten Mal klickst du auf [[Projekt öffnen]] und wählst denselben Ordner. BusyBee zeigt dir, welche Einstellungen geladen wurden."
      ],
      settings: [],
      tips: [
        "Jedes Werkzeug hat zusätzlich eigene Schaltflächen zum Speichern und Laden der Konfiguration.",
        "Einstellungen funktionieren sprachübergreifend: in englischem Revit speichern, in deutschem öffnen.",
        "Alle sollten dieselbe BusyBee-Version nutzen. Einstellungen ab Version 1.9 lassen sich in älteren Versionen nicht richtig laden."
      ],
      issues: ["mixed-versions"],
      shots: [{ src: "pane-de.webp", de: true, alt: "BusyBee-Bereich mit Projekt öffnen und Projekt speichern" }]
    }
  },

  issuesPage: {
    title: "Bekannte Probleme",
    lead: "Was noch nicht so funktioniert, wie du es erwarten würdest, und wie du bis dahin drum herum kommst. Findest du etwas, das hier fehlt, sag Sascha Bescheid und schick das heutige Protokoll aus `%LOCALAPPDATA%\\BusyBee\\logs` mit."
  },

  issues: [
    { id: "openings-limits", title: "Durchbrüche setzen überspringt manche Kollisionen",
      body: "Durchbrüche werden nur gesetzt, wo ein gerader Luftkanal, ein Rohr, eine Kabeltrasse oder ein Leerrohr eine Wand oder Decke des geöffneten Modells kreuzt. Gekrümmte Wände, Vorhangfassaden, schräge Elemente (zwischen 17° und 72° zur Horizontalen) und andere Kollisionsarten werden übersprungen und in der Zusammenfassung gezählt. Die Durchbrüche sind einfache Revit-Öffnungen, keine Durchbruchsfamilien oder Hülsen.",
      fix: "Schau nach Durchbrüche setzen in die Zusammenfassung und setz die übersprungenen von Hand." },
    { id: "linked-primary", title: "Kollisionen mit verknüpftem Primärelement lassen sich nicht auswählen oder einfärben",
      body: "Kommen die Primärelemente aus einer Verknüpfung, erlaubt Revit nicht, sie im Hostmodell auszuwählen oder einzufärben.",
      fix: "Nutz 3D-Zoom, 3D-Schnittbereich oder Elemente isolieren, oder exportier BCF." },
    { id: "reports-english", title: "Exportierte Berichte bleiben englisch",
      body: "CSV- und HTML-Berichte, Revits eigene Fehlertexte, die Namen der drei Standardregeln der Qualitätskontrolle und einige feste Listeneinträge wie All Categories, Main Model und All Linked Models bleiben englisch, weil die Werkzeuge sie auch speichern und vergleichen.",
      fix: "Nicht nötig. Alles andere in BusyBee folgt der Sprache, die du wählst." },
    { id: "type-param-writes", title: "Typparameter bekommen den Wert des letzten Exemplars",
      body: "Ist der Zielparameter ein Typparameter, schreibt jedes Exemplar dieses Typs in denselben Wert; das letzte gewinnt. Liegen zum Beispiel zwei Türen eines Typs in verschiedenen Räumen, bekommt der Typ nur eine der beiden Raumnummern.",
      fix: "Schreib elementbezogene Werte in Exemplarparameter. Nimm Typparameter nur für Werte, die für alle Exemplare des Typs gleich sind." },
    { id: "revit-busy", title: "Revit ist während eines Laufs nicht bedienbar",
      body: "Revit lässt immer nur eine Änderung am Modell gleichzeitig zu. Das Fortschrittsfenster reagiert weiter, aber Revit selbst wartet bis zum Ende des Laufs.",
      fix: "Verkleinere bei großen Modellen den Umfang, etwa mit einer 3D-Ansicht nur eines Geschosses. Abbrechen greift nach dem aktuellen Element." },
    { id: "clash-one-link", title: "Ein verknüpftes Modell pro Kollisionslauf",
      body: "Du kannst das Hauptmodell gegen sich selbst oder gegen ein verknüpftes Modell prüfen. Verknüpfung gegen Verknüpfung oder alle Verknüpfungen auf einmal geht noch nicht.",
      fix: "Prüf pro Verknüpfung einmal und sichere jedes Ergebnis mit „Kollisionen speichern“." },
    { id: "clash-no-bcf", title: "Noch kein BCF-Export",
      body: "Kollisionsergebnisse lassen sich als CSV exportieren oder als BusyBee-Datei speichern, aber nicht als BCF.",
      fix: "Nutz den CSV-Export und „ID auswählen“, um Kollisionen weiterzugeben und zu finden." },
    { id: "health-score-size", title: "Große Modelle bekommen fast 0 Punkte",
      body: "Die Bewertung zieht Punkte pro Warnung ab und berücksichtigt die Modellgröße nicht. Ein großes Modell mit tausend kleinen Warnungen landet nahe 0 %, auch wenn es eigentlich gut in Schuss ist.",
      fix: "Vergleich die Bewertung eines Modells über die Zeit und achte auf die Anzahl kritischer und mittlerer Warnungen statt auf die Summe." },
    { id: "health-low-severity", title: "Viele TGA-Warnungen gelten als niedrig",
      body: "Der Schweregrad kommt aus einer festen Liste von Überlappungs-, Verbindungs-, Ungenauigkeits- und Raumwarnungen. Andere, etwa System- und Durchflusswarnungen, zählen als niedrig.",
      fix: "Filter die niedrigen Warnungen und schau dir die Gruppennamen an; einige sind für TGA-Modelle wichtig." },
    { id: "qc-all-categories", title: "„Alle Kategorien“ meldet Elemente ohne den Parameter",
      body: "Eine Regel mit „Alle Kategorien“ prüft auch Elemente wie Modelllinien, die den Parameter gar nicht haben, und meldet sie als fehlend.",
      fix: "Wähl nur die Kategorien, für die die Regel gedacht ist." },
    { id: "loin-headers", title: "Die LOIN-Matrix braucht feste Überschriften",
      body: "Der Import sucht die Spaltenüberschriften Attribut / Parameter, Datentyp und ab LPH in den ersten 10 Zeilen. Eine Matrix mit anderen Überschriften lädt keine Regeln.",
      fix: "Benenn die Überschriften in deiner Excel-Datei um oder fang mit der Beispielmatrix auf der Seite der LOIN-Qualitätsprüfung an." },
    { id: "spatial-linked-rooms", title: "Räume in verknüpften Modellen werden nicht gefunden",
      body: "Die Raum-Zuordnung findet nur Räume und MEP-Räume im geöffneten Modell. In TGA-Modellen liegen die Räume meist im verknüpften Architekturmodell.",
      fix: "Nutz MEP-Räume im eigenen Modell oder warte auf die Unterstützung verknüpfter Räume." },
    { id: "color-repeat", title: "Farben wiederholen sich nach zehn Werten",
      body: "Die Palette hat zehn Farben. Bei mehr Werten werden Farben wiederverwendet, und das Ergebnis wird nicht als Ansichtsfilter gespeichert.",
      fix: "Isolier bei vielen Werten über die Legende einen Wert nach dem anderen." },
    { id: "select-id-links", title: "Nur Element-IDs aus dem geöffneten Modell",
      body: "„ID auswählen“ findet keine Elemente in verknüpften Modellen und keine UniqueIds.",
      fix: "Öffne das verknüpfte Modell selbst, um seine IDs nachzuschlagen." },
    { id: "english-messages", title: "Einige Meldungen sind noch auf Englisch",
      body: "Ein paar Ergebnis- und Fehlermeldungen bleiben auf Englisch, auch wenn BusyBee auf Deutsch steht.",
      fix: "Nicht nötig, der Inhalt ist derselbe. Sie werden noch übersetzt." },
    { id: "mixed-versions", title: "Ältere Versionen lesen neue Einstellungen nicht",
      body: "Einstellungen ab BusyBee 1.9 speichern Kategorien und Parameter sprachunabhängig, und das verstehen ältere Versionen nicht.",
      fix: "Achte darauf, dass alle im Projekt die aktuelle Team-Version nutzen." }
  ],

  changes: {
    title: "Änderungen",
    lead: "Was sich in jeder Version geändert hat, die ans Team verteilt wurde. Dazwischen baut Sascha viele Testversionen; die sind hier zusammengefasst."
  },

  roadmap: {
    title: "Roadmap",
    lead: "Was fertig ist, was gerade entsteht und was als Nächstes kommt. Punkte wandern während der Entwicklung von geplant zu veröffentlicht; veröffentlicht heißt, es ist in einer Team-Version, die du installieren kannst."
  }
};
