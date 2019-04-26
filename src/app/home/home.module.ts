import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeRoutingModule } from './home-routing.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { EncodedecodeComponent } from './encodedecode/encodedecode.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { LandingComponent } from './landing/landing.component';
import { FormaterComponent } from './formater/formater.component';
import { ConverterComponent } from './converter/converter.component';
@NgModule({
  declarations: [ EncodedecodeComponent, TimestampComponent, LandingComponent, FormaterComponent, ConverterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgSelectModule,
    NgxJsonViewerModule
  ]
})
export class HomeModule { }
