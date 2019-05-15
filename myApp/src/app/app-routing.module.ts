import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


//Rotas de Paginas do App
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './Pages/home/home.module#HomePageModule'
  },

  { 
    path: 'controle', 
    loadChildren: './Pages/controle/controle.module#ControlePageModule' 
  },
  { 
    path: 'login', 
    loadChildren: './Pages/login/login.module#LoginPageModule' 
  },
  { 
    path: 'cadastro-empresa',
    loadChildren: './Pages/cadastro-empresa/cadastro-empresa.module#CadastroEmpresaPageModule' 
  },
  { 
    path: 'home-funcionario', 
    loadChildren: './Pages/home-funcionario/home-funcionario.module#HomeFuncionarioPageModule' 
  },
  { 
   path: 'cadastro-usuario', 
   loadChildren: './Pages/cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule'
  },
  { 
    path: 'cadastro-prestador-servico', 
    loadChildren: './Pages/cadastro-prestador-servico/cadastro-prestador-servico.module#CadastroPrestadorServicoPageModule'
  },
  { 
   path: 'cadastro-residuo',
   loadChildren: './Pages/cadastro-residuo/cadastro-residuo.module#CadastroResiduoPageModule' 
  },
  { 
   path: 'cadastro-tipos-planos', 
   loadChildren: './Pages/cadastro-tipos-planos/cadastro-tipos-planos.module#CadastroTiposPLanosPageModule' 
  },
  { 
    path: 'cadastro-representante-comercial', 
   loadChildren: './Pages/cadastro-representante-comercial/cadastro-representante-comercial.module#CadastroRepresentanteComercialPageModule'
 }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
