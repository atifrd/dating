import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//import { AddEmployeeComponent } from './component/add-employee.component';
import { StudentService } from './services/student.service';
import { FetchEmployeeComponent } from './component/fetchemployee.component';
import { AppComponent } from './app.component';
import { navmenuComponent } from './navmenu/navmenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { Student } from './student';
export const BASE_URL = new InjectionToken<string>('BASE_URL');

export function getBase() {
  return {
    gets: () => {
      return 'http://localhost:60632/api/';
    }
  }
}
@NgModule({
  declarations: [AppComponent, navmenuComponent, FetchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, RouterModule,
    AppRoutingModule,
    FormsModule
    , ReactiveFormsModule,
    HttpClientModule

  ],

  providers: [StudentService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
