import { Injectable, Inject } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { getBase } from '../app.module';
@Injectable()
export class StudentService {

  myAppUrl: string = "";
  constructor(private _http: HttpClient) {
    this.myAppUrl = getBase().gets();
    }
  //constructor(
  //  @Inject('BASE_URL') baseUrl: string
  //  , private _http: HttpClient) {
  //  // this.myAppUrl = BASE_URL.toString();
  //  this.myAppUrl = baseUrl;
  //}

 

  getEmployees() {
    alert(this.myAppUrl);
    return this._http.get(this.myAppUrl + 'Student/Index')
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  getEmployeeById(id: number) {
    return this._http.get(this.myAppUrl + "api/Studen/getbyid/" + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  saveEmployee(employee) {
    return this._http.post(this.myAppUrl + 'api/Studen/Create', employee)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  updateEmployee(employee) {
    return this._http.put(this.myAppUrl + 'api/Studen/Edit', employee)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteEmployee(id) {
    return this._http.delete(this.myAppUrl + "api/Studen/Delete/" + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
