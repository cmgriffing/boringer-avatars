import * as React from "react";
import { useState, useEffect } from "react";
import type { VariantSelectorProps } from "./variant-selector.utils";
import { coerceVariant, AvatarVariant, variants } from "../utils/common.utils";

export default function VariantSelector(props: any) {
  const [selectedVariant, setSelectedVariant] = useState(() => "beam");

  function handleChange(event) {
    const newVariant = event?.target?.value || AvatarVariant.Marble;
    setSelectedVariant(newVariant);
    props.onChange(newVariant);
  }

  function getLabelClass(variantOption) {
    return `radio-label ${variantOption === selectedVariant ? "selected" : ""}`;
  }

  function getInputId(variantOption) {
    return `radio-${variantOption}`;
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
          className={getLabelClass(variantOption)}
          htmlFor={getInputId(variantOption)}
        >
          <input
            type="radio"
            className="radio-item sr-only"
            name="variant-option"
            id={getInputId(variantOption)}
            value={variantOption}
            onChange={(event) => handleChange(event)}
          />

          {variantOption}
        </label>
      ))}
    </div>
  );
}
