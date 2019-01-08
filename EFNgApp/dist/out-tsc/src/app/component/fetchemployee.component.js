"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
//import { Http, Headers } from '@angular/http';
var router_1 = require("@angular/router");
var student_service_1 = require("../services/student.service");
var FetchEmployeeComponent = /** @class */ (function () {
    function FetchEmployeeComponent(http, _router, _employeeService) {
        this.http = http;
        this._router = _router;
        this._employeeService = _employeeService;
        alert('start');
        this.getEmployees();
    }
    FetchEmployeeComponent.prototype.getEmployees = function () {
        var _this = this;
        alert('');
        this._employeeService.getEmployees().subscribe(function (data) { return _this.empList = data; });
        if (this.empList == null) {
            alert('');
        }
    };
    FetchEmployeeComponent.prototype.delete = function (employeeID) {
        var _this = this;
        var ans = confirm("Do you want to delete customer with Id: " + employeeID);
        if (ans) {
            this._employeeService.deleteEmployee(employeeID).subscribe(function (data) {
                _this.getEmployees();
            }, function (error) { return console.error(error); });
        }
    };
    FetchEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-fetch',
            templateUrl: './fetchemployee.component.html'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router,
            student_service_1.StudentService])
    ], FetchEmployeeComponent);
    return FetchEmployeeComponent;
}());
exports.FetchEmployeeComponent = FetchEmployeeComponent;
//interface EmployeeData {
//  employeeId: number;
//  name: string;
//  gender: string;
//  city: string;
//  department: string;
//} 
//# sourceMappingURL=fetchemployee.component.js.map