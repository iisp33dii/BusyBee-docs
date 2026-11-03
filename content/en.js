/*
  English text for the BusyBee site.
  [[Label]] shows a BusyBee button or field name. `text` shows code or a path.
*/
window.BB = window.BB || {};
BB.text = BB.text || {};

BB.text.en = {
  ui: {
    skip: "Skip to content",
    nav: { home: "Overview", start: "Quick start", tools: "Tools", issues: "Known issues", changes: "Changelog", roadmap: "Roadmap" },
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
    teamRelease: "Team release",
    released: "Released",
    search: "Search the docs",
    searchPlaceholder: "Search tools, buttons, issues…",
    searchEmpty: "No matches. Try a button name such as Approve or a Revit term such as Level.",
    footer: "BusyBee is our internal Revit add-in. Questions and bug reports go to Sascha.",
    updated: "Site updated for",
    toc: "On this page",
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
      inRelease: "In team release",
      filterAll: "Everything",
      filterTool: "Tool",
      allTools: "All tools",
      legend: "Each cell is one roadmap item. Filled cells are released, outlined cells are finished but not shared yet, and half-filled cells are being worked on.",
      progress: "released"
    },
    notFound: "That page doesn't exist. Pick a tool from the list.",
    caption: "Screenshot from Revit 2026 with BusyBee set to English. Category names appear in the Revit language. Click to see it full size.",
    close: "Close"
  },

  home: {
    title: "BusyBee for Revit",
    lead: "Our Revit add-in for clash checks, parameter work and model quality. It lives in a panel next to the Project Browser and runs in Revit 2025 and 2026, in English or German.",
    ctaStart: "Start with the quick start",
    ctaTools: "Browse the tools",
    current: "Current team release",
    toolsTitle: "What BusyBee does",
    toolsLead: "Eleven tools in three groups. Open any of them from the BusyBee panel.",
    whatsNew: "New in this release",
    allChanges: "Full changelog",
    next: "Coming next",
    nextLead: "What Sascha is working on, straight from the roadmap.",
    fullRoadmap: "Open the roadmap",
    paneAlt: "The BusyBee panel in Revit with the tool groups expanded"
  },

  start: {
    title: "Quick start",
    lead: "Your first ten minutes with BusyBee. You need BusyBee installed in Revit 2025 or 2026; ask Sascha for the current version.",
    steps: [
      { h: "Open the BusyBee panel",
        p: "In Revit, open the BusyBee tab and click [[BusyBee Manager]]. The panel docks next to the Project Browser. You can drag it anywhere, like any Revit panel." },
      { h: "Pick your language",
        p: "Click the flag at the bottom right of the panel to switch BusyBee between English and German. It changes straight away and is remembered. Your Revit language doesn't matter: BusyBee works with both." },
      { h: "Open a view that shows what you want to work on",
        p: "Most tools work on the elements visible in the active view. Open a 3D view, plan or section with those elements before you start. Write tools stop and change nothing if the view shows no model elements." },
      { h: "Open a tool and set it up",
        p: "Click a tool's name in the panel to open its window. Click the arrow on the right to read a short description first. Tool windows stay open while you keep working in Revit." },
      { h: "Click Start",
        p: "Every tool has a yellow [[Start]] button at the bottom right. Long runs show a progress window with [[Cancel]]. Every change is one Revit undo step, so Ctrl+Z takes back a whole run." },
      { h: "Save your setup for the project",
        p: "Click [[Save Project]] in the panel to store the settings of all open tools in a folder, for example next to the model. Next time, click [[Open Project]] and pick that folder." }
    ],
    goodToKnow: "Good to know",
    notes: [
      "Revit asks once whether to load BusyBee because the add-in isn't signed. Choose [[Always Load]].",
      "While a tool runs, Revit itself is busy. The progress window still responds, and Cancel takes effect after the current element.",
      "Problems? Send Sascha a short note and today's log file from `%LOCALAPPDATA%\\BusyBee\\logs`."
    ],
    glossaryTitle: "Revit terms in English and German",
    glossaryLead: "The guides use the English Revit names. If your Revit is in German, use this list.",
    glossaryEn: "English Revit",
    glossaryDe: "German Revit"
  },

  tools: {
    "parameter-automation": {
      name: "Parameter Automation",
      tagline: "Fill parameters with IF and ELIF rules, by category.",
      summary: "Read a source parameter, check it against one or more conditions and write a value to a target parameter. Rules are organised in category groups, so one setup can cover ducts, pipes and fittings at once.",
      when: [
        "Fill Comments, Mark or a project parameter from another parameter, such as Level or System Name.",
        "Translate codes into readable values, for example SA_F → Supply air.",
        "Fill only the empty values on a model someone else started."
      ],
      steps: [
        "Open a view that shows the elements you want to update.",
        "Pick a category in [[Category]] and click [[+ New Category Group]]. Use [[+ Add Category]] to put more categories in the same group.",
        "Click [[+ Add Parameter Map]]. Choose the [[Source Parameter]] to read and the [[Target Parameter]] to write.",
        "Under [[Conditional Rules]], pick an operator such as [[equals]] or [[contains]], type the value to look for, and type the value to write after the arrow.",
        "Click [[+ Add Condition]] for more cases. They're checked from top to bottom as ELIF, and the first match wins.",
        "Click [[Start]]. A summary shows how many values were changed, unchanged or skipped."
      ],
      settings: [
        ["Operators", "equals, does not equal, greater or less than (with or equal), contains, starts with, ends with and their opposites, has value, has no value. Greater and less than compare numbers, also when Revit shows units."],
        ["Only write empty parameters", "In the settings (gear icon). Skips elements whose target already has a value."],
        ["Numbers and units", "Values are written in project units, like typing in the Properties palette. 2500, 2500 mm and 2,5 m all work. Yes/No parameters accept Yes, No, Ja and Nein."],
        ["Save Config / Load Config", "Store the rules as a file, for reuse in another project."]
      ],
      tips: [
        "Copy a category group with the copy icon to start a similar rule set.",
        "Values that can't be converted, such as text in a number parameter, are counted and reported, not skipped silently."
      ],
      issues: ["type-param-writes", "english-messages"],
      shots: [{ src: "param-rules.webp", alt: "Parameter Automation with an IF and an ELIF rule for air terminals" }]
    },

    "level-mapping": {
      name: "Level Mapping",
      tagline: "Write a value based on which level range an element sits in.",
      summary: "Define elevation ranges between two levels and a value for each. BusyBee checks where each element sits and writes the value of the first range it falls into.",
      when: [
        "Tag elements with a storey or zone name for schedules or exports.",
        "Split a tall shaft or riser into level-based sections."
      ],
      steps: [
        "Tick the categories under [[Target Categories]]. The search box filters the list.",
        "Choose the [[Target Parameter]] that should receive the value.",
        "Choose a [[Spatial Matching Mode]] (see below).",
        "Click [[+ Add Range]] for each range. Set [[Min Elevation Level]], [[Max Elevation Level]] and the [[Parameter Value]].",
        "Order the ranges with the arrows. Ranges higher in the list win when ranges overlap.",
        "Click [[Start]]. Click [[Color by Value]] afterwards to check the result in the view."
      ],
      settings: [
        ["Centroid", "The element's centre point decides the range."],
        ["Bottom / Top", "The lowest or highest point decides."],
        ["Fully Contained", "The element must sit completely inside the range."],
        ["Intersects", "Any overlap with the range counts."],
        ["Only write empty parameters", "In the settings (gear icon)."]
      ],
      tips: [
        "Levels use project elevation, so a raised Project Base Point gives correct results.",
        "Use Fully Contained to find elements that cross a level: they get no value."
      ],
      issues: ["type-param-writes"],
      shots: [{ src: "level-mapping.webp", alt: "Level Mapping with two elevation ranges for ducts and air terminals" }]
    },

    "spatial-parameters": {
      name: "Spatial Parameters",
      tagline: "Write the room or the grid position into each element.",
      summary: "Room Mapping finds the room or space each element sits in and writes its number and name. Grid Mapping finds the nearest grid lines or intersection and writes them as text, such as C-4.",
      when: [
        "Add room numbers to doors, furniture, fixtures or MEP terminals for schedules.",
        "Give structural or MEP elements a grid reference."
      ],
      steps: [
        "Tick the categories under [[Target Categories]].",
        "For rooms: open [[Room Mapping]], choose a [[Parameter Format]] and the target parameter or parameters.",
        "Pick the [[Reference Point Mode]]: Center, Bottom or Top of the element.",
        "For grids: open [[Grid Mapping]], choose the target parameter and a [[Matching Mode]].",
        "For grid intersections, set the format, for example `[X-Grid]-[Y-Grid]`.",
        "Click [[Start]]."
      ],
      settings: [
        ["Parameter Format", "Number and name in one parameter, number only, name only, or number and name in two separate parameters."],
        ["Grid Intersection", "Writes the nearest crossing of two grid lines, using the format you set."],
        ["Nearest Grid Line", "Writes the closest single grid line."],
        ["Nearest Grid Line Left and Down", "Writes the next grid line to the left and below, the way grid fields are often named."]
      ],
      tips: [
        "If an element's centre isn't in a room, BusyBee also tries its ends, its connectors and small offsets before giving up.",
        "Rooms are found in the phase of the element."
      ],
      issues: ["spatial-linked-rooms", "type-param-writes"],
      shots: [
        { src: "spatial-room.webp", alt: "Spatial Parameters on the Room Mapping tab" },
        { src: "spatial-grid.webp", alt: "Spatial Parameters on the Grid Mapping tab with the [X-Grid]-[Y-Grid] format" }
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
      tips: ["The Level Mapping tool has its own Color by Value button that opens the same legend."],
      issues: ["color-repeat"],
      shots: [
        { src: "color-by-param.webp", alt: "Color by Parameter with 4,546 elements loaded and Category chosen" },
        { src: "legend.webp", alt: "Colour legend listing categories with element counts" }
      ]
    },

    "clash-detection": {
      name: "Clash Detection",
      tagline: "Find hard clashes and clearance problems, inside Revit.",
      summary: "Checks one set of categories against another, in the main model or against a linked model. It ignores the usual false positives: connected duct and pipe runs, insulation, hosted inserts, nested families and joined geometry. You can approve clashes, add notes and export the list.",
      when: [
        "Check ducts and pipes against slabs and walls before a coordination meeting.",
        "Find tight spots with a clearance check, for example 50 mm around cable trays.",
        "Track which clashes you've already discussed by approving them."
      ],
      steps: [
        "Tick the categories under [[1. Primary Categories]], for example Ducts and Duct Fittings.",
        "Under [[2. Clashing Categories In]], choose [[Main Model]] or a linked model, then tick the categories to check against.",
        "Under [[3. Clash Mode & Tolerance]], pick [[Hard Clash]] or [[Clearance (Soft)]] and set the distance in mm.",
        "Click [[Start]].",
        "Click a result to select both elements and see their details. Use [[Zoom 3D]], [[Isolate Elements]], [[3D Bounding Box]] or [[Color Elements]] to look at it.",
        "Press Space or click [[Approve]] for clashes that are fine. Add a note if it helps. [[Hide Approved]] removes them from the list.",
        "Use [[Export CSV]] for a list in Excel, or [[Save Clashes]] to reopen the results later without running again."
      ],
      settings: [
        ["Hard Clash", "Elements overlap by at least the tolerance."],
        ["Clearance (Soft)", "Elements come closer than the distance, even without touching."],
        ["Group", "Flat, by primary element, by categories, by level or by system."],
        ["Only check visible objects", "In the settings (gear icon). Limits both sides to what the active view shows."],
        ["Selected elements only", "In the settings. Checks only what's selected in Revit."]
      ],
      tips: [
        "Approvals are saved next to the model as `<Model>.BusyBeeClashStatus.json`, or in your AppData folder for cloud models. Run again later and they're still there.",
        "Each undo button reverses its own action: Unisolate, Reset Section Box, Reset Colors. Closing the window also removes its isolation."
      ],
      issues: ["clash-one-link", "clash-no-bcf", "revit-busy"],
      shots: [{ src: "clash.webp", alt: "Clash Detection showing ducts against floors in the linked architecture model" }]
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
    { id: "type-param-writes", tools: ["parameter-automation", "level-mapping", "spatial-parameters"], roadmap: "type-writes",
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
      fix: "Make sure everyone on a project uses the current team release." }
  ],

  changes: {
    title: "Changelog",
    lead: "What changed in each version shared with the team. Sascha builds many test versions in between; those are rolled up here."
  },

  roadmap: {
    title: "Roadmap",
    lead: "What's done, what's being built and what's next. Items move from planned to released as development goes on; released means it's in a team release you can install."
  }
};
