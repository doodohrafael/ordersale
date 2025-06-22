import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'os-panel-buttons-search',
  standalone: true,
  imports: [ButtonModule, Toolbar],
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
