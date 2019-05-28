import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
var HomeFuncionarioPage = /** @class */ (function () {
    function HomeFuncionarioPage(afAuth, router, storage) {
        this.afAuth = afAuth;
        this.router = router;
        this.storage = storage;
        this.usuario = String;
        this.funcionarioForm = {
            placa: '',
            nome: '',
            cnpj: '',
            estado: ''
        };
        this.getUsuario();
    }
    HomeFuncionarioPage.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['login']);
    };
    HomeFuncionarioPage.prototype.getUsuario = function () {
        var _this = this;
        this.storage.get('usuario')
            .then(function (res) {
            _this.usuario = res.nome;
        });
    };
    HomeFuncionarioPage.prototype.ngOnInit = function () {
    };
    HomeFuncionarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-home-funcionario',
            templateUrl: './home-funcionario.page.html',
            styleUrls: ['./home-funcionario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
            Router,
            Storage])
    ], HomeFuncionarioPage);
    return HomeFuncionarioPage;
}());
export { HomeFuncionarioPage };
//# sourceMappingURL=home-funcionario.page.js.map