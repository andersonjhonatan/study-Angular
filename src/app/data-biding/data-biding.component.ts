import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-biding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-biding.component.html',
  styleUrl: './data-biding.component.css'
})
export class DataBidingComponent implements OnInit {

  public name: string = 'Bruno';
  public sex: string = 'male';
  public age: number = 25;

  constructor() {}

  ngOnInit(): void {}

}
