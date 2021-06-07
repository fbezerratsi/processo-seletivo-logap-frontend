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
  displayedColumns = ['name', 'action']
  
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerService.read().subscribe(providers => {
      this.providers = providers
    })
  }

}
