import {Component, OnInit} from '@angular/core';
import {TransaktieService} from "../transaktie/transaktie.service";
import {Transaktie} from "../transaktie/transaktie";

@Component({
  selector: 'app-transakties',
  templateUrl: './transakties.component.html',
  styleUrls: ['./transakties.component.css']
})
export class TransaktiesComponent implements OnInit {

  transakties: Transaktie[];

  constructor(private transaktieService: TransaktieService) {
  }

  ngOnInit() {
    this.getTransakties();
  }

  getTransakties() {
    this.transaktieService.getTransakties()
      .subscribe((transakties: Transaktie[]) => {
        this.transakties = transakties;
      });

  }

}
