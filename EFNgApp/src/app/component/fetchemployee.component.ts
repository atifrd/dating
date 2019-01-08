import { Component, Inject } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
//import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service'
import { Student } from '../student';


@Component({
  selector:'app-fetch',
  templateUrl: './fetchemployee.component.html'
})

export class FetchEmployeeComponent {
  public empList: Student[];

  constructor(public http: HttpClient, private _router: Router,
    private _employeeService: StudentService) {
    alert('start');
    this.getEmployees();
  }

  getEmployees() {
    alert('');
    this._employeeService.getEmployees().subscribe(
      data => this.empList = data
    )
    if (this.empList == null) { alert(''); }
  }

  delete(employeeID) {
    var ans = confirm("Do you want to delete customer with Id: " + employeeID);
    if (ans) {
      this._employeeService.deleteEmployee(employeeID).subscribe((data) => {
        this.getEmployees();
      }, error => console.error(error))
    }
  }
}

//interface EmployeeData {
//  employeeId: number;
//  name: string;
//  gender: string;
//  city: string;
//  department: string;

//} 
