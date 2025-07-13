//crio uma interface animal para moralizar o uso do objeto animal.
// recebo um animal na funcao altero o valor da variavel (uma string) e depois imprimo ela na tela

import { Component } from '@angular/core';
import { Animais } from 'src/app/Animais';

@Component({
  selector: 'app-lista-einterface',
  templateUrl: './lista-einterface.component.html',
  styleUrls: ['./lista-einterface.component.scss'],
})
export class ListaEInterfaceComponent {
  animais: Animais[] = [
    { nome: 'Juca', idade: 3 },
    { nome: 'Bidu', idade: 5 },
  ];

  idadeAnimal!: String;
  
  mostraIdade(animal: Animais) {
    this.idadeAnimal = `a idade do corno em qestao é ${animal.idade} anos`;
  }
}
