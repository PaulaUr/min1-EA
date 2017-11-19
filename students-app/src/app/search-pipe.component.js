"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchPipeComponent = (function () {
    function SearchPipeComponent() {
    }
    SearchPipeComponent.prototype.transform = function (items, buscar, buscar1) {
        if (buscar === undefined) {
            return items;
        }
        if (buscar) {
            return items.filter(function (item) { return item.titulacion === buscar; });
        }
        if (buscar1) {
            return items.filter(function (item) { return item.cuatrimestre === buscar1; });
        }
    };
    return SearchPipeComponent;
}());
SearchPipeComponent = __decorate([
    core_1.Pipe({
        name: 'searchs'
    }),
    core_1.Injectable()
], SearchPipeComponent);
exports.SearchPipeComponent = SearchPipeComponent;
//# sourceMappingURL=search-pipe.component.js.map