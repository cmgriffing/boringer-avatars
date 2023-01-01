import { css } from "solid-styled-components";
import { For, onMount, on, createEffect, createSignal } from "solid-js";

import { AvatarSize, sizes } from "../utils/common.utils";

function SizeSelector(props) {
  const [selectedSize, setSelectedSize] = createSignal(AvatarSize.Medium);

  function handleChange(event) {
    const newSize = event?.target?.value || AvatarSize.Medium;
    setSelectedSize(newSize);
    props.onChange(newSize);
  }

  onMount(() => {
    setSelectedSize(props.size || AvatarSize.Medium);
  });

  function onUpdateFn_0() {
    setSelectedSize(props.size || AvatarSize.Medium);
  }
  createEffect(on(() => [props.size], onUpdateFn_0));

  return (
    <div class="widget-wrapper">
      <For each={sizes}>
        {(entry, _index) => {
          const index = _index();
          return (
            <label
              class={`radio-label ${
                entry[1] === selectedSize() ? "selected" : ""
              }`}
              htmlFor={`radio-${entry[0].toLowerCase()}`}
            >
              <input
                class="radio-item sr-only"
                type="radio"
                name="size-option"
                id={`radio-${entry[0].toLowerCase()}`}
                value={entry[1]}
                onInput={(event) => handleChange(event)}
              />
              <div class={`size-dot ${entry[0].toLowerCase()}`}></div>
            </label>
          );
        }}
      </For>
    </div>
  );
}

export default SizeSelector;
