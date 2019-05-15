import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroPrestadorServicoPage } from './cadastro-prestador-servico.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPrestadorServicoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroPrestadorServicoPage]
})
export class CadastroPrestadorServicoPageModule {}
