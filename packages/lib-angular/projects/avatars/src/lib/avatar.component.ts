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

import { coerceVariant } from "./avatar.utils";
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
          [attr.debug]="'AvatarBauhaus | isValidHtmlTag=false'"
          [colors]="colors"
          [attr.debug]="'AvatarBauhaus | isValidHtmlTag=false'"
          [name]="name"
          [attr.debug]="'AvatarBauhaus | isValidHtmlTag=false'"
          [square]="square"
          [attr.debug]="'AvatarBauhaus | isValidHtmlTag=false'"
          [title]="title"
          [attr.debug]="'AvatarBauhaus | isValidHtmlTag=false'"
          [size]="size"
        ></avatar-bauhaus>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'beam\'">
        <avatar-beam
          [attr.debug]="'AvatarBeam | isValidHtmlTag=false'"
          [colors]="colors"
          [attr.debug]="'AvatarBeam | isValidHtmlTag=false'"
          [name]="name"
          [attr.debug]="'AvatarBeam | isValidHtmlTag=false'"
          [square]="square"
          [attr.debug]="'AvatarBeam | isValidHtmlTag=false'"
          [title]="title"
          [attr.debug]="'AvatarBeam | isValidHtmlTag=false'"
          [size]="size"
        ></avatar-beam>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'marble\'">
        <avatar-marble
          [attr.debug]="'AvatarMarble | isValidHtmlTag=false'"
          [colors]="colors"
          [attr.debug]="'AvatarMarble | isValidHtmlTag=false'"
          [name]="name"
          [attr.debug]="'AvatarMarble | isValidHtmlTag=false'"
          [square]="square"
          [attr.debug]="'AvatarMarble | isValidHtmlTag=false'"
          [title]="title"
          [attr.debug]="'AvatarMarble | isValidHtmlTag=false'"
          [size]="size"
        ></avatar-marble>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'pixel\'">
        <avatar-pixel
          [attr.debug]="'AvatarPixel | isValidHtmlTag=false'"
          [colors]="colors"
          [attr.debug]="'AvatarPixel | isValidHtmlTag=false'"
          [name]="name"
          [attr.debug]="'AvatarPixel | isValidHtmlTag=false'"
          [square]="square"
          [attr.debug]="'AvatarPixel | isValidHtmlTag=false'"
          [title]="title"
          [attr.debug]="'AvatarPixel | isValidHtmlTag=false'"
          [size]="size"
        ></avatar-pixel>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'ring\'">
        <avatar-ring
          [attr.debug]="'AvatarRing | isValidHtmlTag=false'"
          [colors]="colors"
          [attr.debug]="'AvatarRing | isValidHtmlTag=false'"
          [name]="name"
          [attr.debug]="'AvatarRing | isValidHtmlTag=false'"
          [square]="square"
          [attr.debug]="'AvatarRing | isValidHtmlTag=false'"
          [title]="title"
          [attr.debug]="'AvatarRing | isValidHtmlTag=false'"
          [size]="size"
        ></avatar-ring>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'sunset\'">
        <avatar-sunset
          [attr.debug]="'AvatarSunset | isValidHtmlTag=false'"
          [colors]="colors"
          [attr.debug]="'AvatarSunset | isValidHtmlTag=false'"
          [name]="name"
          [attr.debug]="'AvatarSunset | isValidHtmlTag=false'"
          [square]="square"
          [attr.debug]="'AvatarSunset | isValidHtmlTag=false'"
          [title]="title"
          [attr.debug]="'AvatarSunset | isValidHtmlTag=false'"
          [size]="size"
        ></avatar-sunset>
      </ng-container>
    </div>
  `,
})
export default class Avatar {
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
