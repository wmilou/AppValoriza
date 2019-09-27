import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BrMaskerModule } from 'br-mask';
import { CadastroEmpresaPage } from './cadastro-empresa.page';


const routes: Routes = [
  {
    path: '',
    component: CadastroEmpresaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroEmpresaPage]
})
export class CadastroEmpresaPageModule { }
