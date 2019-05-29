import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase';

@Component({
  selector: 'app-consulta-residuo',
  templateUrl: './consulta-residuo.page.html',
  styleUrls: ['./consulta-residuo.page.scss'],
})
export class ConsultaResiduoPage implements OnInit {

  queryText : String;
  allResiduo: any;
  residuo: any;
  informacao;

  //Variavel Para Mudar Pagina
  spinner = true;
  dadosResiduo = false;
  lista = true;

  
  constructor(private firebaseProvider: FirebaseProvider,
    ) {
      this.getResiduo();
      this.queryText = '';
    }
    
    // Recupera Dados Das Empresas Do firebase
    getResiduo(){
      this.firebaseProvider.getResiduos()
      .then((r) =>{
      this. residuo = r;
      this.allResiduo = this.residuo;
      this.pararSpinner();
      })
    }
    //Metodo Para Ver Informacao Da Empresa Selecionada
    verInfo(r){
      this.informacao = r; 
      this.dadosResiduo = true;
      this.lista = false;
    }
    //Botao Voltar Para Consulta
    voltarConsulta(){
      this.dadosResiduo = false;
      this.lista = true;
    }

    //Barra De Pesquisa
    filterResiduo(event : any){
      const val = event.target.value;

      if(val && val.trim() != ''){
        this.residuo = this.allResiduo.filter((residuo)=>{
          return(residuo.nome.toLowerCase().indexOf(val.toLowerCase()) > - 1);
        })
      }else{
        this.residuo = this.allResiduo;
      }
    }

    //Para Loading Da Pagina
    pararSpinner(){
      this.spinner = false;
    }
    ngOnInit() {
    }

  }
