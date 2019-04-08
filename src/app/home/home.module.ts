import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';

import { Base64Component } from './base64/base64.component';
import { EncodedecodeComponent } from './encodedecode/encodedecode.component';
@NgModule({
  declarations: [ Base64Component, EncodedecodeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
