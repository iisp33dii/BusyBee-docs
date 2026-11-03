/*
  Deutscher Text für die BusyBee-Seite. Wir duzen.
  [[Label]] zeigt eine Schaltfläche oder ein Feld in BusyBee. `text` zeigt Code oder einen Pfad.
*/
window.BB = window.BB || {};
BB.text = BB.text || {};

BB.text.de = {
  ui: {
    skip: "Zum Inhalt springen",
    nav: { home: "Übersicht", start: "Schnellstart", tools: "Werkzeuge", issues: "Bekannte Probleme", changes: "Änderungen", roadmap: "Roadmap" },
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
    close: "Schließen"
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
    paneAlt: "Der BusyBee-Bereich in Revit mit aufgeklappten Werkzeuggruppen"
  },

  start: {
    title: "Schnellstart",
    lead: "Deine ersten zehn Minuten mit BusyBee. BusyBee muss in Revit 2025 oder 2026 installiert sein; die aktuelle Version bekommst du von Sascha.",
    steps: [
      { h: "BusyBee-Bereich öffnen",
        p: "Öffne in Revit die Registerkarte BusyBee und klick auf [[BusyBee Manager]]. Der Bereich dockt neben dem Projektbrowser an. Du kannst ihn wie jeden Revit-Bereich verschieben." },
      { h: "Sprache wählen",
        p: "Mit der Flagge unten rechts im Bereich schaltest du BusyBee zwischen Deutsch und Englisch um. Das gilt sofort und bleibt gespeichert. Deine Revit-Sprache spielt keine Rolle: BusyBee funktioniert mit beiden." },
      { h: "Eine Ansicht mit den richtigen Elementen öffnen",
        p: "Die meisten Werkzeuge arbeiten mit den Elementen der aktiven Ansicht. Öffne vorher eine 3D-Ansicht, einen Grundriss oder Schnitt, der diese Elemente zeigt. Schreibwerkzeuge ändern nichts, wenn die Ansicht keine Modellelemente zeigt." },
      { h: "Werkzeug öffnen und einrichten",
        p: "Klick auf den Namen eines Werkzeugs, um sein Fenster zu öffnen. Der Pfeil rechts zeigt vorher eine kurze Beschreibung. Die Fenster bleiben offen, während du in Revit weiterarbeitest." },
      { h: "Auf Starten klicken",
        p: "Jedes Werkzeug hat unten rechts eine gelbe Schaltfläche [[Starten]]. Lange Läufe zeigen ein Fortschrittsfenster mit [[Abbrechen]]. Jede Änderung ist ein einziger Rückgängig-Schritt in Revit, Strg+Z nimmt also einen ganzen Lauf zurück." },
      { h: "Einrichtung fürs Projekt speichern",
        p: "Mit [[Projekt speichern]] legst du die Einstellungen aller offenen Werkzeuge in einem Ordner ab, zum Beispiel neben dem Modell. Beim nächsten Mal klickst du auf [[Projekt öffnen]] und wählst diesen Ordner." }
    ],
    goodToKnow: "Gut zu wissen",
    notes: [
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
      tagline: "Parameter mit WENN- und SONST-WENN-Regeln füllen, nach Kategorie.",
      summary: "Liest einen Quellparameter, prüft ihn gegen eine oder mehrere Bedingungen und schreibt einen Wert in einen Zielparameter. Die Regeln sind in Kategoriegruppen organisiert, eine Einrichtung kann also Luftkanäle, Rohre und Formteile gleichzeitig abdecken.",
      when: [
        "Kommentare, Kennzeichen oder einen Projektparameter aus einem anderen Parameter füllen, etwa aus Ebene oder Systemname.",
        "Kürzel in lesbare Werte übersetzen, zum Beispiel SA_F → Zuluft.",
        "Nur die leeren Werte in einem Modell füllen, das jemand anderes angefangen hat."
      ],
      steps: [
        "Öffne eine Ansicht mit den Elementen, die du bearbeiten willst.",
        "Wähl unter [[Kategorie]] eine Kategorie und klick auf [[+ Neue Kategoriegruppe]]. Mit [[+ Kategorie hinzufügen]] nimmst du weitere Kategorien in dieselbe Gruppe.",
        "Klick auf [[+ Parameter-Zuordnung]]. Wähl den [[Quellparameter]], der gelesen wird, und den [[Zielparameter]], der geschrieben wird.",
        "Wähl unter [[Bedingte Regeln]] einen Operator wie [[ist gleich]] oder [[enthält]], gib den gesuchten Wert ein und nach dem Pfeil den Wert, der geschrieben wird.",
        "Mit [[+ Bedingung hinzufügen]] kommen weitere Fälle dazu. Sie werden als SONST-WENN von oben nach unten geprüft; der erste Treffer gilt.",
        "Klick auf [[Starten]]. Eine Zusammenfassung zeigt, wie viele Werte geändert, unverändert oder übersprungen wurden."
      ],
      settings: [
        ["Operatoren", "ist gleich, ist ungleich, größer oder kleiner als (auch mit gleich), enthält, beginnt mit, endet mit und deren Gegenteile, hat einen Wert, hat keinen Wert. Größer und kleiner vergleichen Zahlen, auch wenn Revit Einheiten anzeigt."],
        ["Nur leere Parameter beschreiben", "In den Einstellungen (Zahnrad). Überspringt Elemente, deren Zielparameter schon einen Wert hat."],
        ["Zahlen und Einheiten", "Werte werden in Projekteinheiten geschrieben, so als würdest du sie in der Eigenschaftenpalette eintippen. 2500, 2500 mm und 2,5 m funktionieren. Ja/Nein-Parameter verstehen Ja, Nein, Yes und No."],
        ["Konfiguration speichern / laden", "Speichert die Regeln als Datei, damit du sie in einem anderen Projekt wiederverwenden kannst."]
      ],
      tips: [
        "Mit dem Kopiersymbol duplizierst du eine Kategoriegruppe als Ausgangspunkt für ähnliche Regeln.",
        "Werte, die sich nicht umwandeln lassen, etwa Text in einem Zahlenparameter, werden gezählt und gemeldet statt still übersprungen."
      ],
      issues: ["type-param-writes", "english-messages"],
      shots: [{ src: "param-rules.webp", alt: "Parameter-Automatisierung mit einer WENN- und einer SONST-WENN-Regel für Luftdurchlässe" }]
    },

    "level-mapping": {
      name: "Ebenen-Zuordnung",
      tagline: "Einen Wert schreiben, je nachdem in welchem Höhenbereich ein Element liegt.",
      summary: "Du legst Höhenbereiche zwischen zwei Ebenen fest und je einen Wert dazu. BusyBee prüft, wo jedes Element liegt, und schreibt den Wert des ersten passenden Bereichs.",
      when: [
        "Elemente für Bauteillisten oder Exporte mit Geschoss- oder Zonennamen versehen.",
        "Einen hohen Schacht oder Steigstrang nach Ebenen aufteilen."
      ],
      steps: [
        "Hak unter [[Zielkategorien]] die Kategorien an. Das Suchfeld filtert die Liste.",
        "Wähl den [[Zielparameter]], der den Wert bekommt.",
        "Wähl einen [[Räumlicher Erkennungsmodus]] (siehe unten).",
        "Klick für jeden Bereich auf [[+ Bereich hinzufügen]]. Leg [[Min. Höhenebene]], [[Max. Höhenebene]] und den [[Parameterwert]] fest.",
        "Ordne die Bereiche mit den Pfeilen. Weiter oben stehende Bereiche gewinnen, wenn sich Bereiche überlappen.",
        "Klick auf [[Starten]]. Mit [[Nach Wert färben]] prüfst du das Ergebnis danach in der Ansicht."
      ],
      settings: [
        ["Schwerpunkt (Zentrum)", "Der Mittelpunkt des Elements entscheidet."],
        ["Unterkante / Oberkante", "Der tiefste oder höchste Punkt entscheidet."],
        ["Vollständig enthalten", "Das Element muss ganz im Bereich liegen."],
        ["Schneidet", "Jede Überlappung mit dem Bereich zählt."],
        ["Nur leere Parameter beschreiben", "In den Einstellungen (Zahnrad)."]
      ],
      tips: [
        "Ebenen werden mit der Projekthöhe verglichen, ein angehobener Projektbasispunkt ergibt also richtige Ergebnisse.",
        "Mit „Vollständig enthalten“ findest du Elemente, die über eine Ebene hinausgehen: Sie bekommen keinen Wert."
      ],
      issues: ["type-param-writes"],
      shots: [{ src: "level-mapping.webp", alt: "Ebenen-Zuordnung mit zwei Höhenbereichen für Luftkanäle und Luftdurchlässe" }]
    },

    "spatial-parameters": {
      name: "Raum- & Achsenparameter",
      tagline: "Den Raum oder die Rasterposition in jedes Element schreiben.",
      summary: "Die Raum-Zuordnung findet den Raum oder MEP-Raum, in dem ein Element liegt, und schreibt Nummer und Name. Die Raster-Zuordnung findet die nächsten Rasterlinien oder den Schnittpunkt und schreibt sie als Text, etwa C-4.",
      when: [
        "Türen, Möbeln, Sanitärobjekten oder TGA-Auslässen Raumnummern für Bauteillisten geben.",
        "Tragwerks- oder TGA-Elementen eine Achsangabe geben."
      ],
      steps: [
        "Hak unter [[Zielkategorien]] die Kategorien an.",
        "Für Räume: Öffne [[Raum-Zuordnung]], wähl ein [[Parameterformat]] und den oder die Zielparameter.",
        "Wähl den [[Referenzpunkt-Modus]]: Mitte, Unterkante oder Oberkante des Elements.",
        "Für Raster: Öffne [[Raster-Zuordnung]], wähl den Zielparameter und einen [[Erkennungsmodus]].",
        "Für Rasterschnittpunkte legst du das Format fest, zum Beispiel `[X-Grid]-[Y-Grid]`.",
        "Klick auf [[Starten]]."
      ],
      settings: [
        ["Parameterformat", "Nummer und Name in einem Parameter, nur Nummer, nur Name oder Nummer und Name in zwei getrennten Parametern."],
        ["Rasterschnittpunkt", "Schreibt den nächsten Schnittpunkt zweier Rasterlinien im festgelegten Format."],
        ["Nächstgelegene Rasterlinie", "Schreibt die nächste einzelne Rasterlinie."],
        ["Nächste Rasterlinie links und unten", "Schreibt die nächste Rasterlinie links und unterhalb, so wie Rasterfelder oft benannt werden."]
      ],
      tips: [
        "Liegt der Mittelpunkt nicht in einem Raum, versucht BusyBee auch die Enden, die Anschlüsse und kleine Versätze.",
        "Räume werden in der Phase des Elements gesucht."
      ],
      issues: ["spatial-linked-rooms", "type-param-writes"],
      shots: [
        { src: "spatial-room.webp", alt: "Raum- & Achsenparameter auf der Registerkarte Raum-Zuordnung" },
        { src: "spatial-grid.webp", alt: "Raum- & Achsenparameter auf der Registerkarte Raster-Zuordnung mit dem Format [X-Grid]-[Y-Grid]" }
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
      tips: ["Die Ebenen-Zuordnung hat eine eigene Schaltfläche „Nach Wert färben“, die dieselbe Legende öffnet."],
      issues: ["color-repeat"],
      shots: [
        { src: "color-by-param.webp", alt: "Farbe nach Parameterwert mit 4.546 geladenen Elementen und Kategorie als Parameter" },
        { src: "legend.webp", alt: "Farblegende mit Kategorien und Elementanzahl" }
      ]
    },

    "clash-detection": {
      name: "Kollisionsprüfung",
      tagline: "Harte Kollisionen und Abstandsprobleme finden, direkt in Revit.",
      summary: "Prüft eine Gruppe von Kategorien gegen eine andere, im Hauptmodell oder gegen ein verknüpftes Modell. Typische Fehlmeldungen werden ignoriert: verbundene Kanal- und Rohrstrecken, Dämmung, gehostete Bauteile, verschachtelte Familien und verbundene Geometrie. Du kannst Kollisionen freigeben, Notizen ergänzen und die Liste exportieren.",
      when: [
        "Kanäle und Rohre vor einer Koordinationsbesprechung gegen Decken und Wände prüfen.",
        "Enge Stellen mit einer Abstandsprüfung finden, zum Beispiel 50 mm um Kabeltrassen.",
        "Festhalten, welche Kollisionen schon besprochen sind, indem du sie freigibst."
      ],
      steps: [
        "Hak unter [[1. Primäre Kategorien]] die Kategorien an, zum Beispiel Luftkanäle und Luftkanalformteile.",
        "Wähl unter [[2. Kollision mit]] das [[Hauptmodell]] oder ein verknüpftes Modell und hak die Kategorien an, gegen die geprüft wird.",
        "Wähl unter [[3. Kollisionsmodus & Toleranz]] [[Harte Kollision]] oder [[Abstand (Weich)]] und trag den Abstand in mm ein.",
        "Klick auf [[Starten]].",
        "Ein Klick auf ein Ergebnis wählt beide Elemente aus und zeigt Details. Mit [[3D-Zoom]], [[Elemente isolieren]], [[3D-Schnittbereich]] oder [[Elemente einfärben]] schaust du es dir an.",
        "Drück die Leertaste oder [[Freigeben]] für Kollisionen, die in Ordnung sind. Ergänz bei Bedarf eine Notiz. [[Freigegebene ausblenden]] nimmt sie aus der Liste.",
        "Mit [[CSV-Export]] bekommst du eine Liste für Excel, mit [[Kollisionen speichern]] öffnest du die Ergebnisse später ohne neuen Lauf."
      ],
      settings: [
        ["Harte Kollision", "Elemente überschneiden sich mindestens um die Toleranz."],
        ["Abstand (Weich)", "Elemente kommen sich näher als der Abstand, auch ohne Berührung."],
        ["Gruppierung", "Flach, nach Primärelement, nach Kategorien, nach Ebene oder nach System."],
        ["Nur sichtbare Objekte prüfen", "In den Einstellungen (Zahnrad). Beschränkt beide Seiten auf das, was die aktive Ansicht zeigt."],
        ["Nur ausgewählte Elemente", "In den Einstellungen. Prüft nur die Revit-Auswahl."]
      ],
      tips: [
        "Freigaben werden neben dem Modell als `<Modell>.BusyBeeClashStatus.json` gespeichert, bei Cloud-Modellen in deinem AppData-Ordner. Bei einem späteren Lauf sind sie noch da.",
        "Jede Rücksetz-Schaltfläche macht ihre eigene Aktion rückgängig: Isolierung aufheben, Schnittbereich zurücksetzen, Farben zurücksetzen. Beim Schließen des Fensters wird die Isolierung ebenfalls aufgehoben."
      ],
      issues: ["clash-one-link", "clash-no-bcf", "revit-busy"],
      shots: [{ src: "clash-de.webp", de: true, alt: "Kollisionsprüfung mit Luftkanälen gegen Geschossdecken im verknüpften Architekturmodell" }]
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
