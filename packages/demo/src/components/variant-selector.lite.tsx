import { coerceVariant, AvatarVariant, variants } from "../utils/common.utils";
import { useStore, onMount, onUpdate, For } from "@builder.io/mitosis";
import type { VariantSelectorProps } from "./variant-selector.utils";

export default function VariantSelector(
  props: VariantSelectorProps = {
    variant: AvatarVariant.Beam,
    onChange: () => {},
  }
) {
  const state = useStore({
    selectedVariant: "beam",
    handleChange: (event: any) => {
      const newVariant =
        ((event?.target as HTMLInputElement)?.value as AvatarVariant) ||
        AvatarVariant.Marble;
      state.selectedVariant = newVariant;
      props.onChange(newVariant);
    },
    getLabelClass: (variantOption: AvatarVariant) => {
      return `radio-label ${
        variantOption === state.selectedVariant ? "selected" : ""
      }`;
    },
    getInputId: (variantOption: AvatarVariant) => {
      return `radio-${variantOption}`;
    },
  });

  onMount(() => {
    state.selectedVariant = coerceVariant(props.variant) || "beam";
  });

  onUpdate(() => {
    state.selectedVariant = coerceVariant(props.variant) || "beam";
  }, [props.variant]);

  return (
    <div class="variant-selector widget-wrapper">
      <For each={variants}>
        {(variantOption) => (
          <label
            class={state.getLabelClass(variantOption)}
            for={state.getInputId(variantOption)}
          >
            <input
              id={state.getInputId(variantOption)}
              type="radio"
              class="radio-item sr-only"
              value={variantOption}
              name="variant-option"
              onChange={(event) => state.handleChange(event)}
            />
            {variantOption}
          </label>
        )}
      </For>
    </div>
  );
}
