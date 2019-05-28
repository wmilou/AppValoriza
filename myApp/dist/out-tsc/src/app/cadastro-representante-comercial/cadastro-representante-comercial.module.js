import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroRepresentanteComercialPage } from './cadastro-representante-comercial.page';
var routes = [
    {
        path: '',
        component: CadastroRepresentanteComercialPage
    }
];
var CadastroRepresentanteComercialPageModule = /** @class */ (function () {
    function CadastroRepresentanteComercialPageModule() {
    }
    CadastroRepresentanteComercialPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CadastroRepresentanteComercialPage]
        })
    ], CadastroRepresentanteComercialPageModule);
    return CadastroRepresentanteComercialPageModule;
}());
export { CadastroRepresentanteComercialPageModule };
//# sourceMappingURL=cadastro-representante-comercial.module.js.map