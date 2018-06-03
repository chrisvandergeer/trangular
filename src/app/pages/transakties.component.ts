import {Component, OnInit} from '@angular/core';
import {Transaktie} from "../transaktie/transaktie";
import {TransaktieServiceService} from "../transaktie/transaktie-service.service";

@Component({
  selector: 'app-transakties',
  templateUrl: './transakties.component.html',
  styleUrls: ['./transakties.component.css']
})
export class TransaktiesComponent implements OnInit {

  // zoek resultaat
  transakties: Transaktie[];

  // zoek velden
  filter_tegenrekening: string;
  filter_omschrijving: string;
  filter_soort: string;
  filter_debetcredit: string;
  filter_maand: number;
  filter_jaar: number;
  filter_tag: string;

  constructor(private transaktieService: TransaktieServiceService) {
  }

  ngOnInit() {
    this.getTransakties();
  }

  getTransakties() {
    this.transaktieService.getAllTransakties()
      .subscribe((transakties: Transaktie[]) => {
        this.transakties = transakties;
      });
  }

  filterTransakties() {
    this.transaktieService.getAllTransakties()
      .subscribe((transakties: Transaktie[]) => {
        this.transakties = transakties
          .filter(tr =>
            (
              this.filter_tegenrekening == undefined || this.filter_tegenrekening === '' ||
              ('' + tr.tegenrekeningNaam).search(this.filter_tegenrekening) > -1 ||
              ('' + tr.tegenrekeningNummer).search(this.filter_tegenrekening) > -1
            ) && (
              this.filter_omschrijving == undefined || this.filter_omschrijving === '' ||
              ('' + tr.omschrijving1).search(this.filter_omschrijving) > -1 ||
              ('' + tr.omschrijving2).search(this.filter_omschrijving) > -1 ||
              ('' + tr.omschrijving3).search(this.filter_omschrijving) > -1 ||
              ('' + tr.omschrijving4).search(this.filter_omschrijving) > -1
            ) && (
              this.filter_soort == undefined || this.filter_soort === '' ||
              tr.soortTransaktie.search(this.filter_soort) > -1
            ) && (
              this.filter_debetcredit === null || this.filter_debetcredit === '' ||
              tr.debetCredit.search(this.filter_debetcredit) > -1
            ) && (
              this.filter_maand == undefined || this.filter_maand.toString() === '' ||
              tr.maand == this.filter_maand
            ) && (
              this.filter_jaar == undefined || this.filter_jaar.toString() === '' ||
              tr.jaar == this.filter_jaar
            ) && (
              this.filter_tag == undefined || this.filter_tag === '' ||
              tr.tags.find(s => s === this.filter_tag)
            )
          )
      });
  }

}
