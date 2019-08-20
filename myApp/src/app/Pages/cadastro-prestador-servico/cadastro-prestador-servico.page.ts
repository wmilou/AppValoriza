import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase';
import { ToastController } from '@ionic/angular';
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
    private toastController: ToastController,
    private authProvider: AuthProvider,
    ) {}
 
 criarNovoPrestador(informacaoLogin){
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
      datatermino:this.cadastroPrestadorForm.datatermino,
      login:informacaoLogin.email,
      senha:informacaoLogin.password
  };
     this.firebaseProvider.postPrestador(data)
      .then(() =>{
        this.presentAlert("Prestador Cadastrado Com Sucesso"); 
        this.paraSpinner();
        })   
      .catch ((err) =>{
        this.presentAlert("Não foi Possivel Cadastrar o Prestador");  
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
  let cnpj = this.cadastroPrestadorForm.cnpj.toString().substring(1,4);
  data.email = 'funcionario@' + nome[0] + cnpj +'.com';
  console.log("Email: "+ data.email);
  data.password = nome[0] + '@123';
  console.log("Senha: "+ data.password);
 
  //Cria Login Para Funcionario
  this.authProvider.register(data).then((res) => 
  {
    let uid = res.user.uid;
    data.uid = uid;
    //Registra No Banco Informaçoes Do Usuario 
    this.firebaseProvider.postUser(data)
      .then(() =>{
        console.log("Mandou Usuario Para o DB");
        this.criarNovoPrestador(data);
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
  async presentAlert(mensagem) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 5000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
