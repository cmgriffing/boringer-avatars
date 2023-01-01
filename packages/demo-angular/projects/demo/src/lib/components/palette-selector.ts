import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Output, EventEmitter, Component, Input } from "@angular/core";

import type { PaletteSelectorProps } from "./palette-selector.utils";

@Component({
  selector: "palette-selector, PaletteSelector",
  template: `
    <div class="widget-wrapper">
      <ng-container *ngFor="let colorOption of colors">
        <div>{{colorOption}}</div>
      </ng-container>
    </div>
  `,
})
export class PaletteSelector {
  @Input() colors: any;

  @Output() onChange = new EventEmitter();

  selectedPalette = "beam";
  handleChange(event) {
    // this.onChange.emit(
    //   ((event?.target as HTMLInputElement)?.value as AvatarShape) ||
    //     AvatarShape.Circle
    // );
  }
}

@NgModule({
  declarations: [PaletteSelector],
  imports: [CommonModule],
  exports: [PaletteSelector],
})
export class PaletteSelectorModule {}
