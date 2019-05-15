import { Component, OnInit } from '@angular/core';
import { AuthProvider} from '../../providers/auth';
import { FirebaseProvider } from '../../providers/firebase';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro-representante-comercial',
  templateUrl: './cadastro-representante-comercial.page.html',
  styleUrls: ['./cadastro-representante-comercial.page.scss'],
})
export class CadastroRepresentanteComercialPage implements OnInit{

  cadastro = true;
  spinner = false;


//Decreta Campos Nos Formularios
cadastroForm = {
  cpf:'',
  cnpjempresa:'',
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
          cpf:this.cadastroForm.cpf,
          cnpjempresa:this.cadastroForm.cnpjempresa
     };

     this.firebaseProvider.postRepresentante(data)
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
          message: 'Representante Adicionado Com Sucesso',
          buttons: ['OK']
        });
        await alert.present();
        break;
      }
      case 3:{
        const alert = await this.alertController.create({
          header: 'Ops',
          message:'Essa Representante ja Existe',
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
