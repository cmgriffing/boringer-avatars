import { Component, Input } from "@angular/core";

import { generateData, SIZE } from "./avatar-beam.utils";

@Component({
  selector: "avatar-beam, AvatarBeam",
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
        id="mask__beam"
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

      <g mask="url(#mask__beam)">
        <rect
          [attr.width]="SIZE"
          [attr.height]="SIZE"
          [attr.fill]="data.backgroundColor"
        ></rect>

        <rect
          x="0"
          y="0"
          [attr.width]="SIZE"
          [attr.height]="SIZE"
          [attr.transform]='"translate(" + data.wrapperTranslateX + " " + data.wrapperTranslateY + ") rotate(" + data.wrapperRotate + " " + SIZE / 2 + " " + SIZE / 2 + ") scale(" + data.wrapperScale + ")"'
          [attr.fill]="data.wrapperColor"
          [attr.rx]="data.isCircle ? SIZE : SIZE / 6"
        ></rect>

        <g
          [attr.transform]='"translate(" + data.faceTranslateX + " " + data.faceTranslateY + ") rotate(" + data.faceRotate + " " + SIZE / 2 + " " + SIZE / 2 + ")"'
        >
          <ng-container *ngIf="data.isMouthOpen">
            <path
              fill="none"
              strokeLinecap="round"
              [attr.d]='"M15 " + (19 + data.mouthSpread) + "c2 1 4 1 6 0"'
              [attr.stroke]="data.faceColor"
            ></path>
          </ng-container>

          <rect
            stroke="none"
            [attr.x]="14 - data.eyeSpread"
            [attr.y]="14"
            [attr.width]="1.5"
            [attr.height]="2"
            [attr.rx]="1"
            [attr.fill]="data.faceColor"
          ></rect>

          <rect
            stroke="none"
            [attr.x]="20 + data.eyeSpread"
            [attr.y]="14"
            [attr.width]="1.5"
            [attr.height]="2"
            [attr.rx]="1"
            [attr.fill]="data.faceColor"
          ></rect>
        </g>
      </g>
    </svg>
  `,
})
export default class AvatarBeam {
  SIZE = SIZE;

  @Input() name: any;
  @Input() colors: any;
  @Input() size: any;
  @Input() title: any;
  @Input() square: any;

  get data() {
    return generateData(this.name, this.colors);
  }
}
