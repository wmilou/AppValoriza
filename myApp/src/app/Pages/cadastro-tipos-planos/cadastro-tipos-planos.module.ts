import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrMaskerModule } from 'br-mask';

import { IonicModule } from '@ionic/angular';

import { CadastroTiposPLanosPage } from './cadastro-tipos-planos.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroTiposPLanosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CadastroTiposPLanosPage]
})
export class CadastroTiposPLanosPageModule {}
