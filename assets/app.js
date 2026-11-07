/* BusyBee docs: a small hash router that renders pages from the data and content files. */
(function () {
  "use strict";

  var LANGS = ["en", "de"];
  var PAGES = ["", "install", "start", "tools", "issues", "changelog", "roadmap"];
  var main = document.getElementById("main");
  var state = { lang: "en", page: "", slug: "" };

  // ---------- helpers ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // [[Label]] -> UI label, `code` -> code
  function fmt(s) {
    return esc(s)
      .replace(/\[\[(.+?)\]\]/g, '<span class="ui">$1</span>')
      .replace(/`([^`]+)`/g, "<code>$1</code>");
  }
  function plain(s) { return String(s || "").replace(/\[\[(.+?)\]\]/g, "$1").replace(/`/g, ""); }
  function T() { return BB.text[state.lang]; }
  function L(obj) { return obj ? (obj[state.lang] || obj.en || "") : ""; }
  function href(page, slug) { return "#/" + state.lang + "/" + (page || "") + (slug ? "/" + slug : ""); }
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function cmpVer(a, b) {
    var x = String(a).split(".").map(Number), y = String(b).split(".").map(Number);
    for (var i = 0; i < Math.max(x.length, y.length); i++) {
      var d = (x[i] || 0) - (y[i] || 0);
      if (d) return d < 0 ? -1 : 1;
    }
    return 0;
  }
  function releasesSorted() { return BB.releases.slice().sort(function (a, b) { return cmpVer(b.version, a.version); }); }
  function latest() { return releasesSorted()[0]; }
  function releaseFor(build) {
    var list = BB.releases.slice().sort(function (a, b) { return cmpVer(a.version, b.version); });
    for (var i = 0; i < list.length; i++) if (cmpVer(build, list[i].version) <= 0) return list[i];
    return null;
  }
  function itemState(it) {
    if (it.status === "done") return it.build && releaseFor(it.build) ? "released" : "ready";
    return it.status === "in-progress" ? "in-progress" : "planned";
  }
  function fmtDate(iso) {
    try {
      return new Intl.DateTimeFormat(state.lang === "de" ? "de-DE" : "en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso + "T12:00:00"));
    } catch (e) { return iso; }
  }
  function toolMeta(slug) { for (var i = 0; i < BB.tools.length; i++) if (BB.tools[i].slug === slug) return BB.tools[i]; return null; }
  function toolName(slug) { return slug === "core" ? T().ui.core : (T().tools[slug] ? T().tools[slug].name : slug); }
  function pill(status) {
    return '<span class="pill ' + status + '"><i aria-hidden="true"></i>' + esc(T().ui.status[status]) + "</span>";
  }
  // ---------- honeycomb cells ----------
  // One cell is a unit hexagon scaled to r. Released cells are solid honey, ready ones glow,
  // in-progress ones hold a moving honey wave, planned ones are empty.
  var HEX = "M0-1L.866-.5V.5L0 1-.866.5V-.5Z";
  var WAVE = "M-4 0Q-3.5-.16-3 0T-2 0T-1 0T0 0T1 0T2 0V1.2H-4Z";
  function cell(s, r) {
    return '<g class="cell s-' + s + '" transform="scale(' + r + ')"><path class="c-base" d="' + HEX + '"/>' +
      (s === "in-progress" ? '<g clip-path="url(#hx-clip)"><path class="c-wave" d="' + WAVE + '"/></g>' : "") +
      (s === "released" || s === "ready" ? '<path class="c-bevel" d="' + HEX + '" transform="scale(.72)"/>' : "") + "</g>";
  }
  function hex(s, size) {
    size = size || 22;
    return '<svg class="hx" viewBox="-1.1 -1.1 2.2 2.2" width="' + size + '" height="' + size + '" aria-hidden="true" focusable="false">' + cell(s, 1) + "</svg>";
  }
  var STATE_RANK = { released: 0, ready: 1, "in-progress": 2, planned: 3 };
  function phaseIndex(id) { for (var i = 0; i < BB.phases.length; i++) if (BB.phases[i].id === id) return i; return 99; }
  // A linked cell at (x, y) inside a hive or strip
  function combCell(it, x, y, r, delay, withTitle) {
    var s = itemState(it), u = T().ui.rm;
    var title = withTitle ? "<title>" + esc((it[state.lang] || it.en) + " (" + u[s] + ")") + "</title>" : "";
    return '<a class="hc" href="#rm-' + it.id + '" data-rm="' + it.id + '" data-ph="' + it.phase + '" data-tip="' + esc(it[state.lang] || it.en) +
      '" data-state="' + s + '" data-tool="' + esc(toolName(it.tool)) + '" aria-label="' + esc((it[state.lang] || it.en) + ", " + u[s]) + '" transform="translate(' + x.toFixed(1) + " " + y.toFixed(1) + ')">' +
      title + '<g class="cell-pop" style="--d:' + delay + 'ms">' + cell(s, r) + "</g></a>";
  }
  // Every roadmap item as one hexagonal hive, filled from the middle out: released at the heart, planned at the rim
  function hive(items) {
    items = items.slice().sort(function (a, b) {
      return (STATE_RANK[itemState(a)] - STATE_RANK[itemState(b)]) || (phaseIndex(a.phase) - phaseIndex(b.phase));
    });
    var n = items.length, R = 0;
    while (1 + 3 * R * (R + 1) < n) R++;
    var dirs = [[1, 0], [1, -1], [0, -1], [-1, 0], [-1, 1], [0, 1]], pos = [[0, 0]];
    for (var k = 1; k <= R; k++) {
      var q = -k, rr = k; // start k steps in direction 4
      for (var d = 0; d < 6; d++) for (var j = 0; j < k; j++) { pos.push([q, rr]); q += dirs[d][0]; rr += dirs[d][1]; }
    }
    var r = 20, gap = 0.9, w = Math.sqrt(3) * r;
    var half = (R + 0.5) * w + 4, halfH = R * 1.5 * r + r + 4;
    var cells = pos.map(function (p, i) {
      var x = w * (p[0] + p[1] / 2), y = 1.5 * r * p[1];
      if (i < n) return combCell(items[i], x, y, r * gap, 120 + i * 16);
      return '<g transform="translate(' + x.toFixed(1) + " " + y.toFixed(1) + ')"><g class="cell-pop" style="--d:' + (120 + i * 16) + 'ms">' + cell("ghost", r * gap) + "</g></g>";
    }).join("");
    return '<svg class="hive-svg" viewBox="' + (-half) + " " + (-halfH) + " " + half * 2 + " " + halfH * 2 + '" role="group" aria-label="' + esc(T().roadmap.title) + '">' + cells + "</svg>";
  }
  // A phase as two interlocking rows of cells
  function strip(items, start) {
    var r = 15, w = Math.sqrt(3) * r, cols = Math.ceil(items.length / 2);
    var cells = items.map(function (it, i) {
      var row = i % 2, col = Math.floor(i / 2);
      return combCell(it, w / 2 + 4 + col * w + (row ? w / 2 : 0), r + 4 + row * 1.5 * r, r * 0.92, start + i * 35, true);
    }).join("");
    var W = cols * w + w / 2 + 8, H = r * 3.5 + 8;
    return '<svg class="strip-svg" viewBox="0 0 ' + W.toFixed(1) + " " + H.toFixed(1) + '" width="' + W.toFixed(0) + '" height="' + H.toFixed(0) + '">' + cells + "</svg>";
  }
  function issueMeta(id) {
    var en = BB.text.en.issues;
    for (var i = 0; i < en.length; i++) if (en[i].id === id) return en[i];
    return {};
  }
  function issueText(id) {
    var list = T().issues;
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }
  function roadmapItem(id) { for (var i = 0; i < BB.roadmap.length; i++) if (BB.roadmap[i].id === id) return BB.roadmap[i]; return null; }

  var icons = {
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>'
  };

  // ---------- chrome ----------
  function renderChrome() {
    var t = T().ui;
    document.documentElement.lang = state.lang;
    document.getElementById("skip").textContent = t.skip;
    var items = [["", t.nav.home], ["install", t.nav.install], ["start", t.nav.start], ["tools", t.nav.tools], ["issues", t.nav.issues], ["changelog", t.nav.changes], ["roadmap", t.nav.roadmap]];
    document.getElementById("nav").innerHTML = items.map(function (it) {
      var cur = it[0] === state.page ? ' aria-current="page"' : "";
      return '<a href="' + href(it[0]) + '"' + cur + ">" + esc(it[1]) + "</a>";
    }).join("");
    document.getElementById("brand").setAttribute("href", href(""));

    var other = state.lang === "en" ? "de" : "en";
    var lang = document.getElementById("lang");
    lang.setAttribute("href", "#/" + other + "/" + state.page + (state.slug ? "/" + state.slug : ""));
    lang.setAttribute("hreflang", other);
    lang.setAttribute("title", t.langSwitch);
    lang.innerHTML = '<b>' + other.toUpperCase() + '</b><span class="visually-hidden"> ' + esc(t.langSwitch) + "</span>";

    var light = document.documentElement.dataset.theme === "light";
    var th = document.getElementById("theme");
    th.innerHTML = (light ? icons.moon : icons.sun) + '<span class="visually-hidden">' + esc(light ? t.theme.toDark : t.theme.toLight) + "</span>";
    th.setAttribute("title", light ? t.theme.toDark : t.theme.toLight);

    document.getElementById("menu-label").textContent = t.menu;
    document.getElementById("foot-note").textContent = t.footer;
    var r = latest();
    document.getElementById("foot-ver").innerHTML = r ? '<a class="ver-pill" href="' + href("changelog") + '">' + hex("released", 14) + esc(t.teamRelease + " " + r.version) + "</a>" +
      '<span class="foot-date">' + esc(t.updated + " " + r.version + ", " + fmtDate(r.date)) + "</span>" : "";
    document.getElementById("foot-brand").setAttribute("href", href(""));
    var fn = document.getElementById("foot-nav");
    fn.setAttribute("aria-label", t.footLinks);
    fn.innerHTML = items.map(function (it) { return '<a href="' + href(it[0]) + '">' + esc(it[1]) + "</a>"; }).join("");
  }

  // ---------- pages ----------
  function pageHome() {
    var t = T(), h = t.home, r = latest();
    var groups = ["automation", "audit", "utility"].map(function (g) {
      var rows = BB.tools.filter(function (x) { return x.group === g; }).map(function (x) {
        var d = t.tools[x.slug];
        return '<a class="tool-row" href="' + href("tools", x.slug) + '"><span class="tool-name"><span>' + esc(d.name) + "</span>" + pill(x.status) + '</span><span class="tool-tag">' + esc(d.tagline) + "</span></a>";
      }).join("");
      var count = BB.tools.filter(function (x) { return x.group === g; }).length;
      return '<div class="group"><h3>' + hex("released", 18) + "<span>" + esc(t.ui.groups[g]) + '</span><span class="g-count">' + count + "</span></h3>" + rows + "</div>";
    }).join("");

    var hl = r ? r.highlights.slice(0, 5).map(hlItem).join("") : "";

    var order = { "in-progress": 0, ready: 1, planned: 2 };
    var next = BB.roadmap.filter(function (it) { return itemState(it) !== "released" && it.phase !== "ideas" && it.phase !== "later"; })
      .sort(function (a, b) { return (order[itemState(a)] - order[itemState(b)]) || (a.phase > b.phase ? 1 : a.phase < b.phase ? -1 : 0); })
      .slice(0, 5).map(function (it) {
        var s = itemState(it);
        return '<li>' + hex(s) + '<div><b>' + esc(it[state.lang] || it.en) + '</b><span>' + esc(toolName(it.tool)) + ", " + esc(t.ui.rm[s].toLowerCase()) + "</span></div></li>";
      }).join("");

    return '' +
      '<section class="hero"><div class="wrap">' +
        '<div class="hero-text">' +
          "<h1>" + esc(h.title) + "</h1>" +
          '<p class="lead">' + esc(h.lead) + "</p>" +
          '<div class="actions"><a class="btn btn-primary" href="' + href("start") + '">' + esc(h.ctaStart) + '</a><a class="btn btn-secondary" href="' + href("tools") + '">' + esc(h.ctaTools) + "</a></div>" +
          (r ? '<div class="release-line"><span>' + esc(h.current) + ' <span class="ver">' + esc(r.version) + '</span></span><span>' + esc(fmtDate(r.date)) + '</span><span><span class="tag">Revit 2025</span> <span class="tag">Revit 2026</span></span></div>' : "") +
        "</div>" +
        heroStage() +
      "</div></section>" +
      modelSection() +
      '<section class="section"><div class="wrap">' +
        '<div class="section-head"><div>' + eb("tools") + "<h2>" + esc(h.toolsTitle) + "</h2><p>" + esc(h.toolsLead) + "</p></div>" + statusLegend() + "</div>" +
        '<div class="groups">' + groups + "</div>" +
      "</div></section>" +
      '<section class="section"><div class="wrap split news">' +
        "<div>" + eb("news") + "<h2>" + esc(h.whatsNew) + (r ? " " + esc(r.version) : "") + '</h2><ul class="hl-list">' + hl + '</ul><a href="' + href("changelog") + '">' + esc(h.allChanges) + "</a></div>" +
        "<div>" + eb("next") + "<h2>" + esc(h.next) + '</h2><p class="muted">' + esc(h.nextLead) + '</p><ul class="next-list">' + next + '</ul><a href="' + href("roadmap") + '">' + esc(h.fullRoadmap) + "</a></div>" +
      "</div></section>";
  }

  // Layered tool screenshots in the hero. Back to front; each links to its guide.
  function heroStage() {
    var t = T(), de = state.lang === "de";
    var shots = [
      { cls: "health", img: "health-dashboard.webp", w: 1302, h: 800, link: href("tools", "model-health"), label: toolName("model-health") },
      { cls: "loin", img: "loin-dashboard.webp", w: 1278, h: 782, link: href("tools", "loin-check"), label: toolName("loin-check") },
      { cls: "clash", img: de ? "clash-de.webp" : "clash.webp", w: de ? 1248 : 1234, h: de ? 653 : 655, link: href("tools", "clash-detection"), label: toolName("clash-detection") },
      { cls: "pane", img: de ? "pane-de.webp" : "pane.webp", w: 418, h: 1154, link: href("start"), label: t.home.paneLabel }
    ];
    return '<div class="stage" id="stage" role="group" aria-label="' + esc(t.home.shotsLabel) + '">' + shots.map(function (s) {
      return '<a class="shot ' + s.cls + '" href="' + s.link + '"><img src="assets/img/' + s.img + '" alt="" width="' + s.w + '" height="' + s.h + '" decoding="async">' +
        '<span class="shot-cap">' + esc(s.label) + "</span></a>";
    }).join("") + "</div>";
  }

  // Legend colors for the 3D example. Keep in step with SYS in model3d.js.
  var MODEL_COLORS = ["#4fa3f7", "#f2b134", "#f0844b", "#4cc59a", "#b48cf0"];

  function modelSection() {
    var m = T().home.model;
    var names = [m.steps[0].h, toolName("color-by-parameter"), toolName("clash-detection")];
    var links = [null, href("tools", "color-by-parameter"), href("tools", "clash-detection")];
    var steps = m.steps.map(function (s, i) {
      var head = links[i] ? '<a href="' + links[i] + '">' + esc(names[i]) + "</a>" : esc(names[i]);
      return '<li data-step="' + i + '"><span class="ms-num" aria-hidden="true">' + (i + 1) + "</span><div><b>" + head + "</b><p>" + esc(s.p) + "</p></div></li>";
    }).join("");
    var legend = m.legend.map(function (l, i) { return '<li><i style="background:' + MODEL_COLORS[i] + '"></i>' + esc(l) + "</li>"; }).join("");
    return '<section class="section model-sec"><div class="wrap model-grid">' +
      '<div class="model-copy">' + eb("model") + "<h2>" + esc(m.title) + '</h2><p class="muted">' + esc(m.lead) + '</p><ol class="model-steps">' + steps + "</ol></div>" +
      '<div class="vp" id="model3d" data-phase="0" role="img" aria-label="' + esc(m.label) + '">' +
        '<div class="vp-hud" aria-hidden="true">' +
          '<span class="vp-view">{3D}</span>' +
          '<span class="vp-clash"><i></i>' + esc(m.clashes) + "</span>" +
          '<ul class="vp-legend">' + legend + "</ul>" +
          '<span class="vp-hint">' + esc(m.hint) + "</span>" +
        "</div>" +
      "</div>" +
    "</div></section>";
  }

  var model = null;
  function bindModel() {
    if (model) { model.destroy(); model = null; }
    var vp = document.getElementById("model3d");
    if (!vp || !window.BBModel) return;
    var steps = document.querySelectorAll(".model-steps li");
    model = window.BBModel.mount(vp, {
      onPhase: function (p) {
        vp.setAttribute("data-phase", p);
        for (var i = 0; i < steps.length; i++) steps[i].classList.toggle("on", i === p);
      }
    });
  }

  // The stage leans gently toward the pointer. Skipped for touch and reduced motion.
  function bindStage() {
    var stage = document.getElementById("stage");
    if (!stage || !window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
    var frame = 0;
    stage.addEventListener("pointermove", function (e) {
      if (frame) return;
      frame = requestAnimationFrame(function () {
        frame = 0;
        var r = stage.getBoundingClientRect();
        stage.style.setProperty("--mx", (((e.clientX - r.left) / r.width - 0.5) * 2).toFixed(3));
        stage.style.setProperty("--my", (((e.clientY - r.top) / r.height - 0.5) * 2).toFixed(3));
      });
    });
    stage.addEventListener("pointerleave", function () {
      if (frame) { cancelAnimationFrame(frame); frame = 0; }
      stage.style.setProperty("--mx", "0");
      stage.style.setProperty("--my", "0");
    });
  }

  function statusLegend() {
    var t = T().ui;
    return '<div class="legend-line">' + ["stable", "beta"].map(function (s) {
      return "<span>" + pill(s) + esc(t.statusHelp[s]) + "</span>";
    }).join("") + "</div>";
  }

  // A small honey label above a section heading
  function eb(key) { var e = T().ui.eyebrow; return e && e[key] ? '<span class="eyebrow">' + esc(e[key]) + "</span>" : ""; }

  function hlItem(x) {
    var t = T().ui;
    return '<li><span class="hl-type ' + x.type + '">' + esc(t.highlightType[x.type]) + "</span><span>" + fmt(x[state.lang] || x.en) +
      ' <span class="tag">' + esc(toolName(x.tool)) + "</span></span></li>";
  }

  function pageInstall() {
    var s = T().install;
    var need = s.need.map(function (n) { return "<li>" + fmt(n) + "</li>"; }).join("");
    var targets = [["need", s.needTitle]].concat(s.sections.map(function (sec) { return [sec.id, sec.h]; }), [["help", s.helpTitle], ["files", s.filesTitle]]);
    var pills = '<nav class="page-pills" id="page-pills" aria-label="' + esc(T().ui.toc) + '"><div class="pp-track">' + targets.map(function (x) {
      return '<a href="' + href("install") + "#install-" + x[0] + '" data-anchor="install-' + x[0] + '">' + esc(x[1]) + "</a>";
    }).join("") + "</div></nav>";
    var sections = s.sections.map(function (sec) {
      return '<section class="section" id="install-' + sec.id + '">' + eb("steps") + "<h2>" + esc(sec.h) + '</h2><ol class="steps">' +
        sec.steps.map(function (x) { return "<li><h3>" + esc(x.h) + "</h3><p>" + fmt(x.p) + "</p></li>"; }).join("") + "</ol></section>";
    }).join("");
    var help = s.help.map(function (h) { return '<div class="issue"><h3>' + esc(h.q) + "</h3><p>" + fmt(h.a) + "</p></div>"; }).join("");
    var files = s.files.map(function (f) { return "<tr><td><code>" + esc(f[0]) + "</code></td><td>" + esc(f[1]) + "</td></tr>"; }).join("");
    return '<div class="wrap"><div class="page-head"><h1>' + esc(s.title) + '</h1><p class="lead">' + esc(s.lead) + "</p></div>" + pills +
      '<section class="section" id="install-need" style="border:0">' + eb("need") + "<h2>" + esc(s.needTitle) + '</h2><ul class="notes">' + need + "</ul></section>" +
      sections +
      '<section class="section" id="install-help">' + eb("help") + "<h2>" + esc(s.helpTitle) + "</h2>" + help + "</section>" +
      '<section class="section" id="install-files">' + eb("files") + "<h2>" + esc(s.filesTitle) + '</h2><p class="muted">' + esc(s.filesLead) + "</p>" +
        '<table class="gloss"><thead><tr><th scope="col">' + esc(s.filesHead[0]) + '</th><th scope="col">' + esc(s.filesHead[1]) + "</th></tr></thead><tbody>" + files + "</tbody></table></section></div>";
  }

  function pageStart() {
    var s = T().start;
    var steps = s.steps.map(function (x) { return "<li><h3>" + esc(x.h) + "</h3><p>" + fmt(x.p) + "</p></li>"; }).join("");
    var notes = s.notes.map(function (n) { return "<li>" + fmt(n) + "</li>"; }).join("");
    var h1 = state.lang === "de" ? s.glossaryDe : s.glossaryEn, h2 = state.lang === "de" ? s.glossaryEn : s.glossaryDe;
    var rows = BB.glossary.map(function (g) {
      var a = state.lang === "de" ? g[1] : g[0], b = state.lang === "de" ? g[0] : g[1];
      return '<li data-terms="' + esc((a + " " + b).toLowerCase()) + '"><span><small>' + esc(h1) + "</small>" + esc(a) + '</span><i aria-hidden="true">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></i>' +
        '<span lang="' + (state.lang === "de" ? "en" : "de") + '"><small>' + esc(h2) + "</small>" + esc(b) + "</span></li>";
    }).join("");
    return '<div class="wrap"><div class="page-head"><h1>' + esc(s.title) + '</h1><p class="lead">' + esc(s.lead) + "</p></div>" +
      '<div class="split section" style="border:0">' +
        '<div><ol class="steps">' + steps + "</ol></div>" +
        '<div><figure class="figure"><img src="assets/img/' + (state.lang === "de" ? "pane-de.webp" : "pane.webp") + '" alt="' + esc(T().home.paneAlt) + '" loading="lazy" style="width:260px" width="418" height="1154"></figure>' +
        eb("good") + "<h2>" + esc(s.goodToKnow) + '</h2><ul class="notes">' + notes + "</ul></div>" +
      "</div>" +
      '<section class="section" id="glossary">' + eb("glossary") + "<h2>" + esc(s.glossaryTitle) + '</h2><p class="muted">' + esc(s.glossaryLead) + "</p>" +
        '<div class="search gloss-search"><label class="visually-hidden" for="gq">' + esc(T().ui.glossaryFilter) + "</label>" + icons.search +
        '<input id="gq" type="search" autocomplete="off" placeholder="' + esc(T().ui.glossaryFilter) + '"></div>' +
        '<ul class="gloss-grid" id="gloss-grid">' + rows + '</ul><p class="empty" id="gloss-empty" hidden>' + esc(T().ui.glossaryEmpty) + "</p></section></div>";
  }

  function sidebar() {
    var t = T();
    var open = window.matchMedia("(min-width: 901px)").matches || !state.slug ? " open" : "";
    var cur = state.slug && t.tools[state.slug] ? t.tools[state.slug].name : t.ui.nav.tools;
    return '<aside class="sidebar" aria-label="' + esc(t.ui.nav.tools) + '"><details class="side-details"' + open + '><summary>' + esc(t.ui.nav.tools) + ": <b>" + esc(cur) + "</b></summary>" + ["automation", "audit", "utility"].map(function (g) {
      return "<h4>" + esc(t.ui.groups[g]) + '</h4><div class="sidebar-list">' + BB.tools.filter(function (x) { return x.group === g; }).map(function (x) {
        var cur = state.slug === x.slug ? ' aria-current="page"' : "";
        return '<a href="' + href("tools", x.slug) + '"' + cur + "><span>" + esc(t.tools[x.slug].name) + '</span><span class="dot ' + x.status + '" title="' + esc(t.ui.status[x.status]) + '"></span></a>';
      }).join("") + "</div>";
    }).join("") + "</details></aside>";
  }

  function pageTools() {
    var t = T();
    if (state.slug) return pageTool(state.slug);
    var cards = BB.tools.map(function (x) {
      var d = t.tools[x.slug];
      var shot = x.shot ? (state.lang === "de" && x.shot === "clash.webp" ? "clash-de.webp" : x.shot) : null;
      var thumb = shot ? '<div class="tc-shot"><img src="assets/img/' + shot + '" alt="" loading="lazy" decoding="async"></div>'
        : '<div class="tc-shot empty" aria-hidden="true">' + hex("released", 44) + "</div>";
      return '<a class="tool-card" href="' + href("tools", x.slug) + '">' + thumb + '<div class="tc-body"><div class="row"><h3>' + esc(d.name) + "</h3>" + pill(x.status) + "</div><p>" + esc(d.tagline) + '</p><div class="row"><span class="tag">' + esc(t.ui.groups[x.group]) + "</span></div></div></a>";
    }).join("");
    return '<div class="wrap docs">' + sidebar() + '<div class="article" style="max-width:none">' +
      "<h1>" + esc(t.ui.nav.tools) + "</h1>" +
      '<div class="search" role="search"><label class="visually-hidden" for="q">' + esc(t.ui.search) + "</label>" + icons.search +
      '<input id="q" type="search" autocomplete="off" placeholder="' + esc(t.ui.searchPlaceholder) + '"></div>' +
      '<ul class="results" id="results" aria-live="polite"></ul>' +
      statusLegend() + '<div class="tool-grid" id="tool-grid">' + cards + "</div></div></div>";
  }

  function pageTool(slug) {
    var t = T(), d = t.tools[slug], m = toolMeta(slug);
    if (!d || !m) return '<div class="wrap docs">' + sidebar() + '<div class="article"><p class="empty">' + esc(t.ui.notFound) + "</p></div></div>";
    var idx = BB.tools.indexOf(m), prev = BB.tools[idx - 1], next = BB.tools[idx + 1];
    var shots = (d.shots || []).map(function (s, i) {
      var cap = (s.old ? t.ui.oldShot + " " : "") + (s.de ? t.ui.captionDe : t.ui.caption);
      return '<figure class="figure"><a href="assets/img/' + s.src + '" data-zoom="assets/img/' + s.src + '"><img src="assets/img/' + s.src + '" alt="' + esc(s.alt) + '" loading="' + (i ? "lazy" : "eager") + '"></a>' +
        "<figcaption>" + esc(s.alt) + ". " + esc(cap) + "</figcaption></figure>";
    });
    var list = function (arr) { return arr && arr.length ? "<ul>" + arr.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul>" : ""; };
    var steps = '<ol class="steps">' + d.steps.map(function (x) { return "<li><p style=\"color:var(--text)\">" + fmt(x) + "</p></li>"; }).join("") + "</ol>";
    var defs = d.settings && d.settings.length ? '<dl class="defs">' + d.settings.map(function (x) { return "<div><dt>" + fmt(x[0]) + "</dt><dd>" + fmt(x[1]) + "</dd></div>"; }).join("") + "</dl>" : "";
    // Issues fixed in a team release drop off the tool page, like on the Known issues page
    var issues = (d.issues || []).filter(function (id) { var rm = issueMeta(id).roadmap ? roadmapItem(issueMeta(id).roadmap) : null; return !rm || itemState(rm) !== "released"; }).map(function (id) {
      var it = issueText(id); if (!it) return "";
      return '<li><b>' + esc(it.title) + "</b><span>" + fmt(it.fix) + "</span></li>";
    }).join("");
    var dl = d.download ? '<p><a class="btn btn-secondary download" href="' + esc(d.download.href) + '" download>' + icons.download + esc(d.download.label) + "</a></p>" : "";

    return '<div class="wrap docs">' + sidebar() + '<article class="article">' +
      "<h1>" + esc(d.name) + '</h1><p class="tagline">' + esc(d.tagline) + "</p>" +
      '<div class="meta">' + pill(m.status) + m.revit.map(function (v) { return '<span class="tag">Revit ' + v + "</span>"; }).join("") +
        '<span class="status-help">' + esc(t.ui.statusHelp[m.status]) + "</span></div>" +
      "<p>" + fmt(d.summary) + "</p>" +
      (shots[0] || "") +
      "<h2>" + esc(t.ui.whenToUse) + "</h2>" + list(d.when) +
      "<h2>" + esc(t.ui.howTo) + "</h2>" + steps + dl +
      (shots.slice(1).join("")) +
      (defs ? "<h2>" + esc(t.ui.settings) + "</h2>" + defs : "") +
      (d.tips && d.tips.length ? "<h2>" + esc(t.ui.tips) + "</h2>" + list(d.tips) : "") +
      (issues ? "<h2>" + esc(t.ui.limits) + '</h2><ul class="issue-mini">' + issues + '</ul><p style="margin-top:12px"><a href="' + href("issues") + '">' + esc(t.ui.allIssues) + "</a></p>" : "") +
      '<nav class="pager" aria-label="' + esc(t.ui.nav.tools) + '">' +
        (prev ? '<a href="' + href("tools", prev.slug) + '"><span>' + esc(t.ui.prev) + "</span><b>" + esc(t.tools[prev.slug].name) + "</b></a>" : "") +
        (next ? '<a class="next" href="' + href("tools", next.slug) + '"><span>' + esc(t.ui.next) + "</span><b>" + esc(t.tools[next.slug].name) + "</b></a>" : "") +
      "</nav></article></div>";
  }

  function pageIssues() {
    var t = T(), p = t.issuesPage, tool = state.filter || "all";
    var used = {};
    BB.text.en.issues.forEach(function (i) { (i.tools || []).forEach(function (s) { used[s] = 1; }); });
    var chips = ['<button class="chip" type="button" data-f="all" aria-pressed="' + (tool === "all") + '">' + esc(t.ui.rm.filterAll) + "</button>"]
      .concat(Object.keys(used).map(function (s) { return '<button class="chip" type="button" data-f="' + s + '" aria-pressed="' + (tool === s) + '">' + esc(toolName(s)) + "</button>"; })).join("");
    // An issue disappears once the team release that fixes it is out; until then people on the older version still see it
    var open = t.issues.filter(function (i) { var rm = issueMeta(i.id).roadmap ? roadmapItem(issueMeta(i.id).roadmap) : null; return !rm || itemState(rm) !== "released"; });
    var rows = open.filter(function (i) { return tool === "all" || (issueMeta(i.id).tools || []).indexOf(tool) > -1; }).map(function (i) {
      var meta = issueMeta(i.id), rm = meta.roadmap ? roadmapItem(meta.roadmap) : null;
      var plan = rm ? '<p class="plan">' + esc(t.ui.planned) + ': <a href="' + href("roadmap") + "#rm-" + rm.id + '" data-rm="' + rm.id + '">' + esc(rm[state.lang] || rm.en) + "</a> " + esc(t.ui.seeRoadmap) + "</p>" : "";
      return '<div class="issue" id="issue-' + i.id + '"><div class="tags">' + (meta.tools || []).map(function (s) {
        return s === "core" ? '<span class="tag">' + esc(toolName(s)) + "</span>" : '<a class="tag" href="' + href("tools", s) + '">' + esc(toolName(s)) + "</a>";
      }).join("") + "</div><h3>" + esc(i.title) + "</h3><p>" + fmt(i.body) + '</p><p class="fix"><b>' + esc(t.ui.workaround) + "</b>" + fmt(i.fix) + "</p>" + plan + "</div>";
    }).join("");
    return '<div class="wrap"><div class="page-head"><h1>' + esc(p.title) + '</h1><p class="lead">' + fmt(p.lead) + '</p></div><div class="section" style="padding-top:28px">' +
      '<div class="filters" role="group" aria-label="' + esc(t.ui.rm.filterTool) + '">' + chips + "</div>" + rows + "</div></div>";
  }

  function pageChangelog() {
    var t = T(), c = t.changes;
    var rel = releasesSorted().map(function (r, ri) {
      var groups = ["new", "improved", "fixed"].map(function (type) {
        return r.highlights.filter(function (h) { return h.type === type; }).map(hlItem).join("");
      }).join("");
      var builds = (r.builds || []).map(function (b) { return "<li><b>" + esc(b[0]) + "</b>" + esc(b[1]) + "</li>"; }).join("");
      return '<article class="release' + (ri ? "" : " latest") + '" id="v' + esc(r.version) + '"><div class="release-side"><span class="node">' + hex(ri ? "ready" : "released", ri ? 20 : 26) + '</span><div class="ver">' + esc(r.version) + "</div><time datetime=\"" + esc(r.date) + '">' + esc(fmtDate(r.date)) + "</time></div>" +
        "<div><h2>" + esc(L(r.title)) + '</h2><p class="muted">' + esc(L(r.summary)) + '</p><ul class="hl-list">' + groups + "</ul>" +
        (builds ? '<details class="builds"><summary>' + esc(t.ui.builds) + " (" + r.builds.length + ")</summary><ul>" + builds + "</ul></details>" : "") +
        "</div></article>";
    }).join("");
    return '<div class="wrap"><div class="page-head"><h1>' + esc(c.title) + '</h1><p class="lead">' + esc(c.lead) + '</p></div><div class="timeline">' + rel + "</div></div>";
  }

  function pageRoadmap() {
    var t = T(), u = t.ui.rm, filt = state.filter || "all", tool = state.tool || "all";
    var counts = { released: 0, ready: 0, "in-progress": 0, planned: 0 };
    BB.roadmap.forEach(function (it) { counts[itemState(it)]++; });
    var stats = ["released", "ready", "in-progress", "planned"].map(function (s) {
      return '<div class="stat">' + hex(s, 28) + '<div><b data-count="' + counts[s] + '">' + counts[s] + "</b><span>" + esc(u[s]) + "</span></div></div>";
    }).join("");
    var total = BB.roadmap.length, pctAll = total ? Math.round(counts.released / total * 100) : 0;

    var phases = BB.phases.map(function (ph, pi) {
      var items = BB.roadmap.filter(function (it) { return it.phase === ph.id; });
      var rel = items.filter(function (it) { return itemState(it) === "released"; }).length;
      var pct = items.length ? Math.round(rel / items.length * 100) : 0;
      var label = /^\d+$/.test(ph.id) ? '<span class="phase-num">Phase ' + ph.id + "</span>" : "";
      return '<div class="phase-card' + (pct === 100 ? " full" : "") + '" data-ph="' + ph.id + '"><div>' + label + "<h3>" + esc(L(ph)) + "</h3><p>" + esc(L(ph.blurb)) + "</p></div>" +
        '<div class="comb">' + strip(items, 200 + pi * 60) + "</div>" +
        '<div class="phase-pct"><b>' + pct + "%</b><span>" + rel + "/" + items.length + " " + esc(u.progress) + '</span><i class="bar"><i style="width:' + pct + '%"></i></i></div></div>';
    }).join("");

    var chips = ["all", "released", "ready", "in-progress", "planned"].map(function (s) {
      return '<button class="chip" type="button" data-s="' + s + '" aria-pressed="' + (filt === s) + '">' + esc(s === "all" ? u.filterAll : u[s]) + "</button>";
    }).join("");
    var toolsUsed = {};
    BB.roadmap.forEach(function (it) { toolsUsed[it.tool] = 1; });
    var opts = '<option value="all">' + esc(u.allTools) + "</option>" + Object.keys(toolsUsed).map(function (s) {
      return '<option value="' + s + '"' + (tool === s ? " selected" : "") + ">" + esc(toolName(s)) + "</option>";
    }).join("");

    var lists = BB.phases.map(function (ph) {
      var items = BB.roadmap.filter(function (it) {
        return it.phase === ph.id && (filt === "all" || itemState(it) === filt) && (tool === "all" || it.tool === tool);
      });
      if (!items.length) return "";
      return '<section class="rm-phase"><h3>' + esc(L(ph)) + (/^\d+$/.test(ph.id) ? " <small>Phase " + ph.id + "</small>" : "") + "</h3>" + items.map(function (it) {
        var s = itemState(it), r = it.build ? releaseFor(it.build) : null, stateHtml;
        if (s === "released") stateHtml = '<b class="released">' + esc(u.released) + " " + esc(r.version) + "</b>" + esc(fmtDate(r.date));
        else if (s === "ready") stateHtml = "<b>" + esc(u.ready) + "</b>" + esc(u.doneIn) + " " + esc(it.build || "");
        else stateHtml = "<b>" + esc(u[s]) + "</b>";
        return '<div class="rm-item" id="rm-' + it.id + '">' + hex(s, 22) + "<div><h4>" + esc(it[state.lang] || it.en) + "</h4>" + (it.note ? "<p>" + esc(L(it.note)) + "</p>" : "") +
          '<div class="tags">' + (it.tool === "core" ? '<span class="tag">' + esc(toolName("core")) + "</span>" : '<a class="tag" href="' + href("tools", it.tool) + '">' + esc(toolName(it.tool)) + "</a>") + "</div></div>" +
          '<div class="rm-state">' + stateHtml + "</div></div>";
      }).join("") + "</section>";
    }).join("") || '<p class="empty">—</p>';

    var legend = '<div class="rm-legend">' + ["released", "ready", "in-progress", "planned"].map(function (s) { return "<span>" + hex(s, 16) + esc(u[s]) + "</span>"; }).join("") + "</div>";

    return '<div class="wrap"><div class="page-head rm-head">' +
        '<div class="rm-head-text"><h1>' + esc(t.roadmap.title) + '</h1><p class="lead">' + esc(t.roadmap.lead) + "</p>" +
          '<div class="rm-total"><b><span data-count="' + pctAll + '">' + pctAll + "</span>%</b><span>" + counts.released + "/" + total + " " + esc(u.progress) + "</span></div>" +
          '<div class="stats">' + stats + "</div></div>" +
        '<div class="hive" id="hive">' + hive(BB.roadmap) + '<div class="hive-tip" id="hive-tip" hidden></div></div>' +
      "</div>" +
      '<div class="section" style="padding-top:36px">' +
      '<div class="phases">' + phases + "</div>" + legend +
      '<div class="rm-tools"><div class="filters" style="margin:0" role="group">' + chips + '</div><label>' + esc(u.filterTool) + ' <select id="rm-tool">' + opts + "</select></label></div>" +
      '<div id="rm-list">' + lists + "</div></div></div>";
  }

  // ---------- search ----------
  var index = null, indexLang = null;
  function buildIndex() {
    var t = T(), out = [];
    BB.tools.forEach(function (m) {
      var d = t.tools[m.slug];
      var body = [d.tagline, d.summary].concat(d.when || [], d.steps || [], (d.settings || []).map(function (s) { return s.join(" "); }), d.tips || []).map(plain).join(" ");
      out.push({ title: d.name, sub: d.tagline, url: href("tools", m.slug), text: (d.name + " " + body).toLowerCase(), body: body });
    });
    t.issues.forEach(function (i) {
      var body = plain(i.body + " " + i.fix);
      out.push({ title: i.title, sub: t.ui.nav.issues, url: href("issues") + "#issue-" + i.id, text: (i.title + " " + body).toLowerCase(), body: body });
    });
    t.start.steps.forEach(function (s) {
      out.push({ title: s.h, sub: t.ui.nav.start, url: href("start"), text: (s.h + " " + plain(s.p)).toLowerCase(), body: plain(s.p) });
    });
    t.install.sections.forEach(function (sec) {
      sec.steps.forEach(function (s) {
        out.push({ title: s.h, sub: t.ui.nav.install, url: href("install") + "#install-" + sec.id, text: (sec.h + " " + s.h + " " + plain(s.p)).toLowerCase(), body: plain(s.p) });
      });
    });
    t.install.help.forEach(function (h) {
      out.push({ title: h.q, sub: t.ui.nav.install, url: href("install") + "#install-help", text: (h.q + " " + plain(h.a)).toLowerCase(), body: plain(h.a) });
    });
    index = out; indexLang = state.lang;
  }
  function snippet(body, term) {
    var i = body.toLowerCase().indexOf(term);
    if (i < 0) return esc(body.slice(0, 120)) + "…";
    var s = Math.max(0, i - 50), part = body.slice(s, i + term.length + 70);
    var j = part.toLowerCase().indexOf(term);
    return (s ? "…" : "") + esc(part.slice(0, j)) + "<mark>" + esc(part.slice(j, j + term.length)) + "</mark>" + esc(part.slice(j + term.length)) + "…";
  }
  function runSearch(q) {
    var box = document.getElementById("results"), grid = document.getElementById("tool-grid");
    if (!box) return;
    q = q.trim().toLowerCase();
    if (!q) { box.innerHTML = ""; grid.hidden = false; return; }
    if (indexLang !== state.lang) buildIndex();
    var terms = q.split(/\s+/);
    var hits = index.filter(function (e) { return terms.every(function (w) { return e.text.indexOf(w) > -1; }); }).slice(0, 20);
    grid.hidden = true;
    box.innerHTML = hits.length ? hits.map(function (h) {
      return '<li><a href="' + h.url + '"><b>' + esc(h.title) + '</b> <span class="tag">' + esc(h.sub) + "</span><span>" + snippet(h.body, terms[0]) + "</span></a></li>";
    }).join("") : '<li class="empty">' + esc(T().ui.searchEmpty) + "</li>";
  }

  // ---------- scroll reveal ----------
  // Cards and blocks rise in as they scroll into view. The class comes off afterwards so their own hover transitions apply.
  var revealer = null;
  function reveal() {
    if (revealer) revealer.disconnect();
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var els = main.querySelectorAll(".section-head, .group, .news > div, .model-grid > *, .tool-card, .phase-card, .release, .issue, .rm-phase, .figure, .steps > li, .defs");
    revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        revealer.unobserve(el);
        el.classList.add("in");
        setTimeout(function () { el.classList.remove("rv", "in"); el.style.removeProperty("--rv-d"); }, 900);
      });
    }, { rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (el) {
      var i = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.setProperty("--rv-d", (i % 6) * 60 + "ms");
      el.classList.add("rv");
      revealer.observe(el);
    });
  }

  // ---------- step progress ----------
  // In every numbered list, steps above the reading line are done, the one at it glows, the rest wait.
  var stepFrame = 0;
  function trackSteps() {
    stepFrame = 0;
    var line = window.innerHeight * 0.6;
    document.querySelectorAll(".steps.tracked").forEach(function (ol) {
      var lis = ol.children, cur = -1;
      for (var i = 0; i < lis.length; i++) if (lis[i].getBoundingClientRect().top < line) cur = i;
      // At the very bottom of the page the last steps can never reach the line, so count them as read
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4 && ol.getBoundingClientRect().bottom < window.innerHeight) cur = lis.length - 1;
      for (var j = 0; j < lis.length; j++) { lis[j].classList.toggle("done", j < cur); lis[j].classList.toggle("cur", j === cur); }
    });
    trackPills();
  }

  // ---------- sticky page pills ----------
  // The pill of the section you're reading lights up and scrolls into view inside the bar.
  function trackPills() {
    var nav = document.getElementById("page-pills");
    if (!nav) return;
    var links = nav.querySelectorAll("a"), on = null;
    links.forEach(function (a) {
      var sec = document.getElementById(a.getAttribute("data-anchor"));
      if (sec && sec.getBoundingClientRect().top < 170) on = a;
    });
    nav.classList.toggle("stuck", nav.getBoundingClientRect().top <= 65);
    links.forEach(function (a) {
      var was = a.classList.contains("on");
      a.classList.toggle("on", a === on);
      if (a === on && !was) {
        var track = nav.querySelector(".pp-track");
        track.scrollTo({ left: a.offsetLeft - track.clientWidth / 2 + a.offsetWidth / 2, behavior: "smooth" });
      }
    });
  }
  function bindPills() { trackPills(); }
  function bindSteps() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    main.querySelectorAll(".steps").forEach(function (ol) { ol.classList.add("tracked"); });
    trackSteps();
  }
  window.addEventListener("scroll", function () { if (!stepFrame) stepFrame = requestAnimationFrame(trackSteps); }, { passive: true });
  window.addEventListener("resize", function () { if (!stepFrame) stepFrame = requestAnimationFrame(trackSteps); });

  // ---------- router ----------
  function parse() {
    var parts = location.hash.replace(/^#\/?/, "").split("#")[0].split("/");
    var lang = parts[0], page = parts[1] || "", slug = parts[2] || "";
    // Level Mapping became a tab of Spatial Parameters in 1.38; old links still lead there
    if (slug === "level-mapping") slug = "spatial-parameters";
    if (LANGS.indexOf(lang) < 0) {
      // Old-style or empty hash: pick a language and keep the rest
      page = lang && PAGES.indexOf(lang) > -1 ? lang : "";
      slug = parts[1] || "";
      // The plugin's Help button also sends ?lang= in case the "#" part got lost on the way
      var asked = (/[?&]lang=([a-z]+)/.exec(location.search) || [])[1];
      lang = (LANGS.indexOf(asked) > -1 ? asked : "") || read("bb-lang") || ((navigator.language || "").toLowerCase().indexOf("de") === 0 ? "de" : "en");
      history.replaceState(null, "", "#/" + lang + "/" + page + (slug ? "/" + slug : ""));
    }
    if (PAGES.indexOf(page) < 0) page = "";
    return { lang: lang, page: page, slug: slug };
  }

  function render(keepScroll) {
    var r = parse();
    var changedPage = r.page !== state.page || r.slug !== state.slug;
    if (changedPage) { state.filter = null; state.tool = null; }
    state.lang = r.lang; state.page = r.page; state.slug = r.slug;
    store("bb-lang", state.lang);
    renderChrome();
    var html = { "": pageHome, install: pageInstall, start: pageStart, tools: pageTools, issues: pageIssues, changelog: pageChangelog, roadmap: pageRoadmap }[state.page]();
    main.innerHTML = html;
    bindStage();
    bindModel();
    reveal();
    bindSteps();
    bindPills();

    var title = state.page === "tools" && state.slug && T().tools[state.slug] ? T().tools[state.slug].name
      : state.page ? ({ install: T().ui.nav.install, start: T().ui.nav.start, tools: T().ui.nav.tools, issues: T().ui.nav.issues, changelog: T().ui.nav.changes, roadmap: T().ui.nav.roadmap })[state.page] : null;
    document.title = title ? title + " · BusyBee" : "BusyBee for Revit";

    document.getElementById("nav").classList.remove("open");
    document.getElementById("menu").setAttribute("aria-expanded", "false");
    if (!keepScroll) {
      var anchor = location.hash.split("#")[2];
      var el = anchor && document.getElementById(anchor);
      if (el) el.scrollIntoView(); else window.scrollTo(0, 0);
    }
    var q = document.getElementById("q");
    if (q) q.addEventListener("input", function () { runSearch(q.value); });
    var gq = document.getElementById("gq");
    if (gq) gq.addEventListener("input", function () {
      var words = gq.value.trim().toLowerCase().split(/\s+/).filter(Boolean), shown = 0;
      document.querySelectorAll("#gloss-grid li").forEach(function (li) {
        var t = li.getAttribute("data-terms"), hit = words.every(function (w) { return t.indexOf(w) > -1; });
        li.hidden = !hit; if (hit) shown++;
      });
      document.getElementById("gloss-empty").hidden = shown > 0;
    });
  }

  window.addEventListener("hashchange", function () { render(false); });

  // Delegated clicks for filters, in-page roadmap links and controls
  document.addEventListener("click", function (e) {
    var z = e.target.closest("[data-zoom]");
    if (z && !e.ctrlKey && !e.metaKey) { e.preventDefault(); openZoom(z.getAttribute("data-zoom"), z.querySelector("img").alt); return; }
    if (e.target.closest(".lightbox")) { closeZoom(); return; }
    var el = e.target.closest("[data-f],[data-s],[data-rm],[data-anchor],#theme,#menu");
    if (!el) return;
    if (el.dataset.anchor && !e.ctrlKey && !e.metaKey) {
      // Jump within the page without rebuilding it, and keep the address shareable
      var target = document.getElementById(el.dataset.anchor);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        history.replaceState(null, "", el.getAttribute("href"));
      }
      return;
    }
    if (el.id === "theme") {
      var light = document.documentElement.dataset.theme !== "light";
      document.documentElement.dataset.theme = light ? "light" : "dark";
      store("bb-theme", light ? "light" : "dark");
      renderChrome();
      return;
    }
    if (el.id === "menu") {
      var nav = document.getElementById("nav"), open = !nav.classList.contains("open");
      nav.classList.toggle("open", open); el.setAttribute("aria-expanded", String(open));
      return;
    }
    if (el.dataset.f) { state.filter = el.dataset.f; main.innerHTML = pageIssues(); return; }
    if (el.dataset.s) { state.filter = el.dataset.s; main.innerHTML = pageRoadmap(); bindRoadmap(); return; }
    if (el.dataset.rm) {
      // Links like #rm-id inside the hash router: scroll without changing the route
      e.preventDefault();
      var go = function () { var t = document.getElementById("rm-" + el.dataset.rm); if (t) { t.scrollIntoView({ block: "center" }); t.setAttribute("tabindex", "-1"); t.focus({ preventScroll: true }); } };
      if (state.page !== "roadmap") { location.hash = href("roadmap"); setTimeout(go, 30); } else { state.filter = null; state.tool = null; main.innerHTML = pageRoadmap(); bindRoadmap(); go(); }
    }
  });
  var lastFocus = null;
  function openZoom(src, alt) {
    var box = document.getElementById("lightbox");
    if (!box) {
      box = document.createElement("div"); box.id = "lightbox"; box.className = "lightbox";
      box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true");
      document.body.appendChild(box);
    }
    lastFocus = document.activeElement;
    box.innerHTML = '<button type="button">' + esc(T().ui.close) + '</button><img src="' + esc(src) + '" alt="' + esc(alt) + '"><p>' + esc(alt) + "</p>";
    box.classList.add("open"); document.body.style.overflow = "hidden";
    box.querySelector("button").focus();
  }
  function closeZoom() {
    var box = document.getElementById("lightbox"); if (!box) return;
    box.classList.remove("open"); document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeZoom(); });
  window.addEventListener("hashchange", closeZoom);

  function bindRoadmap() {
    var sel = document.getElementById("rm-tool");
    if (sel) sel.addEventListener("change", function () { state.tool = sel.value; main.innerHTML = pageRoadmap(); bindRoadmap(); });
    // The hive fills and the numbers count up only on the first view of the page, not after every filter click
    if (!bindRoadmap.seen && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".hive, .phases").forEach(function (el) { el.classList.add("animate"); });
      var nums = document.querySelectorAll(".rm-head [data-count]"), t0 = performance.now();
      var tick = function (now) {
        var k = Math.min((now - t0) / 1100, 1), e = 1 - Math.pow(1 - k, 3);
        nums.forEach(function (n) { n.textContent = Math.round(+n.getAttribute("data-count") * e); });
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
    bindRoadmap.seen = true;
  }

  // Cursor spotlight: cards remember where the mouse is, and CSS paints a soft glow there
  var SPOT = ".tool-card, .group, .phase-card, .issue, .news > div, .stats, .gloss-grid li";
  document.addEventListener("pointermove", function (e) {
    if (e.pointerType !== "mouse" || !e.target.closest) return;
    var c = e.target.closest(SPOT);
    if (!c) return;
    var r = c.getBoundingClientRect();
    c.style.setProperty("--mx", (e.clientX - r.left) + "px");
    c.style.setProperty("--my", (e.clientY - r.top) + "px");
  }, { passive: true });

  // Hive tooltips, and a phase card lights up its cells in the hive
  function showTip(a) {
    var hiveEl = document.getElementById("hive"), tip = document.getElementById("hive-tip");
    if (!hiveEl || !tip || !hiveEl.contains(a)) return;
    var u = T().ui.rm, s = a.getAttribute("data-state");
    tip.innerHTML = '<span class="tip-state ' + s + '">' + hex(s, 13) + esc(u[s]) + "</span><b>" + esc(a.getAttribute("data-tip")) + "</b><span>" + esc(a.getAttribute("data-tool")) + "</span>";
    tip.hidden = false;
    var hr = hiveEl.getBoundingClientRect(), cr = a.getBoundingClientRect();
    var x = cr.left + cr.width / 2 - hr.left, y = cr.top - hr.top;
    tip.style.left = Math.max(tip.offsetWidth / 2, Math.min(hr.width - tip.offsetWidth / 2, x)) + "px";
    tip.style.top = y + "px";
  }
  function hideTip() { var tip = document.getElementById("hive-tip"); if (tip) tip.hidden = true; }
  function focusPhase(ph) {
    var hiveEl = document.getElementById("hive");
    if (!hiveEl) return;
    hiveEl.classList.toggle("focusing", !!ph);
    hiveEl.querySelectorAll(".hc").forEach(function (c) { c.classList.toggle("hl", !!ph && c.getAttribute("data-ph") === ph); });
  }
  document.addEventListener("pointerover", function (e) {
    var a = e.target.closest && e.target.closest(".hive .hc");
    if (a) showTip(a); else if (e.target.closest && !e.target.closest(".hive-tip")) hideTip();
    var card = e.target.closest && e.target.closest(".phase-card");
    focusPhase(card ? card.getAttribute("data-ph") : null);
  });
  document.addEventListener("focusin", function (e) {
    var a = e.target.closest && e.target.closest(".hive .hc");
    if (a) showTip(a); else hideTip();
  });

  render(false);
  if (state.page === "roadmap") bindRoadmap();
  window.addEventListener("hashchange", function () { if (state.page === "roadmap") bindRoadmap(); });
})();
