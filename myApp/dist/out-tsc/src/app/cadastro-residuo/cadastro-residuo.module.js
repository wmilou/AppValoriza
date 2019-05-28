import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroResiduoPage } from './cadastro-residuo.page';
var routes = [
    {
        path: '',
        component: CadastroResiduoPage
    }
];
var CadastroResiduoPageModule = /** @class */ (function () {
    function CadastroResiduoPageModule() {
    }
    CadastroResiduoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CadastroResiduoPage]
        })
    ], CadastroResiduoPageModule);
    return CadastroResiduoPageModule;
}());
export { CadastroResiduoPageModule };
//# sourceMappingURL=cadastro-residuo.module.js.map