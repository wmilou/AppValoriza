import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro-residuo',
  templateUrl: './cadastro-residuo.page.html',
  styleUrls: ['./cadastro-residuo.page.scss'],
})
export class CadastroResiduoPage implements OnInit {

  cadastro = true;
  spinner = false;


//Decreta Campos Nos Formularios
cadastroForm = {
  tipo:'',
  nome:'',

}


  // Construtor
  constructor(
    private firebaseProvider: FirebaseProvider,
    public alertController: AlertController,  
    ) {
   
   }


 //criaNovaConta
 criarNovoResiduo(){
  this.rodarSpinner();



      var alerta;
      alerta = 2;
      this.presentAlert(alerta);
      // Coloca Campos No DB
      let data = {

          nome:this.cadastroForm.nome,
          validade:this.cadastroForm.tipo
     };

     this.firebaseProvider.postResiduo(data)
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
  
  VerificaId(){
    this.firebaseProvider.getIdResiduo();
  }
  


  //Alerta De Sucesso ou Nao
  async presentAlert(alerta) {
    switch(alerta){ 
      case 2:{
        const alert = await this.alertController.create({
          header: 'Sucesso',
          message: 'Residuo Adicionado Com Sucesso',
          buttons: ['OK']
        });
        await alert.present();
        break;
      }
      case 3:{
        const alert = await this.alertController.create({
          header: 'Ops',
          message:'Essa Residuo ja Existe',
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
