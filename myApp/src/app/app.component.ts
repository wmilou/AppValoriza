import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  subPageCadastro;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title:'Cadastros',
      children:[
        {
          title:'Cadastro Usuario',
          url:'/cadastro-usuario',
          icon:'arrow-dropright'
        },
        {
          title:'Cadastro Cliente',
          url:'/cadastro-empresa',
          icon:'arrow-dropright'
        },
        {
          title:'Cadastro Prest. Servico',
          url:'/cadastro-prestador-servico',
          icon:'arrow-dropright'
        },
        {
          title:'Cadastro Representante',
          url:'/cadastro-representante-comercial',
          icon:'arrow-dropright'
        },
        {
          title:'Cadastro Residuo',
          url:'/cadastro-residuo',
          icon:'arrow-dropright'
        },
        {
          title:'Cadastro Tipos De Planos',
          url:'/cadastro-tipos-planos',
          icon:'arrow-dropright'
        }
      ]
    },
    {
      title: 'Consulta Clientes',
      url: '/controle',
      icon: 'stats'
    },
    
    
    
   
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router: Router,
    private afAuth: AngularFireAuth,
  ) {
    this.initializeApp();
  }

  // Decide para onde vai o usuario
  initializeApp() {
      this.storage.get('usuario')
      .then((usuario) => {
          if(usuario.adm == true){
            this.router.navigate(['home']); 
          }else{
            if(usuario.adm == false){
              this.router.navigate(['home-funcionario'])
            }else
            this.router.navigate(['login'])
          }
      })

      
      this.platform.ready().then(() => {
      //Muda Cor da Barra De Status
      this.statusBar.backgroundColorByHexString('#17b336');
      this.splashScreen.hide();
    });

    
  }
  signOut(){
    this.afAuth.auth.signOut();
    this.router.navigate(['login'])
    }

}
