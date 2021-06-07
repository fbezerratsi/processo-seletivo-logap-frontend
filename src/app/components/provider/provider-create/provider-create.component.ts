import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/category.service';
import { Provider } from '../provider.model';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-provider-create',
  templateUrl: './provider-create.component.html',
  styleUrls: ['./provider-create.component.css']
})
export class ProviderCreateComponent implements OnInit {

  provider: Provider = {
    name: '',
  }

  constructor(private providerService: ProviderService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProvider(): void {
    this.providerService.create(this.provider).subscribe(() => {
      this.providerService.showMessage('Fornecedor criado!')
      this.router.navigate(['/providers'])
    })
  }

  cancel(): void {
    this.router.navigate(['/providers'])
  }
}
