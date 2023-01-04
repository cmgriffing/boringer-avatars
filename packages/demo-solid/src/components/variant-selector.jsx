import { For, onMount, on, createEffect, createSignal } from "solid-js";

import { coerceVariant, AvatarVariant, variants } from "../utils/common.utils";

function VariantSelector(props) {
  const [selectedVariant, setSelectedVariant] = createSignal("beam");

  function handleChange(event) {
    const newVariant = event?.target?.value || AvatarVariant.Marble;
    setSelectedVariant(newVariant);
    props.onChange(newVariant);
  }

  function getLabelClass(variantOption) {
    return `radio-label ${
      variantOption === selectedVariant() ? "selected" : ""
    }`;
  }

  function getInputId(variantOption) {
    return `radio-${variantOption}`;
  }

  onMount(() => {
    setSelectedVariant(coerceVariant(props.variant) || "beam");
  });

  function onUpdateFn_0() {
    setSelectedVariant(coerceVariant(props.variant) || "beam");
  }
  createEffect(on(() => [props.variant], onUpdateFn_0));

  return (
    <div class="variant-selector widget-wrapper">
      <For each={variants}>
        {(variantOption, _index) => {
          const index = _index();
          return (
            <label
              class={getLabelClass(variantOption)}
              htmlFor={getInputId(variantOption)}
            >
              <input
                class="radio-item sr-only"
                type="radio"
                name="variant-option"
                id={getInputId(variantOption)}
                value={variantOption}
                onInput={(event) => handleChange(event)}
              />
              {variantOption}
            </label>
          );
        }}
      </For>
    </div>
  );
}

export default VariantSelector;
