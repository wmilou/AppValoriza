import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
var ProviderService = /** @class */ (function () {
    function ProviderService(http) {
        this.http = http;
        this.url = "http://192.168.15.11/PhpValoriza/";
    }
    ProviderService.prototype.getPegar = function () {
        return this.http.get(this.url + 'Valoriza.php').pipe(map(function (res) { return res.json(); }));
    };
    ProviderService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], ProviderService);
    return ProviderService;
}());
export { ProviderService };
//# sourceMappingURL=provider.service.js.map