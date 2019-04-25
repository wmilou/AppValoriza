import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service'
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

  constructor(public servidor: ProviderService) {
    this.clientes = [];
    this.getRetornar();
  }


  getRetornar(){
    
    this.servidor.getPegar()
    .subscribe(
      data => {
        
        this.clientes = data;
        
        for(let i = 0; i < data.lenght; i++){
          this.clientes.push({
            Codigo: data[i]["Codigo"],
            NomeEmpresa: data[i]["NomeEmpresa"],
            Telefone: data[i]["Telefone"],
            NomeCliente: data[i]["NomeCliente"]
            
          });
        }
        
        this.clientesTodos = this.clientes;
        
      }

      )
        err => console.log(err);
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

