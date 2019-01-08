import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router, ActivatedRoute } from '@angular/router'; 
import { Student } from '../student';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  title: string = "Create";
  errorMessage: any;
  public StudentList: Student[];
  StudentId: number;
  employeeForm: FormGroup;
  constructor(public http: HttpClient, private _router: Router, private _avRoute: ActivatedRoute,
    private _employeeService: StudentService
    , private _fb: FormBuilder) {

    if (this._avRoute.snapshot.params["id"]) {
      this.StudentId = this._avRoute.snapshot.params["id"];
    }

    this.employeeForm = this._fb.group({
      employeeId: 0,
      firstName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      city: ['', [Validators.required]]
    })  
  }
  ngOnInit() {
    if (this.StudentId > 0) {
      this.title = "Edit";
      this._employeeService.getEmployeeById(this.StudentId)
        .subscribe(resp => this.employeeForm.setValue(resp)
        , error => this.errorMessage = error);
    }  

  }



  save() {
    if (!this.employeeForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._employeeService.saveEmployee(this.employeeForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-employee']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this._employeeService.updateEmployee(this.employeeForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-employee']);
        }, error => this.errorMessage = error)
    }  
  }

  cancel() {
    this._router.navigate(['/fetch-employee']);  
  }

  //delete(employeeID) {
  //  var ans = confirm("Do you want to delete customer with Id: " + employeeID);
  //  if (ans) {
  //    this._employeeService.deleteEmployee(employeeID).subscribe((data) => {
  //      this.getEmployees();
  //    }, error => console.error(error))
  //  }
  //}
  get name() { return this.employeeForm.get('name'); }
  get gender() { return this.employeeForm.get('gender'); }
  get department() { return this.employeeForm.get('department'); }
  get city() { return this.employeeForm.get('city'); }  
}  


