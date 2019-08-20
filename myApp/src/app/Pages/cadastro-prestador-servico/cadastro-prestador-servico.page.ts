import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase';
import { AlertController } from '@ionic/angular';
import { AuthProvider} from '../../providers/auth';

@Component({
  selector: 'app-cadastro-prestador-servico',
  templateUrl: './cadastro-prestador-servico.page.html',
  styleUrls: ['./cadastro-prestador-servico.page.scss'],
})

export class CadastroPrestadorServicoPage implements OnInit {
//Decreta Campos Nos Formularios
cadastroPrestadorForm = {
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
  cadri:'',
  terminolicenca:'',
  plano:'',
  datainicio:'',
  datatermino:'',  
}
cadastro = true;
campos = false;
spinner = false;
camposocultar = true;

  // Construtor
  constructor(   
    private firebaseProvider: FirebaseProvider,
    public alertController: AlertController,
    private authProvider: AuthProvider,
    ) {}
 
 criarNovoPrestador(){
  this.rodarSpinner();
  let data = {
      image:'https://www.visaopontocom.com/wp-content/uploads/2017/02/icone-empresa.png',
      name:this.cadastroPrestadorForm.nome,
      cnpj:this.cadastroPrestadorForm.cnpj,
      estado:this.cadastroPrestadorForm.estado,
      municipio:this.cadastroPrestadorForm.municipio,
      endereco:this.cadastroPrestadorForm.endereco,
      numero:this.cadastroPrestadorForm.numero,
      bairro:this.cadastroPrestadorForm.bairro,
      cep:this.cadastroPrestadorForm.cep,
      telefone:this.cadastroPrestadorForm.telefone,
      contato:this.cadastroPrestadorForm.contato,
      email:this.cadastroPrestadorForm.email,
      ramo:this.cadastroPrestadorForm.email,
      bandeira:this.cadastroPrestadorForm.bandeira,
      potencial:this.cadastroPrestadorForm.potencial,
      prestador:this.cadastroPrestadorForm.prestador,
      representante:this.cadastroPrestadorForm.representante,
      cadri:this.cadastroPrestadorForm.cadri,
      dataTerminoLicenca:this.cadastroPrestadorForm.terminolicenca,
      plano:this.cadastroPrestadorForm.plano,
      datainicio:this.cadastroPrestadorForm.datainicio,
      datatermino:this.cadastroPrestadorForm.datatermino
  };
     this.firebaseProvider.postPrestador(data)
      .then(() =>{
        var alerta;
        alerta = 2;
        this.presentAlert(alerta); 
        this.paraSpinner();
        this.criarLoginParaFuncionario();
        })   
      .catch ((err) =>{
        var alerta;
        alerta = 3;
        this.presentAlert(alerta);  
        this.paraSpinner();  
    }) 
}

 criarLoginParaFuncionario(){
  let data = {
   uid:'',
   nome:'',
   email:'',
   cnpj:'',
   password:'',
   adm:false
  }
  //Criaçao Do Login e Senha Automatico 
  data.nome = this.cadastroPrestadorForm.nome;
  data.cnpj = this.cadastroPrestadorForm.cnpj;

  let nome = this.cadastroPrestadorForm.nome.split(" ", 1);
  data.email = 'funcionario@' + nome[0] +'.com';
  console.log("Email: "+data.email);
  data.password = nome[0] + '@123';
  console.log("Senha: "+ data.password);
 
  //Cria Login Para Funcionario
  this.authProvider.register(data).then((res) => 
  {
    let uid = res.user.uid;
    console.log(res.user.uid);
    data.uid = uid;
    //Registra No Banco Informaçoes Do Usuario 
    this.firebaseProvider.postUser(data)
      .then(() =>{
        console.log("Mandou Usuario Para o DB");
       }) 
        console.log("Registrou Usuario");
      });
  }

  rodarSpinner(){
    this.cadastro = false;
    this.campos = false;
    this.spinner = true;
  }

  paraSpinner(){
    this.cadastro = true;
    this.campos = true;
    this.spinner = false;
    }
   
  mostrarCampos(){
    this.campos = true;
    this.camposocultar = false;
  }

  ocultarCampos(){
    this.campos = false;
    this.camposocultar = true;
  }

  //Alerta De Sucesso ou Nao
  async presentAlert(alerta) {
    switch(alerta){
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
