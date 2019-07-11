import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase';
import { Injectable } from "@angular/core";

@Component({
  selector: 'app-realtime-logs',
  templateUrl: './realtime-logs.page.html',
  styleUrls: ['./realtime-logs.page.scss'],
})
export class RealtimeLogsPage implements OnInit {
//Variaveis do Codigo  
  queryText : String;
  allPesos: any;
  Pesos: any;
  informacao;
  spinner = true;
  dadosPeso = false;
  lista = true;
  pesos
  resultado = [];

  constructor(private firebaseProvider: FirebaseProvider,
    ) {
      this.getPesos();
      this.queryText = '';
    }
//Metodos    
    // Get nos Pesos no Banco 
    getPesos(){
      this.firebaseProvider.getlogs()
      .then((r) =>{
      this.Pesos  = r;
        this.allPesos = this.Pesos;
      this.pararSpinner();
      })
    }

    //Metodo Para Ver Informacao Do Peso Solicitado
    verInfo(p){
      this.informacao = p;
      this.dadosPeso = true;
      this.lista = false;

      
      var pesos = this.informacao.peso;
      var q = 0
        for (var i in pesos) {
          q = q + 1;
          this.resultado[0] = "Pesos";
          if (pesos.hasOwnProperty(i)) {
              this.resultado[q] = i + ": " + pesos[i]+" Kg";
              
          }
        } 
    }

    //Botao Voltar para os Pesos
    voltarConsulta(){
      this.dadosPeso = false;
      this.lista = true;
    }

    //Barra De Pesquisa
    filterResiduo(event : any){
      const val = event.target.value;

      if(val && val.trim() != ''){
        this.Pesos = this.allPesos.filter((Pesos)=>{
          return(Pesos.placa.toLowerCase().indexOf(val.toLowerCase()) > - 1);
        })
      }else{
        this.Pesos = this.allPesos;
      }
    }

    //Para Loading Da Pagina
    pararSpinner(){
      this.spinner = false;
    }
    ngOnInit() {
    }

  }
