import { Component } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormControl, FormGroup } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
  selector: 'os-search-product',
  standalone: true,
  imports: [DashboardComponent, SharedImports, IftaLabelModule],
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.scss'
})
export class SearchProductComponent {

  public formSearchProduct: FormGroup = new FormGroup({
    sku: new FormControl(''),
    name: new FormControl(''),
  });;

}
