import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from "@angular/router"
import { AuthProvider} from '../providers/auth';
import { FirebaseProvider } from '../providers/firebase';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})


export class CadastroPage implements OnInit {

//Decreta Campos Nos Formularios
cadastroForm = {
  email:'',
  password:'',
  nome:''
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


 //criaNovaConta
 criarNovaConta(){
  this.presentLoadingWithOptions();
   this.authProvider.register(this.cadastroForm)
   .then ((res) =>{

      var alerta;
      alerta = 2;
      this.presentAlert(alerta);

      // Coloca Campos No DB
      let uid = res.user.uid;
      let data = {
          uid: uid,
          nome:this.cadastroForm.nome,
          email:this.cadastroForm.email
     };

     this.firebaseProvider.postUser(data)
     .then(() =>{
          this.storage.set('usuario',data)
          .then(()=>{
          })
        }) 
      })
    
   .catch ((err) =>{
    var alerta;
    alerta = 3;
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
      case 2:{
        const alert = await this.alertController.create({
          header: 'Sucesso',
          message:'Usuario Criado Com Sucesso',
          buttons: ['OK']
        });
        await alert.present();
        break;
      }
      case 3:{
        const alert = await this.alertController.create({
          header: 'Ops',
          message:'Essa Conta Ja Existe',
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
