import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service'
@Component({
  selector: 'app-controle',
  templateUrl: './controle.page.html',
  styleUrls: ['./controle.page.scss'],
})
export class ControlePage implements OnInit {

  consulta: any;

  constructor(public servidor: ProviderService) { 
    this.getRetornar();
  }

  

  getRetornar(){
    this.servidor.getPegar()
    .subscribe(
      data => this.consulta = data,
      err => console.log(err)
    );
  }

  ngOnInit() {
  }

}

