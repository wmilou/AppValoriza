import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase';

@Component({
  selector: 'app-consulta-plano',
  templateUrl: './consulta-plano.page.html',
  styleUrls: ['./consulta-plano.page.scss'],
})
export class ConsultaPlanoPage implements OnInit {
  queryText : String;
  allPlanos: any;
  Planos: any;
  informacao;

  //Variavel Para Mudar Pagina
  spinner = true;
  dadosPlano = false;
  lista = true;

  
  constructor(private firebaseProvider: FirebaseProvider,
    ) {
      this.getPlanos();
      this.queryText = '';
    }
    
    // Recupera Dados Das Empresas Do firebase
    getPlanos(){
      this.firebaseProvider.getPlanos()
      .then((r) =>{
      this.Planos  = r;
        this.allPlanos = this.Planos;
      this.pararSpinner();
      })
    }
    //Metodo Para Ver Informacao Da Empresa Selecionada
    verInfo(p){
      this.informacao = p; 
      this.dadosPlano = true;
      this.lista = false;
    }
    //Botao Voltar Para Consulta
    voltarConsulta(){
      this.dadosPlano = false;
      this.lista = true;
    }

    //Barra De Pesquisa
    filterResiduo(event : any){
      const val = event.target.value;

      if(val && val.trim() != ''){
        this.Planos = this.allPlanos.filter((planos)=>{
          return(planos.nome.toLowerCase().indexOf(val.toLowerCase()) > - 1);
        })
      }else{
        this.Planos = this.allPlanos;
      }
    }

    //Para Loading Da Pagina
    pararSpinner(){
      this.spinner = false;
    }
    ngOnInit() {
    }

  }
