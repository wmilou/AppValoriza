import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroEmpresaPage } from './cadastro-empresa.page';
var routes = [
    {
        path: '',
        component: CadastroEmpresaPage
    }
];
var CadastroEmpresaPageModule = /** @class */ (function () {
    function CadastroEmpresaPageModule() {
    }
    CadastroEmpresaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CadastroEmpresaPage]
        })
    ], CadastroEmpresaPageModule);
    return CadastroEmpresaPageModule;
}());
export { CadastroEmpresaPageModule };
//# sourceMappingURL=cadastro-empresa.module.js.map