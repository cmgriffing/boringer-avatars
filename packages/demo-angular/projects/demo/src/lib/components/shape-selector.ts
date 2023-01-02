import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Output, EventEmitter, Component, Input } from "@angular/core";

import type { ShapeSelectorProps } from "./shape-selector.utils";

import { AvatarShape, shapes } from "../utils/common.utils";

@Component({
  selector: "shape-selector, ShapeSelector",
  template: `
    <div class="shape-selector widget-wrapper">
      <label for="radio-circle" [class]="getLabelClass(AvatarShape.Circle)">
        <input
          id="radio-circle"
          type="radio"
          class="sr-only radio-item"
          value="circle"
          name="shape-option"
          (input)="handleChange($event)"
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

      <label for="radio-square" [class]="getLabelClass(AvatarShape.Square)">
        <input
          id="radio-square"
          type="radio"
          class="sr-only radio-item"
          value="square"
          name="shape-option"
          (input)="handleChange($event)"
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
  `,
})
export class ShapeSelector {
  @Input() shape: any;

  @Output() onChange = new EventEmitter();

  AvatarShape = AvatarShape;
  selectedShape = AvatarShape.Circle;
  handleChange(event) {
    this.onChange.emit(event?.target?.value || this.AvatarShape.Circle);
  }
  getLabelClass(avatarShape) {
    return `radio-label ${
      avatarShape === this.selectedShape ? "selected" : ""
    }`;
  }

  ngOnInit() {
    this.selectedShape = this.shape || this.AvatarShape.Circle;
  }

  ngAfterContentChecked() {
    this.selectedShape = this.shape || this.AvatarShape.Circle;
  }
}

@NgModule({
  declarations: [ShapeSelector],
  imports: [CommonModule],
  exports: [ShapeSelector],
})
export class ShapeSelectorModule {}
