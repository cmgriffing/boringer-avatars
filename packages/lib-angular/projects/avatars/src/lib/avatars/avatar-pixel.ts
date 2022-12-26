import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component, Input } from "@angular/core";

import type { AvatarProps } from "../avatar.utils";

import { defaultAvatarProps } from "../avatar.utils";
import { generateColors, SIZE } from "./avatar-pixel.utils";

@Component({
  selector: "avatar-pixel, AvatarPixel",
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
        id="mask__pixel"
        mask-type="alpha"
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

      <g mask="url(#mask__pixel)">
        <rect
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[0]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[1]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[2]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[3]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[4]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[5]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[6]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[7]"
        ></rect>

        <rect
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[8]"
        ></rect>

        <rect
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[9]"
        ></rect>

        <rect
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[10]"
        ></rect>

        <rect
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[11]"
        ></rect>

        <rect
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[12]"
        ></rect>

        <rect
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[13]"
        ></rect>

        <rect
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[14]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[15]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[16]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[17]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[18]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[19]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[20]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[21]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[22]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[23]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[24]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[25]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[26]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[27]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[28]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[29]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[30]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[31]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[32]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[33]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[34]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[35]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[36]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[37]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[38]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[39]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[40]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[41]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[42]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[43]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[44]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[45]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[46]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[47]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[48]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[49]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[50]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[51]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[52]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[53]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[54]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[55]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[56]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[57]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[58]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[59]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[60]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[61]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[62]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors[63]"
        ></rect>
      </g>
    </svg>
  `,
})
export class AvatarPixel {
  SIZE = SIZE;

  @Input() name: Omit<AvatarProps, 'variant'>['name'] = defaultAvatarProps['name'];
  @Input() colors: Omit<AvatarProps, 'variant'>['colors'] = defaultAvatarProps['colors'];
  @Input() size: Omit<AvatarProps, 'variant'>['size'] = defaultAvatarProps['size'];
  @Input() title: Omit<AvatarProps, 'variant'>['title'] = defaultAvatarProps['title'];
  @Input() square: Omit<AvatarProps, 'variant'>['square'] = defaultAvatarProps['square'];

  get pixelColors() {
    return generateColors(this.name, this.colors);
  }
}

@NgModule({
  declarations: [AvatarPixel],
  imports: [CommonModule],
  exports: [AvatarPixel],
})
export class AvatarPixelModule {}
