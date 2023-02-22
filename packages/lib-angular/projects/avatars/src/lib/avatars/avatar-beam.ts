import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component, Input } from '@angular/core';

import type { AvatarProps } from '../avatar.utils';
import { defaultAvatarProps } from '../avatar.utils';

import { generateData, SIZE } from './avatar-beam.utils';

@Component({
  selector: 'avatar-beam, AvatarBeam',
  template: `
    <svg
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      [attr.viewBox]="'0 0 ' + SIZE + ' ' + SIZE"
      [attr.width]="size"
      [attr.height]="size"
    >
      <ng-container *ngIf="hasTitle">
        <title>{{ name }}</title>
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
          [attr.fill]="data(name, colors).backgroundColor"
        ></rect>

        <rect
          x="0"
          y="0"
          [attr.width]="SIZE"
          [attr.height]="SIZE"
          [attr.transform]="getRectTransform()"
          [attr.fill]="data(name, colors).wrapperColor"
          [attr.rx]="data(name, colors).isCircle ? SIZE : SIZE / 6"
        ></rect>

        <g [attr.transform]="getGroupTransform()">
          <ng-container *ngIf="data(name, colors).isMouthOpen">
            <path
              fill="none"
              strokeLinecap="round"
              [attr.d]="getOpenMouthData()"
              [attr.stroke]="data(name, colors).faceColor"
            ></path>
          </ng-container>

          <rect
            stroke="none"
            [attr.x]="14 - data(name, colors).eyeSpread"
            [attr.y]="14"
            [attr.width]="1.5"
            [attr.height]="2"
            [attr.rx]="1"
            [attr.fill]="data(name, colors).faceColor"
          ></rect>

          <rect
            stroke="none"
            [attr.x]="20 + data(name, colors).eyeSpread"
            [attr.y]="14"
            [attr.width]="1.5"
            [attr.height]="2"
            [attr.rx]="1"
            [attr.fill]="data(name, colors).faceColor"
          ></rect>
        </g>
      </g>
    </svg>
  `,
})
export class AvatarBeam {
  SIZE = SIZE;

  @Input() name: Omit<AvatarProps, 'variant'>['name'] =
    defaultAvatarProps['name'];
  @Input() colors: Omit<AvatarProps, 'variant'>['colors'] =
    defaultAvatarProps['colors'];
  @Input() size: Omit<AvatarProps, 'variant'>['size'] =
    defaultAvatarProps['size'];
  @Input() hasTitle: Omit<AvatarProps, 'variant'>['hasTitle'] =
    defaultAvatarProps['hasTitle'];
  @Input() square: Omit<AvatarProps, 'variant'>['square'] =
    defaultAvatarProps['square'];

  data(name, colors) {
    return generateData(name, colors);
  }
  getRectTransform() {
    return (
      'translate(' +
      this.data(this.name, this.colors).wrapperTranslateX +
      ' ' +
      this.data(this.name, this.colors).wrapperTranslateY +
      ') rotate(' +
      this.data(this.name, this.colors).wrapperRotate +
      ' ' +
      SIZE / 2 +
      ' ' +
      SIZE / 2 +
      ') scale(' +
      this.data(this.name, this.colors).wrapperScale +
      ')'
    );
  }
  getGroupTransform() {
    return (
      'translate(' +
      this.data(this.name, this.colors).faceTranslateX +
      ' ' +
      this.data(this.name, this.colors).faceTranslateY +
      ') rotate(' +
      this.data(this.name, this.colors).faceRotate +
      ' ' +
      SIZE / 2 +
      ' ' +
      SIZE / 2 +
      ')'
    );
  }
  getOpenMouthData() {
    return (
      'M15 ' +
      (19 + this.data(this.name, this.colors).mouthSpread) +
      'c2 1 4 1 6 0'
    );
  }
  getClosedMouthData() {
    return (
      'M13,' +
      (19 + this.data(this.name, this.colors).mouthSpread) +
      ' a1,0.75 0 0,0 10,0'
    );
  }
}

@NgModule({
  declarations: [AvatarBeam],
  imports: [CommonModule],
  exports: [AvatarBeam],
})
export class AvatarBeamModule {}
