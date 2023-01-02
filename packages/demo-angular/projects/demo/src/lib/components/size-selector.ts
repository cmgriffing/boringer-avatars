import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Output, EventEmitter, Component, Input } from "@angular/core";

import type { SizeSelectorProps } from "./size-selector.utils";

import { AvatarSize, sizes } from "../utils/common.utils";

@Component({
  selector: "size-selector, SizeSelector",
  template: `
    <div class="size-selector widget-wrapper">
      <ng-container *ngFor="let entry of sizes">
        <label [class]="getLabelClass(entry)" [attr.for]="getInputId(entry)">
          <input
            type="radio"
            class="radio-item sr-only"
            name="size-option"
            [attr.id]="getInputId(entry)"
            [attr.value]="entry[1]"
            (input)="handleChange($event)"
          />

          <div [class]="getSizeDotClass(entry)"></div>
        </label>
      </ng-container>
    </div>
  `,
})
export class SizeSelector {
  sizes = sizes;

  @Input() size: any;

  @Output() onChange = new EventEmitter();

  selectedSize = AvatarSize.Medium;
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

  ngOnInit() {
    this.selectedSize = this.size || AvatarSize.Medium;
  }

  ngAfterContentChecked() {
    this.selectedSize = this.size || AvatarSize.Medium;
  }
}

@NgModule({
  declarations: [SizeSelector],
  imports: [CommonModule],
  exports: [SizeSelector],
})
export class SizeSelectorModule {}
