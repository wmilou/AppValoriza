import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomeFuncionarioPage } from './home-funcionario.page';
var routes = [
    {
        path: '',
        component: HomeFuncionarioPage
    }
];
var HomeFuncionarioPageModule = /** @class */ (function () {
    function HomeFuncionarioPageModule() {
    }
    HomeFuncionarioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HomeFuncionarioPage]
        })
    ], HomeFuncionarioPageModule);
    return HomeFuncionarioPageModule;
}());
export { HomeFuncionarioPageModule };
//# sourceMappingURL=home-funcionario.module.js.map