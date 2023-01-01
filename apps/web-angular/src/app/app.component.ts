import { Component } from '@angular/core';
import { AvatarVariant } from '@demo/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web-angular';

  selectedVariant = AvatarVariant;

  variantChanged(value: any) {
    console.log({ value });
  }
}
