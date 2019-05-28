import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ControlePage } from './controle.page';
var routes = [
    {
        path: '',
        component: ControlePage
    }
];
var ControlePageModule = /** @class */ (function () {
    function ControlePageModule() {
    }
    ControlePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ControlePage]
        })
    ], ControlePageModule);
    return ControlePageModule;
}());
export { ControlePageModule };
//# sourceMappingURL=controle.module.js.map