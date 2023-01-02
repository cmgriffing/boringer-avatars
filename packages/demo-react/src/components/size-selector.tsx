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

  function getLabelClass(sizeEntry) {
    return `radio-label ${sizeEntry[1] === selectedSize ? "selected" : ""}`;
  }

  function getInputId(sizeEntry) {
    return `radio-${sizeEntry[0].toLowerCase()}`;
  }

  function getSizeDotClass(sizeEntry) {
    return `size-dot ${sizeEntry[0].toLowerCase()}`;
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
        <label className={getLabelClass(entry)} htmlFor={getInputId(entry)}>
          <input
            type="radio"
            className="radio-item sr-only"
            name="size-option"
            id={getInputId(entry)}
            value={entry[1]}
            onChange={(event) => handleChange(event)}
          />

          <div className={getSizeDotClass(entry)} />
        </label>
      ))}
    </div>
  );
}
