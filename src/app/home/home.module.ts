import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeRoutingModule } from './home-routing.module';


import { EncodedecodeComponent } from './encodedecode/encodedecode.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { LandingComponent } from './landing/landing.component';
import { FormaterComponent } from './formater/formater.component';
import { ConverterComponent } from './converter/converter.component';
import { OnlynumaricinputDirective } from './onlynumaricinput.directive';
import { ClockComponent } from './timestamp/clock/clock.component';

// import { CodeEditorModule } from '@ngstack/code-editor';
import { CodeEditorModule, CodeEditorService } from '@ngstack/code-editor';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ActionContainerComponent } from './action-container/action-container.component';
@NgModule({
  declarations: [ EncodedecodeComponent, TimestampComponent, LandingComponent, FormaterComponent, ConverterComponent,OnlynumaricinputDirective, ClockComponent, ActionContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgSelectModule,
    NgxJsonViewerModule,
    CodeEditorModule.forRoot()
  ]
})
export class HomeModule { }
