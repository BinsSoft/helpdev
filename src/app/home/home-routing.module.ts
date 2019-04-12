import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncodedecodeComponent } from './encodedecode/encodedecode.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { LandingComponent } from './landing/landing.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
