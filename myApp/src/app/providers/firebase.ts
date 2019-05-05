import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";


@Injectable()
export class FirebaseProvider {
  constructor(private afs: AngularFirestore) { }

//Cria usuario no firebase
postUser = data =>
  this.afs
    .collection("Users")
    .doc(data.uid)
    .set(data);

//Puxa Usuario Do firebase
getUser(uid){
  return this.afs.firestore.collection('Users').doc(uid)
  .get();
}
// Puxa Os Dados Das Empresas
getEmpresas(){
  return new Promise((resolve, reject) =>{
    this.afs.firestore.collection('Empresas').get()
    .then((r) =>{
      let array = [];
        r.forEach((d) => {
        let item = d.data();
        item.id =  d.id;
        array.push(item);
        });
        resolve(array);    
      })
    })
  }

  // Metodo Cadastra Empresa
  postEmpresa = data =>
  this.afs.firestore.collection('Empresas').add(data);
}



  