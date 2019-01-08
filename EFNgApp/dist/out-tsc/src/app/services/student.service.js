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
//import { Http, Response } from '@angular/http';
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var app_module_1 = require("../app.module");
var StudentService = /** @class */ (function () {
    function StudentService(_http) {
        this._http = _http;
        this.myAppUrl = "";
        this.myAppUrl = app_module_1.getBase().gets();
    }
    //constructor(
    //  @Inject('BASE_URL') baseUrl: string
    //  , private _http: HttpClient) {
    //  // this.myAppUrl = BASE_URL.toString();
    //  this.myAppUrl = baseUrl;
    //}
    StudentService.prototype.getEmployees = function () {
        alert(this.myAppUrl);
        return this._http.get(this.myAppUrl + 'Student/Index')
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    StudentService.prototype.getEmployeeById = function (id) {
        return this._http.get(this.myAppUrl + "api/Studen/getbyid/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    StudentService.prototype.saveEmployee = function (employee) {
        return this._http.post(this.myAppUrl + 'api/Studen/Create', employee)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    StudentService.prototype.updateEmployee = function (employee) {
        return this._http.put(this.myAppUrl + 'api/Studen/Edit', employee)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    StudentService.prototype.deleteEmployee = function (id) {
        return this._http.delete(this.myAppUrl + "api/Studen/Delete/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    StudentService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    StudentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map