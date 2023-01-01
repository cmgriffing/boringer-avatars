<script>
  import { onMount } from "svelte";

  import { AvatarSize, sizes } from "../utils/common.utils";

  export let onChange;
  export let size;

  function handleChange(event) {
    const newSize = event?.target?.value || AvatarSize.Medium;
    selectedSize = newSize;
    onChange(newSize);
  }

  let selectedSize = AvatarSize.Medium;

  onMount(() => {
    selectedSize = size || AvatarSize.Medium;
  });

  function onUpdateFn_0() {
    selectedSize = size || AvatarSize.Medium;
  }
  $: onUpdateFn_0(...[size]);
</script>

<div class="size-selector widget-wrapper">
  {#each sizes as entry}
    <label
      class={`radio-label ${entry[1] === selectedSize ? "selected" : ""}`}
      for={`radio-${entry[0].toLowerCase()}`}
    >
      <input
        type="radio"
        class="radio-item sr-only"
        name="size-option"
        id={`radio-${entry[0].toLowerCase()}`}
        value={entry[1]}
        on:change={(event) => {
          handleChange(event);
        }}
      />
      <div class={`size-dot ${entry[0].toLowerCase()}`} />
    </label>
  {/each}
</div>