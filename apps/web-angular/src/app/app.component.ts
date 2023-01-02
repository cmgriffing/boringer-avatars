import { Component, ViewEncapsulation } from '@angular/core';
import {
  AvatarSize,
  AvatarShape,
  AvatarVariant,
  Theme,
  exampleNames,
} from '@demo/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'web-angular';
  exampleNames = exampleNames;

  variant = AvatarVariant.Beam;
  shape = AvatarShape.Circle;
  size = AvatarSize.Medium;
  sizeNumber = parseInt(AvatarSize.Medium, 10);
  isSquare = false;
  colors = ['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059'];
  theme = Theme.Light;

  onVariantChange(newVariant: any) {
    this.variant = newVariant;
  }

  onSizeChange(newSize: any) {
    this.size = newSize;
    this.sizeNumber = parseInt(newSize, 10);
  }

  onShapeChange(newShape: any) {
    this.shape = newShape;
    this.isSquare = newShape === AvatarShape.Square;
  }

  onColorsChange(newPalette: any) {
    this.colors = newPalette;
  }

  onThemeChange(newTheme: any) {
    this.theme = newTheme;
  }
}
