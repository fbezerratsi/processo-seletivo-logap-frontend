import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider.model';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-provider-read',
  templateUrl: './provider-read.component.html',
  styleUrls: ['./provider-read.component.css']
})
export class ProviderReadComponent implements OnInit {
  providers: Provider[]
  providersStock: Provider[]
  displayedColumns = ['name', 'action']
  displayedColumnsProviderStock = ['name', 'nameProduct', 'amount']

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerService.read().subscribe(providers => {
      this.providers = providers
    })
    this.providerService.readProviderSotck().subscribe(providers => {
      this.providersStock = providers
      console.log('Provider: ', this.providersStock)
    })
  }

}
