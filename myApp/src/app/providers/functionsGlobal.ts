import { Injectable } from "@angular/core";
import { formatDate } from '@angular/common';

@Injectable()
export class FunctionsGlobal {
  constructor() {

   }
  dataHoje() {
    let jstoday = '';
    let now = new Date();
    jstoday = formatDate(now, 'dd-MM-yyyy HH:mm:ss', 'en-US', '-0300');
    return jstoday;
}
  
}
