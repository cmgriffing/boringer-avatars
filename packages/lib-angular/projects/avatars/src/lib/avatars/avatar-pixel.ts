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
          [attr.fill]="pixelColors(name, colors)[0]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[1]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[2]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[3]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[4]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[5]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[6]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[7]"
        ></rect>

        <rect
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[8]"
        ></rect>

        <rect
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[9]"
        ></rect>

        <rect
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[10]"
        ></rect>

        <rect
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[11]"
        ></rect>

        <rect
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[12]"
        ></rect>

        <rect
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[13]"
        ></rect>

        <rect
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[14]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[15]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[16]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[17]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[18]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[19]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[20]"
        ></rect>

        <rect
          [attr.x]="20"
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[21]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[22]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[23]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[24]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[25]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[26]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[27]"
        ></rect>

        <rect
          [attr.x]="40"
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[28]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[29]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[30]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[31]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[32]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[33]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[34]"
        ></rect>

        <rect
          [attr.x]="60"
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[35]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[36]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[37]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[38]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[39]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[40]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[41]"
        ></rect>

        <rect
          [attr.x]="10"
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[42]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[43]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[44]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[45]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[46]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[47]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[48]"
        ></rect>

        <rect
          [attr.x]="30"
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[49]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[50]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[51]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[52]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[53]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[54]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[55]"
        ></rect>

        <rect
          [attr.x]="50"
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[56]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.y]="10"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[57]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.y]="20"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[58]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.y]="30"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[59]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.y]="40"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[60]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.y]="50"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[61]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.y]="60"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[62]"
        ></rect>

        <rect
          [attr.x]="70"
          [attr.y]="70"
          [attr.width]="10"
          [attr.height]="10"
          [attr.fill]="pixelColors(name, colors)[63]"
        ></rect>
      </g>
    </svg>
  `,
})
export class AvatarPixel {
  SIZE = SIZE;

  @Input() size: Omit<AvatarProps, 'variant'>['size'] = defaultAvatarProps['size'];
  @Input() title: Omit<AvatarProps, 'variant'>['title'] = defaultAvatarProps['title'];
  @Input() name: Omit<AvatarProps, 'variant'>['name'] = defaultAvatarProps['name'];
  @Input() square: Omit<AvatarProps, 'variant'>['square'] = defaultAvatarProps['square'];
  @Input() colors: Omit<AvatarProps, 'variant'>['colors'] = defaultAvatarProps['colors'];

  pixelColors(name, colors) {
    return generateColors(name, colors);
  }
}

@NgModule({
  declarations: [AvatarPixel],
  imports: [CommonModule],
  exports: [AvatarPixel],
})
export class AvatarPixelModule {}
