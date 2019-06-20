import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase';
@Component({
  selector: 'app-consulta-prestador',
  templateUrl: './consulta-prestador.page.html',
  styleUrls: ['./consulta-prestador.page.scss'],
})
export class ConsultaPrestadorPage implements OnInit {
  queryText : String;
  allPrestadores: any;
  Prestador: any;
  informacao;

  //Variavel Para Mudar Pagina
  spinner = true;
  dadosRepresentante = false;
  lista = true;

  
  constructor(private firebaseProvider: FirebaseProvider,
    ) {
      this.getPrestador();
      this.queryText = '';
    }
    
    // Recupera Dados Das Empresas Do firebase
    getPrestador(){
      this.firebaseProvider.getPrestador()
      .then((r) =>{
      this.Prestador  = r;
        this.allPrestadores = this.Prestador;
      this.pararSpinner();
      })
    }
    //Metodo Para Ver Informacao Da Empresa Selecionada
    verInfo(p){
      this.informacao = p; 
      this.dadosRepresentante = true;
      this.lista = false;
    }
    //Botao Voltar Para Consulta
    voltarConsulta(){
      this.dadosRepresentante = false;
      this.lista = true;
    }

    //Barra De Pesquisa
    filterResiduo(event : any){
      const val = event.target.value;

      if(val && val.trim() != ''){
        this.Prestador = this.allPrestadores.filter((Prestador)=>{
          return(Prestador.name.toLowerCase().indexOf(val.toLowerCase()) > - 1);
        })
      }else{
        this.Prestador = this.allPrestadores;
      }
    }

    //Para Loading Da Pagina
    pararSpinner(){
      this.spinner = false;
    }
    ngOnInit() {
    }

  }
