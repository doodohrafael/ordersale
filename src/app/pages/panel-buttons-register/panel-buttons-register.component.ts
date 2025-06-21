import { Component } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';
import { IftaLabelModule } from 'primeng/iftalabel';
import { Toolbar } from 'primeng/toolbar';
@Component({
  selector: 'os-panel-buttons-register',
  standalone: true,
  imports: [SharedImports, IftaLabelModule, Toolbar],
  templateUrl: './panel-buttons-register.component.html',
  styleUrl: './panel-buttons-register.component.scss'
})
export class PanelButtonsRegisterComponent {

}
