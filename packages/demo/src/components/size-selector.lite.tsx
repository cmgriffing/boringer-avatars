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
            class={`radio-label ${
              entry[1] === state.selectedSize ? "selected" : ""
            }`}
            for={`radio-${entry[0].toLowerCase()}`}
          >
            <input
              id={`radio-${entry[0].toLowerCase()}`}
              type="radio"
              class="radio-item sr-only"
              value={entry[1]}
              name="size-option"
              onChange={(event) => state.handleChange(event)}
            />
            <div class={`size-dot ${entry[0].toLowerCase()}`}></div>
          </label>
        )}
      </For>
    </div>
  );
}
