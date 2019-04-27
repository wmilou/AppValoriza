import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
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
    public loadingController: LoadingController,
    public alertController: AlertController,
    private storage : Storage
    ) {
   
   }
 

  // Faz Login Com FireBase
  fazerLogin(){  
    this.presentLoadingWithOptions();
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
     
    })
    
 }





  // Loading 
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 3000,
      spinner:"lines-small",
      message: 'Aguarde um Momento ...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
    
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
