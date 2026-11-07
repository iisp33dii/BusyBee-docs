/*
  BusyBee docs: the animated MEP example on the home page.
  A small ceiling void that starts grey, gets colored system by system (Color by Parameter),
  then shows its clashes (Clash Detection), and loops.
  three.js is loaded from the CDN only when the viewport scrolls near, so other pages pay nothing.
*/
(function () {
  "use strict";

  var THREE_URL = "https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.min.js";
  var LOOP = 17; // seconds
  // Keep these in step with BB.modelColors in app.js (the legend).
  var SYS = { supply: 0x4fa3f7, exhaust: 0xf2b134, heating: 0xf0844b, water: 0x4cc59a, tray: 0xb48cf0 };
  var CLASH = 0xff4b3e;
  var THEMES = {
    dark:  { floor: 0x1d1813, grid: 0xf2b134, gridOp: 0.09, struct: 0x3f3a33, mep: 0xa0978a, edge: 0x000000, edgeOp: 0.5,
             ghost: 0xf2e9d6, ghostOp: 0.035, ghostEdgeOp: 0.3 },
    light: { floor: 0xefe6d5, grid: 0x8a5800, gridOp: 0.14, struct: 0xcfc6b6, mep: 0x948b7c, edge: 0x2a2219, edgeOp: 0.3,
             ghost: 0x6b5a3c, ghostOp: 0.05, ghostEdgeOp: 0.35 }
  };

  var loading = null;
  function loadThree() {
    if (window.THREE) return Promise.resolve(window.THREE);
    if (loading) return loading;
    loading = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = THREE_URL;
      s.async = true;
      s.onload = function () { if (window.THREE) resolve(window.THREE); else reject(new Error("three.js missing")); };
      s.onerror = function () { loading = null; s.remove(); reject(new Error("three.js failed to load")); };
      document.head.appendChild(s);
    });
    return loading;
  }

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function smooth(v) { v = clamp(v, 0, 1); return v * v * (3 - 2 * v); }
  // 0 -> 1 between a and b, 1 -> 0 between c and d
  function window4(t, a, b, c, d) { return t < a || t > d ? 0 : t < b ? smooth((t - a) / (b - a)) : t > c ? 1 - smooth((t - c) / (d - c)) : 1; }

  function start(T, el, opts) {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var canvas = document.createElement("canvas");
    canvas.className = "vp-canvas";
    var renderer;
    try {
      renderer = new T.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true, powerPreference: "low-power" });
    } catch (e) {
      el.classList.add("failed");
      return function () {};
    }
    el.insertBefore(canvas, el.firstChild);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);

    var scene = new T.Scene();
    var camera = new T.PerspectiveCamera(30, 1, 0.1, 200);
    var target = new T.Vector3(-1, 1.4, 0.6);
    scene.add(new T.HemisphereLight(0xfff3dc, 0x30261b, 0.85));
    var sun = new T.DirectionalLight(0xffffff, 0.85); sun.position.set(9, 16, 11); scene.add(sun);
    var fill = new T.DirectionalLight(0xffe2b0, 0.3); fill.position.set(-10, 6, -8); scene.add(fill);

    var root = new T.Group();
    scene.add(root);
    var mep = [], structs = [], ghosts = [], edges = [];
    var neutral = new T.Color(), tmp = new T.Color(), clashCol = new T.Color(CLASH);

    function add(geo, x, y, z, kind, flags) {
      var isMep = !!SYS[kind];
      var mat = new T.MeshStandardMaterial({ roughness: isMep ? 0.5 : 0.95, metalness: isMep ? 0.1 : 0, transparent: true });
      var mesh = new T.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      var em = new T.LineBasicMaterial({ transparent: true });
      mesh.add(new T.LineSegments(new T.EdgesGeometry(geo, 25), em));
      edges.push(em);
      mesh.userData = { cz: z, edge: em, sys: isMep ? new T.Color(SYS[kind]) : null, focus: !!(flags && flags.focus), clash: !!(flags && flags.clash) };
      root.add(mesh);
      if (isMep) mep.push(mesh); else if (kind === "struct") structs.push(mesh); else if (kind === "ghost") ghosts.push(mesh);
      return mesh;
    }
    function box(w, h, d, x, y, z, k, f) { return add(new T.BoxGeometry(w, h, d), x, y, z, k, f); }
    function pipe(r, len, axis, x, y, z, k, f) {
      var g = new T.CylinderGeometry(r, r, len, r > 0.1 ? 28 : 14, 1);
      if (axis === "x") g.rotateZ(Math.PI / 2);
      if (axis === "z") g.rotateX(Math.PI / 2);
      return add(g, x, y, z, k, f);
    }

    // ---------- the model ----------
    var floor = box(20, 0.3, 12, 0, -0.15, 0, "floor");
    var gridPts = [];
    for (var gx = -10; gx <= 10; gx += 1) gridPts.push(gx, 0.005, -6, gx, 0.005, 6);
    for (var gz = -6; gz <= 6; gz += 1) gridPts.push(-10, 0.005, gz, 10, 0.005, gz);
    var gridGeo = new T.BufferGeometry();
    gridGeo.setAttribute("position", new T.Float32BufferAttribute(gridPts, 3));
    var gridMat = new T.LineBasicMaterial({ transparent: true });
    root.add(new T.LineSegments(gridGeo, gridMat));

    [-7.5, 0, 7.5].forEach(function (x) {
      [-5.2, 5.2].forEach(function (z) { box(0.45, 4, 0.45, x, 2, z, "struct"); });
    });
    // The slab above is ghosted, so the services underneath stay readable
    var ghost = box(18.4, 0.25, 11.4, 0, 4.125, 0, "ghost");
    ghost.material.depthWrite = false;

    // Supply air: main, branches with diffusers, riser
    box(17.3, 0.5, 0.9, -0.15, 3.2, -1.8, "supply", { focus: true });
    [-5, -1, 3, 6.5].forEach(function (x) {
      box(0.45, 0.32, 2.05, x, 3.19, -3.27, "supply");
      box(0.32, 0.26, 0.32, x, 2.9, -3.95, "supply");
      box(0.62, 0.07, 0.62, x, 2.74, -3.95, "supply");
    });
    pipe(0.32, 2.95, "y", -8.6, 1.475, -1.8, "supply");

    // Exhaust air
    box(17.2, 0.45, 0.8, 0, 3.175, 1.6, "exhaust", { focus: true });
    [-4.5, 0.8, 4.4].forEach(function (x) {
      box(0.4, 0.3, 1.9, x, 3.15, 2.95, "exhaust");
      box(0.3, 0.2, 0.3, x, 2.9, 3.65, "exhaust");
      box(0.55, 0.06, 0.55, x, 2.77, 3.65, "exhaust");
    });
    pipe(0.3, 2.95, "y", 8.6, 1.475, 1.6, "exhaust");

    // Heating flow and return, cold water
    pipe(0.11, 17, "x", 0, 2.55, -0.5, "heating");
    pipe(0.11, 17, "x", 0, 2.55, -0.12, "heating");
    pipe(0.09, 17, "x", 0, 2.55, 0.3, "water");
    pipe(0.075, 17, "x", 0, 2.55, 0.62, "water");
    [-6.5, -2, 2.5, 7].forEach(function (x) {
      box(0.06, 0.06, 1.6, x, 2.42, 0.05, "struct"); // hanger rail
      [-0.7, 0.8].forEach(function (z) { box(0.04, 1.6, 0.04, x, 3.22, z, "struct"); }); // threaded rods
    });

    // Cable tray with cables
    box(17, 0.03, 0.6, 0, 2.85, 4.2, "tray");
    box(17, 0.1, 0.025, 0, 2.9, 3.9, "tray");
    box(17, 0.1, 0.025, 0, 2.9, 4.5, "tray");
    [4.0, 4.12, 4.26, 4.38].forEach(function (z) { pipe(0.03, 17, "x", 0, 2.9, z, "tray"); });

    // The clashes: two pipes that cross straight through the duct mains
    pipe(0.09, 5.8, "z", -3, 3.2, -0.3, "water", { clash: true, focus: true });
    pipe(0.11, 4.2, "z", 5.5, 3.15, 2.1, "heating", { clash: true, focus: true });

    var markers = [[-3, 3.2, -1.8], [-3, 3.2, 1.6], [5.5, 3.15, 1.6]].map(function (p) {
      var g = new T.Group();
      g.position.set(p[0], p[1], p[2]);
      var ball = new T.Mesh(new T.SphereGeometry(0.34, 24, 16), new T.MeshBasicMaterial({ color: CLASH, transparent: true, depthTest: false }));
      var ring = new T.Mesh(new T.RingGeometry(0.5, 0.58, 48), new T.MeshBasicMaterial({ color: CLASH, transparent: true, depthTest: false, side: T.DoubleSide }));
      ball.renderOrder = ring.renderOrder = 10;
      g.add(ball, ring);
      g.userData = { ball: ball, ring: ring };
      root.add(g);
      return g;
    });

    // Scan plane for the coloring pass
    var sweepGeo = new T.PlaneGeometry(19.6, 4.8);
    var sweep = new T.Mesh(sweepGeo, new T.MeshBasicMaterial({ color: 0xf2b134, transparent: true, side: T.DoubleSide, depthWrite: false }));
    var sweepEdgeMat = new T.LineBasicMaterial({ color: 0xf2b134, transparent: true });
    sweep.add(new T.LineSegments(new T.EdgesGeometry(sweepGeo), sweepEdgeMat));
    sweep.position.y = 2.3;
    root.add(sweep);

    // ---------- theme ----------
    var th;
    function applyTheme() {
      th = THEMES[document.documentElement.dataset.theme === "light" ? "light" : "dark"];
      floor.material.color.setHex(th.floor);
      gridMat.color.setHex(th.grid); gridMat.opacity = th.gridOp;
      structs.forEach(function (m) { m.material.color.setHex(th.struct); });
      neutral.setHex(th.mep);
      edges.forEach(function (m) { m.color.setHex(th.edge); });
      ghosts.forEach(function (m) {
        m.material.color.setHex(th.ghost); m.material.opacity = th.ghostOp;
        m.userData.edge.color.setHex(th.grid); m.userData.edge.opacity = th.ghostEdgeOp;
      });
      kick();
    }
    var themeWatch = new MutationObserver(applyTheme);
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    // ---------- camera and input ----------
    var radius = 27, userYaw = 0, userPitch = 0, hoverX = 0, hoverY = 0, drag = null;
    function resize() {
      var w = el.clientWidth, h = el.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      radius = 28 * Math.max(1, 1.55 / camera.aspect);
      camera.updateProjectionMatrix();
      kick();
    }
    var ro = new ResizeObserver(resize);
    ro.observe(el);

    function onDown(e) {
      drag = { x: e.clientX, y: e.clientY, yaw: userYaw, pitch: userPitch };
      canvas.setPointerCapture(e.pointerId);
      el.classList.add("dragging");
    }
    function onMove(e) {
      if (drag) {
        userYaw = drag.yaw - (e.clientX - drag.x) * 0.006;
        userPitch = clamp(drag.pitch + (e.clientY - drag.y) * 0.004, -0.5, 0.5);
        kick();
      } else if (e.pointerType === "mouse") {
        var r = el.getBoundingClientRect();
        hoverX = ((e.clientX - r.left) / r.width - 0.5) * 2;
        hoverY = ((e.clientY - r.top) / r.height - 0.5) * 2;
      }
    }
    function onUp() { drag = null; el.classList.remove("dragging"); }
    function onLeave() { hoverX = hoverY = 0; }
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    canvas.addEventListener("pointerleave", onLeave);

    // ---------- loop ----------
    var raf = 0, visible = false, t0 = performance.now(), last = t0, clock = 0, phase = -1;
    var camYaw = 0, camPitch = 0, first = true;
    function kick() { if (!raf) raf = requestAnimationFrame(frame); }
    function running() { return visible && !document.hidden && !reduce; }

    function frame(now) {
      raf = 0;
      var dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (running()) clock += dt;
      var t = reduce ? 11 : clock % LOOP;

      // Coloring: grey -> scan plane colors system by system -> hold -> back to grey
      var sweepZ = -7 + ((t - 2.5) / 4) * 14;
      var fadeBack = t >= 15 ? 1 - smooth((t - 15) / 2) : 1;
      var a = window4(t, 9, 9.7, 13.3, 14); // clash view
      var pulse = 0.55 + 0.45 * Math.sin(clock * 6);
      for (var i = 0; i < mep.length; i++) {
        var m = mep[i], u = m.userData;
        var k = t < 2.5 ? 0 : t < 6.5 ? smooth((sweepZ - u.cz) / 1.4 + 0.5) : fadeBack;
        m.material.color.lerpColors(neutral, u.sys, k);
        var op = u.focus ? 1 : 1 - 0.82 * a;
        m.material.opacity = op;
        m.material.depthWrite = op > 0.99;
        u.edge.opacity = th.edgeOp * op;
        if (u.clash) {
          tmp.copy(clashCol).multiplyScalar(a * pulse * 0.9);
          m.material.emissive.copy(tmp);
          if (a > 0) m.material.color.lerp(clashCol, a);
        }
      }
      for (var j = 0; j < structs.length; j++) {
        var so = 1 - 0.65 * a;
        structs[j].material.opacity = so;
        structs[j].material.depthWrite = so > 0.99;
        structs[j].userData.edge.opacity = th.edgeOp * so;
      }
      floor.userData.edge.opacity = th.edgeOp;
      floor.material.opacity = 1;

      var sw = window4(t, 2.3, 2.7, 6.2, 6.7);
      sweep.visible = sw > 0;
      sweep.position.z = clamp(sweepZ, -7, 7);
      sweep.material.opacity = 0.1 * sw;
      sweepEdgeMat.opacity = 0.75 * sw;

      // Camera: a slow drift, plus drag and a hint of pointer lean
      var drift = reduce ? 0 : Math.sin(clock * 0.16) * 0.3;
      var wantYaw = 0.7 + drift + userYaw + hoverX * 0.05;
      var wantPitch = 0.6 + userPitch - hoverY * 0.03;
      var ease = drag || reduce || first ? 1 : 0.08;
      first = false;
      camYaw += (wantYaw - camYaw) * ease;
      camPitch += (wantPitch - camPitch) * ease;
      camera.position.set(
        target.x + radius * Math.cos(camPitch) * Math.sin(camYaw),
        target.y + radius * Math.sin(camPitch),
        target.z + radius * Math.cos(camPitch) * Math.cos(camYaw));
      camera.lookAt(target);

      for (var n = 0; n < markers.length; n++) {
        var mk = markers[n].userData, s = 1 + 0.5 * ((clock * 1.2 + n * 0.33) % 1);
        markers[n].visible = a > 0.01;
        mk.ball.material.opacity = 0.32 * a;
        mk.ring.scale.setScalar(s);
        mk.ring.material.opacity = a * (1.5 - s) * 1.6;
        mk.ring.quaternion.copy(camera.quaternion);
      }

      var p = t < 2.5 ? 0 : t < 9 ? 1 : t < 14 ? 2 : 0;
      if (reduce) p = 2;
      if (p !== phase) { phase = p; if (opts && opts.onPhase) opts.onPhase(p); }

      renderer.render(scene, camera);
      if (running()) kick();
    }

    var io = new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) { last = performance.now(); kick(); }
    });
    io.observe(el);
    function onVis() { if (!document.hidden) { last = performance.now(); kick(); } }
    document.addEventListener("visibilitychange", onVis);

    applyTheme();
    resize();
    el.classList.add("ready");

    return function teardown() {
      if (raf) cancelAnimationFrame(raf);
      raf = 0; visible = false;
      io.disconnect(); ro.disconnect(); themeWatch.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      scene.traverse(function (o) {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
      renderer.dispose();
      canvas.remove();
    };
  }

  // Waits until the viewport is near the screen, then loads three.js and starts.
  function mount(el, opts) {
    var alive = true, teardown = null;
    var near = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      near.disconnect();
      loadThree().then(function (T) { if (alive) teardown = start(T, el, opts); },
                       function () { if (alive) el.classList.add("failed"); });
    }, { rootMargin: "400px" });
    near.observe(el);
    return {
      destroy: function () { alive = false; near.disconnect(); if (teardown) teardown(); teardown = null; }
    };
  }

  window.BBModel = { mount: mount };
})();
