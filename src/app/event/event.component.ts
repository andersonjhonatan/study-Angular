import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent {
  private name: string = 'Kalleo';
  public age: number = 25;

  constructor() {}

  onClick(name: string) {
    alert(name);
  }

  public onClick2() {
    alert(this.name);
  }

  public onMouseMove(mouse: MouseEvent) {
    if (mouse.clientX === 100) {
      alert('Encontrei');
    }
  }
}
