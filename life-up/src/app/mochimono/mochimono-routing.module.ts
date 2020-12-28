import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MochimonoPageComponent } from './mochimono-page/mochimono-page.component';

const routes: Routes = [
  { path: '', component: MochimonoPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MochimonoRoutingModule { }
