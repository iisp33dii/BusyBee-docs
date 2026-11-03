/*
  BusyBee site settings and tool list.
  Edit this file when a tool changes status or gains Revit support.

  status: "stable"        works reliably, safe for project work
          "beta"          works, but check the results and report anything odd
          "experimental"  try it on a copy of the model first
*/
window.BB = window.BB || {};

BB.site = {
  // Shown in the footer. Change it if the site moves.
  repoNote: "BusyBee is an internal Revit add-in. Questions and bug reports go to Sascha.",
  contactName: "Sascha",
  logFolder: "%LOCALAPPDATA%\\BusyBee\\logs"
};

BB.tools = [
  // Automation
  { slug: "parameter-automation", group: "automation", status: "beta",   revit: ["2025", "2026"], shot: "param-rules.webp" },
  { slug: "level-mapping",        group: "automation", status: "beta",   revit: ["2025", "2026"], shot: "level-mapping.webp" },
  { slug: "spatial-parameters",   group: "automation", status: "stable", revit: ["2025", "2026"], shot: "spatial-room.webp" },
  { slug: "color-by-parameter",   group: "automation", status: "stable", revit: ["2025", "2026"], shot: "color-by-param.webp" },
  // Audit
  { slug: "clash-detection",      group: "audit",      status: "stable", revit: ["2025", "2026"], shot: "clash.webp" },
  { slug: "model-health",         group: "audit",      status: "beta",   revit: ["2025", "2026"], shot: "health-dashboard.webp" },
  { slug: "quality-control",      group: "audit",      status: "beta",   revit: ["2025", "2026"], shot: "qc.webp" },
  { slug: "loin-check",           group: "audit",      status: "beta",   revit: ["2025", "2026"], shot: "loin-dashboard.webp" },
  // Utilities
  { slug: "select-by-id",         group: "utility",    status: "stable", revit: ["2025", "2026"], shot: "select-id.webp" },
  { slug: "inspect-categories",   group: "utility",    status: "stable", revit: ["2025", "2026"], shot: "object-categories.webp" },
  { slug: "project-workspace",    group: "utility",    status: "stable", revit: ["2025", "2026"], shot: null }
];

// Revit terms in both languages. The docs use these so a guide works with either Revit language.
BB.glossary = [
  ["Category", "Kategorie"],
  ["Family", "Familie"],
  ["Type", "Typ"],
  ["Instance parameter", "Exemplarparameter"],
  ["Type parameter", "Typparameter"],
  ["Shared parameter", "Gemeinsam genutzter Parameter"],
  ["Level", "Ebene"],
  ["Grid", "Raster"],
  ["Room", "Raum"],
  ["Space", "MEP-Raum"],
  ["Comments", "Kommentare"],
  ["Mark", "Kennzeichen"],
  ["Linked model", "Verknüpftes Modell"],
  ["Active view", "Aktive Ansicht"],
  ["Section box", "Schnittbereich"],
  ["Temporary hide/isolate", "Temporär ausblenden/isolieren"],
  ["Graphic overrides", "Grafiküberschreibungen"],
  ["Warnings", "Warnungen"],
  ["Purge unused", "Nicht verwendete Elemente löschen"],
  ["In-place family", "Projektfamilie"],
  ["Ducts", "Luftkanäle"],
  ["Pipes", "Rohre"],
  ["Floors", "Geschossdecken"],
  ["Walls", "Wände"]
];
