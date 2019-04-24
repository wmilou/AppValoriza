import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  url: string = "http://192.168.15.16/PhpValoriza/";


  constructor(public http: Http) { }

  getPegar(){
    return this.http.get(this.url+'Valoriza.php').pipe(map(res => res.json()));
  
  }
}

