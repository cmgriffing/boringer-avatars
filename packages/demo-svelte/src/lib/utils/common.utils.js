var AvatarVariant;
(function(AvatarVariant2) {
  AvatarVariant2["Beam"] = "beam";
  AvatarVariant2["Marble"] = "marble";
  AvatarVariant2["Pixels"] = "pixel";
  AvatarVariant2["Sunset"] = "sunset";
  AvatarVariant2["Bauhaus"] = "bauhaus";
  AvatarVariant2["Ring"] = "ring";
})(AvatarVariant || (AvatarVariant = {}));
const variants = Object.values(AvatarVariant);
const deprecatedVariants = {
  geometric: AvatarVariant.Beam,
  abstract: AvatarVariant.Bauhaus
};
function coerceVariant(variant) {
  if (!variant) {
    return AvatarVariant.Marble;
  }
  if (Object.keys(deprecatedVariants).includes(variant || "")) {
    return deprecatedVariants[variant || ""] || AvatarVariant.Marble;
  }
  if (variant && variants.includes(variant)) {
    return variant;
  }
  return AvatarVariant.Marble;
}
var AvatarSize;
(function(AvatarSize2) {
  AvatarSize2["Small"] = "40px";
  AvatarSize2["Medium"] = "80px";
  AvatarSize2["Large"] = "128px";
})(AvatarSize || (AvatarSize = {}));
const sizes = Object.entries(AvatarSize);
var AvatarShape;
(function(AvatarShape2) {
  AvatarShape2["Square"] = "square";
  AvatarShape2["Circle"] = "circle";
})(AvatarShape || (AvatarShape = {}));
const shapes = Object.values(AvatarShape);
var Theme;
(function(Theme2) {
  Theme2["Light"] = "light";
  Theme2["Dark"] = "dark";
})(Theme || (Theme = {}));
const themes = Object.values(Theme);
const exampleNames = [
  "Mary Baker",
  "Amelia Earhart",
  "Mary Roebling",
  "Sarah Winnemucca",
  "Margaret Brent",
  "Lucy Stone",
  "Mary Edwards",
  "Margaret Chase",
  "Mahalia Jackson",
  "Maya Angelou",
  "Margaret Bourke",
  "Eunice Kennedy",
  "Carrie Chapman",
  "Elizabeth Peratrovich",
  "Alicia Dickerson",
  "Daisy Gatson",
  "Emma Willard",
  "Amelia Boynton",
  "Maria Mitchell",
  "Sojourner Truth",
  "Willa Cather",
  "Coretta Scott",
  "Harriet Tubman",
  "Fabiola Cabeza",
  "Sacagawea",
  "Esther Martinez",
  "Elizabeth Cady",
  "Bessie Coleman",
  "Ma Rainey",
  "Julia Ward",
  "Irene Morgan",
  "Babe Didrikson",
  "Lyda Conley",
  "Annie Dodge",
  "Maud Nathan",
  "Betty Ford",
  "Rosa Parks",
  "Susan La",
  "Gertrude Stein",
  "Wilma Mankiller",
  "Grace Hopper",
  "Jane Addams",
  "Katharine Graham",
  "Florence Chadwick",
  "Zora Neale",
  "Wilma Rudolph",
  "Annie Jump",
  "Mother Frances",
  "Jovita Id\xE1r",
  "Maggie L",
  "Henrietta Swan",
  "Jane Cunningham",
  "Victoria Woodhull",
  "Helen Keller",
  "Patsy Takemoto",
  "Chien-Shiung",
  "Dorothea Dix",
  "Margaret Sanger",
  "Alice Paul",
  "Frances Willard",
  "Sally Ride",
  "Juliette Gordon",
  "Queen Lili",
  "Katharine Lee",
  "Harriet Beecher",
  "Felisa Rincon",
  "Hetty Green",
  "Belva Lockwood",
  "Biddy Mason",
  "Ida B",
  "Eleanor Roosevelt",
  "Maria Goeppert",
  "Phillis Wheatley",
  "Mary Harris",
  "Fannie Lou",
  "Rosalyn Yalow",
  "Susan B",
  "Clara Barton",
  "Lady Deborah",
  "Jane Johnston",
  "Alice Childress",
  "Georgia O",
  "Rebecca Crumpler",
  "Anne Bradstreet",
  "Elizabeth Blackwell",
  "Christa McAuliffe",
  "Edmonia Lewis",
  "Nellie Bly",
  "Mary Cassatt",
  "Pauli Murray",
  "Ellen Swallow",
  "Hedy Lamarr",
  "Pearl Kendrick",
  "Abigail Adams",
  "Margaret Fuller",
  "Emma Lazarus",
  "Marian Anderson",
  "Virginia Apgar",
  "Mary Walton"
];
export {
  AvatarShape,
  AvatarSize,
  AvatarVariant,
  Theme,
  coerceVariant,
  exampleNames,
  shapes,
  sizes,
  themes,
  variants
};
