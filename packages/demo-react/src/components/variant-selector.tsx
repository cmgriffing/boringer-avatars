import * as React from "react";
import { useState, useEffect } from "react";
import type { VariantSelectorProps } from "./variant-selector.utils";
import { coerceVariant, AvatarVariant, variants } from "../utils/common.utils";

export default function VariantSelector(props: VariantSelectorProps) {
  const [selectedVariant, setSelectedVariant] = useState(() => "beam");

  function handleChange(event) {
    const newVariant = event?.target?.value || AvatarVariant.Marble;
    setSelectedVariant(newVariant);
    props.onChange(newVariant);
  }

  useEffect(() => {
    setSelectedVariant(coerceVariant(props.variant) || "beam");
  }, []);

  useEffect(() => {
    setSelectedVariant(coerceVariant(props.variant) || "beam");
  }, [props.variant]);

  return (
    <div className="variant-selector widget-wrapper">
      {variants?.map((variantOption) => (
        <label
          className={`radio-label ${
            variantOption === selectedVariant ? "selected" : ""
          }`}
          htmlFor={`radio-${variantOption}`}
        >
          <input
            type="radio"
            className="radio-item sr-only"
            name="variant-option"
            id={`radio-${variantOption}`}
            value={variantOption}
            onChange={(event) => handleChange(event)}
          />

          {variantOption}
        </label>
      ))}
    </div>
  );
}
