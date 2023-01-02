import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Output, EventEmitter, Component, Input } from "@angular/core";

import { Theme } from "../utils/common.utils";
import { LightDarkToggleProps } from "./light-dark-toggle.utils";

@Component({
  selector: "light-dark-toggle, LightDarkToggle",
  template: `
    <div class="light-dark-toggle widget-wrapper">
      <label class="checkbox-label" for="theme-checkbox">
        <input
          id="theme-checkbox"
          type="checkbox"
          class="sr-only radio-item"
          name="theme-checkbox"
          (input)="
         handleChange($event);
       "
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
  `,
})
export class LightDarkToggle {
  @Input() theme: any;

  @Output() onChange = new EventEmitter();

  selectedTheme = Theme.Light;
  handleChange(event) {
    const newTheme =
      this.selectedTheme === Theme.Dark ? Theme.Light : Theme.Dark;
    this.selectedTheme = newTheme;
    this.onChange.emit(newTheme);
  }

  ngOnInit() {
    this.selectedTheme = this.theme || Theme.Light;
  }

  ngAfterContentChecked() {
    this.selectedTheme = this.theme || Theme.Light;
  }
}

@NgModule({
  declarations: [LightDarkToggle],
  imports: [CommonModule],
  exports: [LightDarkToggle],
})
export class LightDarkToggleModule {}
