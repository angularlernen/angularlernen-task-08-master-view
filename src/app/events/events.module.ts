import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ApiModule } from '../api/api.module';
import { EventsComponent } from './events.component';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
    ApiModule
  ],
  declarations: [EventsComponent]
})
export class EventsModule { }