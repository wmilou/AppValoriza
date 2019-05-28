import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, storage, router) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.router = router;
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'Cadastro Usuario',
                url: '/cadastro-usuario',
                icon: 'person-add'
            },
            {
                title: 'Cadastro Cliente',
                url: '/cadastro-empresa',
                icon: 'add-circle'
            },
            {
                title: 'Consulta Clintes',
                url: '/controle',
                icon: 'stats'
            },
        ];
        this.initializeApp();
    }
    // Decide para onde vai o usuario
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.storage.get('usuario')
            .then(function (usuario) {
            if (usuario.adm == true) {
                _this.router.navigate(['home']);
            }
            else {
                if (usuario.adm == false) {
                    _this.router.navigate(['home-funcionario']);
                }
                else
                    _this.router.navigate(['login']);
            }
        });
        this.platform.ready().then(function () {
            //Muda Cor da Barra De Status
            _this.statusBar.backgroundColorByHexString('#17b336');
            _this.splashScreen.hide();
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            Storage,
            Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map