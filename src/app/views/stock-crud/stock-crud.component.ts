import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-stock-crud',
  templateUrl: './stock-crud.component.html',
  styleUrls: ['./stock-crud.component.css']
})
export class StockCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Estoque',
      icon: 'storefront',
      routeUrl: '/stocks'
    }
  }

  ngOnInit(): void {
  }

  navigateToStockCreate(): void {
    this.router.navigate(['/stocks/create'])
  }

}
