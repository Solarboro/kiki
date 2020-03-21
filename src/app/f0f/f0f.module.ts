import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { F0fRoutingModule } from './f0f-routing.module';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [
    CommonModule,
    F0fRoutingModule
  ]
})
export class F0fModule { }
