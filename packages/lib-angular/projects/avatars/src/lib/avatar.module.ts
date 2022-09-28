import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import AvatarComponent from './avatar.component';
import AvatarBauhausComponent from './avatars/avatar-bauhaus.component';
import AvatarBeamComponent from './avatars/avatar-beam.component';
import AvatarMarbleComponent from './avatars/avatar-marble.component';
import AvatarPixelComponent from './avatars/avatar-pixel.component';
import AvatarRingComponent from './avatars/avatar-ring.component';
import AvatarSunsetComponent from './avatars/avatar-sunset.component';

@NgModule({
  declarations: [
    AvatarComponent,
    AvatarBauhausComponent,
    AvatarBeamComponent,
    AvatarMarbleComponent,
    AvatarPixelComponent,
    AvatarRingComponent,
    AvatarSunsetComponent,
  ],
  imports: [CommonModule],
  exports: [AvatarComponent],
})
export class AvatarModule {}
