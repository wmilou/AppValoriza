import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: String;

  constructor(private storage: Storage
    ) {
      this.getUsuario();
      
    }
      
  
    
    // Recupera Dados Das Empresas Do firebase
    getUsuario(){
     this.storage.get('usuario')
     .then((res) => {
        this.usuario = res.nome; 
        console.log(this.usuario);
      })
    }
  }
 


