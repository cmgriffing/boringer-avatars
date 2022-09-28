import { Component, Input } from "@angular/core";

import type { Variant } from "./avatar.utils";
interface AvatarProps {
  variant: Variant;
  colors: string[];
  name: string;
  square: boolean;
  title: boolean;
  size: number;
}

import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
import AvatarBauhaus from "./avatars/avatar-bauhaus.component";
import AvatarBeam from "./avatars/avatar-beam.component";
import AvatarMarble from "./avatars/avatar-marble.component";
import AvatarPixel from "./avatars/avatar-pixel.component";
import AvatarRing from "./avatars/avatar-ring.component";
import AvatarSunset from "./avatars/avatar-sunset.component";

@Component({
  selector: "avatar, Avatar",
  template: `
    <div>
      <ng-container *ngIf="checkedVariant === \'bauhaus\'">
        <avatar-bauhaus
          [colors]="colors"
          [name]="name"
          [square]="square"
          [title]="title"
          [size]="size"
        ></avatar-bauhaus>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'beam\'">
        <avatar-beam
          [colors]="colors"
          [name]="name"
          [square]="square"
          [title]="title"
          [size]="size"
        ></avatar-beam>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'marble\'">
        <avatar-marble
          [colors]="colors"
          [name]="name"
          [square]="square"
          [title]="title"
          [size]="size"
        ></avatar-marble>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'pixel\'">
        <avatar-pixel
          [colors]="colors"
          [name]="name"
          [square]="square"
          [title]="title"
          [size]="size"
        ></avatar-pixel>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'ring\'">
        <avatar-ring
          [colors]="colors"
          [name]="name"
          [square]="square"
          [title]="title"
          [size]="size"
        ></avatar-ring>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'sunset\'">
        <avatar-sunset
          [colors]="colors"
          [name]="name"
          [square]="square"
          [title]="title"
          [size]="size"
        ></avatar-sunset>
      </ng-container>
    </div>
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

  checkedVariant = "beam";

  ngOnInit() {
    this.checkedVariant = coerceVariant(this.variant) || "beam";
  }

  ngAfterContentChecked() {
    this.checkedVariant = coerceVariant(this.variant) || "beam";
  }
}
