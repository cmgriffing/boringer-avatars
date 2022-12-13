import { hashCode, getUnit, getRandomColor } from "../avatar.utils";
const ELEMENTS = 3;
const SIZE = 80;
function generateColors(name, colors) {
  const numFromName = hashCode(name);
  const range = colors && colors.length;
  const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName + i, colors, range),
    translateX: getUnit(numFromName * (i + 1), SIZE / 10, 1),
    translateY: getUnit(numFromName * (i + 1), SIZE / 10, 2),
    scale: 1.2 + getUnit(numFromName * (i + 1), SIZE / 20) / 10,
    rotate: getUnit(numFromName * (i + 1), 360, 1)
  }));
  return elementsProperties;
}
export {
  ELEMENTS,
  SIZE,
  generateColors
};
