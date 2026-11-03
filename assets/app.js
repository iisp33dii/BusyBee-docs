/* BusyBee docs: a small hash router that renders pages from the data and content files. */
(function () {
  "use strict";

  var LANGS = ["en", "de"];
  var PAGES = ["", "start", "tools", "issues", "changelog", "roadmap"];
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
  function hex(cls, extra) { return '<span class="hex ' + cls + '"' + (extra || "") + ' aria-hidden="true"></span>'; }
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
    var items = [["", t.nav.home], ["start", t.nav.start], ["tools", t.nav.tools], ["issues", t.nav.issues], ["changelog", t.nav.changes], ["roadmap", t.nav.roadmap]];
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
    document.getElementById("foot-ver").textContent = r ? t.updated + " " + t.teamRelease + " " + r.version + ", " + fmtDate(r.date) : "";
  }

  // ---------- pages ----------
  function pageHome() {
    var t = T(), h = t.home, r = latest();
    var groups = ["automation", "audit", "utility"].map(function (g) {
      var rows = BB.tools.filter(function (x) { return x.group === g; }).map(function (x) {
        var d = t.tools[x.slug];
        return '<a class="tool-row" href="' + href("tools", x.slug) + '"><span class="tool-name">' + esc(d.name) + pill(x.status) + '</span><span class="tool-tag">' + esc(d.tagline) + "</span></a>";
      }).join("");
      return '<div class="group"><h3>' + esc(t.ui.groups[g]) + "</h3>" + rows + "</div>";
    }).join("");

    var hl = r ? r.highlights.slice(0, 5).map(hlItem).join("") : "";

    var order = { "in-progress": 0, ready: 1, planned: 2 };
    var next = BB.roadmap.filter(function (it) { return itemState(it) !== "released" && it.phase !== "ideas"; })
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
        '<div class="pane-shot"><img src="assets/img/' + (state.lang === "de" ? "pane-de.webp" : "pane.webp") + '" alt="' + esc(h.paneAlt) + '" width="418" height="1154"></div>' +
      "</div></section>" +
      '<section class="section"><div class="wrap">' +
        '<div class="section-head"><div><h2>' + esc(h.toolsTitle) + "</h2><p>" + esc(h.toolsLead) + "</p></div>" + statusLegend() + "</div>" +
        '<div class="groups">' + groups + "</div>" +
      "</div></section>" +
      '<section class="section"><div class="wrap split">' +
        "<div><h2>" + esc(h.whatsNew) + (r ? " " + esc(r.version) : "") + '</h2><ul class="hl-list">' + hl + '</ul><a href="' + href("changelog") + '">' + esc(h.allChanges) + "</a></div>" +
        "<div><h2>" + esc(h.next) + '</h2><p class="muted">' + esc(h.nextLead) + '</p><ul class="next-list">' + next + '</ul><a href="' + href("roadmap") + '">' + esc(h.fullRoadmap) + "</a></div>" +
      "</div></section>";
  }

  function statusLegend() {
    var t = T().ui;
    return '<div class="legend-line">' + ["stable", "beta"].map(function (s) {
      return "<span>" + pill(s) + esc(t.statusHelp[s]) + "</span>";
    }).join("") + "</div>";
  }

  function hlItem(x) {
    var t = T().ui;
    return '<li><span class="hl-type ' + x.type + '">' + esc(t.highlightType[x.type]) + "</span><span>" + fmt(x[state.lang] || x.en) +
      ' <span class="tag">' + esc(toolName(x.tool)) + "</span></span></li>";
  }

  function pageStart() {
    var s = T().start;
    var steps = s.steps.map(function (x) { return "<li><h3>" + esc(x.h) + "</h3><p>" + fmt(x.p) + "</p></li>"; }).join("");
    var notes = s.notes.map(function (n) { return "<li>" + fmt(n) + "</li>"; }).join("");
    var rows = BB.glossary.map(function (g) {
      var a = state.lang === "de" ? g[1] : g[0], b = state.lang === "de" ? g[0] : g[1];
      return "<tr><td>" + esc(a) + "</td><td>" + esc(b) + "</td></tr>";
    }).join("");
    var h1 = state.lang === "de" ? s.glossaryDe : s.glossaryEn, h2 = state.lang === "de" ? s.glossaryEn : s.glossaryDe;
    return '<div class="wrap"><div class="page-head"><h1>' + esc(s.title) + '</h1><p class="lead">' + esc(s.lead) + "</p></div>" +
      '<div class="split section" style="border:0">' +
        '<div><ol class="steps">' + steps + "</ol></div>" +
        '<div><figure class="figure"><img src="assets/img/' + (state.lang === "de" ? "pane-de.webp" : "pane.webp") + '" alt="' + esc(T().home.paneAlt) + '" loading="lazy" style="width:260px" width="418" height="1154"></figure>' +
        "<h2>" + esc(s.goodToKnow) + '</h2><ul class="notes">' + notes + "</ul></div>" +
      "</div>" +
      '<section class="section" id="glossary"><h2>' + esc(s.glossaryTitle) + '</h2><p class="muted">' + esc(s.glossaryLead) + "</p>" +
        '<table class="gloss"><thead><tr><th scope="col">' + esc(h1) + '</th><th scope="col">' + esc(h2) + "</th></tr></thead><tbody>" + rows + "</tbody></table></section></div>";
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
      return '<a class="tool-card" href="' + href("tools", x.slug) + '"><div class="row"><h3>' + esc(d.name) + "</h3>" + pill(x.status) + "</div><p>" + esc(d.tagline) + '</p><div class="row"><span class="tag">' + esc(t.ui.groups[x.group]) + "</span></div></a>";
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
      var cap = s.de ? t.ui.captionDe : t.ui.caption;
      return '<figure class="figure"><a href="assets/img/' + s.src + '" data-zoom="assets/img/' + s.src + '"><img src="assets/img/' + s.src + '" alt="' + esc(s.alt) + '" loading="' + (i ? "lazy" : "eager") + '"></a>' +
        "<figcaption>" + esc(s.alt) + ". " + esc(cap) + "</figcaption></figure>";
    });
    var list = function (arr) { return arr && arr.length ? "<ul>" + arr.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul>" : ""; };
    var steps = '<ol class="steps">' + d.steps.map(function (x) { return "<li><p style=\"color:var(--text)\">" + fmt(x) + "</p></li>"; }).join("") + "</ol>";
    var defs = d.settings && d.settings.length ? '<dl class="defs">' + d.settings.map(function (x) { return "<div><dt>" + fmt(x[0]) + "</dt><dd>" + fmt(x[1]) + "</dd></div>"; }).join("") + "</dl>" : "";
    var issues = (d.issues || []).map(function (id) {
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
    var rows = t.issues.filter(function (i) { return tool === "all" || (issueMeta(i.id).tools || []).indexOf(tool) > -1; }).map(function (i) {
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
    var rel = releasesSorted().map(function (r) {
      var groups = ["new", "improved", "fixed"].map(function (type) {
        return r.highlights.filter(function (h) { return h.type === type; }).map(hlItem).join("");
      }).join("");
      var builds = (r.builds || []).map(function (b) { return "<li><b>" + esc(b[0]) + "</b>" + esc(b[1]) + "</li>"; }).join("");
      return '<article class="release" id="v' + esc(r.version) + '"><div class="release-side"><div class="ver">' + esc(r.version) + "</div><time datetime=\"" + esc(r.date) + '">' + esc(fmtDate(r.date)) + "</time></div>" +
        "<div><h2>" + esc(L(r.title)) + '</h2><p class="muted">' + esc(L(r.summary)) + '</p><ul class="hl-list">' + groups + "</ul>" +
        (builds ? '<details class="builds"><summary>' + esc(t.ui.builds) + " (" + r.builds.length + ")</summary><ul>" + builds + "</ul></details>" : "") +
        "</div></article>";
    }).join("");
    return '<div class="wrap"><div class="page-head"><h1>' + esc(c.title) + '</h1><p class="lead">' + esc(c.lead) + "</p></div>" + rel + "</div>";
  }

  function pageRoadmap() {
    var t = T(), u = t.ui.rm, filt = state.filter || "all", tool = state.tool || "all";
    var counts = { released: 0, ready: 0, "in-progress": 0, planned: 0 };
    BB.roadmap.forEach(function (it) { counts[itemState(it)]++; });
    var stats = ["released", "ready", "in-progress", "planned"].map(function (s) {
      return '<div class="stat">' + hex(s, ' style="--s:24px"') + "<div><b>" + counts[s] + "</b><span>" + esc(u[s]) + "</span></div></div>";
    }).join("");

    var phases = BB.phases.map(function (ph) {
      var items = BB.roadmap.filter(function (it) { return it.phase === ph.id; });
      var rel = items.filter(function (it) { return itemState(it) === "released"; }).length;
      var pct = items.length ? Math.round(rel / items.length * 100) : 0;
      var comb = items.map(function (it, i) {
        var s = itemState(it);
        return '<a href="#rm-' + it.id + '" data-rm="' + it.id + '" title="' + esc((it[state.lang] || it.en) + " (" + u[s] + ")") + '">' + hex(s, ' style="--i:' + i + '"') + '<span class="visually-hidden">' + esc((it[state.lang] || it.en) + ", " + u[s]) + "</span></a>";
      }).join("");
      var label = ph.id === "ideas" ? "" : '<span class="phase-num">' + (state.lang === "de" ? "Phase " : "Phase ") + ph.id + "</span>";
      return '<div class="phase-card"><div>' + label + "<h3>" + esc(L(ph)) + "</h3><p>" + esc(L(ph.blurb)) + '</p></div><div class="comb animate">' + comb + '</div><div class="phase-pct"><b>' + pct + "%</b><span>" + rel + "/" + items.length + " " + esc(u.progress) + "</span></div></div>";
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
      return '<section class="rm-phase"><h3>' + esc(L(ph)) + (ph.id !== "ideas" ? " <small>Phase " + ph.id + "</small>" : "") + "</h3>" + items.map(function (it) {
        var s = itemState(it), r = it.build ? releaseFor(it.build) : null, stateHtml;
        if (s === "released") stateHtml = '<b class="released">' + esc(u.released) + " " + esc(r.version) + "</b>" + esc(fmtDate(r.date));
        else if (s === "ready") stateHtml = "<b>" + esc(u.ready) + "</b>" + esc(u.doneIn) + " " + esc(it.build || "");
        else stateHtml = "<b>" + esc(u[s]) + "</b>";
        return '<div class="rm-item" id="rm-' + it.id + '">' + hex(s) + "<div><h4>" + esc(it[state.lang] || it.en) + "</h4>" + (it.note ? "<p>" + esc(L(it.note)) + "</p>" : "") +
          '<div class="tags">' + (it.tool === "core" ? '<span class="tag">' + esc(toolName("core")) + "</span>" : '<a class="tag" href="' + href("tools", it.tool) + '">' + esc(toolName(it.tool)) + "</a>") + "</div></div>" +
          '<div class="rm-state">' + stateHtml + "</div></div>";
      }).join("") + "</section>";
    }).join("") || '<p class="empty">—</p>';

    var legend = '<div class="rm-legend">' + ["released", "ready", "in-progress", "planned"].map(function (s) { return "<span>" + hex(s) + esc(u[s]) + "</span>"; }).join("") + "</div>";

    return '<div class="wrap"><div class="page-head"><h1>' + esc(t.roadmap.title) + '</h1><p class="lead">' + esc(t.roadmap.lead) + "</p></div>" +
      '<div class="section" style="padding-top:28px"><div class="stats">' + stats + "</div>" +
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

  // ---------- router ----------
  function parse() {
    var parts = location.hash.replace(/^#\/?/, "").split("#")[0].split("/");
    var lang = parts[0], page = parts[1] || "", slug = parts[2] || "";
    if (LANGS.indexOf(lang) < 0) {
      // Old-style or empty hash: pick a language and keep the rest
      page = lang && PAGES.indexOf(lang) > -1 ? lang : "";
      slug = parts[1] || "";
      lang = read("bb-lang") || ((navigator.language || "").toLowerCase().indexOf("de") === 0 ? "de" : "en");
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
    var html = { "": pageHome, start: pageStart, tools: pageTools, issues: pageIssues, changelog: pageChangelog, roadmap: pageRoadmap }[state.page]();
    main.innerHTML = html;

    var title = state.page === "tools" && state.slug && T().tools[state.slug] ? T().tools[state.slug].name
      : state.page ? ({ start: T().ui.nav.start, tools: T().ui.nav.tools, issues: T().ui.nav.issues, changelog: T().ui.nav.changes, roadmap: T().ui.nav.roadmap })[state.page] : null;
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
  }

  window.addEventListener("hashchange", function () { render(false); });

  // Delegated clicks for filters, in-page roadmap links and controls
  document.addEventListener("click", function (e) {
    var z = e.target.closest("[data-zoom]");
    if (z && !e.ctrlKey && !e.metaKey) { e.preventDefault(); openZoom(z.getAttribute("data-zoom"), z.querySelector("img").alt); return; }
    if (e.target.closest(".lightbox")) { closeZoom(); return; }
    var el = e.target.closest("[data-f],[data-s],[data-rm],#theme,#menu");
    if (!el) return;
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
    // Only animate the comb on the first view of the page
    document.querySelectorAll(".comb.animate").forEach(function (c) { if (bindRoadmap.seen) c.classList.remove("animate"); });
    bindRoadmap.seen = true;
  }
  document.addEventListener("change", function () {});

  render(false);
  if (state.page === "roadmap") bindRoadmap();
  window.addEventListener("hashchange", function () { if (state.page === "roadmap") bindRoadmap(); });
})();
