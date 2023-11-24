import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css',
})
export class DiretivasComponent {
  public condicao = true;
  public mostrar = true;
  public name: string = '';
  public placeholder: string = 'Digite seu nome';

  public diretivasFor: Array<{
    id: number;
    name: string;
    idade: number;
    sex: string;
  }> = [
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
      'classe-idade': this.mostrar,
    };
  }

  public onClickMostre() {
    this.mostrar = !this.mostrar;
  }

  public adicionar() {
    this.diretivasFor.push({
      id: this.diretivasFor.length + 1,
      name: 'Bruno',
      idade: 25,
      sex: 'male',
    });
  }

  public remover(event: number) {
    this.diretivasFor.splice(event, 1);
  }

  public isName(name: string) {
    return name.trim().toLowerCase();
  }
}
