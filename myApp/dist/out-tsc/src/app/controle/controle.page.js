import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FirebaseProvider } from '../providers/firebase';
var ControlePage = /** @class */ (function () {
    function ControlePage(firebaseProvider) {
        this.firebaseProvider = firebaseProvider;
        //Variavel Para Parar Spinner
        this.spinner = true;
        this.getEmpresas();
        this.queryText = '';
    }
    // Recupera Dados Das Empresas Do firebase
    ControlePage.prototype.getEmpresas = function () {
        var _this = this;
        this.firebaseProvider.getEmpresas()
            .then(function (r) {
            _this.empresas = r;
            _this.allEmpresas = _this.empresas;
            _this.pararSpinner();
        });
    };
    //Barra De Pesquisa
    ControlePage.prototype.filterEmpresa = function (event) {
        var val = event.target.value;
        if (val && val.trim() != '') {
            this.empresas = this.allEmpresas.filter(function (empresas) {
                return (empresas.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.empresas = this.allEmpresas;
        }
    };
    //Para Loading Da Pagina
    ControlePage.prototype.pararSpinner = function () {
        this.spinner = false;
    };
    ControlePage.prototype.ngOnInit = function () {
    };
    ControlePage = tslib_1.__decorate([
        Component({
            selector: 'app-controle',
            templateUrl: './controle.page.html',
            styleUrls: ['./controle.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FirebaseProvider])
    ], ControlePage);
    return ControlePage;
}());
export { ControlePage };
//# sourceMappingURL=controle.page.js.map