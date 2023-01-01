import * as React from "react";
import { useState, useEffect } from "react";
import type { SizeSelectorProps } from "./size-selector.utils";
import { AvatarSize, sizes } from "../utils/common.utils";

export default function SizeSelector(props: any) {
  const [selectedSize, setSelectedSize] = useState(() => AvatarSize.Medium);

  function handleChange(event) {
    const newSize = event?.target?.value || AvatarSize.Medium;
    setSelectedSize(newSize);
    props.onChange(newSize);
  }

  useEffect(() => {
    setSelectedSize(props.size || AvatarSize.Medium);
  }, []);

  useEffect(() => {
    setSelectedSize(props.size || AvatarSize.Medium);
  }, [props.size]);

  return (
    <div className="size-selector widget-wrapper">
      {sizes?.map((entry) => (
        <label
          className={`radio-label ${
            entry[1] === selectedSize ? "selected" : ""
          }`}
          htmlFor={`radio-${entry[0].toLowerCase()}`}
        >
          <input
            type="radio"
            className="radio-item sr-only"
            name="size-option"
            id={`radio-${entry[0].toLowerCase()}`}
            value={entry[1]}
            onChange={(event) => handleChange(event)}
          />

          <div className={`size-dot ${entry[0].toLowerCase()}`} />
        </label>
      ))}
    </div>
  );
}
