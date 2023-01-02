<script>
  import { onMount } from "svelte";

  import { Theme } from "../utils/common.utils";

  export let onChange;
  export let theme;

  function handleChange(event) {
    const newTheme = selectedTheme === Theme.Dark ? Theme.Light : Theme.Dark;
    selectedTheme = newTheme;
    onChange(newTheme);
  }

  let selectedTheme = Theme.Light;

  onMount(() => {
    selectedTheme = theme || Theme.Light;
  });

  function onUpdateFn_0() {
    selectedTheme = theme || Theme.Light;
  }
  $: onUpdateFn_0(...[theme]);
</script>

<div class="light-dark-toggle widget-wrapper">
  <label class="checkbox-label" for="theme-checkbox">
    <input
      id="theme-checkbox"
      type="checkbox"
      class="sr-only radio-item"
      name="theme-checkbox"
      on:change={(event) => {
        handleChange(event);
      }}
    />
    <svg width="20" height="20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2" />
      <path d="M10 0a10 10 0 000 20V0z" fill="currentColor" />
    </svg>
  </label>
</div>