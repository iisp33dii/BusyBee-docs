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
  // Basics: the BusyBee tab, the panel and project setups
  { slug: "project-workspace",    group: "basics",     status: "stable", revit: ["2025", "2026"], shot: "pane.webp" },
  // Automation
  { slug: "parameter-automation", group: "automation", status: "beta",   revit: ["2025", "2026"], shot: "param-rules.webp" },
  { slug: "spatial-parameters",   group: "automation", status: "stable", revit: ["2025", "2026"], shot: "spatial-room.webp" },
  { slug: "color-by-parameter",   group: "automation", status: "stable", revit: ["2025", "2026"], shot: "color-by-param.webp" },
  { slug: "schedules-excel",      group: "automation", status: "beta",   revit: ["2025", "2026"], shot: "schedules-excel.webp" },
  { slug: "batch-export",         group: "automation", status: "beta",   revit: ["2025", "2026"], shot: "batch-export.webp" },
  { slug: "tag-tools",            group: "automation", status: "beta",   revit: ["2025", "2026"], shot: "tag-tools.webp" },
  { slug: "space-sync",           group: "automation", status: "beta",   revit: ["2025", "2026"], shot: null },
  { slug: "parameter-manager",    group: "automation", status: "beta",   revit: ["2025", "2026"], shot: null },
  { slug: "view-templates",       group: "automation", status: "beta",   revit: ["2025", "2026"], shot: null },
  // Audit
  { slug: "clash-detection",      group: "audit",      status: "stable", revit: ["2025", "2026"], shot: "clash.webp" },
  { slug: "model-health",         group: "audit",      status: "beta",   revit: ["2025", "2026"], shot: "health-dashboard.webp" },
  { slug: "quality-control",      group: "audit",      status: "beta",   revit: ["2025", "2026"], shot: "qc-excel.webp" },
  { slug: "loin-check",           group: "audit",      status: "beta",   revit: ["2025", "2026"], shot: "loin-dashboard.webp" },
  { slug: "bcf-viewer",           group: "audit",      status: "beta",   revit: ["2025", "2026"], shot: "bcf-viewer.webp" },
  // Utilities: the panel's bottom buttons, then the one-click small tools
  { slug: "select-by-id",         group: "utility",    status: "stable", revit: ["2025", "2026"], shot: "select-id.webp" },
  { slug: "inspect-categories",   group: "utility",    status: "stable", revit: ["2025", "2026"], shot: "object-categories.webp" },
  { slug: "quick-sections",       group: "utility",    status: "stable", revit: ["2025", "2026"], shot: null },
  { slug: "who-did-that",         group: "utility",    status: "stable", revit: ["2025", "2026"], shot: null },
  { slug: "copy-crop",            group: "utility",    status: "stable", revit: ["2025", "2026"], shot: null },
  { slug: "copy-levels",          group: "utility",    status: "stable", revit: ["2025", "2026"], shot: null },
  { slug: "coloured-tabs",        group: "utility",    status: "stable", revit: ["2025", "2026"], shot: null },
  { slug: "reset-overrides",      group: "utility",    status: "stable", revit: ["2025", "2026"], shot: null },
  { slug: "room-outlines",        group: "utility",    status: "stable", revit: ["2025", "2026"], shot: null },
  // clip: a screen recording in assets/clip; #t= picks the frame the tool card shows
  { slug: "connect-elements",     group: "utility",    status: "beta",   revit: ["2025", "2026"], shot: null, clip: "connect-elements-pipes.mp4#t=22.7" },
  { slug: "connect-all",          group: "utility",    status: "beta",   revit: ["2025", "2026"], shot: null, clip: "connect-elements-flex.mp4#t=4.8" },
  { slug: "open-ends",            group: "utility",    status: "beta",   revit: ["2025", "2026"], shot: null },
  { slug: "why-hidden",           group: "utility",    status: "beta",   revit: ["2025", "2026"], shot: null }
];
