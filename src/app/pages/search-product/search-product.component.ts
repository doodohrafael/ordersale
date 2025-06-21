import { Component } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'os-search-product',
  standalone: true,
  imports: [SharedImports, DashboardComponent],
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.scss'
})
export class SearchProductComponent {

}
