import { Component, Input } from "@angular/core";

import type { Variant } from "./avatar.utils";
// import AvatarRing from "./avatar-ring.lite";
// import AvatarPixel from "./avatar-pixel.lite";
// import AvatarBeam from "./avatar-beam.lite";
// import AvatarSunset from "./avatar-sunset.lite";
// import AvatarMarble from "./avatar-marble.lite";
interface AvatarProps {
  variant: Variant;
  colors: string[];
  name: string;
  square: boolean;
  title: boolean;
  size: number;
}

import AvatarBauhaus from "./avatars/avatar-bauhaus.component";
import { coerceVariant, defaultAvatarProps } from "./avatar.utils";

@Component({
  selector: "avatar, Avatar",
  template: `
    <ng-container *ngIf="checkedVariant === \'bauhaus\'">
      <avatar-bauhaus
        [colors]="colors"
        [name]="name"
        [square]="square"
        [title]="title"
        [size]="size"
      ></avatar-bauhaus>
    </ng-container>
  `,
})
export default class Avatar {
  defaultAvatarProps = defaultAvatarProps;

  @Input() colors: Partial<AvatarProps>["colors"];
  @Input() name: Partial<AvatarProps>["name"];
  @Input() square: Partial<AvatarProps>["square"];
  @Input() title: Partial<AvatarProps>["title"];
  @Input() size: Partial<AvatarProps>["size"];
  @Input() variant: Partial<AvatarProps>["variant"];

  checkedVariant = "bauhaus";

  ngOnInit() {
    this.checkedVariant = coerceVariant(this.variant) || "marble";
  }

  ngAfterContentChecked() {
    this.checkedVariant = coerceVariant(this.variant) || "marble";
  }
}
