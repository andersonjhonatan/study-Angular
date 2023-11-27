import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css',
})
export class OutputComponent {
  @Output() public enviarDados = new EventEmitter();

  public dados: Array<{ nome: string; idade: number }> = [
    {
      nome: 'Kesley',
      idade: 4,
    },
    {
      nome: 'Anderson',
      idade: 31,
    },
    {
      nome: 'Kalleo',
      idade: 14,
    },
  ];

  public enviarDados2(event: number) {
    this.enviarDados.emit(this.dados[event]);
  }

  public enviarDados3() {
    this.enviarDados.emit(this.dados);
  }
}
