export enum AvatarVariant {
  Beam = "beam",
  Marble = "marble",
  Pixels = "pixels",
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
