import { AvatarShape, shapes } from "../utils/common.utils";
import { useStore, onMount, onUpdate } from "@builder.io/mitosis";
import type { ShapeSelectorProps } from "./shape-selector.utils";

export default function ShapeSelector(
  props: ShapeSelectorProps = {
    shape: AvatarShape.Circle,
    onChange: () => {},
  }
) {
  const state = useStore({
    AvatarShape: AvatarShape,
    selectedShape: AvatarShape.Circle,
    handleChange: (event: any) => {
      props.onChange(
        ((event?.target as HTMLInputElement)?.value as AvatarShape) ||
          AvatarShape.Circle
      );
    },
  });

  onMount(() => {
    state.selectedShape = props.shape || AvatarShape.Circle;
  });

  onUpdate(() => {
    state.selectedShape = props.shape || AvatarShape.Circle;
  }, [props.shape]);

  return (
    <div class="shape-selector widget-wrapper">
      <label
        class={`radio-label ${
          AvatarShape.Circle === state.selectedShape ? "selected" : ""
        }`}
        for={`radio-circle`}
      >
        <input
          id={`radio-circle`}
          type="radio"
          class="sr-only radio-item"
          value="circle"
          name="shape-option"
          onChange={(event) => state.handleChange(event)}
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

      <label
        class={`radio-label ${
          AvatarShape.Square === state.selectedShape ? "selected" : ""
        }`}
        for={`radio-square`}
      >
        <input
          id={`radio-square`}
          type="radio"
          class="sr-only radio-item"
          value="square"
          name="shape-option"
          onChange={(event) => state.handleChange(event)}
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
