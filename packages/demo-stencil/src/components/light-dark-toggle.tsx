import { Theme } from "../utils/common.utils";
import { LightDarkToggleProps } from "./light-dark-toggle.utils";

import { Component, Prop, h, State, Fragment, Event } from "@stencil/core";

@Component({
  tag: "demo-light-dark-toggle",
})
export class LightDarkToggle {
  @Event() onChange: any;
  @Prop() theme: any;

  @State() selectedTheme = Theme.Light;

  handleChange(event) {
    const newTheme =
      this.selectedTheme === Theme.Dark ? Theme.Light : Theme.Dark;
    this.selectedTheme = newTheme;
    this.onChange.emit(newTheme);
  }

  componentDidLoad() {
    this.selectedTheme = this.theme || Theme.Light;
  }

  componentDidUpdate() {
    this.selectedTheme = this.theme || Theme.Light;
  }

  render() {
    return (
      <div>
        <label htmlFor="theme-checkbox">
          <input
            id="theme-checkbox"
            type="checkbox"
            name="theme-checkbox"
            onInput={(event) => {
              this.handleChange(event);
            }}
          />

          <svg width="20" height="20" fill="none">
            <circle
              cx="10"
              cy="10"
              r="9"
              stroke="currentColor"
              stroke-width="2"
            ></circle>

            <path d="M10 0a10 10 0 000 20V0z" fill="currentColor"></path>
          </svg>
        </label>
      </div>
    );
  }
}
