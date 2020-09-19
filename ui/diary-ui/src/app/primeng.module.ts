import { ngModuleJitUrl } from "@angular/compiler";
import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';


@NgModule({
  imports: [
    CardModule,
    AccordionModule
  ],
  exports: [
    CardModule,
    AccordionModule
  ]
})

export class PrimengModule { }