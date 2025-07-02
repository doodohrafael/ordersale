import { Component, inject, Input } from '@angular/core';
import { IftaLabelModule } from 'primeng/iftalabel';
import { Toolbar } from 'primeng/toolbar';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'os-panel-buttons-register',
  standalone: true,
  imports: [ButtonModule, IftaLabelModule, Toolbar, DividerModule],
  templateUrl: './panel-buttons-register.component.html',
  styleUrl: './panel-buttons-register.component.scss'
})
export class PanelButtonsRegisterComponent {

  @Input() nameBtnSearch: string = "";
  @Input() navigateToSearch: string = "";

  private router: Router = inject(Router);

  public navigateSearch(): void {
    this.router.navigate([this.navigateToSearch]);
  }

}
