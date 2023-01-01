import { css } from "solid-styled-components";
import { For, createSignal } from "solid-js";

import { AvatarShape, shapes } from "../utils/common.utils";

function ShapeSelector(props) {
  const [selectedShape, setSelectedShape] = createSignal("beam");

  function handleChange(event) {
    props.onChange(event?.target?.value || AvatarShape.Circle);
  }

  return (
    <div class="widget-wrapper">
      <For each={shapes}>
        {(shapeOption, _index) => {
          const index = _index();
          return (
            <label class="radio-label" htmlFor={`radio-${shapeOption}`}>
              <input
                class="radio-item"
                type="radio"
                name="shape-option"
                id={`radio-${shapeOption}`}
                value={shapeOption}
                onInput={(event) => handleChange}
              />
              {shapeOption}
            </label>
          );
        }}
      </For>
    </div>
  );
}

export default ShapeSelector;
