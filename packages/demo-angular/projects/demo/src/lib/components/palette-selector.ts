import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Output, EventEmitter, Component, Input } from "@angular/core";

import type { PaletteSelectorProps } from "./palette-selector.utils";

@Component({
  selector: "palette-selector, PaletteSelector",
  template: `
    <div class="row">
      <div class="color-inputs">
        <ng-container
          *ngFor="let colorOption of selectedPalette; let index = index"
        >
          <div>
            <label class="sr-only" [attr.for]="getInputId(index)">
              Color Input {{index}}
            </label>

            <input
              type="color"
              class="color-input"
              [attr.value]="colorOption"
              [attr.id]="getInputId(index)"
              (input)="handleChange(index, $event)"
            />
          </div>
        </ng-container>
      </div>

      <div class="spacer"></div>

      <button
        class="random-palette widget-wrapper radio-label"
        (click)="randomizePalette()"
      >
        Random Palette
      </button>
    </div>
  `,
})
export class PaletteSelector {
  @Input() colors: any;

  @Output() onChange = new EventEmitter();

  selectedPalette = ["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"];
  handleChange(index, event) {
    const newColors = [...this.selectedPalette];
    newColors[index] = event.target.value;
    this.selectedPalette = newColors;
    this.onChange.emit(newColors);
  }
  randomizePalette() {
    const newColors = this.selectedPalette.map(() => {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
    this.selectedPalette = newColors;
    this.onChange.emit(newColors);
  }
  getInputId(index) {
    return `color-input-${index}`;
  }

  ngOnInit() {
    this.selectedPalette = this.colors;
  }

  ngAfterContentChecked() {
    this.selectedPalette = this.colors;
  }
}

@NgModule({
  declarations: [PaletteSelector],
  imports: [CommonModule],
  exports: [PaletteSelector],
})
export class PaletteSelectorModule {}
