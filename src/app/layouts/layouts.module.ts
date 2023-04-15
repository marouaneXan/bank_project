import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { PartialsModule } from '../views/partials/partials.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    PartialsModule
  ]
})
export class LayoutsModule { }
