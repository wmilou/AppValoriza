import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: String;

  constructor(
    private storage: Storage,
    public afAuth: AngularFireAuth,
    private router: Router
    ) {
      this.getUsuario();
    }
      
    // Recupera Dados Das Empresas Do firebase
    getUsuario(){
     this.storage.get('usuario')
     .then((res) => {
        this.usuario = res.nome; 
      })
    }
  }
 


