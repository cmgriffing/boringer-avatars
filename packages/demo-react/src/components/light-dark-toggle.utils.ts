import { Theme } from "../utils/common.utils";

export interface LightDarkToggleProps {
  theme: Theme;
  onChange: (newTheme: Theme | string) => void;
}
