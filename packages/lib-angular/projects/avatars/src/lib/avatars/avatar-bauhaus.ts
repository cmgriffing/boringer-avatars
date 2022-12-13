import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Component, Input } from "@angular/core";

import { AvatarProps, defaultAvatarProps } from "../avatar.utils";
import { generateColors, SIZE } from "./avatar-bauhaus.utils";

@Component({
  selector: "avatar-bauhaus, AvatarBauhaus",
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
        id="mask__bauhaus"
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

      <g mask="url(#mask__bauhaus)">
        <rect
          [attr.width]="SIZE"
          [attr.height]="SIZE"
          [attr.fill]="properties?.[0]?.color"
        ></rect>

        <rect
          [attr.x]="(SIZE - 60) / 2"
          [attr.y]="(SIZE - 20) / 2"
          [attr.width]="SIZE"
          [attr.height]="properties?.[1]?.isSquare ? SIZE : SIZE / 8"
          [attr.fill]="properties?.[1]?.color"
          [attr.transform]='"translate(" + properties?.[1]?.translateX + " " + properties?.[1]?.translateY + ") rotate(" + properties?.[1]?.rotate + " " + SIZE / 2 + " " + SIZE / 2 + ")"'
        ></rect>

        <circle
          [attr.cx]="SIZE / 2"
          [attr.cy]="SIZE / 2"
          [attr.fill]="properties?.[2]?.color"
          [attr.r]="SIZE / 5"
          [attr.transform]='"translate(" + properties?.[2]?.translateX + " " + properties?.[2]?.translateY + ")"'
        ></circle>

        <line
          [attr.x1]="0"
          [attr.y1]="SIZE / 2"
          [attr.x2]="SIZE"
          [attr.y2]="SIZE / 2"
          [attr.strokeWidth]="2"
          [attr.stroke]="properties?.[3]?.color"
          [attr.transform]='"translate(" + properties?.[3]?.translateX + " " + properties?.[3]?.translateY + ") rotate(" + properties?.[3]?.rotate + " " + SIZE / 2 + " " + SIZE / 2 + ")"'
        ></line>
      </g>
    </svg>
  `,
})
export class AvatarBauhaus {
  SIZE = SIZE;

  @Input() name: Omit<AvatarProps, 'variant'>['name'] = defaultAvatarProps['name'];
  @Input() colors: Omit<AvatarProps, 'variant'>['colors'] = defaultAvatarProps['colors'];
  @Input() size: Omit<AvatarProps, 'variant'>['size'] = defaultAvatarProps['size'];
  @Input() title: Omit<AvatarProps, 'variant'>['title'] = defaultAvatarProps['title'];
  @Input() square: Omit<AvatarProps, 'variant'>['square'] = defaultAvatarProps['square'];

  get properties() {
    return generateColors(this.name, this.colors);
  }
}

@NgModule({
  declarations: [AvatarBauhaus],
  imports: [BrowserModule],
  exports: [AvatarBauhaus],
})
export class AvatarBauhausModule {}
