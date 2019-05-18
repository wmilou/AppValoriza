import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase';
import {Router} from '@angular/router'


@Component({
  selector: 'app-controle',
  templateUrl: './controle.page.html',
  styleUrls: ['./controle.page.scss'],
})
export class ControlePage implements OnInit {

  queryText : String;
  allEmpresas: any;
  empresas: any;
  informacao;

  //Variavel Para Mudar Pagina
  spinner = true;
  dadosEmpresa= false;
  lista = true;

  
  constructor(private firebaseProvider: FirebaseProvider,
     
    private router:Router
    ) {
      this.getEmpresas();
      this.queryText = '';
    }
    
    // Recupera Dados Das Empresas Do firebase
    getEmpresas(){
      this.firebaseProvider.getEmpresas()
      .then((r) =>{
      this.empresas = r;
      this.allEmpresas = this.empresas;
      this.pararSpinner();
      })
    }
    //Metodo Para Ver Informacao Da Empresa Selecionada
    verInfo(e){
      this.informacao = e; 
      console.log(this.informacao);
      this.dadosEmpresa = true;
      this.lista = false;
    }
    //Botao Voltar Para Consulta
    voltarConsulta(){
      this.dadosEmpresa = false;
      this.lista = true;
    }

    //Barra De Pesquisa
    filterEmpresa(event : any){
      const val = event.target.value;

      if(val && val.trim() != ''){
        this.empresas = this.allEmpresas.filter((empresas)=>{
          return(empresas.name.toLowerCase().indexOf(val.toLowerCase()) > - 1);
        })
      }else{
        this.empresas = this.allEmpresas;
      }
    }

    //Para Loading Da Pagina
    pararSpinner(){
      this.spinner = false;
    }
    ngOnInit() {
    }

  }
