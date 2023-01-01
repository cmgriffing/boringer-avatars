import { Theme } from "../utils/common.utils";
import { useStore, onMount, onUpdate } from "@builder.io/mitosis";
import { LightDarkToggleProps } from "./light-dark-toggle.utils";

export default function LightDarkToggle(
  props: LightDarkToggleProps = {
    theme: Theme.Light,
    onChange: () => {},
  }
) {
  const state = useStore({
    selectedTheme: Theme.Light,
    handleChange: (event: any) => {
      const newTheme =
        state.selectedTheme === Theme.Dark ? Theme.Light : Theme.Dark;
      state.selectedTheme = newTheme;
      props.onChange(newTheme);
    },
  });

  onMount(() => {
    state.selectedTheme = props.theme || Theme.Light;
  });

  onUpdate(() => {
    state.selectedTheme = props.theme || Theme.Light;
  }, [props.theme]);

  return (
    <div class="light-dark-toggle widget-wrapper">
      <label class="checkbox-label" for="theme-checkbox">
        <input
          id={`theme-checkbox`}
          type="checkbox"
          class="sr-only radio-item"
          name="theme-checkbox"
          onChange={(event) => {
            state.handleChange(event);
          }}
        />
        <svg width="20" height="20" fill="none">
          <circle
            cx="10"
            cy="10"
            r="9"
            stroke="currentColor"
            stroke-width="2"
          ></circle>
          <path d="M10 0a10 10 0 000 20V0z" fill="currentColor"></path>
        </svg>
      </label>
    </div>
  );
}
