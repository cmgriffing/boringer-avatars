import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";

@Component({
  selector: "light-dark-toggle, LightDarkToggle",
  template: `
    <div>Light Dark Toggle</div>
  `,
})
export class LightDarkToggle {}

@NgModule({
  declarations: [LightDarkToggle],
  imports: [CommonModule],
  exports: [LightDarkToggle],
})
export class LightDarkToggleModule {}
