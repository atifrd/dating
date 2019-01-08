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
var student_service_1 = require("../services/student.service");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(http, _router, _avRoute, _employeeService, _fb) {
        this.http = http;
        this._router = _router;
        this._avRoute = _avRoute;
        this._employeeService = _employeeService;
        this._fb = _fb;
        this.title = "Create";
        if (this._avRoute.snapshot.params["id"]) {
            this.StudentId = this._avRoute.snapshot.params["id"];
        }
        this.employeeForm = this._fb.group({
            employeeId: 0,
            firstName: ['', [forms_1.Validators.required]],
            gender: ['', [forms_1.Validators.required]],
            phoneNumber: ['', [forms_1.Validators.required]],
            city: ['', [forms_1.Validators.required]]
        });
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.StudentId > 0) {
            this.title = "Edit";
            this._employeeService.getEmployeeById(this.StudentId)
                .subscribe(function (resp) { return _this.employeeForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    AddEmployeeComponent.prototype.save = function () {
        var _this = this;
        if (!this.employeeForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._employeeService.saveEmployee(this.employeeForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/fetch-employee']);
            }, function (error) { return _this.errorMessage = error; });
        }
        else if (this.title == "Edit") {
            this._employeeService.updateEmployee(this.employeeForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/fetch-employee']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    AddEmployeeComponent.prototype.cancel = function () {
        this._router.navigate(['/fetch-employee']);
    };
    Object.defineProperty(AddEmployeeComponent.prototype, "name", {
        //delete(employeeID) {
        //  var ans = confirm("Do you want to delete customer with Id: " + employeeID);
        //  if (ans) {
        //    this._employeeService.deleteEmployee(employeeID).subscribe((data) => {
        //      this.getEmployees();
        //    }, error => console.error(error))
        //  }
        //}
        get: function () { return this.employeeForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEmployeeComponent.prototype, "gender", {
        get: function () { return this.employeeForm.get('gender'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEmployeeComponent.prototype, "department", {
        get: function () { return this.employeeForm.get('department'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEmployeeComponent.prototype, "city", {
        get: function () { return this.employeeForm.get('city'); },
        enumerable: true,
        configurable: true
    });
    AddEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-add-employee',
            templateUrl: './add-employee.component.html',
            styleUrls: ['./add-employee.component.css']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, router_1.ActivatedRoute,
            student_service_1.StudentService,
            forms_1.FormBuilder])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=add-employee.component.js.map