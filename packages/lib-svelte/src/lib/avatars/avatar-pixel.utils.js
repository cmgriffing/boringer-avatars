import { hashCode, getRandomColor } from "../avatar.utils";
const ELEMENTS = 64;
const SIZE = 80;
function generateColors(name, colors) {
  const numFromName = hashCode(name);
  const range = colors && colors.length;
  const colorList = Array.from({ length: ELEMENTS }, (_, i) => getRandomColor(numFromName % i, colors, range));
  return colorList;
}
export {
  ELEMENTS,
  SIZE,
  generateColors
};
