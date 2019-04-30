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
      title: 'Controle',
      url: '/controle',
      icon: 'stats'
    },
    {
      title:'Cadastro',
      url: '/cadastro',
      icon:'person-add'
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
          if(usuario){
            this.router.navigate(['home']); 
          }else{
            this.router.navigate(['login'])
          }
      })



      this.platform.ready().then(() => {
        this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByHexString('#36FF33');
      this.splashScreen.hide();
    });
  }
}
