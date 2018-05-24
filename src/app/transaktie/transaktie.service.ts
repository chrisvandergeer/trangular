import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Transaktie} from "./transaktie";

@Injectable({
  providedIn: 'root'
})
export class TransaktieService {

  transaktiesUrl = 'assets/transakties.json';

  constructor(private http: HttpClient) { }

  public helloWorld() {
    return " Hello world";
  }

  getTransakties() {
    return this.http.get(this.transaktiesUrl);
  }

}
