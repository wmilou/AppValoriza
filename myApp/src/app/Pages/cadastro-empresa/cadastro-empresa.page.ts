import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.page.html',
  styleUrls: ['./cadastro-empresa.page.scss'],
})

export class CadastroEmpresaPage implements OnInit {
 //Imagem Que Vai Aparecer nos Resultados
  image = 'https://www.visaopontocom.com/wp-content/uploads/2017/02/icone-empresa.png'

// Mostra Ou Oculta Os Campos Do Formualrio
  cadastro = true;
  campos = false;
  spinner = false;
  camposocultar = true;
  condicao = false;

// Variavel Para Armazenamento Das Empresas
  empresas;


//Decreta Campos Nos Formularios
cadastroEmpresaForm = {
  nome:'',
  cnpj:'',
  estado:'',
  municipio:'',
  endereco:'',
  numero:'',
  bairro:'',
  cep:'',
  telefone:'',
  contato:'',
  email:'',
  ramo:'',
  bandeira:'',
  potencial:'',
  prestador:'',
  representante:'',
  plano:'',
  datainicio:'',
  datatermino:''
}


  // Construtor
  constructor(   
    private firebaseProvider: FirebaseProvider,
    public alertController: AlertController,
    
    ) {
      this.getIdEmpresas();
   
   }

//puxa Empresas
getIdEmpresas(){
    this.firebaseProvider.getIdEmpresas()
    .then((array) =>{
    this.empresas = array;
    for(let i in this.empresas){
      this.empresas[i] = this.empresas[i].cnpj;
    }})
  }

//Verifica Se Empresa Ja Esta Cadastarda(Falta Terminar)
verifica(){
  if(this.cadastroEmpresaForm.cnpj == ''){
    let alerta = 1; 
    this.presentAlert(alerta)
  }else{

for(let i in this.empresas){
        if(this.cadastroEmpresaForm.cnpj == this.empresas[i]){
          this.condicao = true;
      }else{
        this.condicao = false;
      }
      if(this.condicao == true){
        break;
    }
  }
}


if (this.condicao == false){
  this.criarNovaEmpresa();
  this.getIdEmpresas();
}else{
  let alerta = 3;
  this.presentAlert(alerta);
}
}


//Metodo Cria Nova Empresa 
 criarNovaEmpresa(){
  //Chama Metodo Rodas Spinner
  this.rodarSpinner();
   
  // Coloca Valores Dos Formularios nos devidos campos Do Firebase
   let data = {
      image:this.image,
      name:this.cadastroEmpresaForm.nome,
      cnpj:this.cadastroEmpresaForm.cnpj,
      estado:this.cadastroEmpresaForm.estado,
      municipio:this.cadastroEmpresaForm.municipio,
      endereco:this.cadastroEmpresaForm.endereco,
      numero:this.cadastroEmpresaForm.numero,
      bairro:this.cadastroEmpresaForm.bairro,
      cep:this.cadastroEmpresaForm.cep,
      telefone:this.cadastroEmpresaForm.telefone,
      contato:this.cadastroEmpresaForm.contato,
      email:this.cadastroEmpresaForm.email,
      ramo:this.cadastroEmpresaForm.email,
      bandeira:this.cadastroEmpresaForm.bandeira,
      potencial:this.cadastroEmpresaForm.potencial,
      prestador:this.cadastroEmpresaForm.prestador,
      representante:this.cadastroEmpresaForm.representante,
      plano:this.cadastroEmpresaForm.plano,
      datainicio:this.cadastroEmpresaForm.datainicio,
      datatermino:this.cadastroEmpresaForm.datatermino
  };

    //Manda Dados Para O servidor
     this.firebaseProvider.postEmpresa(data)
     .then(() =>{
       var alerta = 2;
       //Apresenta Alerta
       this.presentAlert(alerta);
       //Para A Tela De Loading 
       this.paraSpinner();
        })   
    
     .catch ((err) =>{
      var alerta = 3;
      //Apresenta Alerta De Erro
      this.presentAlert(alerta); 
      //Para Spinner De Loading
      this.paraSpinner();  
  }) 
 }

  // Loading 
  rodarSpinner(){
    this.cadastro = false;
    this.campos = false;
    this.spinner = true;
  }

  //Parar Loading
  paraSpinner(){
    this.cadastro = true;
    this.campos = true;
    this.spinner = false;
  }
  
  //Mostrar Demais Campos Do Formulario  
  mostrarCampos(){
    this.campos = true;
    this.camposocultar = false;
  }
  //OCultar Campos Do Formulario
  ocultarCampos(){
    this.campos = false;
    this.camposocultar = true;

  }

  //Alertas
  async presentAlert(alerta) {
    switch(alerta){
      case 1:{
        const alert = await this.alertController.create({
          header: 'Obrigatorio',
          message:'Campo De Cnpj Obrigatorio',
          buttons: ['OK']
        });
        await alert.present();
        break;
      }
      case 2:{
        const alert = await this.alertController.create({
          header: 'Sucesso',
          message:'Empresa Adicionada Com Sucesso',
          buttons: ['OK']
        });
        await alert.present();
        break;
      }
      case 3:{
        const alert = await this.alertController.create({
          header: 'Ops',
          message:'Essa Empresa Ja Existe',
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
