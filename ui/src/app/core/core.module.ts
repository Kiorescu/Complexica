import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SecondsDatePipe} from "./pipe/seconds-date.pipe";



@NgModule({
  declarations: [SecondsDatePipe],
  exports: [
    SecondsDatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
