import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './header/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TitleComponent],
  template: `<app-title
      title="Anderson - Angular"
      name="Anderson"
      email="Gt1g4@example.com"
      *ngIf="aparecer"
    ></app-title>
    <button (click)="destroy()" [disabled]="!aparecer">Destruir</button>
    {{ Destrui }}
    <button (click)="aparecer = !aparecer" [disabled]="aparecer">Mostrar</button>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  public aparecer: boolean = true;
  public Destrui: string = '';

  constructor() {}
  destroy(): void {
    this.aparecer = false;
    this.Destrui = 'Agora foi bem Destruido';
  }
  ngOnInit(): void {
    console.log('Anderson chegou!');
  }
}
