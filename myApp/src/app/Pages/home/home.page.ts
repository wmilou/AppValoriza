import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Platform} from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: String;

  constructor(
    private storage: Storage,
    private platform:Platform,
    ) {
      this.getUsuario();
    }
      
    // Recupera Dados Do Usuario No Firebase
    getUsuario(){
     this.storage.get('usuario')
     .then((res) => {
        this.usuario = res.nome; 
      })
    }
  }
 


