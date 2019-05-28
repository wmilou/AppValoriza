import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroUsuarioPage } from './cadastro-usuario.page';
var routes = [
    {
        path: '',
        component: CadastroUsuarioPage
    }
];
var CadastroUsuarioPageModule = /** @class */ (function () {
    function CadastroUsuarioPageModule() {
    }
    CadastroUsuarioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CadastroUsuarioPage]
        })
    ], CadastroUsuarioPageModule);
    return CadastroUsuarioPageModule;
}());
export { CadastroUsuarioPageModule };
//# sourceMappingURL=cadastro-usuario.module.js.map