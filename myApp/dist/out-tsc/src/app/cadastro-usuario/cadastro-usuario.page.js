import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthProvider } from '../providers/auth';
import { FirebaseProvider } from '../providers/firebase';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
var CadastroUsuarioPage = /** @class */ (function () {
    // Construtor
    function CadastroUsuarioPage(router, authProvider, firebaseProvider, alertController, storage) {
        this.router = router;
        this.authProvider = authProvider;
        this.firebaseProvider = firebaseProvider;
        this.alertController = alertController;
        this.storage = storage;
        this.cadastro = true;
        this.spinner = false;
        //Decreta Campos Nos Formularios
        this.cadastroForm = {
            email: '',
            password: '',
            nome: '',
            adm: false
        };
    }
    //criaNovaConta
    CadastroUsuarioPage.prototype.criarNovaConta = function () {
        var _this = this;
        this.rodarSpinner();
        this.authProvider.register(this.cadastroForm)
            .then(function (res) {
            var alerta;
            alerta = 2;
            _this.presentAlert(alerta);
            // Coloca Campos No DB
            var uid = res.user.uid;
            var data = {
                uid: uid,
                nome: _this.cadastroForm.nome,
                email: _this.cadastroForm.email,
                adm: _this.cadastroForm.adm
            };
            _this.firebaseProvider.postUser(data)
                .then(function () {
                _this.paraSpinner();
            });
        })
            .catch(function (err) {
            var alerta;
            alerta = 3;
            _this.presentAlert(alerta);
            _this.paraSpinner();
        });
    };
    // Loading 
    CadastroUsuarioPage.prototype.rodarSpinner = function () {
        this.cadastro = false;
        this.spinner = true;
    };
    //Parar Loading
    CadastroUsuarioPage.prototype.paraSpinner = function () {
        this.cadastro = true;
        this.spinner = false;
    };
    //Alerta De Sucesso ou Nao
    CadastroUsuarioPage.prototype.presentAlert = function (alerta) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, alert_1, alert_2, alert_3;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = alerta;
                        switch (_a) {
                            case 2: return [3 /*break*/, 1];
                            case 3: return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, this.alertController.create({
                            header: 'Sucesso',
                            message: 'Usuario Criado Com Sucesso',
                            buttons: ['OK']
                        })];
                    case 2:
                        alert_1 = _b.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 4: return [4 /*yield*/, this.alertController.create({
                            header: 'Ops',
                            message: 'Essa Conta Ja Existe',
                            buttons: ['OK']
                        })];
                    case 5:
                        alert_2 = _b.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 7: return [4 /*yield*/, this.alertController.create({
                            header: 'Ops',
                            message: 'Alguma Coisa Deu Errada',
                            buttons: ['OK']
                        })];
                    case 8:
                        alert_3 = _b.sent();
                        return [4 /*yield*/, alert_3.present()];
                    case 9:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    CadastroUsuarioPage.prototype.ngOnInit = function () {
    };
    CadastroUsuarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-cadastro-usuario',
            templateUrl: './cadastro-usuario.page.html',
            styleUrls: ['./cadastro-usuario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AuthProvider,
            FirebaseProvider,
            AlertController,
            Storage])
    ], CadastroUsuarioPage);
    return CadastroUsuarioPage;
}());
export { CadastroUsuarioPage };
//# sourceMappingURL=cadastro-usuario.page.js.map