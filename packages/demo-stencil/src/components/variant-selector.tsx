import { coerceVariant, AvatarVariant, variants } from "../utils/common.utils";

import { Component, Prop, h, State, Fragment, Event } from "@stencil/core";

@Component({
  tag: "demo-variant-selector",
})
export class VariantSelector {
  @Event() onChange: any;
  @Prop() variant: any;

  @State() selectedVariant = "beam";

  handleChange(event) {
    const newVariant = event?.target?.value || AvatarVariant.Marble;
    this.selectedVariant = newVariant;
    this.onChange.emit(newVariant);
  }
  getLabelClass(variantOption) {
    return `radio-label ${
      variantOption === this.selectedVariant ? "selected" : ""
    }`;
  }
  getInputId(variantOption) {
    return `radio-${variantOption}`;
  }

  componentDidLoad() {
    this.selectedVariant = coerceVariant(this.variant) || "beam";
  }

  componentDidUpdate() {
    this.selectedVariant = coerceVariant(this.variant) || "beam";
  }

  render() {
    return (
      <div>
        {variants?.map((variantOption) => (
          <label
            class={this.getLabelClass(variantOption)}
            htmlFor={this.getInputId(variantOption)}
          >
            <input
              type="radio"
              name="variant-option"
              id={this.getInputId(variantOption)}
              value={variantOption}
              onInput={(event) => this.handleChange(event)}
            />

            {variantOption}
          </label>
        ))}
      </div>
    );
  }
}
