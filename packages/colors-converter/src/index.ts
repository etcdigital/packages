export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let hexValue = hex.replace(/^#/, '');
  if (hexValue.length === 3) {
    hexValue = hexValue
      .split('')
      .map((char) => char + char)
      .join('');
  }

  const num = Number.parseInt(hexValue, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export function rgbToCmyk(
  r: number,
  g: number,
  b: number,
): { c: number; m: number; y: number; k: number } {
  if (r === 0 && g === 0 && b === 0) return { c: 0, m: 0, y: 0, k: 1 };

  const c = 1 - r / 255;
  const m = 1 - g / 255;
  const y = 1 - b / 255;
  const k = Math.min(c, m, y);

  return {
    c: +(c - k) / (1 - k),
    m: +(m - k) / (1 - k),
    y: +(y - k) / (1 - k),
    k: +k,
  };
}

export function cmykToRgb(
  c: number,
  m: number,
  y: number,
  k: number,
): { r: number; g: number; b: number } {
  const r = 255 * (1 - c) * (1 - k);
  const g = 255 * (1 - m) * (1 - k);
  const b = 255 * (1 - y) * (1 - k);

  return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
}

export function hexToHSL(colorHex: string): {
  h: number;
  s: number;
  l: number;
} {
  // Remove "#" se existir
  const hex = colorHex[0] === '#' ? colorHex.slice(1) : colorHex;

  // Expand formatos curtos para longos diretamente
  const isShort = hex.length === 3;
  const [r, g, b] = [
    Number.parseInt(isShort ? hex[0] + hex[0] : hex.slice(0, 2), 16) / 255,
    Number.parseInt(isShort ? hex[1] + hex[1] : hex.slice(2, 4), 16) / 255,
    Number.parseInt(isShort ? hex[2] + hex[2] : hex.slice(4, 6), 16) / 255,
  ];

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  // Calcula luminância
  const l = (max + min) / 2;

  if (delta === 0) {
    // Cor neutra
    return { h: 0, s: 0, l: Math.round(l * 100) };
  }

  // Saturação
  const s = delta / (l > 0.5 ? 2 - max - min : max + min);

  // Matiz
  const h =
    60 *
    (r === max
      ? (g - b) / delta + (g < b ? 6 : 0)
      : g === max
        ? (b - r) / delta + 2
        : (r - g) / delta + 4);

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function hslToHex(h: number, s: number, l: number): string {
  const lightness = l / 100;
  const a = (s * Math.min(lightness, 1 - lightness)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = lightness - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function getContestTextFrom(valorHex: string) {
  // Remove the "#" if present
  const hex = valorHex.replace('#', '');

  // Convert hex to RGB
  const r = Number.parseInt(hex.substring(0, 2), 16);
  const g = Number.parseInt(hex.substring(2, 4), 16);
  const b = Number.parseInt(hex.substring(4, 6), 16);

  // Calculate the YIQ value
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? 'dark' : 'light';
}
