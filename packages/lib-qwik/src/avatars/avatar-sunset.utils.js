import { hashCode, getRandomColor } from "../avatar.utils";
const ELEMENTS = 4;
const SIZE = 80;
function generateColors(name, colors) {
  const numFromName = hashCode(name);
  const range = colors && colors.length;
  const colorsList = Array.from({ length: ELEMENTS }, (_, i) => getRandomColor(numFromName + i, colors, range));
  return colorsList;
}
export {
  ELEMENTS,
  SIZE,
  generateColors
};
