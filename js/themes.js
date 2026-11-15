/* Theme track. Color roles only — background, card, text, muted, accent —
   taken from Monkeytype's public theme list. Not their source. */
(function () {
  var CHOCOLATE = {
    id: "chocolate",
    name: "Шоколад",
    bg: "#14110e",
    card: "#262019",
    text: "#f6f1ea",
    muted: "#d4c6b8",
    accent: "#e08955",
  };

  /* id, name, bg, card (subAlt), text, muted (sub), accent (main), caret, error */
  var EXTRAS = [
    ["8008", "8008", "#333a45", "#2e343d", "#e9ecf0", "#939eae", "#f44c7f", "#f44c7f", "#da3333"],
    ["9009", "9009", "#eeebe2", "#d3cfc1", "#080909", "#99947f", "#080909", "#7fa480", "#c87e74"],
    ["dracula", "Dracula", "#282a36", "#20222c", "#f8f8f2", "#6272a4", "#bd93f9", "#bd93f9", "#ff5555"],
    ["rose-dawn", "Rose Dawn", "#fffaf3", "#f0e9df", "#286983", "#c4a7e7", "#56949f", "#ea9d34", "#b4637a"],
    ["nord", "Nord", "#242933", "#2e3440", "#d8dee9", "#929aaa", "#88c0d0", "#eceff4", "#bf616a"],
    ["camping", "Camping", "#faf1e4", "#e7dccb", "#3c403b", "#c2b8aa", "#618c56", "#618c56", "#ad4f4e"],
    ["serika", "Serika", "#323437", "#2c2e31", "#d1d0c5", "#646669", "#e2b714", "#e2b714", "#ca4754"],
    ["cheesecake", "Cheesecake", "#fdf0d5", "#f3e2bf", "#3a3335", "#d91c81", "#8e2949", "#892948", "#5cf074"],
    ["catppuccin", "Catppuccin", "#1e1e2e", "#181825", "#cdd6f4", "#7f849c", "#cba6f7", "#f2cdcd", "#f38ba8"],
    ["solarized", "Solarized", "#fdf6e3", "#e2d8be", "#181819", "#2aa198", "#859900", "#dc322f", "#d33682"],
    ["matrix", "Matrix", "#000000", "#032000", "#d1ffcd", "#006500", "#15ff00", "#15ff00", "#da3333"],
    ["lilac", "Lilac Mist", "#fffbfe", "#ecdcee", "#5c2954", "#e094c2", "#b94189", "#e099d6", "#ff6f69"],
    ["bushido", "Bushido", "#242933", "#1c222d", "#f6f0e9", "#596172", "#ec4c56", "#ec4c56", "#ec4c56"],
    ["taro", "Taro", "#b3baff", "#a3a7df", "#130f1a", "#6f6c91", "#130f1a", "#00e9e5", "#ffe23e"],
    ["aurora", "Aurora", "#011926", "#000c13", "#ffffff", "#245c69", "#00e980", "#00e980", "#b94da1"],
    ["terrazzo", "Terrazzo", "#f1e5da", "#e3d3c6", "#023e3b", "#688e8f", "#e0794e", "#e0794e", "#a01034"],
    ["laser", "Laser", "#221b44", "#1e173b", "#dbe7e8", "#b82356", "#009eaf", "#009eaf", "#a8d400"],
    ["milkshake", "Milkshake", "#ffffff", "#ddeff3", "#212b43", "#62cfe6", "#212b43", "#212b43", "#f19dac"],
    ["joker", "Joker", "#1a0e25", "#14081f", "#e9e2f5", "#7554a3", "#99de1e", "#99de1e", "#e32b2b"],
    ["gruvbox", "Gruvbox", "#fbf1c7", "#daceae", "#3c3836", "#a89984", "#689d6a", "#689d6a", "#cc241d"],
    ["incognito", "Incognito", "#0e0e0e", "#151515", "#c6c6c6", "#555555", "#ff9900", "#ff9900", "#e44545"],
    ["paper", "Paper", "#eeeeee", "#dddddd", "#444444", "#b2b2b2", "#444444", "#444444", "#d70000"],
    ["sweden", "Sweden", "#0058a3", "#024f8e", "#ffffff", "#57abdb", "#ffcc02", "#b5b5b5", "#e74040"],
    ["sewing", "Sewing Tin", "#ffffff", "#c8cedf", "#2d2076", "#385eca", "#2d2076", "#fbdb8c", "#f2ce83"],
    ["monokai", "Monokai", "#272822", "#1f201b", "#e2e2dc", "#e6db74", "#a6e22e", "#66d9ef", "#f92672"],
    ["oasis", "Oasis", "#fff2d5", "#eddebc", "#332800", "#0061fe", "#d19d01", "#3a87fe", "#76bb40"],
    ["runner", "Night Runner", "#212121", "#1a1a1a", "#e8e8e8", "#5c4a9c", "#feff04", "#feff04", "#da3333"],
    ["breeze", "Breeze", "#e8d5c4", "#f6e6da", "#1b4c5e", "#3a98b9", "#7d67a9", "#7d67a9", "#7d67a9"],
    ["cyberspace", "Cyberspace", "#181c18", "#131613", "#c2fbe1", "#9578d3", "#00ce7c", "#00ce7c", "#ff5f5f"],
    ["macroblank", "Macroblank", "#b2d2c8", "#c6ddd3", "#490909", "#717977", "#c13117", "#766f71", "#c13117"],
    ["fire", "Fire", "#0f0000", "#200a0a", "#ffffff", "#683434", "#b31313", "#b31313", "#2f3cb6"],
    ["peaches", "Peaches", "#e0d7c1", "#e2caaf", "#5f4c41", "#e7b28e", "#dd7a5f", "#dd7a5f", "#ff6961"],
    ["husqy", "Husqy", "#000000", "#1e001e", "#ebd7ff", "#972fff", "#c58aff", "#c58aff", "#da3333"],
    ["hanok", "Hanok", "#d8d2c3", "#cdc0af", "#393b3b", "#8b6f5c", "#513a2a", "#513a2a", "#ca4754"],
    ["dolphin", "Blue Dolphin", "#003950", "#014961", "#82eaff", "#00e4ff", "#ffcefb", "#00bcd4", "#ffbde6"],
    ["dmg", "DMG", "#dadbdc", "#bec1d2", "#414141", "#3846b1", "#ae185e", "#384693", "#ae185e"],
    ["trance", "Trance", "#00021b", "#18214c", "#ffffff", "#3c4c79", "#e51376", "#e51376", "#02d3b0"],
    ["slambook", "Slambook", "#fffdde", "#c6dce4", "#13005a", "#1c82ad", "#03001c", "#367e18", "#f900bf"],
    ["matcha", "Matcha", "#523525", "#422b1e", "#ecddcc", "#9e6749", "#7ec160", "#7ec160", "#fb4934"],
    ["after-dark", "After Dark", "#1b1d36", "#17182c", "#e1e7ec", "#99d6ea", "#fca6d1", "#99d6ea", "#fffb85"],
  ];

  var PROPS = [
    "--bg", "--bg-2", "--surface", "--ink", "--muted", "--faint", "--line",
    "--rose", "--rose-deep", "--rose-soft", "--blush", "--gold",
    "--seal", "--seal-ink", "--btn", "--btn-ink", "--press", "--press-ink",
    "--shadow", "--tab", "--me", "--me-ink", "--them",
    "--map-paper", "--map-water", "--map-water-2", "--map-park", "--map-block", "--map-ink",
    "--overlay", "--good-soft", "--warn-soft", "--glow", "--glow-2", "--select",
    "--bezel", "--bezel-rim",
  ];

  var current = null;
  var onChange = null;
  var mounted = false;
  var panel = null;
  var draft = null;

  function clamp(n) {
    n = Math.max(0, Math.min(100, Math.round(Number(n))));
    return Number.isFinite(n) ? n : 78;
  }

  function hexToRgb(hex) {
    var h = String(hex || "").trim().replace("#", "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    if (h.length === 8) h = h.slice(0, 6);
    if (!/^[0-9a-fA-F]{6}$/.test(h)) return [0, 0, 0];
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }

  function rgbToHex(c) {
    return "#" + c.map(function (v) {
      v = Math.max(0, Math.min(255, Math.round(v)));
      return v.toString(16).padStart(2, "0");
    }).join("");
  }

  function mix(a, b, t) {
    var A = hexToRgb(a);
    var B = hexToRgb(b);
    return rgbToHex(A.map(function (v, i) { return v + (B[i] - v) * t; }));
  }

  function lum(hex) {
    var c = hexToRgb(hex).map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }

  function contrast(a, b) {
    var L1 = lum(a);
    var L2 = lum(b);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  }

  function dist(a, b) {
    var A = hexToRgb(a);
    var B = hexToRgb(b);
    var d = 0;
    for (var i = 0; i < 3; i++) d += (A[i] - B[i]) * (A[i] - B[i]);
    return Math.sqrt(d);
  }

  function rgba(hex, a) {
    var c = hexToRgb(hex);
    return "rgba(" + c[0] + ", " + c[1] + ", " + c[2] + ", " + a + ")";
  }

  function safeHex(v, fallback) {
    var m = String(v || "").trim().match(/^#([0-9a-fA-F]{6})$/);
    return m ? "#" + m[1].toLowerCase() : fallback;
  }

  function bestInk(fill) {
    var dark = "#1c1917";
    var light = "#f6f1ea";
    return contrast(dark, fill) >= contrast(light, fill) ? dark : light;
  }

  function rowToPreset(row) {
    return {
      id: row[0], name: row[1], bg: row[2], card: row[3], text: row[4],
      muted: row[5], accent: row[6], alt: row[7], err: row[8],
    };
  }

  function byId(id) {
    for (var i = 0; i < EXTRAS.length; i++) {
      if (EXTRAS[i][0] === id) return rowToPreset(EXTRAS[i]);
    }
    return null;
  }

  function chroma(hex) {
    var rgb = hexToRgb(hex);
    return Math.max(rgb[0], rgb[1], rgb[2]) - Math.min(rgb[0], rgb[1], rgb[2]);
  }

  function liftAccent(c) {
    if (contrast(bestInk(c), c) >= 4.5) return c;
    var best = c;
    var bestD = 1e9;
    ["#000000", "#ffffff"].forEach(function (toward) {
      for (var step = 0.04; step <= 0.62; step += 0.04) {
        var next = mix(c, toward, step);
        if (contrast(bestInk(next), next) >= 4.5) {
          var d = dist(next, c);
          if (d < bestD) { bestD = d; best = next; }
          break;
        }
      }
    });
    return best;
  }

  function usableAccent(c, bg, text) {
    if (!c) return false;
    if (dist(c, text) < 34) return false;
    if (dist(c, bg) < 26) return false;
    return true;
  }

  function pickAccent(bg, text, accent, alt, err) {
    var list = [accent, alt, err];
    for (var i = 0; i < list.length; i++) {
      if (usableAccent(list[i], bg, text)) return liftAccent(list[i]);
    }
    var pool = [err, alt, accent].filter(Boolean);
    var c = pool[0];
    var bestColor = -1;
    pool.forEach(function (item) {
      var color = chroma(item);
      if (color > bestColor) { bestColor = color; c = item; }
    });
    if (dist(c, text) < 34) c = mix(c, lum(text) > 0.5 ? "#000000" : "#ffffff", 0.5);
    return liftAccent(c);
  }

  function tuneCard(bg, text, card) {
    var c = card || bg;
    var light = lum(bg) > 0.45;
    if (dist(c, bg) < 16) c = mix(bg, light ? "#1a1614" : "#f4efe8", light ? 0.08 : 0.1);
    if (contrast(text, c) < 4.5) c = mix(c, bg, 0.7);
    if (dist(c, bg) < 14) c = mix(bg, light ? "#1a1614" : "#f4efe8", light ? 0.1 : 0.12);
    return c;
  }

  function tuneMuted(bg, text, muted) {
    if (muted && contrast(muted, bg) >= 3.2 && dist(muted, text) >= 26) return muted;
    var lo = 0.2;
    var hi = 0.8;
    var best = mix(bg, text, 0.55);
    for (var i = 0; i < 14; i++) {
      var mid = (lo + hi) / 2;
      var c = mix(bg, text, mid);
      if (muted) c = mix(c, muted, 0.22);
      if (contrast(c, bg) < 3.2) lo = mid;
      else {
        best = c;
        hi = mid;
      }
    }
    if (contrast(best, bg) < 3.2) best = mix(bg, text, 0.62);
    return best;
  }

  function resolveRoles(p) {
    var bg = p.bg;
    var text = p.text;
    var card = tuneCard(bg, text, p.card);
    var muted = tuneMuted(bg, text, p.muted);
    var accent = pickAccent(bg, text, p.accent, p.alt, p.err);
    return { bg: bg, card: card, text: text, muted: muted, accent: accent, light: lum(bg) > 0.45 };
  }

  function tokensFromRoles(r) {
    var bg = r.bg;
    var card = r.card;
    var text = r.text;
    var muted = r.muted;
    var accent = r.accent;
    var light = r.light != null ? r.light : lum(bg) > 0.45;
    var phone = mix(bg, card, 0.62);
    if (contrast(text, phone) < 4.5) phone = mix(bg, card, 0.2);
    var guard = 0;
    while ((contrast(muted, phone) < 3.05 || contrast(muted, bg) < 3.05) && guard < 8) {
      muted = mix(muted, text, 0.34);
      guard += 1;
    }
    var faint = mix(muted, bg, 0.32);
    if (contrast(faint, phone) < 2.35) faint = mix(muted, text, 0.22);
    var pressToward = bestInk(accent) === "#1c1917" ? "#000000" : "#ffffff";
    var press = accent;
    for (var step = 0.12; step <= 0.72; step += 0.04) {
      press = mix(accent, pressToward, step);
      if (dist(press, accent) >= 16 && contrast(bestInk(press), press) >= 4.6) break;
    }
    var btnInk = bestInk(accent);
    var pressInk = bestInk(press);
    var soft = mix(card, accent, light ? 0.24 : 0.36);
    var gold = mix(accent, text, 0.4);
    var deep = accent;
    if (contrast(deep, bg) < 3.2) deep = mix(accent, text, 0.55);
    if (contrast(deep, bg) < 3) deep = text;
    return {
      "--bg": bg,
      "--bg-2": phone,
      "--surface": card,
      "--ink": text,
      "--muted": muted,
      "--faint": faint,
      "--line": rgba(text, light ? 0.14 : 0.16),
      "--rose": accent,
      "--rose-deep": deep,
      "--rose-soft": soft,
      "--blush": soft,
      "--gold": gold,
      "--seal": light ? "#2f6d52" : "#8fceb8",
      "--seal-ink": light ? "#f4fbf7" : "#142018",
      "--btn": accent,
      "--btn-ink": btnInk,
      "--press": press,
      "--press-ink": pressInk,
      "--shadow": light ? "0 14px 34px rgba(28, 25, 23, 0.12)" : "0 14px 36px rgba(0, 0, 0, 0.4)",
      "--tab": rgba(mix(bg, card, 0.35), 0.92),
      "--me": accent,
      "--me-ink": btnInk,
      "--them": card,
      "--map-paper": mix(bg, card, 0.45),
      "--map-water": mix(bg, accent, 0.55),
      "--map-water-2": mix(bg, accent, 0.28),
      "--map-park": mix(bg, light ? "#6d8a62" : "#8fceb8", 0.35),
      "--map-block": mix(card, bg, 0.35),
      "--map-ink": text,
      "--overlay": light ? "rgba(28, 25, 23, 0.46)" : "rgba(0, 0, 0, 0.62)",
      "--good-soft": mix(bg, light ? "#2f6d52" : "#8fceb8", light ? 0.22 : 0.24),
      "--warn-soft": mix(bg, accent, 0.22),
      "--glow": mix(bg, accent, light ? 0.34 : 0.58),
      "--glow-2": mix(bg, muted, light ? 0.22 : 0.42),
      "--select": mix(bg, accent, 0.45),
      "--bezel": mix(bg, "#000000", light ? 0.72 : 0.55),
      "--bezel-rim": mix(accent, muted, 0.4),
    };
  }

  function sandRoles(n) {
    if (window.MurrChocolate) {
      var pack = MurrChocolate.colors(n);
      var v = pack.vars;
      return {
        bg: v["--bg"], card: v["--surface"], text: v["--ink"],
        muted: v["--muted"], accent: v["--btn"], light: pack.scheme === "light",
      };
    }
    return { bg: "#3a241c", card: "#543628", text: "#f6f1ea", muted: "#e6d3c4", accent: "#f0a05c", light: false };
  }

  function rolesOf(state) {
    var id = state.preset;
    if (id === "chocolate") {
      return { bg: CHOCOLATE.bg, card: CHOCOLATE.card, text: CHOCOLATE.text, muted: CHOCOLATE.muted, accent: CHOCOLATE.accent, light: false };
    }
    if (id === "sand") return sandRoles(state.chocolate);
    if (id === "custom" && state.custom) {
      return {
        bg: state.custom.bg, card: state.custom.card, text: state.custom.text,
        muted: state.custom.muted, accent: state.custom.accent, light: lum(state.custom.bg) > 0.45,
      };
    }
    var p = byId(id);
    if (!p) return rolesOf({ preset: "chocolate", chocolate: 78, custom: null });
    return resolveRoles(p);
  }

  function modeOf(id) {
    if (id === "chocolate") return "dark";
    if (id === "sand") return "light";
    return "preset";
  }

  function nameOf(id) {
    if (id === "chocolate") return CHOCOLATE.name;
    if (id === "sand") return "Светлый шоколад";
    if (id === "custom") return "Своя";
    var p = byId(id);
    return p ? p.name : CHOCOLATE.name;
  }

  function cycle() {
    var list = [{ id: "chocolate", name: "Шоколад" }, { id: "sand", name: "Светлый шоколад" }];
    for (var i = 0; i < EXTRAS.length; i++) list.push({ id: EXTRAS[i][0], name: EXTRAS[i][1] });
    if (current && current.custom) list.push({ id: "custom", name: "Своя" });
    return list;
  }

  function storageGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  function storageDel(key) {
    try { localStorage.removeItem(key); } catch (e) {}
  }

  function parseCustom(raw) {
    if (!raw) return null;
    try {
      var o = JSON.parse(raw);
      if (!o || typeof o !== "object") return null;
      return {
        bg: safeHex(o.bg, ""),
        card: safeHex(o.card, ""),
        text: safeHex(o.text, ""),
        muted: safeHex(o.muted, ""),
        accent: safeHex(o.accent, ""),
      };
    } catch (e) {
      return null;
    }
  }

  function customOk(c) {
    return !!(c && c.bg && c.card && c.text && c.muted && c.accent);
  }

  function read() {
    var preset = storageGet("murrhub-preset");
    var legacy = storageGet("murrhub-theme");
    var choc = storageGet("murrhub-chocolate");
    var custom = parseCustom(storageGet("murrhub-custom"));
    if (!customOk(custom)) custom = null;
    var n = choc == null || choc === "" ? 78 : Number(choc);
    if (!isFinite(n)) n = 78;
    n = clamp(n);
    if (!preset) {
      if (legacy === "light") preset = "sand";
      else preset = "chocolate";
    }
    if (preset === "custom" && !custom) preset = "chocolate";
    if (preset !== "chocolate" && preset !== "sand" && preset !== "custom" && !byId(preset)) preset = "chocolate";
    return { preset: preset, chocolate: n, custom: custom, mode: modeOf(preset) };
  }

  function queryPreset() {
    var q = "";
    try { q = location.search || ""; } catch (e) { q = ""; }
    if (/[?&]theme=dark/.test(q)) return "chocolate";
    if (/[?&]theme=light/.test(q)) return "sand";
    return "";
  }

  function persist(state) {
    var preset = state.preset || "chocolate";
    storageSet("murrhub-preset", preset);
    storageSet("murrhub-chocolate", String(clamp(state.chocolate)));
    storageSet("murrhub-theme", preset === "chocolate" ? "dark" : preset === "sand" ? "light" : "preset");
    if (customOk(state.custom)) storageSet("murrhub-custom", JSON.stringify(state.custom));
    else storageDel("murrhub-custom");
  }

  function clearProps() {
    var root = document.documentElement;
    PROPS.forEach(function (k) { root.style.removeProperty(k); });
    root.style.removeProperty("color-scheme");
  }

  function paintDark() {
    clearProps();
    var root = document.documentElement;
    root.dataset.theme = "dark";
    root.dataset.preset = "chocolate";
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", "#14110e");
  }

  function paintSand(n) {
    clearProps();
    var root = document.documentElement;
    root.dataset.theme = "light";
    root.dataset.preset = "sand";
    if (window.MurrChocolate) MurrChocolate.apply(n, "light");
  }

  function paintTokens(tokens, scheme, id) {
    clearProps();
    var root = document.documentElement;
    root.dataset.theme = "preset";
    root.dataset.preset = id || "preset";
    Object.keys(tokens).forEach(function (k) { root.style.setProperty(k, tokens[k]); });
    root.style.colorScheme = scheme === "light" ? "light" : "dark";
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", tokens["--bg"]);
  }

  function renderTheme(state) {
    if (state.preset === "chocolate") {
      paintDark();
      return;
    }
    if (state.preset === "sand") {
      paintSand(state.chocolate);
      return;
    }
    var roles = rolesOf(state);
    paintTokens(tokensFromRoles(roles), roles.light ? "light" : "dark", state.preset);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function swatchHtml(r, n) {
    var cols = [r.bg, r.card, r.accent, r.text, r.muted].slice(0, n);
    return cols.map(function (c) {
      return '<i style="background:' + safeHex(c, "#000000") + '"></i>';
    }).join("");
  }

  function sync() {
    var s = current || read();
    var name = nameOf(s.preset);
    var label = document.getElementById("theme-label");
    if (label) label.textContent = name;
    var currentBtn = document.getElementById("theme-current");
    if (currentBtn) {
      currentBtn.setAttribute("aria-label", "Список тем, сейчас " + name);
      currentBtn.title = name;
    }
    var sw = document.getElementById("theme-swatches");
    if (sw) sw.innerHTML = swatchHtml(rolesOf(s), 3);
    var choc = document.getElementById("choc");
    if (choc) choc.hidden = s.preset !== "sand";
    var slider = document.getElementById("chocolate");
    if (slider && document.activeElement !== slider) slider.value = String(s.chocolate);
    markActive();
  }

  function markActive() {
    if (!current) return;
    document.querySelectorAll(".theme-opt").forEach(function (btn) {
      var on = btn.dataset.id === current.preset;
      btn.classList.toggle("on", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
  }

  function fillList() {
    var box = document.getElementById("theme-list");
    if (!box || !current) return;
    var s = current;
    box.innerHTML = cycle().map(function (p) {
      var r = rolesOf({ preset: p.id, chocolate: s.chocolate, custom: s.custom });
      var on = p.id === s.preset;
      return '<button type="button" class="theme-opt' + (on ? " on" : "") + '" role="option" data-id="' + p.id + '" aria-selected="' + (on ? "true" : "false") + '"><span class="swatches">' + swatchHtml(r, 3) + "</span><span>" + escapeHtml(p.name) + "</span></button>";
    }).join("");
    var active = box.querySelector(".theme-opt.on");
    if (active) {
      var delta = active.getBoundingClientRect().top - box.getBoundingClientRect().top;
      var target = box.scrollTop + delta - (box.clientHeight - active.offsetHeight) / 2;
      box.scrollTop = Math.max(0, target);
    }
  }

  function show(state) {
    var preset = state.preset || "chocolate";
    var custom = customOk(state.custom) ? {
      bg: safeHex(state.custom.bg, "#14110e"),
      card: safeHex(state.custom.card, "#262019"),
      text: safeHex(state.custom.text, "#f6f1ea"),
      muted: safeHex(state.custom.muted, "#d4c6b8"),
      accent: safeHex(state.custom.accent, "#e08955"),
    } : null;
    if (preset === "custom" && !custom) preset = "chocolate";
    if (preset !== "chocolate" && preset !== "sand" && preset !== "custom" && !byId(preset)) preset = "chocolate";
    current = { preset: preset, chocolate: clamp(state.chocolate), custom: custom, mode: modeOf(preset) };
    renderTheme(current);
    sync();
    return current;
  }

  function paint() {
    try {
      var s = read();
      var q = queryPreset();
      if (q) s.preset = q;
      s.mode = modeOf(s.preset);
      show(s);
    } catch (e) {}
  }

  function commit(id) {
    var s = {
      preset: id,
      chocolate: current ? current.chocolate : 78,
      custom: current ? current.custom : null,
    };
    show(s);
    if (panel && !panel.hidden) fillList();
    persist(current);
    if (typeof onChange === "function") onChange(current);
  }

  function step(dir) {
    var list = cycle();
    var id = current ? current.preset : "chocolate";
    var i = 0;
    for (var k = 0; k < list.length; k++) if (list[k].id === id) i = k;
    var next = list[(i + dir + list.length) % list.length];
    commit(next.id);
  }

  function place() {
    if (!panel) return;
    var anchor = document.getElementById("theme-current");
    if (!anchor) return;
    var r = anchor.getBoundingClientRect();
    var phone = document.getElementById("phone");
    var width = Math.min(360, window.innerWidth - 16);
    var top = Math.max(8, r.bottom + 8);
    var left = r.left;
    if (phone) {
      var p = phone.getBoundingClientRect();
      var spaceRight = window.innerWidth - p.right - 20;
      var spaceLeft = p.left - 20;
      if (spaceRight >= 260) {
        width = Math.min(360, spaceRight);
        left = p.right + 12;
        top = Math.max(8, r.bottom + 8);
      } else if (spaceLeft >= 260) {
        width = Math.min(360, spaceLeft);
        left = Math.max(8, p.left - width - 12);
        top = Math.max(8, r.bottom + 8);
      }
    }
    if (left + width > window.innerWidth - 8) left = window.innerWidth - width - 8;
    if (left < 8) left = 8;
    panel.style.width = width + "px";
    panel.style.left = left + "px";
    panel.style.top = top + "px";
    panel.style.maxHeight = Math.max(280, window.innerHeight - top - 12) + "px";
  }

  function paintDraft() {
    if (!draft) return;
    var box = document.getElementById("theme-preview");
    var card = document.getElementById("theme-preview-card");
    var quiet = document.getElementById("theme-preview-muted");
    var dot = document.getElementById("theme-preview-dot");
    if (box) box.style.background = draft.bg;
    if (card) {
      card.style.background = draft.card;
      card.style.color = draft.text;
    }
    if (quiet) quiet.style.color = draft.muted;
    if (dot) dot.style.background = draft.accent;
    var now = document.getElementById("theme-now");
    if (now) {
      now.innerHTML = [draft.bg, draft.card, draft.text, draft.muted, draft.accent].map(function (c) {
        return '<i style="background:' + safeHex(c, "#000000") + '"></i>';
      }).join("");
    }
  }

  function openPanel() {
    if (!panel || !current) return;
    var r = rolesOf(current);
    draft = current.custom ? {
      bg: current.custom.bg, card: current.custom.card, text: current.custom.text,
      muted: current.custom.muted, accent: current.custom.accent,
    } : { bg: safeHex(r.bg, "#14110e"), card: safeHex(r.card, "#262019"), text: safeHex(r.text, "#f6f1ea"), muted: safeHex(r.muted, "#d4c6b8"), accent: safeHex(r.accent, "#e08955") };
    ["bg", "card", "text", "muted", "accent"].forEach(function (slot) {
      var input = document.getElementById("custom-" + slot);
      if (input) input.value = draft[slot];
    });
    paintDraft();
    panel.hidden = false;
    var btn = document.getElementById("theme-current");
    if (btn) btn.setAttribute("aria-expanded", "true");
    place();
    fillList();
  }

  function closePanel() {
    if (!panel) return;
    panel.hidden = true;
    var btn = document.getElementById("theme-current");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  function togglePanel() {
    if (!panel || panel.hidden) openPanel();
    else closePanel();
  }

  function applyDraft() {
    if (!draft) return;
    var custom = {
      bg: safeHex(draft.bg, "#14110e"),
      card: safeHex(draft.card, "#262019"),
      text: safeHex(draft.text, "#f6f1ea"),
      muted: safeHex(draft.muted, "#d4c6b8"),
      accent: safeHex(draft.accent, "#e08955"),
    };
    var s = {
      preset: "custom",
      chocolate: current ? current.chocolate : 78,
      custom: custom,
    };
    show(s);
    fillList();
    persist(current);
    if (typeof onChange === "function") onChange(current);
  }

  function buildPanel() {
    if (document.getElementById("theme-panel")) {
      panel = document.getElementById("theme-panel");
      return;
    }
    panel = document.createElement("div");
    panel.id = "theme-panel";
    panel.className = "theme-panel";
    panel.hidden = true;
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Темы");
    panel.innerHTML =
      '<p class="theme-cap">Все темы</p>' +
      '<p class="theme-hint">Стрелки ← → меняют тему вне полей ввода.</p>' +
      '<div class="theme-list" id="theme-list" role="listbox" aria-label="Пресеты"></div>' +
      '<section class="theme-custom" aria-label="Своя палитра">' +
        '<h3>Своя</h3>' +
        '<div class="theme-preview" id="theme-preview"><div class="theme-preview-card" id="theme-preview-card"><span><strong>Своя</strong><span class="theme-preview-muted" id="theme-preview-muted">Текст и тихий текст</span></span><i id="theme-preview-dot"></i></div></div>' +
        '<div class="theme-now" id="theme-now" aria-hidden="true"></div>' +
        '<div class="palette">' +
          '<label>Фон<input id="custom-bg" data-slot="bg" type="color" value="#14110e" aria-label="Фон"></label>' +
          '<label>Карточка<input id="custom-card" data-slot="card" type="color" value="#262019" aria-label="Карточка"></label>' +
          '<label>Текст<input id="custom-text" data-slot="text" type="color" value="#f6f1ea" aria-label="Текст"></label>' +
          '<label>Тише<input id="custom-muted" data-slot="muted" type="color" value="#d4c6b8" aria-label="Приглушённый текст"></label>' +
          '<label>Акцент<input id="custom-accent" data-slot="accent" type="color" value="#e08955" aria-label="Акцент"></label>' +
        "</div>" +
        '<button type="button" class="theme-apply" id="theme-apply">Сделать своей</button>' +
      "</section>";
    document.body.appendChild(panel);
    panel.addEventListener("click", function (e) {
      var opt = e.target.closest ? e.target.closest(".theme-opt") : null;
      if (opt && opt.dataset.id) {
        commit(opt.dataset.id);
        closePanel();
        return;
      }
      if (e.target.id === "theme-apply") applyDraft();
    });
    panel.addEventListener("input", function (e) {
      var slot = e.target && e.target.dataset ? e.target.dataset.slot : "";
      if (!slot || !draft) return;
      draft[slot] = e.target.value;
      paintDraft();
    });
  }

  function typingTarget(t) {
    if (!t || !t.tagName) return false;
    var tag = t.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
    if (t.isContentEditable) return true;
    return false;
  }

  function bindControls() {
    var prev = document.getElementById("theme-prev");
    var next = document.getElementById("theme-next");
    var currentBtn = document.getElementById("theme-current");
    var slider = document.getElementById("chocolate");
    if (prev) prev.addEventListener("click", function () { step(-1); });
    if (next) next.addEventListener("click", function () { step(1); });
    if (currentBtn) currentBtn.addEventListener("click", togglePanel);
    if (slider) slider.addEventListener("input", function () {
      if (!current || current.preset !== "sand") return;
      current.chocolate = clamp(slider.value);
      current.mode = "light";
      paintSand(current.chocolate);
      sync();
      persist(current);
      if (typeof onChange === "function") onChange(current);
    });
    document.addEventListener("click", function (e) {
      if (!panel || panel.hidden) return;
      if (panel.contains(e.target)) return;
      if (e.target.closest && e.target.closest("#theme-track")) return;
      closePanel();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (panel && !panel.hidden) {
          closePanel();
          e.preventDefault();
        }
        return;
      }
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (e.altKey || e.metaKey || e.ctrlKey) return;
      if (typingTarget(e.target)) return;
      e.preventDefault();
      step(e.key === "ArrowRight" ? 1 : -1);
    });
    window.addEventListener("resize", function () {
      if (panel && !panel.hidden) place();
    });
  }

  function mount(opts) {
    if (opts && typeof opts.onChange === "function") onChange = opts.onChange;
    if (mounted) {
      sync();
      return;
    }
    mounted = true;
    buildPanel();
    bindControls();
    if (!current) {
      var s = read();
      var q = queryPreset();
      if (q) s.preset = q;
      show(s);
    } else sync();
  }

  window.MurrThemes = {
    EXTRA_COUNT: EXTRAS.length,
    NAMED_COUNT: EXTRAS.length + 2,
    paint: paint,
    show: show,
    mount: mount,
    read: read,
    persist: persist,
    mode: modeOf,
    queryPreset: queryPreset,
    nameOf: nameOf,
    rolesOf: rolesOf,
    expand: function (id) {
      var p = byId(id);
      if (!p) return null;
      var roles = resolveRoles(p);
      return { roles: roles, tokens: tokensFromRoles(roles) };
    },
    ids: function () {
      return cycle().map(function (p) { return p.id; });
    },
  };
})();
