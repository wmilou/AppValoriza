import { Injectable } from "@angular/core";
import { formatDate } from '@angular/common';

@Injectable()
export class FunctionsGlobal {
  constructor() {

   }
  dataHoje() {
    let datahoje = '';
    let now = new Date();
    datahoje = formatDate(now,'yyyyMMdd','en-US' ,'-0300');
    console.log(datahoje);
    return datahoje;
}
  dataHojeApresentar(){
    let datahoje = '';
    let now = new Date();
    datahoje = formatDate(now,'dd/MM/yyyy','en-US' ,'-0300');
    console.log(datahoje);
    return datahoje;
  }
  horaagora(){
    let hora= '';
    let now = new Date();
    hora = formatDate(now, 'HH:mm:ss', 'en-US', '-0300');
    console.log(hora);
    return hora;
  }  
}
