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
  condicao;
// Variavel Para Armazenamento Das Empresas
  empresas;

//Variaveis Para Tratar Os Planos
  planos;

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
      this.getPlanos();
   }

//Puxa Empresas
getIdEmpresas(){
    this.firebaseProvider.getIdEmpresas()
    .then((array) =>{
    this.empresas = array;
    for(let i in this.empresas){
      this.empresas[i] = this.empresas[i].cnpj;
    }})
  }

  // Recupera Dados Das Empresas Do firebase
  getPlanos(){
      this.firebaseProvider.getPlanos()
      .then((r) =>{
      this. planos = r;
      })
    }


//Verificacoes 
verifica(){
  //Verifica Se Os Campos Estao Preenchidos
  if(this.cadastroEmpresaForm.nome == ''){
    this.presentAlert(1,'Preencha o Campo Nome')
    }else{
    if(this.cadastroEmpresaForm.cnpj == ''){ 
    this.presentAlert(1,'Preencha o Campo Cnpj')
    }else
    {
    if(this.cadastroEmpresaForm.estado == ''){

      this.presentAlert(1,'Preencha o Campo Estado')
    }
    else{
      if(this.cadastroEmpresaForm.municipio == ''){
  
        this.presentAlert(1,'Preencha o Campo Municipio')
      }else{
        if(this.cadastroEmpresaForm.endereco == ''){
    
          this.presentAlert(1,'Preencha o Campo Endereço')
        }else{
          if(this.cadastroEmpresaForm.numero == ''){
      
            this.presentAlert(1,'Preencha o Campo Numero')
          }else{
            if(this.cadastroEmpresaForm.bairro == ''){
        
              this.presentAlert(1,'Preencha o Campo Bairro')
            }else{
              if(this.cadastroEmpresaForm.cep == ''){
          
                this.presentAlert(1,'Preencha o Campo CEP')
              }else{
                if(this.cadastroEmpresaForm.telefone == ''){
            
                  this.presentAlert(1,'Preencha o Campo Telefone')
                }else{
                  if(this.cadastroEmpresaForm.contato == ''){
              
                    this.presentAlert(1,'Preencha o Campo Contato')
                  }else{
                    if(this.cadastroEmpresaForm.email == ''){
                
                      this.presentAlert(1,'Preencha o Campo Email')
                    }else{
                      if(this.cadastroEmpresaForm.ramo == ''){
                  
                        this.presentAlert(1,'Preencha o Campo Ramo')
                      }else{
                        if(this.cadastroEmpresaForm.bandeira == ''){
                    
                          this.presentAlert(1,'Preencha o Campo Bandeira')
                        }else{
                          if(this.cadastroEmpresaForm.potencial == ''){
                      
                            this.presentAlert(1,'Preencha o Campo Potencial')
                          }else{
                            if(this.cadastroEmpresaForm.prestador == ''){
                        
                              this.presentAlert(1,'Preencha o Campo Prestador')
                            }else{
                              if(this.cadastroEmpresaForm.representante == ''){
                          
                                this.presentAlert(1,'Preencha o Campo Representante')
                              }else{
                                if(this.cadastroEmpresaForm.plano == ''){
                            
                                  this.presentAlert(1,'Preencha o Campo Plano')
                                }else{ if(this.cadastroEmpresaForm.datainicio == ''){
                            
                                  this.presentAlert(1,'Preencha o Campo Data Inicio!')
                                }else{
                                  if(this.cadastroEmpresaForm.datatermino == ''){
                              
                                    this.presentAlert(1,'Preencha o Campo Data Termino')
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
                                     this.verificaEmpresa();
                                   }
                                 }
                               }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
}

//Verifica Se A Empresa Ja Esta Cadastrada 
verificaEmpresa(){
if (this.condicao == false){
  this.criarNovaEmpresa();
  this.getIdEmpresas();
}else{if(this.condicao = true){
  this.presentAlert(3,null);
}}}

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
     ramo:this.cadastroEmpresaForm.ramo,
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
       this.presentAlert(alerta ,null);
       //Para A Tela De Loading 
       this.paraSpinner();
        })   
    
     .catch ((err) =>{
      var alerta = 3;
      //Apresenta Alerta De Erro
      this.presentAlert(alerta,null); 
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
  async presentAlert(alerta, mensagem) {
    switch(alerta){
      case 1:{
        const alert = await this.alertController.create({
          header: 'Obrigatorio',
          message:mensagem,
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
