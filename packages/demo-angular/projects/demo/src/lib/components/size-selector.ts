import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Output, EventEmitter, Component } from "@angular/core";

import type { SizeSelectorProps } from "./size-selector.utils";

import { AvatarSize, sizes } from "../utils/common.utils";

@Component({
  selector: "size-selector, SizeSelector",
  template: `
    <div class="widget-wrapper">
      <ng-container *ngFor="let undefined of sizes">
        <label
          class="radio-label"
          [attr.for]="\`radio-\${label.toLowerCase()}\`"
        >
          <input
            type="radio"
            class="radio-item"
            name="size-option"
            [attr.id]="\`radio-\${label.toLowerCase()}\`"
            [attr.value]="value"
            (input)="handleChange"
          />

          <div [class]="\`size-dot \${label.toLowerCase()}\`"></div>
        </label>
      </ng-container>
    </div>
  `,
})
export class SizeSelector {
  sizes = sizes;

  @Output() onChange = new EventEmitter();

  selectedSize = AvatarSize.Medium;
  handleChange(event) {
    this.onChange.emit(event?.target?.value || AvatarSize.Medium);
  }
}

@NgModule({
  declarations: [SizeSelector],
  imports: [CommonModule],
  exports: [SizeSelector],
})
export class SizeSelectorModule {}
