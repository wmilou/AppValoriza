import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-controle',
  templateUrl: './controle.page.html',
  styleUrls: ['./controle.page.scss'],
})
export class ControlePage implements OnInit {

  consulta: any;

  clientes: Array <{Codigo: any; NomeEmpresa: string; Telefone:string; NomeCliente:string;}>
  clientesTodos: Array <{Codigo: any; NomeEmpresa: string; Telefone:string; NomeCliente:string;}>

  constructor() {
  }





  getData(event: any){
    const val = event.target.value;
    
    if (val && val.trim() != ''){
      this.clientes = this.clientesTodos.filter((consulta) => {
        return (consulta.NomeCliente.toLowerCase().indexOf(val.toLowerCase()) > -1);
       
      })
    }else{
      this.clientes = this.clientesTodos;
      
    }


  }

  ngOnInit() {
  }

}

