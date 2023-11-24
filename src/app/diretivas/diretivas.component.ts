import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css',
})
export class DiretivasComponent {

  public condicao = true;
  public mostrar = true

  public diretivasFor = [
    {
      id: 1,
      name: 'Kalleo',
      idade: 25,
      sex: 'male',
    },
    {
      id: 2,
      name: 'Jose',
      idade: 15,
      sex: 'male',
    },
    {
      id: 3,
      name: 'Anderson',
      idade: 25,
      sex: 't',
    },
  ];

  public getClasses() {
    return {
      'classe-ativa': this.condicao,
      'classe-inativa': !this.condicao,
      'classe-idade': this.mostrar
    };
  }
}
