import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from '../providers/firebase';

import _ from 'lodash';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.page.html',
  styleUrls: ['./controle.page.scss'],
})
export class ControlePage implements OnInit {

  queryText : String;
  allEmpresas: any;
  empresas: any;
  
  

  constructor(private firebaseProvider: FirebaseProvider
    ) {
      this.getEmpresas();this.queryText = '';
    }
      

    
    // Recupera Dados Das Empresas Do firebase
    getEmpresas(){
      this.firebaseProvider.getEmpresas()
      .then((r) =>{
      this.empresas = r;
      this.allEmpresas = this.empresas;
      })
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
 
  


    ngOnInit() {
    }

  }
