import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FirebaseProvider } from '../providers/firebase';
import { AlertController } from '@ionic/angular';
var CadastroEmpresaPage = /** @class */ (function () {
    // Construtor
    function CadastroEmpresaPage(firebaseProvider, alertController) {
        this.firebaseProvider = firebaseProvider;
        this.alertController = alertController;
        //Imagem Que Vai Aparecer nos Resultados
        this.image = 'https://www.visaopontocom.com/wp-content/uploads/2017/02/icone-empresa.png';
        this.cadastro = true;
        this.campos = false;
        this.spinner = false;
        this.camposocultar = true;
        //Decreta Campos Nos Formularios
        this.cadastroEmpresaForm = {
            nome: '',
            cnpj: '',
            estado: '',
            municipio: '',
            endereco: '',
            numero: '',
            bairro: '',
            cep: '',
            telefone: '',
            contato: '',
            email: '',
            ramo: '',
            bandeira: '',
            potencial: '',
            prestador: '',
            representante: '',
            plano: '',
            datainicio: '',
            datatermino: ''
        };
    }
    //criaNovaEmpresa 
    CadastroEmpresaPage.prototype.criarNovaEmpresa = function () {
        var _this = this;
        this.rodarSpinner();
        // Coloca Campos No DB
        var data = {
            image: this.image,
            name: this.cadastroEmpresaForm.nome,
            cnpj: this.cadastroEmpresaForm.cnpj,
            estado: this.cadastroEmpresaForm.estado,
            municipio: this.cadastroEmpresaForm.municipio,
            endereco: this.cadastroEmpresaForm.endereco,
            numero: this.cadastroEmpresaForm.numero,
            bairro: this.cadastroEmpresaForm.bairro,
            cep: this.cadastroEmpresaForm.cep,
            telefone: this.cadastroEmpresaForm.telefone,
            contato: this.cadastroEmpresaForm.contato,
            email: this.cadastroEmpresaForm.email,
            ramo: this.cadastroEmpresaForm.email,
            bandeira: this.cadastroEmpresaForm.bandeira,
            potencial: this.cadastroEmpresaForm.potencial,
            prestador: this.cadastroEmpresaForm.prestador,
            representante: this.cadastroEmpresaForm.representante,
            plano: this.cadastroEmpresaForm.plano,
            datainicio: this.cadastroEmpresaForm.datainicio,
            datatermino: this.cadastroEmpresaForm.datatermino
        };
        this.firebaseProvider.postEmpresa(data)
            .then(function () {
            var alerta;
            alerta = 2;
            _this.presentAlert(alerta);
            _this.paraSpinner();
        })
            .catch(function (err) {
            var alerta;
            alerta = 3;
            _this.presentAlert(alerta);
            _this.paraSpinner();
        });
    };
    // Loading 
    CadastroEmpresaPage.prototype.rodarSpinner = function () {
        this.cadastro = false;
        this.campos = false;
        this.spinner = true;
    };
    //Parar Loading
    CadastroEmpresaPage.prototype.paraSpinner = function () {
        this.cadastro = true;
        this.campos = true;
        this.spinner = false;
    };
    //Mostrar Demais Campos Do Formulario  
    CadastroEmpresaPage.prototype.mostrarCampos = function () {
        this.campos = true;
        this.camposocultar = false;
    };
    CadastroEmpresaPage.prototype.ocultarCampos = function () {
        this.campos = false;
        this.camposocultar = true;
    };
    //Alerta De Sucesso ou Nao
    CadastroEmpresaPage.prototype.presentAlert = function (alerta) {
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
                            message: 'Empresa Adicionada Com Sucesso',
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
                            message: 'Essa Empresa Ja Existe',
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
    CadastroEmpresaPage.prototype.ngOnInit = function () {
    };
    CadastroEmpresaPage = tslib_1.__decorate([
        Component({
            selector: 'app-cadastro-empresa',
            templateUrl: './cadastro-empresa.page.html',
            styleUrls: ['./cadastro-empresa.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FirebaseProvider,
            AlertController])
    ], CadastroEmpresaPage);
    return CadastroEmpresaPage;
}());
export { CadastroEmpresaPage };
//# sourceMappingURL=cadastro-empresa.page.js.map