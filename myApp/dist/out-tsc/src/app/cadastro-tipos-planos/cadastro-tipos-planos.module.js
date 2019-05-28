import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroTiposPLanosPage } from './cadastro-tipos-planos.page';
var routes = [
    {
        path: '',
        component: CadastroTiposPLanosPage
    }
];
var CadastroTiposPLanosPageModule = /** @class */ (function () {
    function CadastroTiposPLanosPageModule() {
    }
    CadastroTiposPLanosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CadastroTiposPLanosPage]
        })
    ], CadastroTiposPLanosPageModule);
    return CadastroTiposPLanosPageModule;
}());
export { CadastroTiposPLanosPageModule };
//# sourceMappingURL=cadastro-tipos-planos.module.js.map