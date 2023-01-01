import { css } from "solid-styled-components";
import { For, onMount, on, createEffect, createSignal } from "solid-js";

function PaletteSelector(props) {
  const [selectedPalette, setSelectedPalette] = createSignal([
    "#FFAD08",
    "#EDD75A",
    "#73B06F",
    "#0C8F8F",
    "#405059",
  ]);

  function handleChange(index, event) {
    const newColors = [...selectedPalette()];
    newColors[index] = event.target.value;
    setSelectedPalette(newColors);
    props.onChange(newColors);
  }

  onMount(() => {
    setSelectedPalette(props.colors);
  });

  function onUpdateFn_0() {
    setSelectedPalette(props.colors);
  }
  createEffect(on(() => [props.colors], onUpdateFn_0));

  return (
    <div class="color-inputs">
      <For each={selectedPalette()}>
        {(colorOption, _index) => {
          const index = _index();
          return (
            <div>
              <label class="sr-only" htmlFor={`color-input-${index}`}>
                Color Input
                {index}
              </label>
              <input
                class="color-input"
                type="color"
                value={colorOption}
                id={`color-input-${index}`}
                onInput={(event) => handleChange(index, event)}
              />
            </div>
          );
        }}
      </For>
      <div class="spacer"></div>
      <button
        class="random-palette widget-wrapper radio-label"
        onClick={(event) => {
          console.log("randomizing palette");
          const newColors = selectedPalette().map(() => {
            return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
          });
          setSelectedPalette(newColors);
          props.onChange(newColors);
        }}
      >
        Random Palette
      </button>
    </div>
  );
}

export default PaletteSelector;
