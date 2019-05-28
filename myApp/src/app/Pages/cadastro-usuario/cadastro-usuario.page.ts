import { Component, OnInit } from '@angular/core';
import { AuthProvider} from '../../providers/auth';
import { FirebaseProvider } from '../../providers/firebase';
import { AlertController } from '@ionic/angular';

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
    private authProvider: AuthProvider,
    private firebaseProvider: FirebaseProvider,
    public alertController: AlertController,
    ) {}
   
   
   //Verifica Campos 
   verifica(){
     if(this.cadastroForm.email == ''){
       this.presentAlert(1);
     }else{
      if(this.cadastroForm.nome == ''){
        this.presentAlert(1);
      }else{
        if(this.cadastroForm.password == ''){
          this.presentAlert(1);
        }else{
          this.criarNovaConta();
        }
      }
     }
   }

   //criaNovaConta
   criarNovaConta(){
  this.rodarSpinner();
   this.authProvider.register(this.cadastroForm)
   .then ((res) =>{
      this.presentAlert(2);
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
          message:'Por Favor Preecha todos os Campos',
          buttons: ['OK']
        });
        await alert.present();
        break;
      }
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
