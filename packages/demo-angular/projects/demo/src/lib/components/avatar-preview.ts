import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";

@Component({
  selector: "avatar-preview, AvatarPreview",
  template: `
    <div>Avatar Preview</div>
  `,
})
export class AvatarPreview {}

@NgModule({
  declarations: [AvatarPreview],
  imports: [CommonModule],
  exports: [AvatarPreview],
})
export class AvatarPreviewModule {}
