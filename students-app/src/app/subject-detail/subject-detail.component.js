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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var subject_service_1 = require("../subject.service");
require("rxjs/add/operator/switchMap");
var SubjectDetailComponent = (function () {
    function SubjectDetailComponent(subjectService, route, location) {
        this.subjectService = subjectService;
        this.route = route;
        this.location = location;
    }
    SubjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('subjects-detail.component cargado !');
        this.route.paramMap.switchMap(function (params) { return _this.subjectService.getProduct(params.get('name')); })
            .subscribe(function (subject) { return _this.subject = subject; });
    };
    SubjectDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    SubjectDetailComponent.prototype.save = function (p) {
        var _this = this;
        console.log(p);
        this.subjectService.update(p)
            .then(function () { return _this.goBack(); });
    };
    return SubjectDetailComponent;
}());
SubjectDetailComponent = __decorate([
    core_1.Component({
        selector: 'subject-detail',
        templateUrl: './subject-detail.component.html',
    }),
    __metadata("design:paramtypes", [subject_service_1.SubjectService,
        router_1.ActivatedRoute,
        common_1.Location])
], SubjectDetailComponent);
exports.SubjectDetailComponent = SubjectDetailComponent;
//# sourceMappingURL=subject-detail.component.js.map