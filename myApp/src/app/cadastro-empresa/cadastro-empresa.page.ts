import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from "@angular/router"
import { AuthProvider} from '../providers/auth';
import { FirebaseProvider } from '../providers/firebase';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.page.html',
  styleUrls: ['./cadastro-empresa.page.scss'],
})

export class CadastroEmpresaPage implements OnInit {
 //Imagem Que Vai Aparecer nos Resultados
  image = 'https://www.visaopontocom.com/wp-content/uploads/2017/02/icone-empresa.png'

//Decreta Campos Nos Formularios
cadastroEmpresaForm = {
  nome:'',
  cnpj:'',
  local:''
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


 //criaNovaEmpresa 
 criarNovaEmpresa(){
  this.presentLoadingWithOptions();
   
  // Coloca Campos No DB
  let data = {
      image:this.image,
      name:this.cadastroEmpresaForm.nome,
      local:this.cadastroEmpresaForm.local,
      cnpj:this.cadastroEmpresaForm.cnpj

  };
   
     this.firebaseProvider.postEmpresa(data)
     .then(() =>{
       var alerta;
       alerta = 2;
       this.presentAlert(alerta); 
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
          message:'Empresa Adicionada Com Sucesso',
          buttons: ['OK']
        });
        await alert.present();
        break;
      }
      case 3:{
        const alert = await this.alertController.create({
          header: 'Ops',
          message:'Essa Empresa Ja Existe',
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
