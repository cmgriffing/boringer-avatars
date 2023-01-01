<script>
  import { onMount } from "svelte";

  import {
    coerceVariant,
    AvatarVariant,
    variants,
  } from "../utils/common.utils";

  export let onChange;
  export let variant;

  function handleChange(event) {
    const newVariant = event?.target?.value || AvatarVariant.Marble;
    selectedVariant = newVariant;
    onChange(newVariant);
  }

  let selectedVariant = "beam";

  onMount(() => {
    selectedVariant = coerceVariant(variant) || "beam";
  });

  function onUpdateFn_0() {
    selectedVariant = coerceVariant(variant) || "beam";
  }
  $: onUpdateFn_0(...[variant]);
</script>

<div class="variant-selector widget-wrapper">
  {#each variants as variantOption}
    <label
      class={`radio-label ${
        variantOption === selectedVariant ? "selected" : ""
      }`}
      for={`radio-${variantOption}`}
    >
      <input
        type="radio"
        class="radio-item sr-only"
        name="variant-option"
        id={`radio-${variantOption}`}
        value={variantOption}
        on:change={(event) => {
          handleChange(event);
        }}
      />
      {variantOption}
    </label>
  {/each}
</div>