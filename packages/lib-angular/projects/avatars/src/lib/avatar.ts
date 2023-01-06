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
    <div>
      <ng-container *ngIf="variant === \'bauhaus\'">
        <avatar-bauhaus
          [colors]="colors || defaultAvatarProps.colors"
          [name]="name || defaultAvatarProps.name"
          [square]="square || defaultAvatarProps.square"
          [title]="title || defaultAvatarProps.title"
          [size]="size || defaultAvatarProps.size"
        ></avatar-bauhaus>
      </ng-container>

      <ng-container *ngIf="variant === \'beam\'">
        <avatar-beam
          [colors]="colors || defaultAvatarProps.colors"
          [name]="name || defaultAvatarProps.name"
          [square]="square || defaultAvatarProps.square"
          [title]="title || defaultAvatarProps.title"
          [size]="size || defaultAvatarProps.size"
        ></avatar-beam>
      </ng-container>

      <ng-container *ngIf="variant === \'marble\'">
        <avatar-marble
          [colors]="colors || defaultAvatarProps.colors"
          [name]="name || defaultAvatarProps.name"
          [square]="square || defaultAvatarProps.square"
          [title]="title || defaultAvatarProps.title"
          [size]="size || defaultAvatarProps.size"
        ></avatar-marble>
      </ng-container>

      <ng-container *ngIf="variant === \'pixel\'">
        <avatar-pixel
          [colors]="colors || defaultAvatarProps.colors"
          [name]="name || defaultAvatarProps.name"
          [square]="square || defaultAvatarProps.square"
          [title]="title || defaultAvatarProps.title"
          [size]="size || defaultAvatarProps.size"
        ></avatar-pixel>
      </ng-container>

      <ng-container *ngIf="variant === \'ring\'">
        <avatar-ring
          [colors]="colors || defaultAvatarProps.colors"
          [name]="name || defaultAvatarProps.name"
          [square]="square || defaultAvatarProps.square"
          [title]="title || defaultAvatarProps.title"
          [size]="size || defaultAvatarProps.size"
        ></avatar-ring>
      </ng-container>

      <ng-container *ngIf="variant === \'sunset\'">
        <avatar-sunset
          [colors]="colors || defaultAvatarProps.colors"
          [name]="name || defaultAvatarProps.name"
          [square]="square || defaultAvatarProps.square"
          [title]="title || defaultAvatarProps.title"
          [size]="size || defaultAvatarProps.size"
        ></avatar-sunset>
      </ng-container>
    </div>
  `,
})
export class Avatar {
  defaultAvatarProps = defaultAvatarProps;

  @Input() variant: Partial<AvatarProps>["variant"];
  @Input() colors: Partial<AvatarProps>["colors"];
  @Input() name: Partial<AvatarProps>["name"];
  @Input() square: Partial<AvatarProps>["square"];
  @Input() title: Partial<AvatarProps>["title"];
  @Input() size: Partial<AvatarProps>["size"];
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
