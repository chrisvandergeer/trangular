import {Component, OnInit} from '@angular/core';
import {Transaktie} from "../transaktie/transaktie";
import {TransaktieServiceService} from "../transaktie/transaktie-service.service";

@Component({
  selector: 'app-transakties',
  templateUrl: './transakties.component.html',
  styleUrls: ['./transakties.component.css']
})
export class TransaktiesComponent implements OnInit {

  transakties: Transaktie[];

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

}
