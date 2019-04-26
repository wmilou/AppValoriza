import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from "@angular/router"
import {AuthProvider} from '../providers/auth';
import {FirebaseProvider } from '../providers/firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {
login = true;
cadastro = false;



loginForm = {
  email: '',
  password:''
}
cadastroForm = {
  email:'',
  password:'',
  nome:''
}



  constructor(
    private router: Router,
    private authProvider: AuthProvider,
    private firebaseProvider: FirebaseProvider,
    public loadingController: LoadingController
    ) {
   
   }



   // Faz Login Com FireBase

  fazerLogin(){   

    this.authProvider.login(this.loginForm)
    .then ((res) =>{
      this.router.navigate(['home'])
      console.log(res);
    }) 
    .catch ((err) =>{
      console.log(err);
    }) 
    
 }

 //criaNovaConta
 criarNovaConta(){
   this.authProvider.register(this.cadastroForm)
   .then ((res) =>{
    this.presentLoadingWithOptions();
    this.login = true;
    this.cadastro = false;
     let uid = res.user.uid;
     // Coloca Campos No DB
     let data = {
        uid: uid,
        nome:this.cadastroForm.nome,
        email:this.cadastroForm.email
     };

     this.firebaseProvider.postUser(data)
     .then(() =>{
     
     })

  }) 
   .catch ((err) =>{
    
  }) 
 }


 // Exibe Cadastro 
  exibirRegistro(){

    this.login = false;
    this.cadastro = true;
  }

// Exibe Login 
  exibirLogin(){
    this.login = true;
    this.cadastro = false;
  }



  // Loading 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Aguarde um Momento',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 3000,
      message: 'Aguarde um Momento ...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }



  
  ngOnInit() {
  }

}
