import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SharedImports } from '../../shared/shared-imports';
import { FormControl, FormGroup } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
  selector: 'os-register-product',
  imports: [DashboardComponent, SharedImports, IftaLabelModule],
  standalone: true,
  templateUrl: './register-product.component.html',
  styleUrl: './register-product.component.scss'
})
export class RegisterProductComponent implements OnInit {

  public formRegisterProduct: FormGroup = new FormGroup({
      name: new FormControl(''),
    });;

  ngOnInit() {
  }
}

