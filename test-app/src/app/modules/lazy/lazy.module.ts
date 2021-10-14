import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmLazyComponent } from './i-am-lazy/i-am-lazy.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IAmLazyComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild([{
      path : "",
      component : IAmLazyComponent
    }])
  ]
})
export class LazyModule { }
