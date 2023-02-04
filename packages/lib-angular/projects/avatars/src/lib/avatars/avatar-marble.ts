import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component, Input } from "@angular/core";

import type { AvatarProps } from "../avatar.utils";

import { defaultAvatarProps } from "../avatar.utils";
import { SIZE, generateColors } from "./avatar-marble.utils";

@Component({
  selector: "avatar-marble, AvatarMarble",
  template: `
    <svg
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      [attr.viewBox]='"0 0 " + SIZE + " " + SIZE'
      [attr.width]="size"
      [attr.height]="size"
    >
      <ng-container *ngIf="hasTitle">
        <title>{{name}}</title>
      </ng-container>

      <mask
        id="mask__marble"
        maskUnits="userSpaceOnUse"
        [attr.x]="0"
        [attr.y]="0"
        [attr.width]="SIZE"
        [attr.height]="SIZE"
      >
        <rect
          fill="#FFFFFF"
          [attr.width]="SIZE"
          [attr.height]="SIZE"
          [attr.rx]="square ? undefined : SIZE * 2"
        ></rect>
      </mask>

      <g mask="url(#mask__marble)">
        <rect
          [attr.width]="SIZE"
          [attr.height]="SIZE"
          [attr.fill]="properties(name, colors)[0].color"
        ></rect>

        <path
          filter="url(#prefix__filter0_f)"
          d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
          [attr.fill]="properties(name, colors)[1].color"
          [attr.transform]="getPathOneTransform()"
        ></path>

        <path
          filter="url(#prefix__filter0_f)"
          d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
          [ngStyle]='{
         mixBlendMode: "overlay"
       }'
          [attr.fill]="properties(name, colors)[2].color"
          [attr.transform]="getPathTwoTransform()"
        ></path>
      </g>

      <defs>
        <filter
          id="prefix__filter0_f"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood
            result="BackgroundImageFix"
            [attr.floodOpacity]="0"
          ></feFlood>

          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>

          <feGaussianBlur
            result="effect1_foregroundBlur"
            [attr.stdDeviation]="7"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  `,
})
export class AvatarMarble {
  SIZE = SIZE;

  @Input() name: Omit<AvatarProps, 'variant'>['name'] = defaultAvatarProps['name'];
  @Input() colors: Omit<AvatarProps, 'variant'>['colors'] = defaultAvatarProps['colors'];
  @Input() size: Omit<AvatarProps, 'variant'>['size'] = defaultAvatarProps['size'];
  @Input() hasTitle: Omit<AvatarProps, 'variant'>['hasTitle'] = defaultAvatarProps['hasTitle'];
  @Input() square: Omit<AvatarProps, 'variant'>['square'] = defaultAvatarProps['square'];

  properties(name, colors) {
    return generateColors(name, colors);
  }
  getPathOneTransform() {
    return (
      "translate(" +
      this.properties(this.name, this.colors)[1].translateX +
      " " +
      this.properties(this.name, this.colors)[1].translateY +
      ") rotate(" +
      this.properties(this.name, this.colors)[1].rotate +
      " " +
      SIZE / 2 +
      " " +
      SIZE / 2 +
      ") scale(" +
      this.properties(this.name, this.colors)[2].scale +
      ")"
    );
  }
  getPathTwoTransform() {
    return (
      "translate(" +
      this.properties(this.name, this.colors)[2].translateX +
      " " +
      this.properties(this.name, this.colors)[2].translateY +
      ") rotate(" +
      this.properties(this.name, this.colors)[2].rotate +
      " " +
      SIZE / 2 +
      " " +
      SIZE / 2 +
      ") scale(" +
      this.properties(this.name, this.colors)[2].scale +
      ")"
    );
  }
}

@NgModule({
  declarations: [AvatarMarble],
  imports: [CommonModule],
  exports: [AvatarMarble],
})
export class AvatarMarbleModule {}
