import { Component, OnInit } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormControl, FormGroup } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { DatePickerModule } from 'primeng/datepicker';
import { Select } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
  selector: 'os-register-order',
  imports: [
    DashboardComponent,
    SharedImports,
    IftaLabelModule,
    DatePickerModule,
    Select,
    InputNumberModule,
    TableModule,
    AutoComplete,
  ],
  templateUrl: './register-order.component.html',
  styleUrl: './register-order.component.scss'
})
export class RegisterOrderComponent implements OnInit {

  public clients: any[] = [];
  public payments: any[] = [];
  public products: any[] = [];
  public items: any[] = [];

  public formRegisterOrder: FormGroup = new FormGroup({
    selectedClient: new FormControl<any | null>(null),
    selectedPayment: new FormControl<any | null>(null),
    shippingCosts: new FormControl(''),
    discountAmount: new FormControl(''),
    quantity: new FormControl(1),
    selectedCountry: new FormControl(undefined),

  });

  ngOnInit() {
    this.clients = [
      { name: 'Augusto Santos', code: 'NY' },
      { name: 'Gabriel Afonso', code: 'RM' },
      { name: 'Maria Selestina', code: 'LDN' },
      { name: 'Alice Campos', code: 'IST' },
      { name: 'Eduardo Vincente', code: 'PRS' },
    ];

    this.payments = [
      { name: 'Pix', code: 'pix' },
      { name: 'Cartão de crédito', code: 'cc' },
      { name: 'Cartão de débito', code: 'cd' },
    ];

    this.products = [
      {
        sku: '0',
        name: '0',
        unitValue: '0',
        quantity: '0',
        stock: '0',
        totalValue: '0',
      },
      {
        sku: 'CC008',
        name: 'Colchão',
        unitValue: 'R$245,99',
        quantity: 24,
        stock: 51,
        totalValue: 'R$245,99',
      }
    ];
  }

  removeItem() {
    throw new Error('Method not implemented.');
  }

  filterCountry($event: AutoCompleteCompleteEvent) {
    console.log($event.query);
  }

  search(event: AutoCompleteCompleteEvent) {
    this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
  }

}
