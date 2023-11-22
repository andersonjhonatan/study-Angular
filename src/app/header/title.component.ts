import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent implements OnChanges, OnDestroy {
  @Input() title: string = 'Bem vindo ao primeiro projet!';
  @Input() name: string = 'Name';
  @Input() email: string = 'Email';


  ngOnChanges(): void {
    console.log('Anderson mudou!');
  }

  ngOnDestroy(): void {
    console.log('Anderson destruiu!');
  }
}
