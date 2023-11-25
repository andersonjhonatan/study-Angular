import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { EventComponent } from './event/event.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DataBidingComponent,
    PropertyBindingComponent,
    DiretivasComponent,
    EventComponent,
    TwoWayBindingComponent,
  ],
  template: ` <!-- <app-data-biding></app-data-biding>
    <app-property-binding></app-property-binding>
    <app-two-way-binding></app-two-way-binding>
    <app-event></app-event> -->
    <app-diretivas></app-diretivas>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('app init');
  }
}
