import { AvatarSize, sizes } from "../utils/common.utils";
import { useStore, For, onMount, onUpdate } from "@builder.io/mitosis";
import type { SizeSelectorProps } from "./size-selector.utils";

export default function SizeSelector(
  props: SizeSelectorProps = {
    size: AvatarSize.Medium,
    onChange: () => {},
  }
) {
  const state = useStore({
    selectedSize: AvatarSize.Medium,
    handleChange: (event: any) => {
      const newSize =
        ((event?.target as HTMLInputElement)?.value as AvatarSize) ||
        AvatarSize.Medium;
      state.selectedSize = newSize;
      props.onChange(newSize);
    },
    getLabelClass: (sizeEntry: [string, string]) => {
      return `radio-label ${
        sizeEntry[1] === state.selectedSize ? "selected" : ""
      }`;
    },
    getInputId: (sizeEntry: [string, string]) => {
      return `radio-${sizeEntry[0].toLowerCase()}`;
    },
    getSizeDotClass(sizeEntry: [string, string]) {
      return `size-dot ${sizeEntry[0].toLowerCase()}`;
    },
  });

  onMount(() => {
    state.selectedSize = props.size || AvatarSize.Medium;
  });

  onUpdate(() => {
    state.selectedSize = props.size || AvatarSize.Medium;
  }, [props.size]);

  return (
    <div class="size-selector widget-wrapper">
      <For each={sizes}>
        {(entry) => (
          <label
            class={state.getLabelClass(entry)}
            for={state.getInputId(entry)}
          >
            <input
              id={state.getInputId(entry)}
              type="radio"
              class="radio-item sr-only"
              value={entry[1]}
              name="size-option"
              onChange={(event) => state.handleChange(event)}
            />
            <div class={state.getSizeDotClass(entry)}></div>
          </label>
        )}
      </For>
    </div>
  );
}
