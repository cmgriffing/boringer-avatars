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
  function getLabelClass(variantOption) {
    return `radio-label ${variantOption === selectedVariant ? "selected" : ""}`;
  }
  function getInputId(variantOption) {
    return `radio-${variantOption}`;
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
    <label class={getLabelClass(variantOption)} for={getInputId(variantOption)}>
      <input
        type="radio"
        class="radio-item sr-only"
        name="variant-option"
        id={getInputId(variantOption)}
        value={variantOption}
        on:change={(event) => {
          handleChange(event);
        }}
      />
      {variantOption}
    </label>
  {/each}
</div>