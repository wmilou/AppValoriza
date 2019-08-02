import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseProvider } from '../../providers/firebase';
import { FunctionsGlobal } from '../../providers/functionsGlobal';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { isNull } from 'util';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home-funcionario',
  templateUrl: './home-funcionario.page.html',
  styleUrls: ['./home-funcionario.page.scss'],
})

export class HomeFuncionarioPage implements OnInit {
  //Variaveis do Codigo
  representante = String;
  cnpj = String;
  lanca = true;
  spinner = false;
  procurarCnpjEmpresa = false;
  clientemostrar = false;
  cliente;
  residuo;

  //Decreta Campos No Formulario
  funcionarioForm = {
    placa:'',
    nomeRepresentante:this.representante,
    nome:'',
    cnpj:this.cnpj,
    peso:'',
    consultaEmpresa:''
  }  
  pesosForm
  
  constructor(
    private alertController:AlertController,
    private firebaseProvider:FirebaseProvider,
    private functionsGlobal:FunctionsGlobal,
    private afAuth: AngularFireAuth,
    private router: Router,
    private storage: Storage
    ) {
      this.dadosFunc();
      this.getEmpresa();
      this.getResiduo();
     }
//Busca Dados do Funcionario
     dadosFunc(){
      this.storage.get('Funcionario')
      .then((res) => {
        this.funcionarioForm.nome = res;
      })

      this.storage.get('Placa')
      .then((res) => {
        this.funcionarioForm.placa = res;
      })
     }
//Metodos      
    //Busca Dados Empresa
    getEmpresa(){
      this.storage.get('usuario')
      .then((res) => {
        this.representante = res.nome;
        this.cnpj = res.cnpj 
      })
    }

    //Da Um Get Nos Residuos do Banco 
    getResiduo(){
      this.firebaseProvider.getResiduos()
      .then((r) =>{
      this.residuo = r;
    })}

   //Botao De Enviar Pesos
    onSubmit(f: NgForm) {
      this.rodarSpinner();
      this.pesosForm = f.value
      // Cria o Obj Com as Variveis 
      let data = {
        placa:this.funcionarioForm.placa,
        nomeEmpresa:this.representante,
        nome:this.funcionarioForm.nome,
        cnpj:this.cnpj,
        peso:this.pesosForm,
        cliente:this.cliente.name,
        dataconsulta:this.functionsGlobal.dataHoje(),
        data:this.functionsGlobal.dataHojeApresentar(),
        hora:this.functionsGlobal.horaagora(),
      }
      //Envia Para o Banco o Obj
     this.firebaseProvider.postPeso(data)
     .then(() =>{
       this.btnvoltar();
       this.paraSpinner();
       this.presentAlert(2, null);
      }) 
     .catch (() =>{
        this.paraSpinner();
        this.presentAlert(3, null);
      })
    }
    

    
    //Verifica Campos DO Formulario
     verificaFunc(){
      if(this.funcionarioForm.placa == ''){
        this.presentAlert(1,'Digite A Placa ')
      }else{if(this.funcionarioForm.nome == ''){
        this.presentAlert(1,'Preencha o seu Nome')
      }else{
        this.procurarEmpresa();
     }}
    }

    //Muda De Pagina Para Consulta Da Empresa
    procurarEmpresa(){
        this.storage.set('Funcionario',this.funcionarioForm.nome);
        this.storage.set('Placa',this.funcionarioForm.placa);
        this.lanca = false;
        this.spinner = false;
        this.procurarCnpjEmpresa = true;
    }

    //Consulta Empresas no Banco Para Conferir com o CNPJ
    btnConsultar(){
        this.cliente = isNull;
        var empresas;
        this.firebaseProvider.getEmpresas()
        .then((array) =>{
        empresas = array;
        for(let i in empresas){
          if(this.funcionarioForm.consultaEmpresa == empresas[i].cnpj){
            this.cliente = empresas[i];
            this.clientemostrar = true;
            this.procurarCnpjEmpresa = false;
            this.lanca = false;
            
         }}}).then(()=>{ 
         if(this.cliente == isNull ){
          this.presentAlert(1,"Empresa Não Encontrada");
        }})
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
    //Deslogar    
      signOut(){
        this.afAuth.auth.signOut();
        this.router.navigate(['login'])
      }
    //Botao Para Voltar Pagina
     btnvoltar(){
       this.procurarCnpjEmpresa = false;
       this.clientemostrar = false;
       this.lanca = true;
       this.spinner = false;
       this.Limpar(2);
     }


  //Metodo Limpar Campos
    Limpar(caso){       
      switch(caso){
        case 1:{
          this.cliente = null;
          this.funcionarioForm = {
            placa:'',
            nome:'',
            nomeRepresentante:this.representante,
            cnpj:this.cnpj,
            peso:'',
            consultaEmpresa:null
          }}
          
        case 2:{
            this.cliente = null;
            this.funcionarioForm = {
              placa : this.funcionarioForm.placa,
              nome : this.funcionarioForm.nome,
              nomeRepresentante:this.representante,
              cnpj:this.cnpj,
              peso:'',
              consultaEmpresa:null

            }
          }
        }
      }

    //Alertas Pre Configurados
     async presentAlert(alerta, mensagem) {
      switch(alerta){
        case 1:{
          const alert = await this.alertController.create({
            header: 'Obrigatorio',
            message: mensagem,
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

    ngOnInit() {
    }

} 
