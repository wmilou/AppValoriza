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
  { path: 'cadastro', 
    loadChildren: './cadastro/cadastro.module#CadastroPageModule' 
  },
  { path: 'cadastro-empresa', loadChildren: './cadastro-empresa/cadastro-empresa.module#CadastroEmpresaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
