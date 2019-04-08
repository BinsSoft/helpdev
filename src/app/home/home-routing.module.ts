import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncodedecodeComponent } from './encodedecode/encodedecode.component';
const routes: Routes = [
  {
    path :"hash/:method/:type",
    component: EncodedecodeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
