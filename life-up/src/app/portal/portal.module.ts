import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonComponentModule } from '../common-component/common-component.module';
import { PortalPageComponent } from './portal-page/portal-page.component';
import { PortalRoutingModule } from './portal-routing.module';

@NgModule({
  declarations: [PortalPageComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    CommonComponentModule
  ]
})
export class PortalModule { }
