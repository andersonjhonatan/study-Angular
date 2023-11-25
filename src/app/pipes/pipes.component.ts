import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  public date: Date = new Date();
  public bithday: Date = new Date(2023, 11, 15);
  public name: string = 'Anderson';
  public age: number = 25;


  public forPipe: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public forPipe2: string[] = [
    'Kalleo',
    'Jose',
    'Anderson',
    'Bruno',
    'Kesley',
    'Bruna',

  ];
}
