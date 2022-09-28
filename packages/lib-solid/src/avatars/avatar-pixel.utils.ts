import { hashCode, getRandomColor } from "../avatar.utils";

export const ELEMENTS = 64;
export const SIZE = 80;

export function generateColors(name: string, colors: string[]) {
  const numFromName = hashCode(name);
  const range = colors && colors.length;

  const colorList = Array.from({ length: ELEMENTS }, (_, i) =>
    getRandomColor(numFromName % i, colors, range)
  );

  return colorList;
}
