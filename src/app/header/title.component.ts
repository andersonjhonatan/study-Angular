import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  public title = 'Bem vindo ao primeiro projeto!';

  constructor() {}

  public setTitle(title: string) {
    this.title = title;
  }

  public getTitle(): string {
    return this.title;
  }
}
