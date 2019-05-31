import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RealtimeLogsPage } from './realtime-logs.page';

const routes: Routes = [
  {
    path: '',
    component: RealtimeLogsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RealtimeLogsPage]
})
export class RealtimeLogsPageModule {}
