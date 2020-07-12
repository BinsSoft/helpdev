import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncodedecodeComponent } from './encodedecode/encodedecode.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { LandingComponent } from './landing/landing.component';
import { FormaterComponent } from './formater/formater.component';
import { ConverterComponent } from './converter/converter.component';
import { ComparerComponent } from './comparer/comparer.component';
const routes: Routes = [
  {
    path :"",
    component: LandingComponent
  },
  {
    path :"hash/:method/:type",
    component: EncodedecodeComponent
  },
  {
    path :"timestamp",
    component: TimestampComponent
  },
  {
    path :"format/:method/:ext",
    component: FormaterComponent
  },
  {
    path :"converter/:method",
    component: ConverterComponent
  },
  {
    path :"comparer",
    component: ComparerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
