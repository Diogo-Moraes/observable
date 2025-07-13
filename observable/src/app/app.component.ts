import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './services/app.component.service';
import { ConnectableObservable } from 'rxjs';
import { ListaEInterfaceComponent } from './componentes/lista-einterface/lista-einterface.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'observable';

  constructor(private appComponentService: AppComponentService) {}
  ngOnInit() {
    this.appComponentService.fetchData().subscribe({
      next: (usuario) => {
        // nunca será chamado em caso de erro
        console.log('Dados recebidos:', usuario);
      },
    });
  }
}
