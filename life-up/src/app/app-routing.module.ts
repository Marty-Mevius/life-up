import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/portal', pathMatch: 'full' },
  { path: 'portal', loadChildren: () => import('./portal/portal.module').then(m => m.PortalModule) },
  { path: 'mochimono', loadChildren: () => import('./mochimono/mochimono.module').then(m => m.MochimonoModule) },
  { path: 'wanted', loadChildren: () => import('./wanted/wanted.module').then(m => m.WantedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
