import { Component, OnInit } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase';
import { ToastController } from '@ionic/angular';
import { AuthProvider } from '../../providers/auth';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { AngularFireStorage } from 'angularfire2/storage';
@Component({
  selector: 'app-cadastro-prestador-servico',
  templateUrl: './cadastro-prestador-servico.page.html',
  styleUrls: ['./cadastro-prestador-servico.page.scss'],
})

export class CadastroPrestadorServicoPage implements OnInit {
  //Decreta Campos Nos Formularios
  cadastroPrestadorForm = {
    nome: '',
    cnpj: '',
    estado: '',
    municipio: '',
    endereco: '',
    numero: '',
    bairro: '',
    cep: '',
    telefone: '',
    contato: '',
    email: '',
    ramo: '',
    bandeira: '',
    potencial: '',
    prestador: '',
    representante: '',
    cadri: '',
    plano: '',
    datainicio: '',
    datatermino: '',
    vencimentoCadri: '',
    vencimentoLO: '',
    vencimentoAlvara: '',
    vencimentoCR: '',
    vencimentoCLCB: '',
    vencimentoCEVS: '',
    vencimentoPPRA: '',
    vencimentoPCMSO: '',
    vencimentoPPRAePCMSO: '',
    vencimentoContratoSocial: '',
  }
  //variavel para armazenamento do documento
  documentoselecionado;

  cadastro = true;
  campos = false;
  spinner = false;
  camposocultar = true;

  // Construtor
  constructor(
    private firebaseProvider: FirebaseProvider,
    private toastController: ToastController,
    private authProvider: AuthProvider,
    private fileChooser: FileChooser,
    private file: File,
    private afStorage: AngularFireStorage,
  ) {
  }
  //verificaçao da platafroma para a mudanda de modo de upar documento


  criarNovoPrestador(informacaoLogin) {
    this.rodarSpinner();
    let data = {
      image: 'https://www.visaopontocom.com/wp-content/uploads/2017/02/icone-empresa.png',
      name: this.cadastroPrestadorForm.nome,
      cnpj: this.cadastroPrestadorForm.cnpj,
      estado: this.cadastroPrestadorForm.estado,
      municipio: this.cadastroPrestadorForm.municipio,
      endereco: this.cadastroPrestadorForm.endereco,
      numero: this.cadastroPrestadorForm.numero,
      bairro: this.cadastroPrestadorForm.bairro,
      cep: this.cadastroPrestadorForm.cep,
      telefone: this.cadastroPrestadorForm.telefone,
      contato: this.cadastroPrestadorForm.contato,
      email: this.cadastroPrestadorForm.email,
      ramo: this.cadastroPrestadorForm.email,
      bandeira: this.cadastroPrestadorForm.bandeira,
      potencial: this.cadastroPrestadorForm.potencial,
      prestador: this.cadastroPrestadorForm.prestador,
      representante: this.cadastroPrestadorForm.representante,
      plano: this.cadastroPrestadorForm.plano,
      datainicio: this.cadastroPrestadorForm.datainicio,
      datatermino: this.cadastroPrestadorForm.datatermino,
      login: informacaoLogin.email,
      senha: informacaoLogin.password,
      vencimentoCadri: this.cadastroPrestadorForm.vencimentoCadri,
      vencimentoLO: this.cadastroPrestadorForm.vencimentoLO,
      vencimentoAlvara: this.cadastroPrestadorForm.vencimentoAlvara,
      vencimentoCR: this.cadastroPrestadorForm.vencimentoCR,
      vencimentoCLCB: this.cadastroPrestadorForm.vencimentoCLCB,
      vencimentoCEVS: this.cadastroPrestadorForm.vencimentoCEVS,
      vencimentoPPRA: this.cadastroPrestadorForm.vencimentoPPRA,
      vencimentoPCMSO: this.cadastroPrestadorForm.vencimentoPCMSO,
      vencimentoPPRAePCMSO: this.cadastroPrestadorForm.vencimentoPPRAePCMSO,
      vencimentoContratoSocial: this.cadastroPrestadorForm.vencimentoContratoSocial,
    };
    this.firebaseProvider.postPrestador(data)
      .then(() => {
        this.presentAlert("Prestador Cadastrado Com Sucesso");
        this.paraSpinner();
      })
      .catch((err) => {
        this.presentAlert("Não foi Possivel Cadastrar o Prestador");
        this.paraSpinner();
      })
  }

  DocumentoSelecionado(event) {
    this.documentoselecionado = event.target.files[0];
    console.log(this.documentoselecionado);
    this.uparDocumento(this.documentoselecionado, this.documentoselecionado.name)
  }

  async selecionarDocumento() {
    this.fileChooser.open().then((uri) => {
      alert(uri);

      this.file.resolveLocalFilesystemUrl(uri).then((newuri) => {
        alert(JSON.stringify(newuri));

        let dirpath = newuri.nativeURL;
        let dirpathsegments = dirpath.split('/');
        dirpathsegments.pop();
        dirpath = dirpathsegments.join('/');

        this.file.readAsArrayBuffer(dirpath, newuri.name).then((buffer) => {
          alert("Upando");
          this.uparDocumento(buffer, newuri.name);
        })
      })
    })
  }

  async uparDocumento(buffer, name) {
    let blob = new Blob([buffer], { type: "pdf" });
    this.afStorage.ref('pdfs/' + name).put(blob).then((d) => {
      alert("Done");
    }).catch((erro) => {
      alert("Erro:" + JSON.stringify(erro));
    });
  }


  criarLoginParaFuncionario() {
    let data = {
      uid: '',
      nome: '',
      email: '',
      cnpj: '',
      password: '',
      adm: false
    }
    //Criaçao Do Login e Senha Automatico
    data.nome = this.cadastroPrestadorForm.nome;
    data.cnpj = this.cadastroPrestadorForm.cnpj;

    let nome = this.cadastroPrestadorForm.nome.split(" ", 1);
    let cnpj = this.cadastroPrestadorForm.cnpj.toString().substring(1, 4);
    data.email = 'funcionario@' + nome[0] + cnpj + '.com';
    console.log("Email: " + data.email);
    data.password = nome[0] + '@123';
    console.log("Senha: " + data.password);

    //Cria Login Para Funcionario
    this.authProvider.register(data).then((res) => {
      let uid = res.user.uid;
      data.uid = uid;
      //Registra No Banco Informaçoes Do Usuario 
      this.firebaseProvider.postUser(data)
        .then(() => {
          console.log("Mandou Usuario Para o DB");
          this.criarNovoPrestador(data);
        })
      console.log("Registrou Usuario");
    });
  }

  rodarSpinner() {
    this.cadastro = false;
    this.campos = false;
    this.spinner = true;
  }

  paraSpinner() {
    this.cadastro = true;
    this.campos = true;
    this.spinner = false;
  }

  mostrarCampos() {
    this.campos = true;
    this.camposocultar = false;
  }

  ocultarCampos() {
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
