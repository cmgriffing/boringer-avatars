import { hashCode, getUnit, getRandomColor, getBoolean } from "../avatar.utils";
const ELEMENTS = 4;
const SIZE = 80;
function generateColors(name, colors) {
  const numFromName = hashCode(name);
  const range = colors && colors.length;
  const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName + i, colors, range),
    translateX: getUnit(numFromName * (i + 1), SIZE / 2 - (i + 17), 1),
    translateY: getUnit(numFromName * (i + 1), SIZE / 2 - (i + 17), 2),
    rotate: getUnit(numFromName * (i + 1), 360),
    isSquare: getBoolean(numFromName, 2)
  }));
  return elementsProperties;
}
export {
  ELEMENTS,
  SIZE,
  generateColors
};
