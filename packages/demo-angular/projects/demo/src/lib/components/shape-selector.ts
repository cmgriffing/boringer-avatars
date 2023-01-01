import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Output, EventEmitter, Component } from "@angular/core";

import type { ShapeSelectorProps } from "./shape-selector.utils";

import { AvatarShape, shapes } from "../utils/common.utils";

@Component({
  selector: "shape-selector, ShapeSelector",
  template: `
    <div class="widget-wrapper">
      <ng-container *ngFor="let shapeOption of shapes">
        <label class="radio-label" [attr.for]="\`radio-\${shapeOption}\`">
          <input
            type="radio"
            class="radio-item"
            name="shape-option"
            [attr.id]="\`radio-\${shapeOption}\`"
            [attr.value]="shapeOption"
            (input)="handleChange"
          />

          {{shapeOption}}
        </label>
      </ng-container>
    </div>
  `,
})
export class ShapeSelector {
  shapes = shapes;

  @Output() onChange = new EventEmitter();

  selectedShape = "beam";
  handleChange(event) {
    this.onChange.emit(event?.target?.value || AvatarShape.Circle);
  }
}

@NgModule({
  declarations: [ShapeSelector],
  imports: [CommonModule],
  exports: [ShapeSelector],
})
export class ShapeSelectorModule {}
