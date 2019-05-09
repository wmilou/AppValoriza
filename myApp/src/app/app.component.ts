import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Consulta Empresas',
      url: '/controle',
      icon: 'stats'
    },
    {
      title:'Cadastro Usuario',
      url: '/cadastro',
      icon:'person-add'
    },
    {
      title:'Cadastro Empresa',
      url:'/cadastro-empresa',
      icon:'add'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router: Router
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
}
