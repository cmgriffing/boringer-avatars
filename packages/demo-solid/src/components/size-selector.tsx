import { For, onMount, on, createEffect, createSignal } from "solid-js";

import type { SizeSelectorProps } from "./size-selector.utils";

import { AvatarSize, sizes } from "../utils/common.utils";

function SizeSelector(props: any) {
  const [selectedSize, setSelectedSize] = createSignal(AvatarSize.Medium);

  function handleChange(event) {
    const newSize = event?.target?.value || AvatarSize.Medium;
    setSelectedSize(newSize);
    props.onChange(newSize);
  }

  function getLabelClass(sizeEntry) {
    return `radio-label ${sizeEntry[1] === selectedSize() ? "selected" : ""}`;
  }

  function getInputId(sizeEntry) {
    return `radio-${sizeEntry[0].toLowerCase()}`;
  }

  function getSizeDotClass(sizeEntry) {
    return `size-dot ${sizeEntry[0].toLowerCase()}`;
  }

  onMount(() => {
    setSelectedSize(props.size || AvatarSize.Medium);
  });

  function onUpdateFn_0() {
    setSelectedSize(props.size || AvatarSize.Medium);
  }
  createEffect(on(() => [props.size], onUpdateFn_0));

  return (
    <div class="size-selector widget-wrapper">
      <For each={sizes}>
        {(entry, _index) => {
          const index = _index();
          return (
            <label class={getLabelClass(entry)} htmlFor={getInputId(entry)}>
              <input
                class="radio-item sr-only"
                type="radio"
                name="size-option"
                id={getInputId(entry)}
                value={entry[1]}
                onInput={(event) => handleChange(event)}
              />
              <div class={getSizeDotClass(entry)}></div>
            </label>
          );
        }}
      </For>
    </div>
  );
}

export default SizeSelector;
