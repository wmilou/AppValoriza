import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroPrestadorServicoPage } from './cadastro-prestador-servico.page';
var routes = [
    {
        path: '',
        component: CadastroPrestadorServicoPage
    }
];
var CadastroPrestadorServicoPageModule = /** @class */ (function () {
    function CadastroPrestadorServicoPageModule() {
    }
    CadastroPrestadorServicoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CadastroPrestadorServicoPage]
        })
    ], CadastroPrestadorServicoPageModule);
    return CadastroPrestadorServicoPageModule;
}());
export { CadastroPrestadorServicoPageModule };
//# sourceMappingURL=cadastro-prestador-servico.module.js.map