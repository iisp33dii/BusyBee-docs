/*
  English text for the BusyBee site.
  [[Label]] shows a BusyBee button or field name. `text` shows code or a path.
*/
window.BB = window.BB || {};
BB.text = BB.text || {};

BB.text.en = {
  ui: {
    skip: "Skip to content",
    nav: { home: "Overview", install: "Install", start: "Quick start", tools: "Tools", issues: "Known issues", changes: "Changelog", roadmap: "Roadmap" },
    theme: { toDark: "Dark mode", toLight: "Light mode" },
    langName: "Deutsch",
    langSwitch: "Auf Deutsch lesen",
    menu: "Menu",
    status: { stable: "Stable", beta: "Beta", experimental: "Experimental" },
    statusHelp: {
      stable: "Works reliably. Safe for project work.",
      beta: "Works, but check the results and report anything odd.",
      experimental: "Try it on a copy of the model first."
    },
    groups: { automation: "Parameter and modelling automation", audit: "Audit and quality checks", utility: "Utilities" },
    revit: "Revit",
    teamRelease: "Release",
    released: "Released",
    search: "Search the docs",
    searchPlaceholder: "Search tools, buttons, issues…",
    searchEmpty: "No matches. Try a button name such as Approve or a Revit term such as Level.",
    footer: "BusyBee is our internal Revit add-in. Questions and bug reports go to Sascha.",
    updated: "Site updated for",
    toc: "On this page",
    eyebrow: { need: "Before you start", steps: "Step by step", help: "Troubleshooting", files: "Reference", tools: "The toolbox",
      news: "Latest release", next: "On the roadmap", model: "In action", good: "Tips" },
    whenToUse: "When to use it",
    howTo: "Step by step",
    settings: "Options explained",
    tips: "Tips",
    limits: "Known limits",
    allIssues: "All known issues",
    prev: "Previous tool",
    next: "Next tool",
    workaround: "Workaround",
    affects: "Affects",
    planned: "Fix planned",
    seeRoadmap: "on the roadmap",
    builds: "Development builds in this release",
    highlightType: { new: "New", improved: "Improved", fixed: "Fixed" },
    core: "All tools",
    rm: {
      released: "Released",
      ready: "Ready for next release",
      "in-progress": "In development",
      planned: "Planned",
      doneIn: "Done in build",
      inRelease: "In release",
      filterAll: "Everything",
      filterTool: "Tool",
      allTools: "All tools",
      legend: "Each cell is one roadmap item. Filled cells are released, outlined cells are finished but not shared yet, and half-filled cells are being worked on.",
      progress: "released"
    },
    notFound: "That page doesn't exist. Pick a tool from the list.",
    caption: "Screenshot from Revit 2026 with BusyBee set to English. Category names appear in the Revit language. Click to see it full size.",
    close: "Close",
    oldShot: "This screenshot is from version 1.18. The window now has more options, described below."
  },

  home: {
    title: "BusyBee for Revit",
    lead: "Our Revit add-in for clash checks, parameter work and model quality. It lives in a panel next to the Project Browser and runs in Revit 2025 and 2026, in English or German.",
    ctaStart: "Quick start",
    ctaTools: "Browse the tools",
    current: "Current release",
    toolsTitle: "What BusyBee does",
    toolsLead: "Eleven tools in three groups. Open any of them from the BusyBee panel.",
    whatsNew: "New in this release",
    allChanges: "Full changelog",
    next: "Coming next",
    nextLead: "What Sascha is working on, straight from the roadmap.",
    fullRoadmap: "Open the roadmap",
    paneAlt: "The BusyBee panel in Revit with the tool groups expanded",
    paneLabel: "The BusyBee panel",
    shotsLabel: "Screenshots of the tools",
    model: {
      title: "See it in a model",
      lead: "A small example ceiling void with ducts, pipes and a cable tray, and what two of the tools do with it.",
      steps: [
        { h: "The model", p: "Ducts, pipes and trays from every trade, the way they come out of Revit." },
        { p: "Each system gets its own color and a legend, so you can read the model at a glance." },
        { p: "Clashes between trades are found and marked before anything gets built." }
      ],
      legend: ["Supply air", "Exhaust air", "Heating", "Cold water", "Cable tray"],
      clashes: "3 clashes found",
      hint: "Drag to turn",
      label: "Animated 3D example of a ceiling void with building services"
    }
  },

  install: {
    title: "Install and update",
    lead: "BusyBee installs for your own Windows user in about a minute. You don't need admin rights, and one installer covers Revit 2025 and 2026.",
    needTitle: "What you need",
    need: [
      "Windows with Revit 2025 or 2026.",
      "The BusyBee ZIP file, for example `BusyBee-1.30.0.zip`. Ask Sascha for the current one.",
      "No admin rights. BusyBee installs into your own user folder, so it doesn't affect anyone else on the PC."
    ],
    sections: [
      { id: "install", h: "Install",
        steps: [
          { h: "Close Revit", p: "Close every Revit window. While Revit runs, the installer stops and changes nothing." },
          { h: "Extract the whole ZIP", p: "Right-click the ZIP, choose Extract All, and open the extracted folder. The installer doesn't work from inside the ZIP." },
          { h: "Run the installer", p: "Double-click `Install BusyBee.cmd`. A black window shows what it does and ends with \"BusyBee … is installed for Revit 2025 and 2026\". Press any key to close it." },
          { h: "Start Revit and load BusyBee", p: "Revit asks once whether to load BusyBee, because the add-in isn't signed. Choose [[Always Load]]. Then open the BusyBee tab and click [[BusyBee Manager]]." },
          { h: "Check the version", p: "The version is shown at the top of the BusyBee panel, next to the name, for example v1.30.0." }
        ] },
      { id: "update", h: "Update to a new version",
        steps: [
          { h: "Close Revit and extract the new ZIP", p: "Use a new folder for each version, so you don't mix old and new files." },
          { h: "Run the installer from the new folder", p: "Double-click `Install BusyBee.cmd`. It replaces the old version; you don't have to uninstall first." },
          { h: "Your settings stay", p: "Your language, the panel layout, saved clash approvals, LOIN mappings and the Select by ID history are kept. They're stored outside the add-in." },
          { h: "Check the version", p: "Start Revit and look at the top of the BusyBee panel. Use the same version as the rest of your project team: settings saved by a newer version can't always be read by an older one." }
        ] },
      { id: "uninstall", h: "Uninstall",
        steps: [
          { h: "Close Revit", p: "The uninstaller also stops and changes nothing while Revit runs." },
          { h: "Run the uninstaller", p: "Double-click `Uninstall BusyBee.cmd` in any extracted BusyBee folder. The BusyBee tab is gone the next time you start Revit." },
          { h: "Remove your settings too, if you want", p: "Your settings and logs are kept, in case you install again. To remove them, delete the two BusyBee folders listed under \"Where BusyBee keeps its files\"." }
        ] }
    ],
    helpTitle: "If something goes wrong",
    help: [
      { q: "The window says \"Please close Revit first\"",
        a: "Revit is still running, sometimes without a visible window. Close it, or end Revit in Task Manager, then run the installer again." },
      { q: "The window says \"Please extract the whole ZIP first\" or \"BusyBee.bundle was not found\"",
        a: "The installer was started from inside the ZIP, or only some files were copied. Extract the whole ZIP and run it from the extracted folder." },
      { q: "Windows shows a warning before the installer runs",
        a: "Windows marks files that came from email or the internet. Make sure the ZIP came from Sascha. If your company settings block the installer, ask Sascha." },
      { q: "The BusyBee tab doesn't appear in Revit",
        a: "BusyBee runs in Revit 2025 and 2026 only. If Revit asked about loading BusyBee and you chose [[Do Not Load]], close Revit, start it again and choose [[Always Load]]. If the tab is still missing, run the installer again and send Sascha a screenshot of the black window." },
      { q: "BusyBee shows an error or does something unexpected",
        a: "Send Sascha a short note on what you did and today's log file from `%LOCALAPPDATA%\\BusyBee\\logs`." }
    ],
    filesTitle: "Where BusyBee keeps its files",
    filesLead: "Paste a path into the address bar of File Explorer to open it.",
    filesHead: ["Folder", "What's in it"],
    files: [
      ["%APPDATA%\\Autodesk\\ApplicationPlugins\\BusyBee.bundle", "The add-in itself, for both Revit versions. Installing replaces it and uninstalling removes it."],
      ["%APPDATA%\\BusyBee", "Your settings: language, panel layout, clash approvals, LOIN mappings and the Select by ID history."],
      ["%LOCALAPPDATA%\\BusyBee\\logs", "Error logs, one file per day, kept for 14 days. Send today's file with a bug report."]
    ]
  },

  start: {
    title: "Quick start",
    lead: "Your first ten minutes with BusyBee. You need BusyBee installed in Revit 2025 or 2026; if it isn't yet, start with the Install page.",
    steps: [
      { h: "Open the BusyBee panel",
        p: "In Revit, open the BusyBee tab and click [[BusyBee Manager]]. The panel docks next to the Project Browser. You can drag it anywhere, like any Revit panel. Each tool also has its own button on the BusyBee tab, so you can open it without the panel." },
      { h: "Pick your language",
        p: "Click the flag at the bottom right of the panel to switch BusyBee between English and German. It changes straight away and is remembered. Your Revit language doesn't matter: BusyBee works with both." },
      { h: "Open a view that shows what you want to work on",
        p: "Most tools work on the elements visible in the active view. Open a 3D view, plan or section with those elements before you start. Write tools stop and change nothing if the view shows no model elements." },
      { h: "Open a tool and set it up",
        p: "Click a tool's name in the panel to open its window. Click the arrow on the right to read a short description first. To find a tool fast, type part of its name in the search box at the top of the panel, in English or German. Tool windows stay open while you keep working in Revit." },
      { h: "Click Start",
        p: "Every tool has a yellow [[Start]] button at the bottom right. Long runs show a progress window with [[Cancel]]. Every change is one Revit undo step, so Ctrl+Z takes back a whole run." },
      { h: "Save your setup for the project",
        p: "Click [[Save Project]] in the panel to store the settings of all open tools in a folder, for example next to the model. Next time, click [[Open Project]] and pick that folder." }
    ],
    goodToKnow: "Good to know",
    notes: [
      "Click the star next to a tool to add it to Favourites at the top of the panel. Your three most recently used tools are listed below them.",
      "Give any tool a keyboard shortcut: in Revit, open View > User Interface > Keyboard Shortcuts and search for BusyBee.",
      "Revit asks once whether to load BusyBee because the add-in isn't signed. Choose [[Always Load]].",
      "While a tool runs, Revit itself is busy. The progress window still responds, and Cancel takes effect after the current element.",
      "Problems? Send Sascha a short note and today's log file from `%LOCALAPPDATA%\\BusyBee\\logs`."
    ]
  },

  tools: {
    "parameter-automation": {
      name: "Parameter Automation",
      tagline: "Fill parameters with IF and ELIF rules or formulas, and check every change before it's written.",
      summary: "Read a source parameter, check it against one or more conditions and write a value to a target parameter. The value can be fixed text or a formula such as `{Level}-{Mark}`. Rules are organised in category groups, so one setup can cover ducts, pipes and fittings at once. Before anything is written, a preview lists every change.",
      when: [
        "Fill Comments, Mark or a project parameter from another parameter, such as Level or System Name.",
        "Build values from other parameters, for example door numbers as `{Level}-{Mark}`.",
        "Translate codes into readable values, for example SA_F → Supply air.",
        "Fill only the empty values on a model someone else started."
      ],
      steps: [
        "Open a view that shows the elements you want to update.",
        "Pick a category in [[Category]] and click [[+ New Category Group]]. Use [[+ Add Category]] to put more categories in the same group.",
        "Click [[+ Add Parameter Map]]. Choose the [[Source Parameter]] to read and the [[Target Parameter]] to write.",
        "Under [[Conditional Rules]], pick an operator such as [[equals]] or [[contains]], type the value to look for, and type the value to write after the arrow. The value to write can contain `{Parameter}` formulas.",
        "Click [[+ Add Condition]] for more cases. They're checked from top to bottom as ELIF, and the first match wins.",
        "Click [[Start]]. Nothing is written yet: a preview lists every element whose value would change, with its value now and after writing. Double-click a row to select and zoom to the element.",
        "Click [[Write N changes]] to write them, or close the preview to leave the model untouched. A summary shows what was changed, and one Ctrl+Z undoes the whole run."
      ],
      settings: [
        ["Operators", "equals, does not equal, greater or less than (with or equal), contains, starts with, ends with and their opposites, has value, has no value. Greater and less than compare numbers, also when Revit shows units."],
        ["Formulas", "`{Level}-{Mark}` gives every element its own value, such as L1-101. Any parameter of the element or its type works, with the name Revit shows. `{Level}` also works in German Revit and `{Ebene}` in English Revit. Write `{{` or `}}` for a brace. An element that lacks a parameter in the formula shows as Can't write in the preview and is left alone."],
        ["Numbers and units", "Values are read the way the Properties palette reads them: 2500 uses the project unit, and 2500 mm, 2,5 m or 8' 2\" use the unit you typed. A unit that doesn't fit, such as kg on a length, shows as Can't write. Yes/No parameters accept Yes, No, Ja and Nein."],
        ["Type parameters", "Written once per type. If the instances of one type would need different values, for example doors of one type on two levels, the type is left unchanged and shown as Type skipped."],
        ["Show values that stay the same", "In the preview. Values that wouldn't change are hidden unless you tick it."],
        ["Only write empty parameters", "In the settings (gear icon). Skips elements whose target already has a value. Works for type parameters too."],
        ["Save Config / Load Config", "Store the rules as a file, for reuse in another project."]
      ],
      tips: [
        "Copy a category group with the copy icon to start a similar rule set.",
        "The write uses the rules as they were when you clicked Start, so editing them while the preview is open doesn't change what gets written.",
        "Hover over a value box for a short help text on formulas."
      ],
      issues: ["type-param-writes", "english-messages", "reports-english"],
      shots: [{ src: "param-rules.webp", alt: "Parameter Automation with an IF and an ELIF rule for air terminals" }]
    },

    "spatial-parameters": {
      name: "Spatial Parameters",
      tagline: "Write the room, the grid position or the level range into each element.",
      summary: "One window with three tabs. Room Mapping finds the room or space each element sits in and writes its number and name, also from rooms in linked models. Grid Mapping finds the nearest grid lines or intersection and writes them as text, such as C-4. Level Mapping writes a value of your choice for each range between two levels. Before anything is written, a preview shows every old and new value.",
      when: [
        "Add room numbers to doors, furniture, fixtures or MEP terminals for schedules.",
        "Give structural or MEP elements a grid reference.",
        "Tag elements with a storey or zone name, or split a tall shaft or riser into level-based sections."
      ],
      steps: [
        "Tick the categories under [[Target Categories]]. They stay ticked when you switch tabs.",
        "For rooms: open [[Room Mapping]], choose a [[Parameter Format]] and the target parameter or parameters, and the [[Reference Point Mode]]: Center, Bottom or Top of the element.",
        "For grids: open [[Grid Mapping]], choose the target parameter and a [[Matching Mode]]. For grid intersections, set the format, for example `[X-Grid]-[Y-Grid]`.",
        "For levels: open [[Level Mapping]], choose the [[Target Parameter]] and a [[Spatial Matching Mode]]. Click [[+ Add Range]] for each range and set the two levels and the [[Parameter Value]]. Ranges higher in the list win when ranges overlap; drag them or use the arrows to order them.",
        "Click [[Start]]. The preview lists every value that would change, old and new. Click [[Write]] to write them, or close the preview to change nothing.",
        "On Level Mapping, [[Color by Value]] colours the result in the view."
      ],
      settings: [
        ["Parameter Format", "Number and name in one parameter, number only, name only, or number and name in two separate parameters."],
        ["Grid Intersection", "Writes the nearest crossing of two grid lines, using the format you set."],
        ["Nearest Grid Line", "Writes the closest single grid line."],
        ["Nearest Grid Line Left and Down", "Writes the next grid line to the left and below, the way grid fields are often named."],
        ["Centroid / Bottom / Top", "Level Mapping: the element's centre, lowest or highest point decides the range."],
        ["Fully Contained / Intersects", "Level Mapping: the element must sit completely inside the range, or any overlap counts."],
        ["Only write empty parameters", "In the settings (gear icon), for all three tabs."],
        ["Save / Load Config", "One file holds all three tabs, the ticked categories and the open tab. Older files of Spatial Parameters or of the former Level Mapping window still load."]
      ],
      tips: [
        "Pipe and duct insulation gets the same value as its pipe or duct, if it has a parameter of that name.",
        "If an element's centre isn't in a room, BusyBee also tries its ends, its connectors and small offsets before giving up.",
        "Rooms are found in the phase of the element.",
        "If an element is in no room or space of the open model, BusyBee looks in every loaded link, using the link phase with the same name as the view's. So an MEP model can write the architect's room numbers. The summary says how many came from links.",
        "Levels use project elevation, so a raised Project Base Point gives correct results. Use Fully Contained to find elements that cross a level: they get no value.",
        "Type parameters are written once per type. If its instances need different values, the type is left unchanged and named in the result.",
        "Level Mapping used to be a window and a button of its own; since 1.38 it is the third tab here."
      ],
      issues: ["spatial-linked-rooms", "type-param-writes"],
      shots: [
        { src: "spatial-room.webp", alt: "Spatial Parameters on the Room Mapping tab" },
        { src: "spatial-grid.webp", alt: "Spatial Parameters on the Grid Mapping tab with the [X-Grid]-[Y-Grid] format" },
        { src: "level-mapping.webp", old: true, alt: "The former Level Mapping window with two elevation ranges for ducts and air terminals" }
      ]
    },

    "color-by-parameter": {
      name: "Color by Parameter",
      tagline: "Colour elements by value, with a live legend.",
      summary: "Groups the selected elements by the value of one parameter and gives each value its own colour in the active view. A legend window lists every value with its count and lets you isolate or select by value.",
      when: [
        "See at a glance which elements share a system, a phase or a fire rating.",
        "Spot gaps: empty values get their own colour too.",
        "Show velocity or size bands with colour ranges."
      ],
      steps: [
        "Select elements in Revit, then click [[Load Selection]].",
        "Choose a [[Parameter]]. Tick [[Show all parameters (unshared)]] to see more than the common ones.",
        "For number bands, tick [[Color Ranges]] and enter the [[Boundaries]].",
        "Click [[Start]]. The legend opens.",
        "In the legend, click a value (Ctrl or Shift for several) and use [[Isolate]] or [[Deisolate]].",
        "Click [[Reset Overrides]] to bring back the colours the view had before."
      ],
      settings: [
        ["Load Selection", "Takes the current Revit selection. You can also start from the legend."],
        ["Reset Overrides", "Restores each element's previous colours, including ones you set by hand. After a Revit restart BusyBee has no record and asks before clearing the view."]
      ],
      tips: ["The Level Mapping tab of Spatial Parameters has its own Color by Value button that opens the same legend."],
      issues: ["color-repeat"],
      shots: [
        { src: "color-by-param.webp", alt: "Color by Parameter with 4,546 elements loaded and Category chosen" },
        { src: "legend.webp", alt: "Colour legend listing categories with element counts" }
      ]
    },

    "clash-detection": {
      name: "Clash Detection",
      tagline: "Find hard clashes and clearance problems, track them between runs, export BCF and cut openings.",
      summary: "Checks one set of categories against another: inside the main model, against one linked model, against all links at once, or one link against another. It ignores the usual false positives: connected duct and pipe runs, insulation, hosted inserts, nested families and joined geometry. You can save the setup as a named test, see which clashes are new or resolved since the last run, approve clashes, export them as BCF or CSV, and cut openings where ducts and pipes pass walls and floors.",
      when: [
        "Check ducts and pipes against slabs and walls before a coordination meeting.",
        "Check the HVAC link against the structural link without opening either model.",
        "Find tight spots with a clearance check, for example 50 mm around cable trays.",
        "See what changed since last week's run, and hand the open clashes to BIMcollab, Solibri, Navisworks or Revizto as BCF.",
        "Cut the openings for the engineer's linked ducts in your architecture model."
      ],
      steps: [
        "To reuse a saved setup, pick it in [[Test]] at the top left. Otherwise set up the check as below.",
        "Under [[1. Primary Categories In]], choose where the primary elements come from, [[Main Model]] or one link, and tick their categories, for example Ducts and Duct Fittings.",
        "Under [[2. Clashing Categories In]], choose the model to check against: [[Main Model]], one link or [[All Linked Models]]. Then tick the categories, for example Floors and Walls.",
        "Under [[3. Clash Mode & Tolerance]], pick [[Hard Clash]] or [[Clearance (Soft)]] and set the distance in mm.",
        "Click [[Start]]. The status bar shows how many clashes are new, still there and resolved since the last run with the same settings, and how long the run took.",
        "Click a result to see both elements. Use [[Zoom 3D]], [[Isolate Elements]], [[3D Bounding Box]] or [[Color Elements]] to look at it. New clashes have a blue NEW badge, and [[New only]] shows just those.",
        "Press Space or click [[Approve]] for clashes that are fine. Add a note if it helps. [[Hide Approved]] removes them from the list.",
        "Share the result with [[Export BCF]] or [[Export CSV]], or keep it with [[Save Clashes]]. To keep the setup for next time, type a name in [[Test]] and click Save.",
        "To cut openings, filter the list to the clashes you want and click [[Place Openings]]."
      ],
      settings: [
        ["Hard Clash", "Elements overlap by at least the tolerance."],
        ["Clearance (Soft)", "Elements come closer than the distance, even without touching."],
        ["All Linked Models", "In the clashing model list. Checks the primary elements against every loaded link in one run. The lists include categories that only a link has."],
        ["Test", "Named sets of categories, models, mode, tolerance and scope, saved next to the model in `<Model>.BusyBeeClashTests.json`, so the whole team sees the same tests. They work in English and German Revit."],
        ["NEW, still there, resolved", "Each run is compared with the previous run that used the same settings in the same view. The N resolved link lists the clashes that are gone. Cancelled runs and runs on selected elements only aren't compared."],
        ["Export BCF", "Writes the clashes the list shows as a BCF 2.1 file, one topic per clash with a camera view and both elements. Search, the category filter, Hide Approved and New only decide what goes in. Approved clashes are Closed, and exporting again updates the same topics instead of adding copies."],
        ["Place Openings", "Cuts a rectangular opening for every clash in the list where a duct, pipe, cable tray or conduit passes a wall or floor of the open model. The MEP element can be in a link. The opening is the element's size plus the clearance on each side. Approved clashes are skipped, an opening already there isn't cut twice, new openings note the clash in their Comments, and one Ctrl+Z removes all openings of one click."],
        ["Opening clearance (mm)", "In the settings (gear icon). The space between the element and the edge of the opening, 50 mm by default."],
        ["Group", "Flat, by primary element, by categories, by level or by system."],
        ["Only check visible objects", "In the settings. Limits both sides to what the active view shows."],
        ["Selected elements only", "In the settings. Checks only what's selected in Revit."]
      ],
      tips: [
        "Primary elements always come from the active view, so a run in a 3D view and one in a floor plan check different elements. Each view keeps its own new/resolved history.",
        "Approvals, tests and history are stored next to the model, or in your AppData folder for cloud models. Run again later and they're still there.",
        "Large models run much faster than before: each element's geometry is read once per run.",
        "Each undo button reverses its own action: Unisolate, Reset Section Box, Reset Colors. Closing the window also removes its isolation."
      ],
      issues: ["openings-limits", "linked-primary", "clash-one-link", "clash-no-bcf", "revit-busy"],
      shots: [{ src: "clash.webp", alt: "Clash Detection showing ducts against floors in the linked architecture model", old: true }]
    },

    "model-health": {
      name: "Model Health Check",
      tagline: "Score the model and clean up warnings, unused families and bloat.",
      summary: "Scans the whole project and gives it a score from 0 to 100. Three tabs let you go through the warnings, purge unused families and types, and remove CAD imports, in-place families and unplaced rooms.",
      when: [
        "Before handing over a model or uploading it to a shared environment.",
        "When a model feels slow or the file keeps growing."
      ],
      steps: [
        "Open the tool. The scan starts on its own; [[Run Audit]] scans again.",
        "On [[Dashboard]], read the score and the four totals. Click [[Inspect Warnings]] or [[Purge Manager]] to jump to the details.",
        "On [[Warnings]], filter by Critical, Medium or Low. Open a group to see the elements and select, zoom, isolate or box them.",
        "On [[Unused & Families]], keep [[Unused Only]], tick what you want to remove and click [[Purge Selected]].",
        "On [[Model Cleanliness]], delete imported CAD, find in-place families and purge unplaced rooms.",
        "Share the result with [[Export HTML Report]], [[Export CSV Summary]] or [[Copy Summary]]."
      ],
      settings: [
        ["Score", "Starts at 100. Each warning costs points (1.5 critical, 0.75 medium, 0.2 low), each imported CAD 4, each in-place family 2.5, each unplaced room 1, plus a penalty when more than 30% of families are unused."],
        ["Severity", "Based on Revit's warning type, not its text, so it's the same in English and German Revit."],
        ["Include System Family Types", "Also lists unused wall, floor and other system types."]
      ],
      tips: [
        "Purge and delete always ask first, and each is one undo step.",
        "Linked CAD is fine and isn't counted. Only imported CAD is."
      ],
      issues: ["health-score-size", "health-low-severity"],
      shots: [
        { src: "health-dashboard.webp", alt: "Model Health dashboard with score, warnings, unused families and bloat" },
        { src: "health-warnings.webp", alt: "Model Health warnings grouped by type with element counts" },
        { src: "health-families.webp", alt: "Unused families list with purge buttons" }
      ]
    },

    "quality-control": {
      name: "Quality Control",
      tagline: "Check parameters against your rules and highlight what fails.",
      summary: "Build a template of rules, such as door marks must be filled or sheet numbers must match a pattern. BusyBee checks the elements in the active view, scores compliance, colours the failures and lists them so you can fix them one by one.",
      when: [
        "Before issuing drawings: are all marks, numbers and fire ratings filled?",
        "Check naming against an office standard with a pattern."
      ],
      steps: [
        "Click [[+ Configure New Rule]]. Give it a [[Rule Name]] and pick the categories.",
        "Choose the [[Target Parameter Name]] and an [[Evaluation Condition]].",
        "Pick a highlight colour and keep [[Highlight failures in view]] ticked.",
        "Click [[Add Rule to Template]]. Tick the rules you want to run.",
        "Click [[Start]]. Findings appear on the right, grouped by category.",
        "Click a finding to select the element, or double-click to zoom to it. Use [[Isolate Issues]] to see only the failures.",
        "Click [[Reset Highlights]] when you're done. Save the rules with [[Save Template]]."
      ],
      settings: [
        ["Value required (flag if empty)", "Fails when the parameter is empty."],
        ["Must be empty (flag if filled)", "Fails when the parameter has a value."],
        ["Matches Regex", "Fails unless the value matches a pattern, such as `^W-[0-9]{3}$` for W-001."],
        ["Mismatched Instance vs Type", "Fails when the instance and type values of a parameter differ."],
        ["Color-code view by QA status", "In the settings (gear icon). Colours passing elements too."]
      ],
      tips: [
        "Pick specific categories. With All Categories, elements that don't have the parameter at all, such as model lines, are reported as missing.",
        "Reset restores the colours elements had before, including your own."
      ],
      issues: ["qc-all-categories"],
      shots: [{ src: "qc.webp", alt: "Quality Control dashboard with rules, compliance score and findings" }]
    },

    "loin-check": {
      name: "LOIN Check",
      tagline: "Check the model against your Level of Information Need matrix.",
      summary: "Load the LOIN matrix from Excel, map its attributes to Revit parameters and check which elements have the required information for each project phase (LPH 1–9). The dashboard shows compliance per parameter with a drill-down to each failing element.",
      when: [
        "At phase milestones, to check that the model has the information the BIM execution plan asks for.",
        "To fill an ELEMENT classification for every family type, so the matrix can find them."
      ],
      steps: [
        "Click [[Load Excel Matrix]] and pick your matrix. The [[Configuration]] tab lists every LOIN attribute.",
        "Set [[Primary Element Identifier]]: the shared parameter ALG_Element, the Category, or Family and Type. It must match the element names in your matrix columns.",
        "Click [[Auto-Match]] to map attributes to Revit parameters with the same name. Map the rest with the dropdowns and click [[Save Changes]].",
        "Choose [[Check Scope]]: Active View or Entire Model.",
        "Click [[Start]]. The [[Dashboard]] shows a score and a bar per parameter. Open a row to zoom to or isolate the failing elements.",
        "Filter by phase and use case at the top, and use [[Export Audit Report (CSV)]] to share the result.",
        "On [[Element Type Mapping]], fill the ELEMENT and TYPE values per family type, sync them across a family and click [[Apply Changes to Model]]."
      ],
      settings: [
        ["Matrix format", "One sheet with the headers Attribut / Parameter, Datentyp and ab LPH within the first 10 rows, followed by one column per element. Mark cells with x (mandatory), a (automatic) or z (conditional). A requirement applies from its LPH up to LPH 9."],
        ["Import / Export Mappings", "Save the parameter mapping as a file and reuse it in other projects."]
      ],
      tips: [
        "Download the sample matrix below to see the format, then replace its element columns with your own.",
        "Yes/No checks accept Ja and Nein, and numbers in German format pass."
      ],
      download: { href: "downloads/BusyBee-LOIN-sample-matrix.xlsx", label: "Download the sample LOIN matrix (.xlsx)" },
      issues: ["loin-headers"],
      shots: [
        { src: "loin-dashboard.webp", alt: "LOIN dashboard with compliance per parameter" },
        { src: "loin-config.webp", alt: "LOIN configuration with attributes mapped to Revit parameters" }
      ]
    },

    "schedules-excel": {
      name: "Schedules in Excel",
      tagline: "Schedules out to Excel, edited there, and back into Revit with a preview.",
      summary: "Exports Revit schedules to .xlsx files, without Excel installed. \"Editable\" gives one row per element with its Revit ID, so you can change values in Excel and import them back. \"As shown\" keeps grouping, headings and totals for quantity lists. A company template with your logo and header can be filled in.",
      when: [
        "A colleague or client fills in door or room data in Excel.",
        "You need quantities in the company layout for a cost estimate.",
        "You want to fix many values at once with Excel's fill and search tools."
      ],
      steps: [
        "Open [[Schedules in Excel]] and tick the schedules.",
        "Choose [[Editable, to import back]] or [[As shown in Revit, for quantities]].",
        "Optionally pick an Excel template, choose a folder and click [[Export … to Excel]].",
        "Change values in the yellow columns. Grey columns are for reading only. Keep the headings and the Revit ID column.",
        "Click [[Import from Excel…]] and pick the files. BusyBee shows every change first; [[Write … change(s)]] writes them in one undo step."
      ],
      settings: [
        ["Editable, to import back", "One row per element with its Revit ID. Calculated values, counts and room fields are left out because they can't be written back."],
        ["As shown in Revit, for quantities", "Grouping, headings and totals as in the schedule, with numbers as real Excel numbers. Can't be imported."],
        ["Excel template", "An .xlsx with your logo and header. Type `{Table}` in the cell where the table should start. `{Project}` and similar placeholders are filled in."]
      ],
      tips: [
        "A file exported from another model is skipped on import, so its IDs can't hit the wrong elements.",
        "Rows without a Revit ID are skipped: new elements can't be made from Excel.",
        "Close the file in Excel before you export it again."
      ],
      issues: [],
      shots: []
    },

    "batch-export": {
      name: "Batch Export",
      tagline: "Sheets to PDF and DWG, 3D views to IFC, in one go.",
      summary: "Exports the ticked sheets to PDF (one per sheet or all in one) and DWG, and the ticked 3D views to IFC. File names come from a pattern such as `{SheetNumber}_{SheetName}`, so the files are named the same way every time.",
      when: [
        "Sending a plan set to a client or contractor.",
        "Sending only the sheets of the latest revision.",
        "An IFC for coordination from a prepared 3D view."
      ],
      steps: [
        "Open [[Batch Export]] and tick sheets, or pick a Revit sheet set or a revision to tick its sheets.",
        "Choose the formats: [[One PDF per sheet]] or [[All sheets in one PDF]], DWG with a [[Setup]], [[IFC (3D views)]].",
        "Check the file name patterns and choose a folder.",
        "Click [[Export … files]]. Files that already exist are listed before they are replaced."
      ],
      settings: [
        ["File names", "`{SheetNumber}` `{SheetName}` `{Revision}` `{RevisionDate}` `{Project}` `{ProjectNumber}` `{Date}` `{Model}` `{ViewName}`, or any sheet, view or project parameter in braces. Characters Windows doesn't allow are removed."],
        ["Setup", "The DWG export setup saved in the project, with layers, colours and units."],
        ["A subfolder per format", "Puts PDF, DWG and IFC files in their own subfolders."]
      ],
      tips: ["IFC exports what the 3D view shows, so hide what shouldn't go out first."],
      issues: [],
      shots: []
    },

    "tag-tools": {
      name: "Tag Tools",
      tagline: "Tidy tags, find untagged elements and tag pipe and duct runs.",
      summary: "Left side: work on the selected tags. Align, space, stack in a column with tidy leaders, reset, change their type, or copy their positions to other views. Right side: check the active view for untagged, overlapping, empty or orphaned tags, tag the untagged elements without overlaps, and put size tags along pipe and duct runs.",
      when: [
        "Tidying a plan before it goes out.",
        "Making sure every door, room or equipment is tagged.",
        "Size tags on a whole MEP plan in one click."
      ],
      steps: [
        "Open [[Tag Tools]] in a plan or section.",
        "Select tags in the view (or press a button and pick them), then use [[Align]], [[Space across]], [[Space up]], [[Stack tags]] or [[Reset]].",
        "To copy a layout, tick other views and click [[Copy positions]]. The same elements' tags there get the same position.",
        "On the right, tick categories and click [[Check]]. Use [[Select]] or [[Delete]] on what was found, or [[Tag untagged]].",
        "For MEP, set [[A tag every]] and click [[Tag runs]]."
      ],
      settings: [
        ["Stack tags", "Puts the tags in one column beside what they tag, in the same up-down order, with leaders that bend once and don't cross. [[Gap]] and [[Distance]] are in millimetres on the printed sheet."],
        ["Tag untagged", "Uses each category's tag and places it where it overlaps no other tag. [[Leader when moved away]] adds a leader when a tag had to move."],
        ["Tag runs", "A run continues through elbows and couplings and ends at a size change. One tag per started length, short segments are skipped, and runs that already have a tag can be skipped."]
      ],
      tips: ["Every button is one undo step.", "Orphaned tags are usually tags of elements in a linked model that moved or was unloaded."],
      issues: [],
      shots: []
    },

    "quick-sections": {
      name: "Quick sections",
      tagline: "Drag a rectangle in a plan and get a section.",
      summary: "Drag a rectangle in a plan and you get a section along the edge where you started, looking the way you dragged, as deep as the rectangle and as high as the plan's view range. [[Section ↔]] runs left to right, [[Section ↕]] up and down. Each user has one of each, named `HS - <your name>` and `VS - <your name>`, and it is moved every time.",
      when: [
        "A quick look through a shaft or a ceiling void.",
        "Checking heights at one spot without setting up a new view."
      ],
      steps: [
        "Open a floor, ceiling or structural plan.",
        "Click [[Section ↔]] or [[Section ↕]] at the bottom of the BusyBee panel or on the Small tools ribbon panel.",
        "Click the first corner where the section line should be, then drag towards where the section should look.",
        "The section opens. Next time, the same section moves to the new place."
      ],
      settings: [],
      tips: ["Duplicate the section if you want to keep it: the next quick section moves it."],
      issues: [],
      shots: []
    },

    "who-did-that": {
      name: "Who did that",
      tagline: "See who created, changed and borrowed an element.",
      summary: "Shows who created the selected elements, who changed them last and who has them borrowed right now, plus their workset, phases, group and design option. Works in workshared models only, because Revit records these names only there.",
      when: [
        "An element moved and you want to know whom to ask.",
        "You can't edit an element because someone else has it borrowed."
      ],
      steps: [
        "Select one or more elements, or select nothing.",
        "Click [[Who did that]] in the Small tools section of the BusyBee panel or on the ribbon.",
        "If nothing was selected, click an element.",
        "Read the names in the window."
      ],
      settings: [],
      tips: ["[[Last changed by]] is updated when someone synchronizes, so a change since the last sync still shows the name before it."],
      issues: [],
      shots: []
    },

    "copy-crop": {
      name: "Copy crop",
      tagline: "Give other plans the crop region of this one.",
      summary: "Copies the crop region of the open plan to other plans: same place, same shape. Plans turned differently and plans cropped by a scope box are left out and listed.",
      when: [
        "All floor plans of a building should show the same area.",
        "A new set of plans should get the crop of an existing one."
      ],
      steps: [
        "Open the plan whose crop region you want to copy. Crop View must be on.",
        "Click [[Copy crop]] in the Small tools section of the BusyBee panel or on the ribbon.",
        "Tick the plans that should get it and click [[Copy crop]]."
      ],
      settings: [],
      tips: ["A plan cropped by a scope box is left out: change the scope box instead."],
      issues: [],
      shots: []
    },

    "copy-levels": {
      name: "Copy levels",
      tagline: "Copy levels from a linked model.",
      summary: "Copies levels from a loaded Revit link into this model, with the same name and height. Levels that are already there are left as they are.",
      when: ["Starting an MEP model on the architect's levels."],
      steps: [
        "Click [[Copy levels]] in the Small tools section of the BusyBee panel or on the ribbon.",
        "Pick the linked model and click [[Show levels]].",
        "Tick the levels and click [[Copy levels]]."
      ],
      settings: [],
      tips: [
        "The copies are not monitored. For Copy/Monitor use Revit's own dialog under Collaborate.",
        "No plan views are made for the new levels.",
        "A level is skipped if its name is taken at another height, or another level already sits at its height. The window says which."
      ],
      issues: [],
      shots: []
    },

    "coloured-tabs": {
      name: "Coloured tabs",
      tagline: "Each open model gets its own tab colour.",
      summary: "Gives the view tabs of each open model or family their own colour, so you see at a glance which model a view belongs to. Stays on until you switch it off.",
      when: ["Working in several models at once, for example the architect's and your own."],
      steps: [
        "Click [[Coloured tabs]] in the Small tools section of the BusyBee panel or on the ribbon to switch it on.",
        "Open or switch views: their tabs take the colour of their model.",
        "Click it again to switch it off."
      ],
      settings: [],
      tips: ["If the tabs stay grey, for example after a Revit update, send the BusyBee log."],
      issues: [],
      shots: []
    },

    "reset-overrides": {
      name: "Reset overrides",
      tagline: "Remove every element override in the view.",
      summary: "Removes all colour and graphic overrides set on single elements in the current view (Override Graphics in View > By Element), whoever set them. Category and filter overrides stay. One undo step.",
      when: ["A view is full of colours set by hand and you want a clean start."],
      steps: [
        "Open a plan, section, elevation or 3D view.",
        "Click [[Reset overrides]] in the Small tools section of the BusyBee panel or on the ribbon.",
        "BusyBee says how many elements it reset. Ctrl+Z brings the overrides back."
      ],
      settings: [],
      tips: [],
      issues: [],
      shots: []
    },

    "room-outlines": {
      name: "Room outlines 3D",
      tagline: "See rooms and spaces in 3D views.",
      summary: "Draws the outlines of rooms in yellow and MEP spaces in blue in 3D views, also rooms from linked models. They are drawn on screen only: nothing is added to the model.",
      when: [
        "Checking whether the spaces match the architect's rooms.",
        "Seeing which room a duct or a device sits in."
      ],
      steps: [
        "Click [[Room outlines 3D]] in the Small tools section of the BusyBee panel or on the ribbon to switch them on.",
        "Open a 3D view to see them.",
        "Click it again to switch them off."
      ],
      settings: [],
      tips: ["Changes to rooms in this model show straight away. For changes in a link, switch the outlines off and on again."],
      issues: [],
      shots: []
    },

    "select-by-id": {
      name: "Select by ID",
      tagline: "Paste element IDs and jump straight to them.",
      summary: "Paste one or more element IDs, for example from a clash report or a warning, and BusyBee selects them, zooms to them and can isolate, box or highlight them. IDs that don't exist are flagged.",
      when: [
        "Find elements from a Navisworks or Solibri report.",
        "Share a list of elements with a colleague: Get Selected copies their IDs."
      ],
      steps: [
        "Click [[Select ID]] at the bottom of the panel.",
        "Paste the IDs with [[Paste]] or type them, separated by semicolons, commas or spaces.",
        "Switch on the actions you want: [[Zoom]], [[3D Section Box]], [[Isolate]], [[Highlight]].",
        "Press Enter or click [[OK]]. The list shows each ID with category, type and level.",
        "Click a row to focus that element. Click [[Unisolate / Reset]] to restore the view."
      ],
      settings: [
        ["Get Selected", "Puts the IDs of the current Revit selection in the box and copies them to the clipboard."],
        ["History", "Your recent ID lists from this session."],
        ["Highlight", "Gives the elements strong temporary colours so two clashing elements are easy to tell apart."]
      ],
      tips: [],
      issues: ["select-id-links"],
      shots: [{ src: "select-id.webp", alt: "Select by ID with three found elements and one missing ID" }]
    },

    "inspect-categories": {
      name: "Inspect Categories",
      tagline: "See which categories your selection contains.",
      summary: "Lists the unique categories of the selected elements and copies them to the clipboard. Handy when you need exact category names for a rule or a filter.",
      when: ["You selected a mix of elements and need their exact category names."],
      steps: [
        "Select elements in Revit.",
        "Click [[Inspect Categories]] at the bottom of the panel.",
        "Click [[Copy to Clipboard]] to paste the list elsewhere."
      ],
      settings: [],
      tips: ["The list is a snapshot. Select something else and open it again to refresh it."],
      issues: [],
      shots: [{ src: "object-categories.webp", alt: "Selected Categories window listing Ducts" }]
    },

    "project-workspace": {
      name: "Project workspace",
      tagline: "Save the setup of all tools for a project, and open it again.",
      summary: "Stores the settings of every open BusyBee tool in one folder, such as rules, ranges, clash categories and LOIN mappings. Open the folder later, or give it to a colleague, and the tools are set up the same way.",
      when: [
        "You set up rules for a project and want to reuse them next week.",
        "A colleague takes over and should work with the same settings."
      ],
      steps: [
        "Open and set up the tools you want to keep.",
        "Click [[Save Project]] in the panel and choose a folder, for example next to the model.",
        "Next time, click [[Open Project]] and pick the same folder. BusyBee lists which tool settings it loaded."
      ],
      settings: [],
      tips: [
        "Each tool also has its own Save Config and Load Config.",
        "Settings work across Revit languages: save in English Revit, open in German Revit.",
        "Everyone should use the same BusyBee version. Settings saved by 1.9 or newer don't load correctly in older versions."
      ],
      issues: ["mixed-versions"],
      shots: [{ src: "pane.webp", alt: "BusyBee panel with Open Project and Save Project" }]
    }
  },

  issuesPage: {
    title: "Known issues",
    lead: "Things that don't work as you'd expect yet, and what to do in the meantime. If you find something that isn't here, tell Sascha and send today's log from `%LOCALAPPDATA%\\BusyBee\\logs`."
  },

  issues: [
    { id: "openings-limits", tools: ["clash-detection"], roadmap: "opening-families",
      title: "Place Openings skips some clashes",
      body: "Openings are only cut where a straight duct, pipe, cable tray or conduit passes a wall or floor of the open model. Curved walls, curtain walls, sloped elements (between 17° and 72° from horizontal) and other clash types are skipped and counted in the summary. Openings are plain Revit openings, not opening families or sleeves.",
      fix: "Check the summary after Place Openings and cut the skipped ones by hand." },
    { id: "linked-primary", tools: ["clash-detection"], roadmap: null,
      title: "Clashes with a linked primary element can't be selected or coloured",
      body: "When the primary elements come from a link, Revit doesn't allow selecting or colouring them in the host model.",
      fix: "Use Zoom 3D, 3D Bounding Box or Isolate Elements to look at them, or export BCF." },
    { id: "reports-english", tools: ["core"], roadmap: null,
      title: "Exported reports stay in English",
      body: "CSV and HTML reports, Revit's own error texts, the names of the three default Quality Control rules and a few fixed list entries such as All Categories, Main Model and All Linked Models stay English, because the tools also store and compare them.",
      fix: "None needed. Everything else in BusyBee follows the language you pick." },
    { id: "type-param-writes", tools: ["parameter-automation", "spatial-parameters"], roadmap: "type-writes",
      title: "Type parameters get the value of the last instance",
      body: "If the target is a type parameter, every instance of that type writes to the same value, so the last one wins. For example, if two doors of one type sit in different rooms, the type gets one of the two room numbers.",
      fix: "Write per-element values to instance parameters. Use type parameters only for values that are the same for every instance of the type." },
    { id: "revit-busy", tools: ["core"], roadmap: null,
      title: "Revit can't be used while a tool runs",
      body: "Revit only lets one thing change the model at a time. The progress window keeps responding, but Revit itself waits until the run ends.",
      fix: "Narrow the scope for big models, for example with a 3D view of one level. Cancel takes effect after the current element." },
    { id: "clash-one-link", tools: ["clash-detection"], roadmap: "clash-links",
      title: "One linked model per clash run",
      body: "You can check the main model against itself or against one linked model. Link against link, or all links at once, isn't possible yet.",
      fix: "Run once per link and save each result with Save Clashes." },
    { id: "clash-no-bcf", tools: ["clash-detection"], roadmap: "clash-bcf",
      title: "No BCF export yet",
      body: "Clash results can be exported as CSV or saved as a BusyBee file, not as BCF.",
      fix: "Use Export CSV and Select by ID to share and find clashes." },
    { id: "health-score-size", tools: ["model-health"], roadmap: "health-score",
      title: "Large models score close to 0",
      body: "The score subtracts points per warning and isn't scaled to model size. A large model with a thousand minor warnings lands near 0%, even if it's in good shape.",
      fix: "Compare the score of one model over time, and look at the counts of critical and medium warnings rather than the total." },
    { id: "health-low-severity", tools: ["model-health"], roadmap: "health-score",
      title: "Many MEP warnings are rated Low",
      body: "Severity comes from a fixed list of overlap, join, inaccuracy and room warnings. Others, such as system and flow warnings, count as Low.",
      fix: "Filter Low warnings and scan the group names; some of them matter for MEP models." },
    { id: "qc-all-categories", tools: ["quality-control"], roadmap: null,
      title: "All Categories reports elements that don't have the parameter",
      body: "A rule with All Categories also checks elements such as model lines, which don't have the parameter, and reports them as missing.",
      fix: "Pick only the categories the rule is meant for." },
    { id: "loin-headers", tools: ["loin-check"], roadmap: null,
      title: "The LOIN matrix needs fixed German headers",
      body: "The importer looks for the column headers Attribut / Parameter, Datentyp and ab LPH in the first 10 rows. A matrix with other headers loads no rules.",
      fix: "Rename the headers in your Excel file, or start from the sample matrix on the LOIN Check page." },
    { id: "spatial-linked-rooms", tools: ["spatial-parameters"], roadmap: "spatial-links",
      title: "Rooms in linked models aren't found",
      body: "Room Mapping only finds rooms and spaces in the model you have open. In MEP models the rooms usually sit in the linked architecture model.",
      fix: "Use MEP spaces in your own model, or wait for linked room support." },
    { id: "color-repeat", tools: ["color-by-parameter"], roadmap: null,
      title: "Colours repeat after ten values",
      body: "The palette has ten colours. With more distinct values, colours are reused, and the result isn't saved as a view filter.",
      fix: "Use the legend to isolate one value at a time when there are many values." },
    { id: "select-id-links", tools: ["select-by-id"], roadmap: null,
      title: "Only element IDs from the open model",
      body: "Select by ID doesn't find elements in linked models or by UniqueId.",
      fix: "Open the linked model itself to look up its IDs." },
    { id: "english-messages", tools: ["core"], roadmap: "translate-dialogs",
      title: "Some messages are still in English",
      body: "A few result and error messages stay in English when BusyBee is set to German.",
      fix: "None needed; the meaning is the same. They'll be translated." },
    { id: "mixed-versions", tools: ["project-workspace"], roadmap: null,
      title: "Older versions can't read newer settings",
      body: "Settings saved with BusyBee 1.9 or newer store categories and parameters in a language-independent way that older versions don't understand.",
      fix: "Make sure everyone on a project uses the current release." }
  ],

  changes: {
    title: "Changelog",
    lead: "What changed in each version shared with the team. Sascha builds many test versions in between; those are rolled up here."
  },

  roadmap: {
    title: "Roadmap",
    lead: "What's done, what's being built and what's next. Items move from planned to released as development goes on; released means it's in a release you can install."
  }
};
