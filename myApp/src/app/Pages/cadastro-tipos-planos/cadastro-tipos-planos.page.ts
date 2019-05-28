import { Component, OnInit } from '@angular/core';
import { AuthProvider} from '../../providers/auth';
import { FirebaseProvider } from '../../providers/firebase';
import { AlertController } from '@ionic/angular';

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
    ) {}


  //Verifica Campos 
  verifica(){
      if(this.cadastroForm.nome == ''){
        this.presentAlert(1);
      }else{
       if(this.cadastroForm.validade == ''){
         this.presentAlert(1);
       }else{
         if(this.cadastroForm.valor == ''){
           this.presentAlert(1);
         }else{
           this.criarNovoPlano();
         }
       }
      }
    }

 //criaNovaConta
 criarNovoPlano(){
  this.rodarSpinner();
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
     .catch (() =>{
        this.presentAlert(3);
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
      case 1:{
        const alert = await this.alertController.create({
          header: 'Obrigatorio',
          message: 'Por Favor Preencha Todos Os Campos',
          buttons: ['OK']
        });
        await alert.present();
        break;
      }
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
          message:'Não Foi Possivel Cadastrar Este Plano',
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
