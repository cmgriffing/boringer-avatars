<script>
  import { onMount } from "svelte";

  export let onChange;
  export let colors;

  function handleChange(index, event) {
    const newColors = [...selectedPalette];
    newColors[index] = event.target.value;
    selectedPalette = newColors;
    onChange(newColors);
  }
  function randomizePalette() {
    const newColors = selectedPalette.map(() => {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
    selectedPalette = newColors;
    onChange(newColors);
  }

  let selectedPalette = ["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"];

  onMount(() => {
    selectedPalette = colors;
  });

  function onUpdateFn_0() {
    selectedPalette = colors;
  }
  $: onUpdateFn_0(...[colors]);
</script>

<div class="row">
  <div class="color-inputs">
    {#each selectedPalette as colorOption, index}
      <div>
        <label class="sr-only" for={`color-input-${index}`}>
          Color Input {index}
        </label>
        <input
          type="color"
          class="color-input"
          value={colorOption}
          id={`color-input-${index}`}
          on:change={(event) => {
            handleChange(index, event);
          }}
        />
      </div>
    {/each}
  </div>
  <div class="spacer" />

  <button
    class="random-palette widget-wrapper radio-label"
    on:click={(event) => {
      randomizePalette();
    }}
  >
    Random Palette
  </button>
</div>