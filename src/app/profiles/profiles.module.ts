import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfilesComponent } from './profiles.component';
import { ApiModule } from '../api/api.module';

@NgModule({
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    SharedModule,
    ApiModule
  ],
  declarations: [ProfilesComponent]
})
export class ProfilesModule { }
