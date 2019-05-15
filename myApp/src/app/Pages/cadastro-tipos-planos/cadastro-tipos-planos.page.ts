import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { AuthProvider} from '../../providers/auth';
import { FirebaseProvider } from '../../providers/firebase';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-cadastro-tipos-planos',
  templateUrl: './cadastro-tipos-planos.page.html',
  styleUrls: ['./cadastro-tipos-planos.page.scss'],
})
export class CadastroTiposPLanosPage implements OnInit{

  cadastro = true;
  spinner = false;


//Decreta Campos Nos Formularios
cadastroForm = {
  valor:'',
  validade:'',
  nome:'',

}


  // Construtor
  constructor(
    private authProvider: AuthProvider,
    private firebaseProvider: FirebaseProvider,
    public alertController: AlertController,  
    ) {
   
   }


 //criaNovaConta
 criarNovaConta(){
  this.rodarSpinner();
      var alerta;
      alerta = 2;
      this.presentAlert(alerta);
      // Coloca Campos No DB
      let data = {
          nome:this.cadastroForm.nome,
          validade:this.cadastroForm.validade,
          valor:this.cadastroForm.valor
     };

     this.firebaseProvider.postPlano(data)
     .then(() =>{
       this.paraSpinner();
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
          message: 'Plano Criado Com Sucesso',
          buttons: ['OK']
        });
        await alert.present();
        break;
      }
      case 3:{
        const alert = await this.alertController.create({
          header: 'Ops',
          message:'Essa Plano ja Existe',
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
