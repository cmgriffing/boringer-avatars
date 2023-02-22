// GENERATED BY MITOSIS

import {
  Fragment,
  component$,
  h,
  useClientEffect$,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import type { PaletteSelectorProps } from "./palette-selector.utils";
export const handleChange = function handleChange(
  props,
  state,
  index: number,
  event: any
) {
  const newColors = [...state.selectedPalette];
  newColors[index] = event.target.value as string;
  state.selectedPalette = newColors;
  props.onChange$(newColors);
};
export const randomizePalette = function randomizePalette(props, state) {
  const newColors = state.selectedPalette.map(() => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  });
  state.selectedPalette = newColors;
  props.onChange$(newColors);
};
export const getInputId = function getInputId(props, state, index: number) {
  return `color-input-${index}`;
};
export const PaletteSelector = component$((props: any) => {
  const state = useStore<any>({
    selectedPalette: ["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"],
  });
  useClientEffect$(() => {
    state.selectedPalette = props.colors;
  });
  useTask$(({ track }) => {
    track(() => props.colors);
    state.selectedPalette = props.colors;
  });
  return (
    <div class="row">
      <div class="color-inputs">
        {(state.selectedPalette || []).map(function (colorOption, index) {
          return (
            <div>
              <label class="sr-only" for={getInputId(props, state, index)}>
                Color Input {index}
              </label>
              <input
                type="color"
                class="color-input"
                value={colorOption}
                id={getInputId(props, state, index)}
                onChange$={(event) => handleChange(props, state, index, event)}
              ></input>
            </div>
          );
        })}
      </div>
      <div class="spacer"></div>
      <button
        class="random-palette widget-wrapper radio-label"
        onClick$={(event) => randomizePalette(props, state)}
      >
        Random Palette
      </button>
    </div>
  );
});
export default PaletteSelector;