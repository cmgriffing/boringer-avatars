import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component, Input } from "@angular/core";

import type { AvatarProps } from "../avatar.utils";

import { defaultAvatarProps } from "../avatar.utils";
import { generateColors, SIZE } from "./avatar-sunset.utils";

@Component({
  selector: "avatar-sunset, AvatarSunset",
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
        id="mask__sunset"
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

      <g mask="url(#mask__sunset)">
        <path d="M0 0h80v40H0z" [attr.fill]="getPaintFill0()"></path>

        <path d="M0 40h80v40H0z" [attr.fill]="getPaintFill1()"></path>
      </g>

      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          [attr.id]="getPaintId0()"
          [attr.x1]="SIZE / 2"
          [attr.y1]="0"
          [attr.x2]="SIZE / 2"
          [attr.y2]="SIZE / 2"
        >
          <stop [attr.stop-color]="sunsetColors(name, colors)[0]"></stop>

          <stop
            [attr.offset]="1"
            [attr.stop-color]="sunsetColors(name, colors)[1]"
          ></stop>
        </linearGradient>

        <linearGradient
          gradientUnits="userSpaceOnUse"
          [attr.id]="getPaintId1()"
          [attr.x1]="SIZE / 2"
          [attr.y1]="SIZE / 2"
          [attr.x2]="SIZE / 2"
          [attr.y2]="SIZE"
        >
          <stop [attr.stop-color]="sunsetColors(name, colors)[2]"></stop>

          <stop
            [attr.offset]="1"
            [attr.stop-color]="sunsetColors(name, colors)[3]"
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  `,
})
export class AvatarSunset {
  SIZE = SIZE;

  @Input() name: Omit<AvatarProps, 'variant'>['name'] = defaultAvatarProps['name'];
  @Input() size: Omit<AvatarProps, 'variant'>['size'] = defaultAvatarProps['size'];
  @Input() hasTitle: Omit<AvatarProps, 'variant'>['hasTitle'] = defaultAvatarProps['hasTitle'];
  @Input() square: Omit<AvatarProps, 'variant'>['square'] = defaultAvatarProps['square'];
  @Input() colors: Omit<AvatarProps, 'variant'>['colors'] = defaultAvatarProps['colors'];

  get formattedName() {
    return this.name.replace(/\s/g, "");
  }
  sunsetColors(name, colors) {
    return generateColors(name, colors);
  }
  getPaintFill0() {
    return "url(#gradient_paint0_linear_" + this.formattedName + ")";
  }
  getPaintFill1() {
    return "url(#gradient_paint1_linear_" + this.formattedName + ")";
  }
  getPaintId0() {
    return "gradient_paint0_linear_" + this.formattedName;
  }
  getPaintId1() {
    return "gradient_paint1_linear_" + this.formattedName;
  }
}

@NgModule({
  declarations: [AvatarSunset],
  imports: [CommonModule],
  exports: [AvatarSunset],
})
export class AvatarSunsetModule {}
