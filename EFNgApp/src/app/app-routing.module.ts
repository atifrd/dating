import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { testcompo } from './component/test.component';
import {FetchEmployeeComponent } from './component/fetchemployee.component'

import { AddEmployeeComponent } from './component/add-employee.component';
@NgModule({
  declarations: [ AddEmployeeComponent, testcompo],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    //HttpClientModule
    ,RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: testcompo },
      { path: 'register-employee', component: AddEmployeeComponent },
      { path: 'employee/edit/:id', component: AddEmployeeComponent },  
      { path: 'fetch-employee', component: FetchEmployeeComponent }
      ,{ path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}  
