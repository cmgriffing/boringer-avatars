import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component, Input } from "@angular/core";

import type { AvatarProps } from "../avatar.utils";

import { defaultAvatarProps } from "../avatar.utils";
import { generateColors, SIZE } from "./avatar-ring.utils";

@Component({
  selector: "avatar-ring, AvatarRing",
  template: `
    <svg
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      [attr.viewBox]='"0 0 " + SIZE + " " + SIZE'
      [attr.width]="size"
      [attr.height]="size"
    >
      <ng-container *ngIf="title">
        <title>{{name}}</title>
      </ng-container>

      <mask
        id="mask__ring"
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

      <g mask="url(#mask__ring)">
        <path
          d="M0 0h90v45H0z"
          [attr.fill]="ringColors(name, colors)[0]"
        ></path>

        <path
          d="M0 45h90v45H0z"
          [attr.fill]="ringColors(name, colors)[1]"
        ></path>

        <path
          d="M83 45a38 38 0 00-76 0h76z"
          [attr.fill]="ringColors(name, colors)[2]"
        ></path>

        <path
          d="M83 45a38 38 0 01-76 0h76z"
          [attr.fill]="ringColors(name, colors)[3]"
        ></path>

        <path
          d="M77 45a32 32 0 10-64 0h64z"
          [attr.fill]="ringColors(name, colors)[4]"
        ></path>

        <path
          d="M77 45a32 32 0 11-64 0h64z"
          [attr.fill]="ringColors(name, colors)[5]"
        ></path>

        <path
          d="M71 45a26 26 0 00-52 0h52z"
          [attr.fill]="ringColors(name, colors)[6]"
        ></path>

        <path
          d="M71 45a26 26 0 01-52 0h52z"
          [attr.fill]="ringColors(name, colors)[7]"
        ></path>

        <circle
          [attr.cx]="45"
          [attr.cy]="45"
          [attr.r]="23"
          [attr.fill]="ringColors(name, colors)[8]"
        ></circle>
      </g>
    </svg>
  `,
})
export class AvatarRing {
  SIZE = SIZE;

  @Input() size: Omit<AvatarProps, 'variant'>['size'] = defaultAvatarProps['size'];
  @Input() title: Omit<AvatarProps, 'variant'>['title'] = defaultAvatarProps['title'];
  @Input() name: Omit<AvatarProps, 'variant'>['name'] = defaultAvatarProps['name'];
  @Input() square: Omit<AvatarProps, 'variant'>['square'] = defaultAvatarProps['square'];
  @Input() colors: Omit<AvatarProps, 'variant'>['colors'] = defaultAvatarProps['colors'];

  ringColors(name, colors) {
    return generateColors(colors, name);
  }
}

@NgModule({
  declarations: [AvatarRing],
  imports: [CommonModule],
  exports: [AvatarRing],
})
export class AvatarRingModule {}
