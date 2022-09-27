import { hashCode, getUnit, getRandomColor, getBoolean } from "../avatar.utils";

export const ELEMENTS = 4;
export const SIZE = 80;

export interface Color {
  color: string;
  translateX: number;
  translateY: number;
  rotate: number;
  isSquare: boolean;
}

export function generateColors(name: string, colors: string[]): Color[] {
  const numFromName = hashCode(name);
  const range = colors && colors.length;

  const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName + i, colors, range),
    translateX: getUnit(numFromName * (i + 1), SIZE / 2 - (i + 17), 1),
    translateY: getUnit(numFromName * (i + 1), SIZE / 2 - (i + 17), 2),
    rotate: getUnit(numFromName * (i + 1), 360),
    isSquare: getBoolean(numFromName, 2),
  }));

  return elementsProperties;
}
