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
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var SubjectService = (function () {
    function SubjectService(http) {
        this.http = http;
        this.productsUrl = 'http://localhost:3000/api/subjects'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    SubjectService.prototype.getProducts = function () {
        return this.http
            .get(this.productsUrl)
            .map(function (response) { return response.json(); });
        // Con el operador .map del Observable transformamos la respuesta http a una matriz de objetos(Products[])
    };
    SubjectService.prototype.getProduct = function (name) {
        var url = this.productsUrl + "/" + name;
        console.log(url);
        return this.http
            .get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /* create(products: Products): Observable<Products> {
        console.log(products);
         return this.http
             .post(this.productsUrl, JSON.stringify(products), {headers: this.headers})
             .map(response => response.json().data as Products[])
             .catch(this.handleError);
         /*.map(response => {
             if (response.status === 200) {
                 console.log('Created !');
             }
             console.log('Not Created');
         })
      }*/
    SubjectService.prototype.update = function (product) {
        console.log(product);
        console.log(product.name);
        var url = this.productsUrl + "/" + product.name;
        console.log(url);
        return this.http
            .put(url, JSON.stringify(product), { headers: this.headers })
            .toPromise()
            .then(function () { return product; })
            .catch(this.handleError);
    };
    SubjectService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return SubjectService;
}());
SubjectService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SubjectService);
exports.SubjectService = SubjectService;
//# sourceMappingURL=subject.service.js.map