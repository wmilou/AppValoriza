import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { AuthProvider} from '../../providers/auth';
import { FirebaseProvider } from '../../providers/firebase';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MenuController }  from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  login = true;
  spinner = false;
  

//Decreta Campos Nos Formularios
loginForm = {
  email: '',
  password:''
}


  // Construtor
  constructor(
    private router: Router,
    private authProvider: AuthProvider,
    private firebaseProvider: FirebaseProvider,
    private toastController: ToastController,
    private storage : Storage,
    private controledomenu: MenuController
    ) {
     
   }
   
  // Faz Login Com FireBase
  fazerLogin(){  
    this.rodarSpinner();
    this.authProvider.login(this.loginForm)
    .then ((res) =>{
      let uid = res.user.uid;
      this.firebaseProvider.getUser(uid)
      .then((res)=>{
        let data = res.data();
        this.storage.set('usuario', data)
        .then((data)=>{
          if(data.adm == true){
          this.paraSpinner();
          this.router.navigate(['home']);
          this.controledomenu.enable(true);
        }else{
          this.paraSpinner();
          this.router.navigate(['home-funcionario']);
          this.controledomenu.enable(false);
        }})
      }) 
    })
    .catch ((err) =>{
      this.paraSpinner();
      this.presentAlert("Credenciais Incorretas");
    })
    
 }

  // Loading 
 rodarSpinner(){
  this.login = false;
  this.spinner = true;
}
  //Parar Loading
paraSpinner(){
  this.login = true;
  this.spinner = false;
}
  //Alerta De Sucesso ou Nao
  async presentAlert(mensagem) {
    
        const toast = await this.toastController.create({
          message:mensagem,
          duration:5000
        });
        await toast.present(); 
      }
  ngOnInit() {
  }

}
