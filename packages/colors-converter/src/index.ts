export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let hexValue = hex.replace(/^#/, '');
  if (hexValue.length === 3) {
    hexValue = hexValue.split('').map(char => char + char).join('');
  }

  const num = Number.parseInt(hexValue, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export function rgbToCmyk(r: number, g: number, b: number): { c: number; m: number; y: number; k: number } {
  if (r === 0 && g === 0 && b === 0) return { c: 0, m: 0, y: 0, k: 1 };

  const c = 1 - r / 255;
  const m = 1 - g / 255;
  const y = 1 - b / 255;
  const k = Math.min(c, m, y);

  return {
    c: +(c - k) / (1 - k),
    m: +(m - k) / (1 - k),
    y: +(y - k) / (1 - k),
    k: +k
  };
}

export function cmykToRgb(c: number, m: number, y: number, k: number): { r: number; g: number; b: number } {
  const r = 255 * (1 - c) * (1 - k);
  const g = 255 * (1 - m) * (1 - k);
  const b = 255 * (1 - y) * (1 - k);

  return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
}