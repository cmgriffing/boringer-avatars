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

  function randomizePalette() {
    const newColors = selectedPalette().map(() => {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
    setSelectedPalette(newColors);
    props.onChange(newColors);
  }

  function getInputId(index) {
    return `color-input-${index}`;
  }

  onMount(() => {
    setSelectedPalette(props.colors);
  });

  function onUpdateFn_0() {
    setSelectedPalette(props.colors);
  }
  createEffect(on(() => [props.colors], onUpdateFn_0));

  return (
    <div class="row">
      <div class="color-inputs">
        <For each={selectedPalette()}>
          {(colorOption, _index) => {
            const index = _index();
            return (
              <div>
                <label class="sr-only" htmlFor={getInputId(index)}>
                  Color Input
                  {index}
                </label>
                <input
                  class="color-input"
                  type="color"
                  value={colorOption}
                  id={getInputId(index)}
                  onInput={(event) => handleChange(index, event)}
                />
              </div>
            );
          }}
        </For>
      </div>
      <div class="spacer"></div>
      <button
        class="random-palette widget-wrapper radio-label"
        onClick={(event) => randomizePalette()}
      >
        Random Palette
      </button>
    </div>
  );
}

export default PaletteSelector;
