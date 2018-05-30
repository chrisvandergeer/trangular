import { Injectable } from '@angular/core';
import {TransaktieRestservice} from "./transaktie.restservice";

@Injectable({
  providedIn: 'root'
})
export class TransaktieServiceService {

  constructor(private transaktieRestservice: TransaktieRestservice) { }

  getAllTransakties() {
    return this.transaktieRestservice.getTransakties();
  }
}
