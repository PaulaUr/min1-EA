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
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/switchMap");
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var Observable_1 = require("rxjs/Observable");
var subject_search_service_1 = require("../subject-search.service");
var SubjectSearchComponent = (function () {
    function SubjectSearchComponent(subjectSearchService, router) {
        this.subjectSearchService = subjectSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject(); // Subject es un productor de un flujo de eventos Observables
    }
    // Push a search term into the observable stream.
    SubjectSearchComponent.prototype.search = function (term) {
        // cada llamada a search() pone un nuevo String en este flujo Seubject observable llamando a next()
        this.searchTerms.next(term);
    };
    SubjectSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subject = this.searchTerms
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.subjectSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    SubjectSearchComponent.prototype.gotoDetail = function (subject) {
        var link = ['/detail', subject.name];
        this.router.navigate(link);
    };
    return SubjectSearchComponent;
}());
SubjectSearchComponent = __decorate([
    core_1.Component({
        selector: 'subject-search',
        templateUrl: './subject-search.component.html',
        providers: [subject_search_service_1.SubjectSearchService]
    }),
    __metadata("design:paramtypes", [subject_search_service_1.SubjectSearchService,
        router_1.Router])
], SubjectSearchComponent);
exports.SubjectSearchComponent = SubjectSearchComponent;
//# sourceMappingURL=subject-search.component.js.map