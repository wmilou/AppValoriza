import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
login = true;
cadastro = false;
  constructor(private router: Router) { }

  logar(){
  this.router.navigate(['home'])
  }

  exibirRegistro(){
    this.login = false;
    this.cadastro = true;
  }
  exibirLogin(){
    this.login = true;
this.cadastro = false;
  }

 
  
  ngOnInit() {
  }

}
