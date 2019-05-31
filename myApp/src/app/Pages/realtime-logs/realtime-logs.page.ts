import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase';
@Component({
  selector: 'app-realtime-logs',
  templateUrl: './realtime-logs.page.html',
  styleUrls: ['./realtime-logs.page.scss'],
})
export class RealtimeLogsPage implements OnInit {
  queryText : String;
  allPesos: any;
  Pesos: any;
  informacao;

  //Variavel Para Mudar Pagina
  spinner = true;
  dadosPeso = false;
  lista = true;

  
  constructor(private firebaseProvider: FirebaseProvider,
    ) {
      this.getPesos();
      this.queryText = '';
    }
    
    // Recupera Dados Das Empresas Do firebase
    getPesos(){
      this.firebaseProvider.getIdlogs()
      .then((r) =>{
      this.Pesos  = r;
        this.allPesos = this.Pesos;
      this.pararSpinner();
      })
    }
    //Metodo Para Ver Informacao Da Empresa Selecionada
    verInfo(p){
      this.informacao = p; 
      this.dadosPeso = true;
      this.lista = false;
    }
    //Botao Voltar Para Consulta
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
