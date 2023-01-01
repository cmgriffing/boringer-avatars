import { AvatarShape } from "../utils/common.utils";

export interface ShapeSelectorProps {
  shape: AvatarShape;
  onChange: (newSize: AvatarShape | string) => void;
}
