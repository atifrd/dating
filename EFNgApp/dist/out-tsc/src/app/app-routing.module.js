"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var test_component_1 = require("./component/test.component");
var fetchemployee_component_1 = require("./component/fetchemployee.component");
var add_employee_component_1 = require("./component/add-employee.component");
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            declarations: [add_employee_component_1.AddEmployeeComponent, test_component_1.testcompo],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
                //HttpClientModule
                ,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: test_component_1.testcompo },
                    { path: 'register-employee', component: add_employee_component_1.AddEmployeeComponent },
                    { path: 'employee/edit/:id', component: add_employee_component_1.AddEmployeeComponent },
                    { path: 'fetch-employee', component: fetchemployee_component_1.FetchEmployeeComponent },
                    { path: '**', redirectTo: 'home' }
                ])
            ],
            exports: [router_1.RouterModule],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map