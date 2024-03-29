// GENERATED BY MITOSIS

import { AvatarVariant, coerceVariant, variants } from "../utils/common.utils";
import {
  Fragment,
  component$,
  h,
  useClientEffect$,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import type { VariantSelectorProps } from "./variant-selector.utils";
export const handleChange = function handleChange(props, state, event: any) {
  const newVariant =
    ((event?.target as HTMLInputElement)?.value as AvatarVariant) ||
    AvatarVariant.Marble;
  state.selectedVariant = newVariant;
  props.onChange$(newVariant);
};
export const getLabelClass = function getLabelClass(
  props,
  state,
  variantOption: AvatarVariant
) {
  return `radio-label ${
    variantOption === state.selectedVariant ? "selected" : ""
  }`;
};
export const getInputId = function getInputId(
  props,
  state,
  variantOption: AvatarVariant
) {
  return `radio-${variantOption}`;
};
export const VariantSelector = component$((props: any) => {
  const state = useStore<any>({ selectedVariant: "beam" });
  useClientEffect$(() => {
    state.selectedVariant = coerceVariant(props.variant) || "beam";
  });
  useTask$(({ track }) => {
    track(() => props.variant);
    state.selectedVariant = coerceVariant(props.variant) || "beam";
  });
  return (
    <div class="variant-selector widget-wrapper">
      {(variants || []).map(function (variantOption) {
        return (
          <label
            class={getLabelClass(props, state, variantOption)}
            for={getInputId(props, state, variantOption)}
          >
            <input
              type="radio"
              class="radio-item sr-only"
              name="variant-option"
              id={getInputId(props, state, variantOption)}
              value={variantOption}
              onChange$={(event) => handleChange(props, state, event)}
            ></input>
            {variantOption}
          </label>
        );
      })}
    </div>
  );
});
export default VariantSelector;
