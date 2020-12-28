import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WantedPageComponent } from './wanted-page/wanted-page.component';

const routes: Routes = [{
  path: '', component: WantedPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WantedRoutingModule { }
