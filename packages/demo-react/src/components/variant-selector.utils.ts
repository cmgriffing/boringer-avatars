import { AvatarVariant } from "../utils/common.utils";

export interface VariantSelectorProps {
  variant: AvatarVariant;
  onChange: (newVariant: AvatarVariant | string) => void;
}
