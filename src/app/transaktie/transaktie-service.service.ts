import {Injectable} from '@angular/core';
import {TransaktieRestservice} from "./transaktie.restservice";
import {HttpClient} from "@angular/common/http";
import {Transaktie} from "./transaktie";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransaktieServiceService {

  constructor(private transaktieRestService: TransaktieRestservice) {
  }

  getAllTransakties() {
    return this.transaktieRestService.getTransakties();
  }

  filterTransakties(tegenrekening: string) {
    return this.transaktieRestService.getTransakties()
      .subscribe((transakties: Transaktie[]) => {
        transakties.filter(tr => tr.tegenrekeningNaam.search('Geer') != -1)
      });
  }

}
