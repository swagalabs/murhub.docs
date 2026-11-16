(function () {
  var NAMES = [
    "Moob", "Bobino", "Boon", "Murr", "Bubba", "Booba", "Nono", "Lulu", "Pip", "Zozo",
    "Bibi", "Momo", "Dodo", "Kiki", "Fifi", "Toto", "Lolo", "Popo", "Gigi", "Yoyo",
    "Boo", "Moo", "Noo", "Zoo", "Bee", "Bobo", "Buba", "Nib", "Pim", "Mim",
    "Zim", "Boop", "Moop", "Loop", "Noop", "Zoop", "Beep", "Bop", "Mop", "Nibby",
    "Boony", "Moony", "Bubsy", "Pook", "Zook", "Nook", "Booka", "Mooka", "Doon", "Peb"
  ];
  var LAYOUTS = ["left", "above", "right", "stack", "compact", "wide"];
  var LOGOS = [
    "flower", "paw", "trio", "burst", "hand", "spark", "sun", "figure", "cross",
    "tree", "pinwheel", "bloom", "ampersand", "cat", "arrow", "spots", "knot", "peaks", "rings"
  ];
  var KEY = "murrhub-lockup";
  var SVG = "http://www.w3.org/2000/svg";
  var partRoles = [];
  var accentColor = "";

  function read() {
    try {
      var raw = JSON.parse(localStorage.getItem(KEY) || "null");
      if (!raw || typeof raw !== "object") return null;
      return raw;
    } catch (err) {
      return null;
    }
  }

  function write(name, layout, logo) {
    try {
      localStorage.setItem(KEY, JSON.stringify({
        name: name,
        layout: layout,
        logo: logo,
        accent: accentColor,
        parts: partRoles
      }));
    } catch (err) { /* the lockup still updates on screen */ }
  }

  function pathsFor(id) {
    return window.MurrMarks && MurrMarks[id] ? MurrMarks[id] : [];
  }

  function hexColor(value) {
    return typeof value === "string" && /^#[0-9a-fA-F]{6}$/.test(value) ? value.toLowerCase() : "";
  }

  function themeAccent() {
    var probe = "";
    try { probe = getComputedStyle(document.documentElement).getPropertyValue("--rose").trim(); } catch (err) {}
    return hexColor(probe) || "#e08955";
  }

  function visibleTone(count) {
    var accent = 0;
    var n = Math.min(count, partRoles.length);
    for (var i = 0; i < n; i++) if (partRoles[i] === "accent") accent++;
    if (n && accent === n) return "accent";
    if (accent * 2 > n) return "accent";
    return "ink";
  }

  function ensureParts(count) {
    var mode = visibleTone(partRoles.length);
    while (partRoles.length < count) partRoles.push(mode);
  }

  function toneLabel(tone) {
    return tone === "accent" ? "Акцент" : "Текст";
  }

  function themeQuery() {
    var theme = window.MurrThemes && MurrThemes.read ? MurrThemes.read() : { preset: "chocolate", chocolate: 78, custom: null };
    var q = new URLSearchParams();
    q.set("preset", theme.preset || "chocolate");
    q.set("chocolate", String(theme.chocolate == null ? 78 : theme.chocolate));
    if (theme.custom && theme.custom.bg) {
      q.set("bg", theme.custom.bg);
      q.set("card", theme.custom.card || "");
      q.set("text", theme.custom.text || "");
      q.set("muted", theme.custom.muted || "");
      q.set("accent", theme.custom.accent || "");
    }
    return "name.html?" + q.toString();
  }

  function bindOpener() {
    var link = document.getElementById("open-name");
    if (!link) return;
    link.addEventListener("click", function (e) {
      var url = themeQuery();
      link.href = url;
      var opened = window.open(url, "murrhub-name", "popup=yes,width=480,height=760");
      if (opened) {
        e.preventDefault();
        opened.focus();
      }
    });
  }

  function applyTheme() {
    if (!window.MurrThemes) return;
    var q = null;
    try { q = new URLSearchParams(location.search); } catch (err) { q = null; }
    var preset = q && q.get("preset");
    if (!preset) {
      MurrThemes.paint();
      return;
    }
    var custom = null;
    if (preset === "custom") {
      custom = {
        bg: q.get("bg") || "",
        card: q.get("card") || "",
        text: q.get("text") || "",
        muted: q.get("muted") || "",
        accent: q.get("accent") || "",
      };
    }
    var n = Number(q.get("chocolate"));
    MurrThemes.show({ preset: preset, chocolate: isFinite(n) ? n : 78, custom: custom });
  }

  function followTheme() {
    window.addEventListener("storage", function (e) {
      if (!window.MurrThemes) return;
      if (e.key && e.key.indexOf("murrhub-") !== 0) return;
      if (e.key === "murrhub-lockup") return;
      MurrThemes.paint();
      if (window.MurrName && MurrName.syncAccent) MurrName.syncAccent();
    });
  }

  function boot() {
    var root = document.getElementById("namewin");
    var lockup = document.getElementById("lockup");
    var nameEl = document.getElementById("lockup-name");
    var mark = lockup ? lockup.querySelector(".mark") : null;
    var layoutSel = document.getElementById("lockup-layout");
    var logoSel = document.getElementById("logo-pick");
    var toneBtn = document.getElementById("mark-tone");
    var accentInput = document.getElementById("mark-accent");
    var pick = document.getElementById("name-pick");
    var field = document.getElementById("name-custom");
    if (!root || !lockup || !nameEl || !mark || !layoutSel || !logoSel || !toneBtn || !accentInput || !pick || !field) return;

    NAMES.forEach(function (name) {
      var opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      pick.appendChild(opt);
    });

    var saved = read();
    var layout = saved && LAYOUTS.indexOf(saved.layout) !== -1 ? saved.layout : "left";
    var logo = saved && LOGOS.indexOf(saved.logo) !== -1 ? saved.logo : "flower";
    var name = saved && typeof saved.name === "string" ? saved.name.slice(0, 24) : "Moob";
    accentColor = hexColor(saved && saved.accent);
    if (saved && Array.isArray(saved.parts)) {
      partRoles = saved.parts.map(function (tone) { return tone === "accent" ? "accent" : "ink"; });
    } else if (saved && saved.parts && Array.isArray(saved.parts[logo])) {
      partRoles = saved.parts[logo].map(function (tone) { return tone === "accent" ? "accent" : "ink"; });
    }

    function applyAccent() {
      if (accentColor) root.style.setProperty("--mark-accent", accentColor);
      else root.style.removeProperty("--mark-accent");
      accentInput.value = accentColor || themeAccent();
    }

    function syncToneButton() {
      var count = pathsFor(logo).length || partRoles.length;
      var tone = visibleTone(count);
      toneBtn.dataset.tone = tone;
      toneBtn.textContent = toneLabel(tone);
    }

    function drawMark() {
      var paths = pathsFor(logo);
      ensureParts(paths.length);
      var svg = document.createElementNS(SVG, "svg");
      svg.setAttribute("viewBox", "0 0 256 256");
      svg.setAttribute("aria-hidden", "true");
      paths.forEach(function (d, i) {
        var path = document.createElementNS(SVG, "path");
        path.setAttribute("d", d);
        path.setAttribute("fill-rule", "evenodd");
        path.dataset.tone = partRoles[i] === "accent" ? "accent" : "ink";
        path.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          var next = path.dataset.tone === "accent" ? "ink" : "accent";
          path.dataset.tone = next;
          partRoles[i] = next;
          syncToneButton();
          write(name, layout, logo);
        });
        svg.appendChild(path);
      });
      var old = mark.querySelector("svg");
      if (old) mark.removeChild(old);
      mark.appendChild(svg);
      syncToneButton();
    }

    var drawn = "";

    function show(next, nextLayout, fromField, nextLogo) {
      name = String(next).slice(0, 24);
      layout = nextLayout;
      if (nextLogo) logo = LOGOS.indexOf(nextLogo) === -1 ? "flower" : nextLogo;
      nameEl.textContent = name || " ";
      if (!fromField) field.value = name;
      lockup.dataset.layout = layout;
      layoutSel.value = layout;
      mark.dataset.logo = logo;
      logoSel.value = logo;
      pick.value = NAMES.indexOf(name) === -1 ? "" : name;
      if (drawn !== logo) {
        drawMark();
        drawn = logo;
      } else {
        syncToneButton();
      }
      write(name, layout, logo);
    }

    toneBtn.addEventListener("click", function () {
      var next = toneBtn.dataset.tone === "accent" ? "ink" : "accent";
      var count = Math.max(partRoles.length, pathsFor(logo).length);
      for (var i = 0; i < count; i++) partRoles[i] = next;
      var paths = mark.querySelectorAll("path");
      for (var j = 0; j < paths.length; j++) paths[j].dataset.tone = next;
      syncToneButton();
      write(name, layout, logo);
    });
    accentInput.addEventListener("input", function () {
      accentColor = hexColor(accentInput.value) || accentInput.value;
      applyAccent();
      write(name, layout, logo);
    });
    applyAccent();
    window.MurrName.syncAccent = function () {
      if (!accentColor) accentInput.value = themeAccent();
    };

    layoutSel.addEventListener("change", function () {
      show(field.value, LAYOUTS.indexOf(layoutSel.value) === -1 ? "left" : layoutSel.value);
    });
    logoSel.addEventListener("change", function () {
      show(field.value, layout, false, logoSel.value);
    });
    pick.addEventListener("change", function () {
      if (!pick.value) return;
      show(pick.value, layout);
    });
    field.addEventListener("input", function () {
      show(field.value, layout, true);
    });
    document.getElementById("name-prev").addEventListener("click", function () {
      var i = NAMES.indexOf(name);
      show(NAMES[i <= 0 ? NAMES.length - 1 : i - 1], layout);
    });
    document.getElementById("name-next").addEventListener("click", function () {
      var i = NAMES.indexOf(name);
      show(NAMES[i < 0 || i === NAMES.length - 1 ? 0 : i + 1], layout);
    });

    show(name, layout);
    followTheme();
  }

  window.MurrName = { applyTheme: applyTheme };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { bindOpener(); boot(); });
  else { bindOpener(); boot(); }
})();
