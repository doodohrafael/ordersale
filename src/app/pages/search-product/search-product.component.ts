import { Component } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormControl, FormGroup } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'os-search-product',
  standalone: true,
  imports: [DashboardComponent, SharedImports, IftaLabelModule, TableModule],
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.scss'
})
export class SearchProductComponent {
  public products: any[] = [
    {
      code: 'PRD-001',
      name: 'Notebook Gamer',
      category: 'Eletrônicos',
      quantity: 15
    },
    {
      code: 'PRD-002',
      name: 'Smartphone Pro',
      category: 'Telefonia',
      quantity: 32
    },
    {
      code: 'PRD-003',
      name: 'Teclado Mecânico',
      category: 'Acessórios',
      quantity: 45
    },
    {
      code: 'PRD-004',
      name: 'Monitor 27"',
      category: 'Monitores',
      quantity: 8
    },
    {
      code: 'PRD-005',
      name: 'Mouse Sem Fio',
      category: 'Acessórios',
      quantity: 22
    },
    {
      code: 'PRD-006',
      name: 'Headphone Bluetooth',
      category: 'Áudio',
      quantity: 17
    },
    {
      code: 'PRD-007',
      name: 'Webcam Full HD',
      category: 'Acessórios',
      quantity: 12
    }
  ];

  public formSearchProduct: FormGroup = new FormGroup({
    sku: new FormControl(''),
    name: new FormControl(''),
  });;

}
