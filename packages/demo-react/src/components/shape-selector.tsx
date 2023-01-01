import * as React from "react";
import { useState, useEffect } from "react";
import type { ShapeSelectorProps } from "./shape-selector.utils";
import { AvatarShape, shapes } from "../utils/common.utils";

export default function ShapeSelector(props: any) {
  const [AvatarShape, setAvatarShape] = useState(() => AvatarShape);

  const [selectedShape, setSelectedShape] = useState(() => AvatarShape.Circle);

  function handleChange(event) {
    props.onChange(event?.target?.value || AvatarShape.Circle);
  }

  const [Circle, setCircle] = useState(() => null);

  const [Square, setSquare] = useState(() => null);

  useEffect(() => {
    setSelectedShape(props.shape || AvatarShape.Circle);
  }, []);

  useEffect(() => {
    setSelectedShape(props.shape || AvatarShape.Circle);
  }, [props.shape]);

  return (
    <div className="shape-selector widget-wrapper">
      <label
        className={`radio-label ${Circle === selectedShape ? "selected" : ""}`}
        htmlFor={`radio-circle`}
      >
        <input
          type="radio"
          className="sr-only radio-item"
          value="circle"
          name="shape-option"
          id={`radio-circle`}
          onChange={(event) => handleChange(event)}
        />

        <svg width="13" height="13" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.07 6.837C6.242 7.603 5.5 9.187 5.5 13h-5c0-4.187.759-7.603 3.18-9.837C6.05.973 9.415.5 13 .5v5c-3.416 0-5.051.527-5.93 1.337z"
            fill="currentColor"
          />
        </svg>
      </label>

      <label
        className={`radio-label ${Square === selectedShape ? "selected" : ""}`}
        htmlFor={`radio-square`}
      >
        <input
          type="radio"
          className="sr-only radio-item"
          value="square"
          name="shape-option"
          id={`radio-square`}
          onChange={(event) => handleChange(event)}
        />

        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.5 0.5H13V5.5H5.5V13H0.5V0.5Z"
            fill="currentColor"
          />
        </svg>
      </label>
    </div>
  );
}
