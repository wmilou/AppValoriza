import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
var HomePage = /** @class */ (function () {
    function HomePage(storage, afAuth, router) {
        this.storage = storage;
        this.afAuth = afAuth;
        this.router = router;
        this.getUsuario();
    }
    // Recupera Dados Das Empresas Do firebase
    HomePage.prototype.getUsuario = function () {
        var _this = this;
        this.storage.get('usuario')
            .then(function (res) {
            _this.usuario = res.nome;
        });
    };
    HomePage.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['login']);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Storage,
            AngularFireAuth,
            Router])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map