import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.scss'],
})
export class TwoWayComponent {
  caralhinho: String = '';
  botaPraFora: String= "";

  mostraCaralho(caralhinho: String): String {
    return this.botaPraFora = caralhinho;
  }
}
