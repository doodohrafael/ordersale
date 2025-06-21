import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedImports } from '../../shared/shared-imports';
import { Toolbar } from 'primeng/toolbar';

@Component({
  selector: 'os-panel-buttons-search',
  standalone: true,
  imports: [SharedImports, Toolbar],
  templateUrl: './panel-buttons-search.component.html',
  styleUrl: './panel-buttons-search.component.scss'
})
export class PanelButtonsSearchComponent {

  @Input() navigateToRegister: string = "";

  private router: Router = inject(Router);

  public navigateRegister(): void {
    this.router.navigate([this.navigateToRegister]);
  }

}
