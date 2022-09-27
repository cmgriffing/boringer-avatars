import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import AvatarComponent from './avatar.component';
import AvatarBauhausComponent from './avatars/avatar-bauhaus.component';

@NgModule({
  declarations: [AvatarComponent, AvatarBauhausComponent],
  imports: [CommonModule],
  exports: [AvatarComponent],
})
export class AvatarModule {}
