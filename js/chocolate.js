/* Light theme only. 0 is pale sand, 100 is deep chocolate. Default sits in chocolate. */
(function () {
  var DEFAULT = 78;

  function mix(a, b, t) {
    var pa = [1, 3, 5].map(function (i) { return parseInt(a.slice(i, i + 2), 16); });
    var pb = [1, 3, 5].map(function (i) { return parseInt(b.slice(i, i + 2), 16); });
    return "#" + pa.map(function (v, i) {
      return Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, "0");
    }).join("");
  }

  function colors(n) {
    var u, v, bg, surface, ink, muted, faint, accent, deep, soft, blush, btn, btnInk, press, pressInk, gold, glow, glow2, scheme, line, tab, overlay, shadow, map;
    n = Math.max(0, Math.min(100, Number(n) || 0));
    if (n < 65) {
      u = n / 64;
      bg = mix("#f6f1ea", "#c4a07e", u);
      surface = mix("#fbf6ef", "#ead4c0", u);
      ink = "#1c1917";
      muted = mix("#5e564f", "#2e2622", u);
      faint = mix("#6f635c", "#3c322c", u);
      accent = "#c4622d";
      deep = mix("#9c4a1e", "#4a220c", u);
      soft = mix("#f3e6d6", "#e4c8ae", u);
      blush = mix("#e7d3c0", "#d2b294", u);
      btn = "#c4622d";
      btnInk = "#1c1917";
      press = "#9c4a1e";
      pressInk = "#f6f1ea";
      gold = mix("#a15c24", "#7a3e16", u);
      glow = mix("#ead4bc", "#d2b498", u);
      glow2 = mix("#e7d9c4", "#c9ae90", u);
      scheme = "light";
      line = "rgba(28, 25, 23, 0.12)";
      tab = "rgba(246, 241, 234, 0.92)";
      overlay = "rgba(28, 25, 23, 0.46)";
      shadow = "0 14px 34px rgba(90, 48, 22, 0.12)";
      map = {
        paper: mix("#f3ebe1", "#e7d3bc", u),
        water: mix("#d7a07a", "#c4845a", u),
        water2: mix("#f0d2b4", "#e0b48e", u),
        park: mix("#d5d2c0", "#c4b89a", u),
        block: mix("#e4d3c0", "#d2b498", u),
        ink: mix("#6b5346", "#4a3428", u),
      };
    } else {
      v = (n - 65) / 35;
      bg = mix("#5c3a2c", "#3a241c", v);
      surface = mix("#7a4e38", "#543628", v);
      ink = "#f6f1ea";
      muted = mix("#f3e6da", "#e6d3c4", v);
      faint = mix("#e0cbb8", "#cbb39f", v);
      accent = mix("#e07a3a", "#f0a05c", v);
      deep = mix("#f0b27a", "#f6c896", v);
      soft = mix("#6a4634", "#4a3024", v);
      blush = soft;
      btn = accent;
      btnInk = "#1c1917";
      press = mix("#8c3e18", "#7a3414", v);
      pressInk = "#f6f1ea";
      gold = mix("#e0a15a", "#f0b56a", v);
      glow = mix("#6a4030", "#4a2c22", v);
      glow2 = mix("#5a3828", "#3a241c", v);
      scheme = "dark";
      line = "rgba(246, 241, 234, 0.16)";
      tab = "rgba(42, 26, 18, 0.92)";
      overlay = "rgba(20, 10, 6, 0.62)";
      shadow = "0 14px 36px rgba(0, 0, 0, 0.38)";
      map = {
        paper: mix("#4a3428", "#2e211a", v),
        water: mix("#8a5a3a", "#6a4030", v),
        water2: mix("#5a3828", "#3e2a20", v),
        park: mix("#4a4634", "#3a3828", v),
        block: mix("#5a4034", "#3e2c24", v),
        ink: mix("#f0e0d0", "#e7d7c8", v),
      };
    }
    return {
      scheme: scheme,
      vars: {
        "--bg": bg,
        "--bg-2": bg,
        "--surface": surface,
        "--ink": ink,
        "--muted": muted,
        "--faint": faint,
        "--line": line,
        "--rose": accent,
        "--rose-deep": deep,
        "--rose-soft": soft,
        "--blush": blush,
        "--gold": gold,
        "--btn": btn,
        "--btn-ink": btnInk,
        "--press": press,
        "--press-ink": pressInk,
        "--me": btn,
        "--me-ink": btnInk,
        "--them": surface,
        "--tab": tab,
        "--overlay": overlay,
        "--shadow": shadow,
        "--glow": glow,
        "--glow-2": glow2,
        "--select": n < 65 ? mix("#e7cdb6", "#d7b89a", n / 64) : mix("#8a5a3c", "#6a4030", (n - 65) / 35),
        "--map-paper": map.paper,
        "--map-water": map.water,
        "--map-water-2": map.water2,
        "--map-park": map.park,
        "--map-block": map.block,
        "--map-ink": map.ink,
        "--good-soft": n < 65 ? mix("#e4eadf", "#d5ddd0", n / 64) : mix("#3a4634", "#2c382c", (n - 65) / 35),
        "--warn-soft": n < 65 ? mix("#f3e4d0", "#e7d0b4", n / 64) : mix("#5a4030", "#4a3426", (n - 65) / 35),
        "--seal": n < 65 ? "#3d6b58" : "#8fceb8",
        "--seal-ink": n < 65 ? "#f6f1ea" : "#24160f",
      },
    };
  }

  var PROPS = null;

  function apply(n, theme) {
    var root = document.documentElement;
    var pack = colors(DEFAULT);
    if (!PROPS) PROPS = Object.keys(pack.vars);
    if (theme === "dark") {
      PROPS.forEach(function (k) { root.style.removeProperty(k); });
      root.style.removeProperty("color-scheme");
      var metaDark = document.querySelector('meta[name="theme-color"]');
      if (metaDark) metaDark.setAttribute("content", "#14110e");
      return;
    }
    pack = colors(n);
    Object.keys(pack.vars).forEach(function (k) { root.style.setProperty(k, pack.vars[k]); });
    root.style.colorScheme = pack.scheme;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", pack.vars["--bg"]);
  }

  window.MurrChocolate = { DEFAULT: DEFAULT, apply: apply, colors: colors };
})();
