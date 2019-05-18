import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthProvider {

  constructor(
    private afAuth: AngularFireAuth
  ) {
  }

  //Metodo Cria Usuario
  register = (data) => this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password);

  //Loga Usuario
  login = (data) => this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password);
}