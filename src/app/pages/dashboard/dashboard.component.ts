import { Component, Input, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { PanelButtonsRegisterComponent } from "../panel-buttons-register/panel-buttons-register.component";
import { PanelButtonsSearchComponent } from '../panel-buttons-search/panel-buttons-search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'os-dashboard',
  imports: [MenuComponent, DashboardHeaderComponent, PanelButtonsRegisterComponent, PanelButtonsSearchComponent, CommonModule],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  @Input() nameScreen: string = "";
  @Input() nameBtnSearch: string = "";
  @Input() navigateToSearch: string = "";
  @Input() navigateToRegister: string = "";

  ngOnInit(): void {
    console.log(this.navigateToSearch);
  }

}
