import { useStore, For, onMount, onUpdate } from "@builder.io/mitosis";
import type { PaletteSelectorProps } from "./palette-selector.utils";

export default function PaletteSelector(
  props: PaletteSelectorProps = {
    colors: [],
    onChange: () => {},
  }
) {
  const state = useStore({
    selectedPalette: ["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"],
    handleChange: (index: number, event: any) => {
      const newColors = [...state.selectedPalette];
      newColors[index] = event.target.value as string;
      state.selectedPalette = newColors;
      props.onChange(newColors);
    },
    randomizePalette: () => {
      const newColors = state.selectedPalette.map(() => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      });

      state.selectedPalette = newColors;
      props.onChange(newColors);
    },
  });

  onMount(() => {
    state.selectedPalette = props.colors;
  });

  onUpdate(() => {
    state.selectedPalette = props.colors;
  }, [props.colors]);

  return (
    <div class="row">
      <div class="color-inputs">
        <For each={state.selectedPalette}>
          {(colorOption, index) => (
            <div>
              <label class="sr-only" for={`color-input-${index}`}>
                Color Input {index}
              </label>
              <input
                type="color"
                class="color-input"
                value={colorOption}
                id={`color-input-${index}`}
                onChange={(event) => state.handleChange(index, event)}
              />
            </div>
          )}
        </For>
      </div>
      <div class="spacer"></div>

      <button
        class="random-palette widget-wrapper radio-label"
        onClick={(event) => state.randomizePalette()}
      >
        Random Palette
      </button>
    </div>
  );
}
