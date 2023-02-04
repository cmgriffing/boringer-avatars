const hashCode = (name) => {
  var hash = 0;
  for (var i = 0; i < name.length; i++) {
    var character = name.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash = hash & hash;
  }
  return Math.abs(hash);
};
const getModulus = (num, max) => {
  return num % max;
};
const getDigit = (number, ntn) => {
  return Math.floor(number / Math.pow(10, ntn) % 10);
};
const getBoolean = (number, ntn) => {
  return !(getDigit(number, ntn) % 2);
};
const getAngle = (x, y) => {
  return Math.atan2(y, x) * 180 / Math.PI;
};
const getUnit = (number, range, index) => {
  let value = number % range;
  if (index && getDigit(number, index) % 2 === 0) {
    return -value;
  } else
    return value;
};
const getRandomColor = (number, colors, range) => {
  return colors[number % range];
};
const getContrast = (hexcolor) => {
  if (!hexcolor) {
    return "#FFFFFF";
  }
  if (hexcolor.slice(0, 1) === "#") {
    hexcolor = hexcolor.slice(1);
  }
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1e3;
  return yiq >= 128 ? "#000000" : "#FFFFFF";
};
const variants = [
  "pixel",
  "bauhaus",
  "ring",
  "beam",
  "sunset",
  "marble",
  "geometric",
  "abstract",
  void 0
];
const deprecatedVariants = {
  geometric: "beam",
  abstract: "bauhaus"
};
function coerceVariant(variant) {
  if (!variant) {
    return "marble";
  }
  if (Object.keys(deprecatedVariants).includes(variant || "")) {
    return deprecatedVariants[variant || ""] || "marble";
  }
  if (variant && variants.includes(variant)) {
    return variant;
  }
  return "marble";
}
const defaultAvatarProps = {
  variant: "marble",
  colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"],
  name: "Clara Barton",
  square: false,
  hasTitle: false,
  size: 40
};
export {
  coerceVariant,
  defaultAvatarProps,
  getAngle,
  getBoolean,
  getContrast,
  getDigit,
  getModulus,
  getRandomColor,
  getUnit,
  hashCode
};
