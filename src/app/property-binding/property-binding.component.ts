import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css',
})
export class PropertyBindingComponent {
  public PropertyBindingComponent: string = 'Property Binding Component';

  public checkDisabled: boolean = false;
  public widthAlt: string = '300';
  public imgAlt: string = 'Angular';
  public check: boolean = true;
  public imgSrc: string =
    'https://angular.io/assets/images/logos/angular/angular.svg';

  constructor() {}

  public toggleDisabled() {
    this.check = !this.check;
  }


}
