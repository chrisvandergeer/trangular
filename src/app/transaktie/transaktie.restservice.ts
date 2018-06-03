import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Transaktie} from "./transaktie";

@Injectable({
  providedIn: 'root'
})
export class TransaktieRestservice {

  transaktiesUrl = 'assets/transakties.json';

  constructor(private http: HttpClient) { }

  getTransakties(): Observable<Object> {
    return this.http.get('http://localhost:3000/transakties');
  }

}
