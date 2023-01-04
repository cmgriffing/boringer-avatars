import { onMount, on, createEffect, createSignal } from "solid-js";

import { Theme } from "../utils/common.utils";
import { LightDarkToggleProps } from "./light-dark-toggle.utils";

function LightDarkToggle(props) {
  const [selectedTheme, setSelectedTheme] = createSignal(Theme.Light);

  function handleChange(event) {
    const newTheme = selectedTheme() === Theme.Dark ? Theme.Light : Theme.Dark;
    setSelectedTheme(newTheme);
    props.onChange(newTheme);
  }

  onMount(() => {
    setSelectedTheme(props.theme || Theme.Light);
  });

  function onUpdateFn_0() {
    setSelectedTheme(props.theme || Theme.Light);
  }
  createEffect(on(() => [props.theme], onUpdateFn_0));

  return (
    <div class="light-dark-toggle widget-wrapper">
      <label class="checkbox-label" htmlFor="theme-checkbox">
        <input
          class="sr-only radio-item"
          id="theme-checkbox"
          type="checkbox"
          name="theme-checkbox"
          onInput={(event) => {
            handleChange(event);
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

export default LightDarkToggle;
