import { describe, expect, it } from "vitest";
import { cmykToRgb, hexToHSL, hexToRgb, hslToHex, rgbToCmyk, rgbToHex } from ".";

describe("Conversões de cores", () => {
  // HEX ➝ RGB
  it("Converte #ff5733 para RGB", () => {
    expect(hexToRgb("#ff5733")).toEqual({ r: 255, g: 87, b: 51 });
  });

  it("Converte #000000 para RGB", () => {
    expect(hexToRgb("#000000")).toEqual({ r: 0, g: 0, b: 0 });
  });

  it("Converte #ffffff para RGB", () => {
    expect(hexToRgb("#ffffff")).toEqual({ r: 255, g: 255, b: 255 });
  });

  it("Converte #123456 para RGB", () => {
    expect(hexToRgb("#123456")).toEqual({ r: 18, g: 52, b: 86 });
  });

  it("Converte #abc para RGB (formato curto)", () => {
    expect(hexToRgb("#abc")).toEqual({ r: 170, g: 187, b: 204 });
  });

  // RGB ➝ HEX
  it("Converte RGB (255, 87, 51) para HEX", () => {
    expect(rgbToHex(255, 87, 51)).toBe("#ff5733");
  });

  it("Converte RGB (0, 0, 0) para HEX", () => {
    expect(rgbToHex(0, 0, 0)).toBe("#000000");
  });

  it("Converte RGB (255, 255, 255) para HEX", () => {
    expect(rgbToHex(255, 255, 255)).toBe("#ffffff");
  });

  it("Converte RGB (18, 52, 86) para HEX", () => {
    expect(rgbToHex(18, 52, 86)).toBe("#123456");
  });

  // RGB ➝ CMYK
  it("Converte RGB (255, 0, 0) para CMYK", () => {
    expect(rgbToCmyk(255, 0, 0)).toEqual({ c: 0, m: 1, y: 1, k: 0 });
  });

  it("Converte RGB (0, 255, 0) para CMYK", () => {
    expect(rgbToCmyk(0, 255, 0)).toEqual({ c: 1, m: 0, y: 1, k: 0 });
  });

  it("Converte RGB (0, 0, 255) para CMYK", () => {
    expect(rgbToCmyk(0, 0, 255)).toEqual({ c: 1, m: 1, y: 0, k: 0 });
  });

  it("Converte RGB (255, 255, 0) para CMYK", () => {
    expect(rgbToCmyk(255, 255, 0)).toEqual({ c: 0, m: 0, y: 1, k: 0 });
  });

  it("Converte RGB (255, 255, 255) para CMYK", () => {
    expect(rgbToCmyk(255, 255, 255)).toEqual({ c: 0, m: 0, y: 0, k: 0 });
  });

  it("Converte RGB (0, 0, 0) para CMYK", () => {
    expect(rgbToCmyk(0, 0, 0)).toEqual({ c: 0, m: 0, y: 0, k: 1 });
  });

  // CMYK ➝ RGB
  it("Converte CMYK (0, 1, 1, 0) para RGB", () => {
    expect(cmykToRgb(0, 1, 1, 0)).toEqual({ r: 255, g: 0, b: 0 });
  });

  it("Converte CMYK (1, 0, 1, 0) para RGB", () => {
    expect(cmykToRgb(1, 0, 1, 0)).toEqual({ r: 0, g: 255, b: 0 });
  });

  it("Converte CMYK (1, 1, 0, 0) para RGB", () => {
    expect(cmykToRgb(1, 1, 0, 0)).toEqual({ r: 0, g: 0, b: 255 });
  });

  it("Converte CMYK (0, 0, 0, 1) para RGB", () => {
    expect(cmykToRgb(0, 0, 0, 1)).toEqual({ r: 0, g: 0, b: 0 });
  });

  it("Converte CMYK (0, 0, 0, 0) para RGB", () => {
    expect(cmykToRgb(0, 0, 0, 0)).toEqual({ r: 255, g: 255, b: 255 });
  });
});

describe('hexToHSL', () => {
  it('converte preto corretamente', () => {
    expect(hexToHSL('#000000')).toEqual({ h: 0, s: 0, l: 0 });
  });

  it('converte branco corretamente', () => {
    expect(hexToHSL('#ffffff')).toEqual({ h: 0, s: 0, l: 100 });
  });

  it('converte vermelho corretamente', () => {
    expect(hexToHSL('#ff0000')).toEqual({ h: 0, s: 100, l: 50 });
  });

  it('converte verde corretamente', () => {
    expect(hexToHSL('#00ff00')).toEqual({ h: 120, s: 100, l: 50 });
  });

  it('converte azul corretamente', () => {
    expect(hexToHSL('#0000ff')).toEqual({ h: 240, s: 100, l: 50 });
  });
});

describe('hslToHex', () => {
  it('converte HSL de preto corretamente', () => {
    expect(hslToHex(0, 0, 0)).toBe('#000000');
  });

  it('converte HSL de branco corretamente', () => {
    expect(hslToHex(0, 0, 100)).toBe('#ffffff');
  });

  it('converte HSL de vermelho corretamente', () => {
    expect(hslToHex(0, 100, 50)).toBe('#ff0000');
  });

  it('converte HSL de verde corretamente', () => {
    expect(hslToHex(120, 100, 50)).toBe('#00ff00');
  });

  it('converte HSL de azul corretamente', () => {
    expect(hslToHex(240, 100, 50)).toBe('#0000ff');
  });
});