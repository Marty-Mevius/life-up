import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalPageComponent } from './portal-page/portal-page.component';

const routes: Routes = [
  {path:'',component: PortalPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
