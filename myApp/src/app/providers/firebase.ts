import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { getDefaultService } from 'selenium-webdriver/edge';

@Injectable()
export class FirebaseProvider {
  constructor(private afs: AngularFirestore) { }

//Create user on firestore
postUser = data =>
  this.afs
    .collection("Users")
    .doc(data.uid)
    .set(data);

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
}



  