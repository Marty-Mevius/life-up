import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonComponentModule } from '../common-component/common-component.module';
import { WantedPageComponent } from './wanted-page/wanted-page.component';
import { WantedRoutingModule } from './wanted-routing.module';


@NgModule({
  declarations: [WantedPageComponent],
  imports: [
    CommonModule,
    WantedRoutingModule,
    CommonComponentModule
  ]
})
export class WantedModule { }
