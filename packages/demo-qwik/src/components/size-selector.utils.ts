import { AvatarSize } from "../utils/common.utils";

export interface SizeSelectorProps {
  size: AvatarSize;
  onChange: (newSize: AvatarSize | string) => void;
}
