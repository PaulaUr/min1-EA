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
var subject_service_1 = require("../subject.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
var SubjectsComponent = (function () {
    //    canShow$ = new BehaviorSubject(false);
    // category = ['Computers', 'Phones', 'Accesories'];
    function SubjectsComponent(router, subjectService, fb) {
        this.router = router;
        this.subjectService = subjectService;
        this.fb = fb;
        this.createForm();
    }
    SubjectsComponent.prototype.onSelect = function (subjects) {
        this.selectedProduct = subjects;
    };
    SubjectsComponent.prototype.getProducts = function () {
        var _this = this;
        this.subjectService.getProducts()
            .subscribe(function (resApi) {
            // console.log('Products from API:', resApi );
            _this.subjects = resApi;
            console.log(_this.subjects);
        });
        // Pasamos la función de Callback como un argumento al metodo then() de la Promise
    };
    SubjectsComponent.prototype.ngOnInit = function () {
        this.getProducts();
        //    console.log(this.products);
    };
    SubjectsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['./detail', this.selectedProduct.name]);
        console.log(this.selectedProduct.name);
    };
    SubjectsComponent.prototype.createForm = function () {
        // this.canShow$.next(true)
        // using the form builder =>productFB
        this.prodForm = this.fb.group({
            name: ['', forms_1.Validators.required],
            email: '',
            subject: ['', forms_1.Validators.required]
        });
    };
    return SubjectsComponent;
}());
SubjectsComponent = __decorate([
    core_1.Component({
        selector: 'my-products',
        templateUrl: './subjects.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        subject_service_1.SubjectService,
        forms_1.FormBuilder])
], SubjectsComponent);
exports.SubjectsComponent = SubjectsComponent;
//# sourceMappingURL=subjects.component.js.map