import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Provider } from '../provider.model';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-provider-update',
  templateUrl: './provider-update.component.html',
  styleUrls: ['./provider-update.component.css']
})
export class ProviderUpdateComponent implements OnInit {

  provider: Provider;

  constructor(
    private providerService: ProviderService,
    private router: Router,
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    const provider_id = this.route.snapshot.paramMap.get("provider_id");
    this.providerService.readById(provider_id).subscribe((provider) => {
      this.provider = provider;
      //console.log("Provider: ", this.provider)
    });
  }

  updateProvider(): void {
    this.providerService.update(this.provider).subscribe(() => {
      this.providerService.showMessage("Fornecedor atualizado com sucesso!");
      this.router.navigate(["/providers"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/providers"]);
  }

}
