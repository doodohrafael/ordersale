import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SharedImports } from '../../shared/shared-imports';
import { FormControl, FormGroup } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { IftaLabelModule } from 'primeng/iftalabel';
import { Select } from 'primeng/select';

@Component({
  selector: 'os-register-product',
  imports: [DashboardComponent, SharedImports, FloatLabel, IftaLabelModule, Select],
  standalone: true,
  templateUrl: './register-product.component.html',
  styleUrl: './register-product.component.scss'
})
export class RegisterProductComponent implements OnInit {

  categories: any[] = [];
  items: any[] = [];

  public formRegisterProduct: FormGroup = new FormGroup({
    name: new FormControl(''),
    sku: new FormControl(''),
    unitValue: new FormControl(''),
    quantityStock: new FormControl(''),
    category: new FormControl(null),
    subCategory: new FormControl(null),
  });;

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      }
    ];

    this.categories = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

}

