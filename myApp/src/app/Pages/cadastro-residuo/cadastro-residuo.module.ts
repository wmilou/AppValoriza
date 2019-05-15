import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroResiduoPage } from './cadastro-residuo.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroResiduoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroResiduoPage]
})
export class CadastroResiduoPageModule {}
