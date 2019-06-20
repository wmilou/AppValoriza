import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultaPrestadorPage } from './consulta-prestador.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaPrestadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsultaPrestadorPage]
})
export class ConsultaPrestadorPageModule {}
