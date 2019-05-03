import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { AuthProvider} from '../providers/auth';
import { FirebaseProvider } from '../providers/firebase';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

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
    public alertController: AlertController,
    private storage : Storage
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
        .then(()=>{
          this.router.navigate(['home']);
        })
      }) 
    })
    .catch ((err) =>{
      var alerta = 1;
      this.presentAlert(alerta);
      this.paraSpinner();
     
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
  async presentAlert(alerta) {
    switch(alerta){
      case 1:{
        const alert = await this.alertController.create({
          header: 'Ops',
          message:'Credenciais Incorretas',
          buttons: ['OK']
        });
        await alert.present();
        break;
      }
      default:{
        const alert = await this.alertController.create({
          header: 'Ops',
          message:'Alguma Coisa Deu Errada',
          buttons: ['OK']
        });
        await alert.present();
        break;
      }
      }
    }
  ngOnInit() {
  }

}
