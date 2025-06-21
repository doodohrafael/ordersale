import { Component, inject, Input } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';
import { IftaLabelModule } from 'primeng/iftalabel';
import { Toolbar } from 'primeng/toolbar';
import { Router } from '@angular/router';
@Component({
  selector: 'os-panel-buttons-register',
  standalone: true,
  imports: [SharedImports, IftaLabelModule, Toolbar],
  templateUrl: './panel-buttons-register.component.html',
  styleUrl: './panel-buttons-register.component.scss'
})
export class PanelButtonsRegisterComponent {

  @Input() nameBtnSearch: string = "";
  @Input() navigateToSearch: string = "";

  private router: Router = inject(Router);

  public navigateSearch(): void {
    this.router.navigate([this.navigateToSearch]);
    // this.navigateToSearch = '';
  }

}
