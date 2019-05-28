import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
//Rotas de Paginas do App
var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'controle',
        loadChildren: './controle/controle.module#ControlePageModule'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule'
    },
    {
        path: 'cadastro-empresa',
        loadChildren: './cadastro-empresa/cadastro-empresa.module#CadastroEmpresaPageModule'
    },
    {
        path: 'home-funcionario',
        loadChildren: './home-funcionario/home-funcionario.module#HomeFuncionarioPageModule'
    },
    {
        path: 'cadastro-usuario',
        loadChildren: './cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule'
    },
    {
        path: 'cadastro-usuario',
        loadChildren: './cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule'
    },
    {
        path: 'cadastro-prestador-servico',
        loadChildren: './cadastro-prestador-servico/cadastro-prestador-servico.module#CadastroPrestadorServicoPageModule'
    },
    {
        path: 'cadatro-tipos-planos',
        loadChildren: './cadatro-tipos-planos/cadatro-tipos-planos.module#CadatroTiposPlanosPageModule'
    },
    {
        path: 'cadastro-reprensentante-comercial',
        loadChildren: './cadastro-reprensentante-comercial/cadastro-reprensentante-comercial.module#CadastroReprensentanteComercialPageModule'
    },
    {
        path: 'cadastro-residuo',
        loadChildren: './cadastro-residuo/cadastro-residuo.module#CadastroResiduoPageModule'
    },
    {
        path: 'cadastro-tipos-planos',
        loadChildren: './cadastro-tipos-planos/cadastro-tipos-planos.module#CadastroTiposPLanosPageModule'
    },
    { path: 'cadastro-representante-comercial', loadChildren: './cadastro-representante-comercial/cadastro-representante-comercial.module#CadastroRepresentanteComercialPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map