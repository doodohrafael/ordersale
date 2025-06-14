import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';

@Component({
  selector: 'os-menu',
  imports: [PanelMenu],
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pedidos',
        icon: 'pi pi-clipboard',
        items: [
          {
            label: 'Cadastrar pedido',
            icon: 'pi pi-plus'
          },
          {
            label: 'Histórico de pedidos',
            icon: 'pi pi-list'
          }
        ]
      },
      {
        label: 'Clientes',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Cadastrar cliente',
            icon: 'pi pi-user-plus'
          },
          {
            label: 'Ver clientes',
            icon: 'pi pi-list'
          }
        ]
      },
      {
        label: 'Produtos',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Cadastrar produto',
            icon: 'pi pi-plus'
          },
          {
            label: 'Ver produtos',
            icon: 'pi pi-list'
          }
        ]
      }
    ]
  }

}
