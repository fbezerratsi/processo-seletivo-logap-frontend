import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-provider-crud',
  templateUrl: './provider-crud.component.html',
  styleUrls: ['./provider-crud.component.css']
})
export class ProviderCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Fornecedores',
      icon: 'storefront',
      routeUrl: '/providers'
    }
  }

  ngOnInit(): void {
  }

  navigateToProviderCreate(): void {
    this.router.navigate(['/providers/create'])
  }

}
