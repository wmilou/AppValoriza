import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrMaskerModule } from 'br-mask';
import { IonicModule } from '@ionic/angular';
import { HomeFuncionarioPage } from './home-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: HomeFuncionarioPage
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
  declarations: [HomeFuncionarioPage]
})
export class HomeFuncionarioPageModule { }
