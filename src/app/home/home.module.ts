import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeRoutingModule } from './home-routing.module';

import { EncodedecodeComponent } from './encodedecode/encodedecode.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { LandingComponent } from './landing/landing.component';
@NgModule({
  declarations: [ EncodedecodeComponent, TimestampComponent, LandingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgSelectModule
  ]
})
export class HomeModule { }
