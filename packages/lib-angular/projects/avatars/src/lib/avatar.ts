import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Component, Input } from "@angular/core";

import type { AvatarProps } from "./avatar.utils";

import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
import { AvatarBauhausModule } from "./avatars/avatar-bauhaus";
import { AvatarBeamModule } from "./avatars/avatar-beam";
import { AvatarMarbleModule } from "./avatars/avatar-marble";
import { AvatarPixelModule } from "./avatars/avatar-pixel";
import { AvatarRingModule } from "./avatars/avatar-ring";
import { AvatarSunsetModule } from "./avatars/avatar-sunset";

@Component({
  selector: "avatar, Avatar",
  template: `
    <ng-container>
      <ng-container *ngIf="checkedVariant === \'bauhaus\'">
        <AvatarBauhaus
          [colors]="coercedProps.colors"
          [name]="coercedProps.name"
          [square]="coercedProps.square"
          [title]="coercedProps.title"
          [size]="coercedProps.size"
        ></AvatarBauhaus>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'beam\'">
        <AvatarBeam
          [colors]="coercedProps.colors"
          [name]="coercedProps.name"
          [square]="coercedProps.square"
          [title]="coercedProps.title"
          [size]="coercedProps.size"
        ></AvatarBeam>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'marble\'">
        <AvatarMarble
          [colors]="coercedProps.colors"
          [name]="coercedProps.name"
          [square]="coercedProps.square"
          [title]="coercedProps.title"
          [size]="coercedProps.size"
        ></AvatarMarble>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'pixel\'">
        <AvatarPixel
          [colors]="coercedProps.colors"
          [name]="coercedProps.name"
          [square]="coercedProps.square"
          [title]="coercedProps.title"
          [size]="coercedProps.size"
        ></AvatarPixel>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'ring\'">
        <AvatarRing
          [colors]="coercedProps.colors"
          [name]="coercedProps.name"
          [square]="coercedProps.square"
          [title]="coercedProps.title"
          [size]="coercedProps.size"
        ></AvatarRing>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'sunset\'">
        <AvatarSunset
          [colors]="coercedProps.colors"
          [name]="coercedProps.name"
          [square]="coercedProps.square"
          [title]="coercedProps.title"
          [size]="coercedProps.size"
        ></AvatarSunset>
      </ng-container>
    </ng-container>
  `,
})
export class Avatar {
  @Input() variant: Partial<AvatarProps>["variant"];

  checkedVariant = "beam";
  coercedProps = defaultAvatarProps;

  ngOnInit() {
    this.checkedVariant = coerceVariant(this.variant) || "beam";
    this.coercedProps = { ...defaultAvatarProps, ...this };
  }

  ngAfterContentChecked() {
    this.checkedVariant = coerceVariant(this.variant) || "beam";
    this.coercedProps = { ...defaultAvatarProps, ...this };
  }
}

@NgModule({
  declarations: [Avatar],
  imports: [
    BrowserModule,
    AvatarBauhausModule,
    AvatarBeamModule,
    AvatarMarbleModule,
    AvatarPixelModule,
    AvatarRingModule,
    AvatarSunsetModule,
  ],
  exports: [Avatar],
})
export class AvatarModule {}
