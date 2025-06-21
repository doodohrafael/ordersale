import { AvatarModule } from 'primeng/avatar';
import { Component, Input, OnInit } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { NgClass } from '@angular/common';

@Component({
  selector: 'os-dashboard-header',
  imports: [Toolbar, ButtonModule, InputTextModule, ToastModule, AvatarModule, ConfirmDialog, NgClass],
  providers: [MessageService, ConfirmationService],
  standalone: true,
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss'
})
export class DashboardHeaderComponent implements OnInit {

  @Input() nameScreen: string = "";
  public items: MenuItem[] = [];

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload']
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io'
      }
    ];
  }

  confirm() {
    this.confirmationService.confirm({
      header: 'Sair do sistema',
      message: 'Você realmente deseja sair do sistema?',
      rejectButtonProps: {
        label: 'Voltar',
        icon: 'pi pi-times',
        outlined: true,
        size: 'small',
        severity: 'info'
      },
      acceptButtonProps: {
        label: 'Sair',
        icon: 'pi pi-check',
        size: 'small',
        severity: 'danger'
      }
    });
  }
}
