import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseProvider } from '../../providers/firebase';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home-funcionario',
  templateUrl: './home-funcionario.page.html',
  styleUrls: ['./home-funcionario.page.scss'],
})
export class HomeFuncionarioPage implements OnInit {
  empresa = String;
  cnpj = String;
  
  lanca = true;
  spinner = false;


  constructor(
    private alertController:AlertController,
    private firebaseProvider:FirebaseProvider,
    private afAuth: AngularFireAuth,
    private router: Router,
    private storage: Storage
    ) {
      this.getUsuario();
     }

    funcionarioForm = {
      placa:'',
      nomeEmpresa:'',
      nome:'',
      cnpj:'',
      peso:''
    }
     //criaNovaConta
 enviarPeso(){
  this.rodarSpinner();
      // Coloca Campos No DB
      let data = {
        placa:this.funcionarioForm.placa,
        nomeEmpresa:this.empresa,
        nome:this.funcionarioForm.nome,
        cnpj:this.cnpj,
        peso:this.funcionarioForm.peso
     };

     this.firebaseProvider.postPeso(data)
     .then(() =>{
       this.paraSpinner();
       this.presentAlert(2);
      }) 
     .catch (() =>{
        this.presentAlert(3);
        this.paraSpinner();
      }) 
 }
  // Loading 
  rodarSpinner(){
    this.lanca = false;
    this.spinner = true;
  }
    //Parar Loading
  paraSpinner(){
    this.lanca = true;
    this.spinner = false;
    }
  signOut(){
    this.afAuth.auth.signOut();
    this.router.navigate(['login'])
  }
  getUsuario(){
    this.storage.get('usuario')
    .then((res) => {
       this.empresa = res.nome;
       this.cnpj = res.cnpj 
     })
   }

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
          message: 'Peso Lançado Com Sucesso',
          buttons: ['OK']
        });
        await alert.present();
        break;
      }
      case 3:{
        const alert = await this.alertController.create({
          header: 'Ops',
          message:'Não Foi Possivel Enviar Este Peso',
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
   Limpar(){  
    this.funcionarioForm = {
      placa:'',
      nome:'',
      nomeEmpresa:'',
      cnpj:'',
      peso:''
    }
   }

  ngOnInit() {
  }

}
