import { Component, Input } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { PanelButtonsRegisterComponent } from "../panel-buttons-register/panel-buttons-register.component";

@Component({
  selector: 'os-dashboard',
  imports: [MenuComponent, DashboardHeaderComponent, PanelButtonsRegisterComponent],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  @Input() nameScreen: string = "Dashboard";

}
