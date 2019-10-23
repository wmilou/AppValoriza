import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase';
import { AlertController } from '@ionic/angular';
import * as jsPDF from 'jspdf';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {

  //Variaveis do Codigo  
  queryText: String;
  allPesos: any;
  Pesos: any;
  informacao;
  spinner = true;
  dadosPeso = false;
  lista = true;
  pesos
  resultado = [];
  consultapor
  botaoRelatorio = true;

  //Variaveis para Consulta 
  datainicio;
  datafim;


  constructor(
    private firebaseProvider: FirebaseProvider,
    private alertController: AlertController,
    private platform: Platform,
  ) {
    this.queryText = '';
    this.verificaPlataforma();
  }
  verificaPlataforma() {
    if (this.platform.is('android')) {
      this.botaoRelatorio = false;
    }
    else {
      this.botaoRelatorio = true;
    }
  }

  //Metodos
  //gerar PDF

  @ViewChild('content') content: ElementRef;

  public downloadPDF() {
    let doc = new jsPDF();

    let specialElementsHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementsHandlers
    });
    doc.save('Relatorio.pdf');

  }

  //Barra De Pesquisa

  filterResiduo(event: any) {
    const val = event.target.value;
    switch (this.consultapor) {
      case 'Cliente': {
        if (val && val.trim() != '') {
          this.Pesos = this.allPesos.filter((Pesos) => {
            return (Pesos.cliente.toLowerCase().indexOf(val.toLowerCase()) > - 1);
          })
        } else {
          this.Pesos = this.allPesos;
        }
        break;
      }
      case 'Motorista': {
        if (val && val.trim() != '') {
          this.Pesos = this.allPesos.filter((Pesos) => {
            return (Pesos.nome.toLowerCase().indexOf(val.toLowerCase()) > - 1);
          })
        } else {
          this.Pesos = this.allPesos;
        }
        break;
      }

      case 'Placa': {
        if (val && val.trim() != '') {
          this.Pesos = this.allPesos.filter((Pesos) => {
            return (Pesos.placa.toLowerCase().indexOf(val.toLowerCase()) > - 1);
          })
        } else {
          this.Pesos = this.allPesos;
        }
        break;
      }

      default: {
        if (val && val.trim() != '') {
          this.Pesos = this.allPesos.filter((Pesos) => {
            return (Pesos.cliente.toLowerCase().indexOf(val.toLowerCase()) > - 1);
          })
        } else {
          this.Pesos = this.allPesos;
        }
        break;
      }
    }
  }

  // Get nos Pesos no Banco Por Data
  getPesos() {
    let datainicio = this.datainicio;
    let datafim = this.datafim;

    var arrDataInicio = datainicio.split("/");
    var stringFormatada = arrDataInicio[2] + '' + arrDataInicio[1] + '' +
      arrDataInicio[0];


    var arrDataFim = datafim.split("/");
    var stringFimFormatada = arrDataFim[2] + '' + arrDataFim[1] + '' +
      arrDataFim[0];

    datainicio = stringFormatada;
    datafim = stringFimFormatada;

    console.log(datainicio);
    console.log(datafim);
    this.firebaseProvider.getRelatorio(datainicio, datafim)
      .then((r) => {
        this.Pesos = r;
        this.allPesos = this.Pesos;
        this.pararSpinner();
      })
  }

  //Metodo Para Ver Informacao Do Peso Solicitado
  verInfo(p) {
    this.informacao = p;
    this.dadosPeso = true;
    this.lista = false;


    var pesos = this.informacao.peso;
    var q = 0
    for (var i in pesos) {
      this.resultado[0] = "Pesos";
      if (pesos.hasOwnProperty(i)) {
        if (pesos[i] != "") {
          q = q + 1;
          this.resultado[q] = i + ": " + pesos[i] + " Kg";
        }
      }
    }
  }

  //Botao Voltar para os Pesos
  voltarConsulta() {
    this.dadosPeso = false;
    this.lista = true;
  }


  //Escolher Tipo De Consulta
  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      header: 'Consultar Por ',
      inputs: [
        {
          name: 'Cliente',
          type: 'radio',
          label: 'Cliente',
          value: 'Cliente',

        },

        {
          name: 'Motorista',
          type: 'radio',
          label: 'Motorista',
          value: 'Motorista'
        },

        {
          name: 'Placa',
          type: 'radio',
          label: 'Placa',
          value: 'Placa'
        },



      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Ok',
          handler: (value) => {
            this.consultapor = value;
          }
        }
      ]
    });
    await alert.present();
  }

  //Para Loading Da Pagina
  pararSpinner() {
    this.spinner = false;
  }
  ngOnInit() {
  }

}
