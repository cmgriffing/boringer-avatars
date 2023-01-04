import { onMount, on, createEffect, createSignal } from "solid-js";

import { AvatarShape, shapes } from "../utils/common.utils";

function ShapeSelector(props) {
  const [selectedShape, setSelectedShape] = createSignal(AvatarShape.Circle);

  function handleChange(event) {
    props.onChange(event?.target?.value || AvatarShape.Circle);
  }

  function getCircleLabelClass() {
    return `radio-label ${
      AvatarShape.Circle === selectedShape() ? "selected" : ""
    }`;
  }

  function getSquareLabelClass() {
    return `radio-label ${
      AvatarShape.Square === selectedShape() ? "selected" : ""
    }`;
  }

  onMount(() => {
    setSelectedShape(props.shape || AvatarShape.Circle);
  });

  function onUpdateFn_0() {
    setSelectedShape(props.shape || AvatarShape.Circle);
  }
  createEffect(on(() => [props.shape], onUpdateFn_0));

  return (
    <div class="shape-selector widget-wrapper">
      <label class={getCircleLabelClass()} htmlFor="radio-circle">
        <input
          class="sr-only radio-item"
          id="radio-circle"
          type="radio"
          value="circle"
          name="shape-option"
          onInput={(event) => handleChange(event)}
        />
        <svg width="13" height="13" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.07 6.837C6.242 7.603 5.5 9.187 5.5 13h-5c0-4.187.759-7.603 3.18-9.837C6.05.973 9.415.5 13 .5v5c-3.416 0-5.051.527-5.93 1.337z"
            fill="currentColor"
          ></path>
        </svg>
      </label>
      <label class={getSquareLabelClass()} htmlFor="radio-square">
        <input
          class="sr-only radio-item"
          id="radio-square"
          type="radio"
          value="square"
          name="shape-option"
          onInput={(event) => handleChange(event)}
        />
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.5 0.5H13V5.5H5.5V13H0.5V0.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </label>
    </div>
  );
}

export default ShapeSelector;
