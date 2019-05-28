import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthProvider } from '../providers/auth';
import { FirebaseProvider } from '../providers/firebase';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
var LoginPage = /** @class */ (function () {
    // Construtor
    function LoginPage(router, authProvider, firebaseProvider, alertController, storage) {
        this.router = router;
        this.authProvider = authProvider;
        this.firebaseProvider = firebaseProvider;
        this.alertController = alertController;
        this.storage = storage;
        this.login = true;
        this.spinner = false;
        //Decreta Campos Nos Formularios
        this.loginForm = {
            email: '',
            password: ''
        };
    }
    // Faz Login Com FireBase
    LoginPage.prototype.fazerLogin = function () {
        var _this = this;
        this.rodarSpinner();
        this.authProvider.login(this.loginForm)
            .then(function (res) {
            var uid = res.user.uid;
            _this.firebaseProvider.getUser(uid)
                .then(function (res) {
                var data = res.data();
                _this.storage.set('usuario', data)
                    .then(function (data) {
                    if (data.adm == true) {
                        _this.paraSpinner();
                        _this.router.navigate(['home']);
                    }
                    else {
                        _this.paraSpinner();
                        _this.router.navigate(['home-funcionario']);
                    }
                });
            });
        })
            .catch(function (err) {
            _this.paraSpinner();
            var alerta = 1;
            _this.presentAlert(alerta);
        });
    };
    // Loading 
    LoginPage.prototype.rodarSpinner = function () {
        this.login = false;
        this.spinner = true;
    };
    //Parar Loading
    LoginPage.prototype.paraSpinner = function () {
        this.login = true;
        this.spinner = false;
    };
    //Alerta De Sucesso ou Nao
    LoginPage.prototype.presentAlert = function (alerta) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, alert_1, alert_2;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = alerta;
                        switch (_a) {
                            case 1: return [3 /*break*/, 1];
                        }
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.alertController.create({
                            header: 'Ops',
                            message: 'Credenciais Incorretas',
                            buttons: ['OK']
                        })];
                    case 2:
                        alert_1 = _b.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, this.alertController.create({
                            header: 'Ops',
                            message: 'Alguma Coisa Deu Errada',
                            buttons: ['OK']
                        })];
                    case 5:
                        alert_2 = _b.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AuthProvider,
            FirebaseProvider,
            AlertController,
            Storage])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map