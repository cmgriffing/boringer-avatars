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
  function getLabelClass(sizeEntry) {
    return `radio-label ${sizeEntry[1] === selectedSize ? "selected" : ""}`;
  }
  function getInputId(sizeEntry) {
    return `radio-${sizeEntry[0].toLowerCase()}`;
  }
  function getSizeDotClass(sizeEntry) {
    return `size-dot ${sizeEntry[0].toLowerCase()}`;
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
    <label class={getLabelClass(entry)} for={getInputId(entry)}>
      <input
        type="radio"
        class="radio-item sr-only"
        name="size-option"
        id={getInputId(entry)}
        value={entry[1]}
        on:change={(event) => {
          handleChange(event);
        }}
      />
      <div class={getSizeDotClass(entry)} />
    </label>
  {/each}
</div>