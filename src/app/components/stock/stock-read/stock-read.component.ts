import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock.model';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-read',
  templateUrl: './stock-read.component.html',
  styleUrls: ['./stock-read.component.css']
})
export class StockReadComponent implements OnInit {
  stocks: Stock[]
  displayedColumns = ['name', 'amount', 'action']
  
  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.stockService.read().subscribe(stocks => {
      this.stocks = stocks
    })
  }

}
