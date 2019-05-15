import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { AuthProvider} from '../../providers/auth';
import { FirebaseProvider } from '../../providers/firebase';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  cadastro = true;
  spinner = false;


//Decreta Campos Nos Formularios
cadastroForm = {
  email:'',
  password:'',
  nome:'',
  adm:false
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


 //criaNovaConta
 criarNovaConta(){
  this.rodarSpinner();
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
          email:this.cadastroForm.email,
          adm:this.cadastroForm.adm
     };

     this.firebaseProvider.postUser(data)
     .then(() =>{
       this.paraSpinner();
        }) 
      })
    
   .catch ((err) =>{
    var alerta;
    alerta = 3;
    this.presentAlert(alerta);
    this.paraSpinner();
  }) 
 }


  // Loading 
  rodarSpinner(){
    this.cadastro = false;
    this.spinner = true;
  }
    //Parar Loading
  paraSpinner(){
    this.cadastro = true;
    this.spinner = false;
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
