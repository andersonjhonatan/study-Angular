import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './header/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TitleComponent],
  template: `<app-title
      title="Mudou"
      name="Anderson"
      email="Gt1g4@example.com"
      *ngIf="aparecer"
    ></app-title>
    <button (click)="destroy()">Destruir</button>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  public aparecer: boolean = true;

  constructor() {}
  destroy(): void {
    this.aparecer = !this.aparecer;
  }
  ngOnInit(): void {
    console.log('Anderson chegou!');
  }
}
