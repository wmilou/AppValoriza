import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home-funcionario',
  templateUrl: './home-funcionario.page.html',
  styleUrls: ['./home-funcionario.page.scss'],
})
export class HomeFuncionarioPage implements OnInit {

  usuario = String; 

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private storage: Storage
    ) {
      this.getUsuario();
     }

    funcionarioForm = {
      placa:'',
      nome:'',
      cnpj:'',
      estado:''
    }

  signOut(){
    this.afAuth.auth.signOut();
    this.router.navigate(['login'])
  }
  getUsuario(){
    this.storage.get('usuario')
    .then((res) => {
       this.usuario = res.nome; 
     })
   }

  ngOnInit() {
  }

}
