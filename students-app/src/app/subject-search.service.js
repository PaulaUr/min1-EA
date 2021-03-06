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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var SubjectSearchService = (function () {
    function SubjectSearchService(http) {
        this.http = http;
        this.productsUrl = 'http://localhost:3000/api/subjects'; // URL to web api
    }
    SubjectSearchService.prototype.search = function (term) {
        var url = this.productsUrl + "/" + term;
        console.log(url);
        return this.http
            .get(url)
            .map(function (response) { return response.json(); });
        /* return this.http
             .get(`api/subjects/${term}`)
             .map(response => response.json()); // .map extrae los heroes de la respuesta de datos
     */
    };
    return SubjectSearchService;
}());
SubjectSearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SubjectSearchService);
exports.SubjectSearchService = SubjectSearchService;
//# sourceMappingURL=subject-search.service.js.map