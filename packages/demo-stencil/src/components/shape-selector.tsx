import { AvatarShape, shapes } from "../utils/common.utils";

import { Component, Prop, h, State, Fragment, Event } from "@stencil/core";

@Component({
  tag: "demo-shape-selector",
})
export class ShapeSelector {
  @Event() onChange: any;
  @Prop() shape: any;

  @State() selectedShape = AvatarShape.Circle;

  handleChange(event) {
    this.onChange.emit(event?.target?.value || AvatarShape.Circle);
  }
  getCircleLabelClass() {
    return `radio-label ${
      AvatarShape.Circle === this.selectedShape ? "selected" : ""
    }`;
  }
  getSquareLabelClass() {
    return `radio-label ${
      AvatarShape.Square === this.selectedShape ? "selected" : ""
    }`;
  }

  componentDidLoad() {
    this.selectedShape = this.shape || AvatarShape.Circle;
  }

  componentDidUpdate() {
    this.selectedShape = this.shape || AvatarShape.Circle;
  }

  render() {
    return (
      <div>
        <label class={this.getCircleLabelClass()} htmlFor="radio-circle">
          <input
            id="radio-circle"
            type="radio"
            value="circle"
            name="shape-option"
            onInput={(event) => this.handleChange(event)}
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

        <label class={this.getSquareLabelClass()} htmlFor="radio-square">
          <input
            id="radio-square"
            type="radio"
            value="square"
            name="shape-option"
            onInput={(event) => this.handleChange(event)}
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
}
