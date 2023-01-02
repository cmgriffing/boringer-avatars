export enum AvatarVariant {
  Beam = "beam",
  Marble = "marble",
  Pixels = "pixel",
  Sunset = "sunset",
  Bauhaus = "bauhaus",
  Ring = "ring",
}

export type Variant =
  | "pixel"
  | "bauhaus"
  | "ring"
  | "beam"
  | "sunset"
  | "marble"
  | undefined;

export const variants: AvatarVariant[] = Object.values(AvatarVariant);

const deprecatedVariants: Record<string, AvatarVariant> = {
  geometric: AvatarVariant.Beam,
  abstract: AvatarVariant.Bauhaus,
};

export function coerceVariant(variant?: AvatarVariant): AvatarVariant {
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

export enum AvatarSize {
  Small = "40px",
  Medium = "80px",
  Large = "128px",
}

export const sizes: [string, string][] = Object.entries(AvatarSize);

export enum AvatarShape {
  Square = "square",
  Circle = "circle",
}

export const shapes: AvatarShape[] = Object.values(AvatarShape);

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export const themes: Theme[] = Object.values(Theme);

// Names from https://notablewomen.withgoogle.com/all
export const exampleNames = [
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
  "Jovita Idár",
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
  "Mary Walton",
];
