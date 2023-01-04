import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

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
          [colors]="colors_"
          [name]="name_"
          [square]="square_"
          [title]="title_"
          [size]="size_"
        ></AvatarBauhaus>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'beam\'">
        <AvatarBeam
          [colors]="colors_"
          [name]="name_"
          [square]="square_"
          [title]="title_"
          [size]="size_"
        ></AvatarBeam>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'marble\'">
        <AvatarMarble
          [colors]="colors_"
          [name]="name_"
          [square]="square_"
          [title]="title_"
          [size]="size_"
        ></AvatarMarble>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'pixel\'">
        <AvatarPixel
          [colors]="colors_"
          [name]="name_"
          [square]="square_"
          [title]="title_"
          [size]="size_"
        ></AvatarPixel>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'ring\'">
        <AvatarRing
          [colors]="colors_"
          [name]="name_"
          [square]="square_"
          [title]="title_"
          [size]="size_"
        ></AvatarRing>
      </ng-container>

      <ng-container *ngIf="checkedVariant === \'sunset\'">
        <AvatarSunset
          [colors]="colors_"
          [name]="name_"
          [square]="square_"
          [title]="title_"
          [size]="size_"
        ></AvatarSunset>
      </ng-container>
    </ng-container>
  `,
})
export class Avatar {
  @Input() variant: Partial<AvatarProps>["variant"];
  @Input() size: Partial<AvatarProps>["size"];
  @Input() colors: Partial<AvatarProps>["colors"];
  @Input() square: Partial<AvatarProps>["square"];
  @Input() name: Partial<AvatarProps>["name"];
  @Input() title: Partial<AvatarProps>["title"];

  checkedVariant = defaultAvatarProps.variant || "beam";
  size_ = defaultAvatarProps.size || 40;
  colors_ = defaultAvatarProps.colors || [];
  square_ = defaultAvatarProps.square || false;
  name_ = defaultAvatarProps.name || "";
  title_ = defaultAvatarProps.title || false;

  ngOnInit() {
    this.checkedVariant = coerceVariant(this.variant) || "beam";
    this.size_ = this.size || defaultAvatarProps.size || 40;
    this.colors_ = this.colors || defaultAvatarProps.colors || [];
    this.square_ = this.square || defaultAvatarProps.square || false;
    this.name_ = this.name || defaultAvatarProps.name || "";
    this.title_ = this.title || defaultAvatarProps.title || false;
  }

  ngAfterContentChecked() {
    this.checkedVariant = coerceVariant(this.variant) || "beam";
    this.size_ = this.size || defaultAvatarProps.size || 40;
    this.colors_ = this.colors || defaultAvatarProps.colors || [];
    this.square_ = this.square || defaultAvatarProps.square || false;
    this.name_ = this.name || defaultAvatarProps.name || "";
    this.title_ = this.title || defaultAvatarProps.title || false;
  }
}

@NgModule({
  declarations: [Avatar],
  imports: [
    CommonModule,
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
