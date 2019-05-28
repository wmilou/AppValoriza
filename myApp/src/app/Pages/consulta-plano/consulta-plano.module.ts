import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultaPlanoPage } from './consulta-plano.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaPlanoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsultaPlanoPage]
})
export class ConsultaPlanoPageModule {}
