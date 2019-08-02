import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrMaskerModule } from 'br-mask';
import { IonicModule } from '@ionic/angular';
import { RelatorioPage } from './relatorio.page';

 
const routes: Routes = [
  {
    path: '',
    component: RelatorioPage
  }
];

@NgModule({
  imports: [
    BrMaskerModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RelatorioPage]
})
export class RelatorioPageModule {}
