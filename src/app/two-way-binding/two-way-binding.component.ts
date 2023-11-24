import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css',
})
export class TwoWayBindingComponent {
  public name: string = '';
  public age: number = 0;
  public readonly placeholder: string = 'Digite seu nome';
  public readonly placeholderAge: string = 'Digite sua idade';
}
