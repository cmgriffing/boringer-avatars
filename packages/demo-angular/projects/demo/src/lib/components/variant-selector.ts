import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Output, EventEmitter, Component, Input } from "@angular/core";

import type { VariantSelectorProps } from "./variant-selector.utils";

import { coerceVariant, AvatarVariant, variants } from "../utils/common.utils";

@Component({
  selector: "variant-selector, VariantSelector",
  template: `
    <div class="variant-selector widget-wrapper">
      <ng-container *ngFor="let variantOption of variants">
        <label
          [class]="getLabelClass(variantOption)"
          [attr.for]="getInputId(variantOption)"
        >
          <input
            type="radio"
            class="radio-item sr-only"
            name="variant-option"
            [attr.id]="getInputId(variantOption)"
            [attr.value]="variantOption"
            (input)="handleChange($event)"
          />

          {{variantOption}}
        </label>
      </ng-container>
    </div>
  `,
})
export class VariantSelector {
  variants = variants;

  @Input() variant: any;

  @Output() onChange = new EventEmitter();

  selectedVariant = "beam";
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

  ngOnInit() {
    this.selectedVariant = coerceVariant(this.variant) || "beam";
  }

  ngAfterContentChecked() {
    this.selectedVariant = coerceVariant(this.variant) || "beam";
  }
}

@NgModule({
  declarations: [VariantSelector],
  imports: [CommonModule],
  exports: [VariantSelector],
})
export class VariantSelectorModule {}
