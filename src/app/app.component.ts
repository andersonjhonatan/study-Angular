import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DataBidingComponent,
    PropertyBindingComponent,
  ],
  template: ` <app-data-biding></app-data-biding>
    <app-property-binding></app-property-binding>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('app init');
  }
}
