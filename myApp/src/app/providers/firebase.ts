import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

@Injectable()
export class FirebaseProvider {
  constructor(private afs: AngularFirestore) {}

//Metodos De Get DO Banco
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

   consultaCnpj(cnpj){
    return new Promise((resolve, reject) =>{
      this.afs.firestore.collection('Empresas').where("cnpj","==",cnpj).get()
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


//Retorna Os Residuos Do Banco 
  getResiduos(){
    return new Promise((resolve, reject) =>{
      this.afs.firestore.collection('Tipos-Residuo').get()
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


//Retorna Os Residuos Do Banco 
  getPlanos(){
    return new Promise((resolve, reject) =>{
      this.afs.firestore.collection('Tipos-Planos').get()
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


//Retorna Os Prestadores de serviço 
  getPrestador(){
    return new Promise((resolve, reject) =>{
      this.afs.firestore.collection('Prestador-Servico').get()
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
    
//Retorna Os Representante
  getRepresentante(){
    return new Promise((resolve, reject) =>{
      this.afs.firestore.collection('Representantes').get()
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


//Pega Informaçoes Do Residuo no Banco
// Get logs pesos consulta
getlogs(){
  return new Promise((resolve, reject) =>{
    this.afs.firestore.collection('logs').orderBy('data','desc').get()
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

  //get logs Relatorio
  getRelatorio(datainicio,datafim){
    return new Promise((resolve, reject) =>{
      this.afs.firestore.collection('logs').orderBy('dataconsulta','desc').where('dataconsulta','>=',datainicio).where('dataconsulta','<=',datafim).get()
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

//Metodos Posts Para Inserçao De Dados

  // Metodo Cadastra Plano
  postPeso = data =>
  this.afs.firestore.collection('logs').add(data);

  // Metodo Cadastra Plano
  postPlano = data =>
  this.afs.firestore.collection('Tipos-Planos').add(data);

  // Metodo Cadastra Residuo
  postResiduo = data =>
  this.afs.firestore.collection('Tipos-Residuo').add(data);
  
  // Metodo Cadastra Empresa
  postEmpresa = data =>
  this.afs.firestore.collection('Empresas').add(data);

  // Metodo Cadastra Representante
  postRepresentante = data =>
  this.afs.firestore.collection('Representantes').add(data);

  // Metodo Cadastra Prestador
  postPrestador = data =>
  this.afs.firestore.collection('Prestador-Servico').add(data);

  //Cria usuario no firebase
  postUser = data =>
  this.afs
    .collection("Users")
    .doc(data.uid)
    .set(data);

}





  