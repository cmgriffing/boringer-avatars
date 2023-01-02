import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarModule } from '@boringer-avatars/angular';
import {
  VariantSelectorModule,
  SizeSelectorModule,
  ShapeSelectorModule,
  PaletteSelectorModule,
  LightDarkToggleModule,
  LibraryLinksModule,
} from '@demo/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    VariantSelectorModule,
    SizeSelectorModule,
    ShapeSelectorModule,
    PaletteSelectorModule,
    LightDarkToggleModule,
    LibraryLinksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
