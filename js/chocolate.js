/* Palette editor. The chosen colour stays the accent; the slider changes contrast. */
(function () {
  var DEFAULT = 78;
  var DEFAULT_COLOR = "#c4622d";

  function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
  function normalizeHex(value) {
    var hex = String(value || "").trim().replace(/^#/, "");
    if (/^[0-9a-f]{3}$/i.test(hex)) hex = hex.split("").map(function (c) { return c + c; }).join("");
    return /^[0-9a-f]{6}$/i.test(hex) ? "#" + hex.toLowerCase() : null;
  }
  function hexToRgb(hex) { return [1, 3, 5].map(function (i) { return parseInt(hex.slice(i, i + 2), 16); }); }
  function rgbToHex(rgb) { return "#" + rgb.map(function (value) { return clamp(Math.round(value), 0, 255).toString(16).padStart(2, "0"); }).join(""); }
  function rgbToHsl(rgb) {
    var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255, max = Math.max(r, g, b), min = Math.min(r, g, b), h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
      else if (max === g) h = ((b - r) / d + 2) / 6;
      else h = ((r - g) / d + 4) / 6;
    }
    return [h * 360, s * 100, l * 100];
  }
  function hslToHex(h, s, l) {
    h = ((h % 360) + 360) % 360 / 360; s = clamp(s, 0, 100) / 100; l = clamp(l, 0, 100) / 100;
    if (s === 0) return rgbToHex([l * 255, l * 255, l * 255]);
    var hue = function (p, q, t) { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1 / 6) return p + (q - p) * 6 * t; if (t < 1 / 2) return q; if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6; return p; };
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
    return rgbToHex([hue(p, q, h + 1 / 3) * 255, hue(p, q, h) * 255, hue(p, q, h - 1 / 3) * 255]);
  }
  function mix(a, b, amount) { var aa = hexToRgb(a), bb = hexToRgb(b); return rgbToHex(aa.map(function (value, i) { return value + (bb[i] - value) * amount; })); }
  function readableText(hex) {
    var rgb = hexToRgb(hex).map(function (c) { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); });
    return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722 > 0.3 ? "#1c1917" : "#fffaf5";
  }

  function colors(level, color) {
    var contrast = clamp(Number(level) || 0, 0, 100) / 100, base = normalizeHex(color) || DEFAULT_COLOR, hsl = rgbToHsl(hexToRgb(base));
    var h = hsl[0], saturation = Math.max(hsl[1], 32), bg = hslToHex(h, Math.min(saturation * 0.22, 20), 97 - contrast * 15), surface = hslToHex(h, Math.min(saturation * 0.31, 28), 95 - contrast * 28), ink = hslToHex(h, Math.min(saturation * 0.30, 24), 23 - contrast * 15), muted = hslToHex(h, Math.min(saturation * 0.32, 28), 40 - contrast * 13), faint = hslToHex(h, Math.min(saturation * 0.26, 22), 49 - contrast * 13), deep = hslToHex(h, Math.min(saturation + 8, 92), Math.max(19, hsl[2] - 18)), soft = hslToHex(h, Math.min(saturation * 0.36, 32), 91 - contrast * 24), press = hslToHex(h, Math.min(saturation + 8, 92), Math.max(17, hsl[2] - 26)), btnInk = readableText(base);
    return { vars: {
      "--bg": bg, "--bg-2": bg, "--surface": surface, "--ink": ink, "--muted": muted, "--faint": faint, "--rose": base, "--rose-deep": deep, "--rose-soft": soft, "--blush": soft, "--gold": hslToHex(h + 28, Math.min(saturation, 78), 44), "--btn": base, "--btn-ink": btnInk, "--press": press, "--press-ink": readableText(press), "--me": base, "--me-ink": btnInk, "--them": surface,
      "--line": "rgba(28, 25, 23, " + (0.10 + contrast * 0.18).toFixed(2) + ")", "--tab": surface, "--overlay": "rgba(28, 25, 23, " + (0.38 + contrast * 0.20).toFixed(2) + ")", "--shadow": "0 14px 34px rgba(28, 25, 23, " + (0.08 + contrast * 0.16).toFixed(2) + ")", "--glow": mix(soft, base, 0.20), "--glow-2": mix(soft, base, 0.10), "--select": mix(soft, base, 0.48), "--map-paper": mix(surface, bg, 0.42), "--map-water": mix(base, surface, 0.44), "--map-water-2": mix(base, surface, 0.68), "--map-park": hslToHex(h + 95, 14, 78 - contrast * 18), "--map-block": mix(surface, base, 0.16), "--map-ink": contrast > 0.42 ? ink : muted, "--good-soft": hslToHex(142, 18, 91 - contrast * 20), "--warn-soft": hslToHex(34, 32, 91 - contrast * 20), "--seal": "#3d6b58", "--seal-ink": "#f6f1ea"
    }};
  }

  var PROPS = null;
  function apply(level, theme, color) {
    var root = document.documentElement, pack = colors(DEFAULT, DEFAULT_COLOR);
    if (!PROPS) PROPS = Object.keys(pack.vars);
    if (theme === "dark") {
      PROPS.forEach(function (key) { root.style.removeProperty(key); }); root.style.removeProperty("color-scheme");
      var metaDark = document.querySelector('meta[name="theme-color"]'); if (metaDark) metaDark.setAttribute("content", "#14110e"); return;
    }
    pack = colors(level, color); Object.keys(pack.vars).forEach(function (key) { root.style.setProperty(key, pack.vars[key]); }); root.style.colorScheme = "light";
    var meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.setAttribute("content", pack.vars["--bg"]);
  }
  window.MurrChocolate = { DEFAULT: DEFAULT, DEFAULT_COLOR: DEFAULT_COLOR, normalizeHex: normalizeHex, apply: apply, colors: colors };
})();
