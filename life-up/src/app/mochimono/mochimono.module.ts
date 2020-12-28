import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { CommonComponentModule } from '../common-component/common-component.module';
import { MochimonoPageComponent } from './mochimono-page/mochimono-page.component';
import { MochimonoRoutingModule } from './mochimono-routing.module';
import { MochimonoService } from './service/mochimono.service';


@NgModule({
  declarations: [MochimonoPageComponent],
  imports: [
    CommonModule,
    MochimonoRoutingModule,
    CommonComponentModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [MochimonoService]
})
export class MochimonoModule { }
