import { AvatarSize, sizes } from "../utils/common.utils";

import { Component, Prop, h, State, Fragment, Event } from "@stencil/core";

@Component({
  tag: "demo-size-selector",
})
export class SizeSelector {
  @Event() onChange: any;
  @Prop() size: any;

  @State() selectedSize = AvatarSize.Medium;

  handleChange(event) {
    const newSize = event?.target?.value || AvatarSize.Medium;
    this.selectedSize = newSize;
    this.onChange.emit(newSize);
  }
  getLabelClass(sizeEntry) {
    return `radio-label ${
      sizeEntry[1] === this.selectedSize ? "selected" : ""
    }`;
  }
  getInputId(sizeEntry) {
    return `radio-${sizeEntry[0].toLowerCase()}`;
  }
  getSizeDotClass(sizeEntry) {
    return `size-dot ${sizeEntry[0].toLowerCase()}`;
  }

  componentDidLoad() {
    this.selectedSize = this.size || AvatarSize.Medium;
  }

  componentDidUpdate() {
    this.selectedSize = this.size || AvatarSize.Medium;
  }

  render() {
    return (
      <div>
        {sizes?.map((entry) => (
          <label
            class={this.getLabelClass(entry)}
            htmlFor={this.getInputId(entry)}
          >
            <input
              type="radio"
              name="size-option"
              id={this.getInputId(entry)}
              value={entry[1]}
              onInput={(event) => this.handleChange(event)}
            />

            <div class={this.getSizeDotClass(entry)}></div>
          </label>
        ))}
      </div>
    );
  }
}
