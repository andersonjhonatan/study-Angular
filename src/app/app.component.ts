import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { EventComponent } from './event/event.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { SharedModule } from './shared/shared.module';
import { InputComponent } from './shared/input/input.component';
import { OutputComponent } from './shared/output/output.component';

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
    PipesComponent,
    SharedModule,
    InputComponent,
    OutputComponent,
  ],
  template: ` <app-header></app-header>
    <app-data-biding></app-data-biding>
    <!-- <app-property-binding>

      </app-property-binding>
      <app-two-way-binding></app-two-way-binding>
      <app-event></app-event> -->
    <!-- ngContent -->
    <!-- <app-diretivas>
        <h1 class="card-title">Título do Cartão</h1>
        <h1 class="card-content">Conteúdo do Cartão</h1>
    </app-diretivas> -->

    <!-- <app-pipes></app-pipes>
    <app-footer></app-footer>
    <app-input [contact]="newContact" [disabled]="disabled"></app-input>
    <button (click)="addNewContact()">Adicionar</button>
    <button (click)="disabledTreino()">Esconder / Mostrar</button> -->

    <ng-template [ngIf]="getDados">
      <div>
        {{ getDados.nome }}
        {{ getDados.idade }}
      </div>
    </ng-template>

    <ng-template [ngIf]="getDadosAlls">
      <div *ngFor="let getDadosAlls of getDadosAlls">
        {{ getDadosAlls.nome }}
        {{ getDadosAlls.idade }}
      </div>
    </ng-template>

    <app-output
      (enviarDados)="getDadosAll($event)"
      (enviarDados)="setDados($event)"
    >
    </app-output>
    <router-outlet></router-outlet>`,
})
export class AppComponent {
  public newContact: string = 'jose';
  public disabled: boolean = true;
  @Output() public getDados: { nome: string; idade: number } | undefined;
  @Output() public getDadosAlls: [{ nome: string; idade: number }] | undefined;

  public addNewContact() {
    this.newContact = 'Anderson';
  }

  public disabledTreino() {
    this.disabled = !this.disabled;
  }

  public setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
  }

  public getDadosAll(event: [{ nome: string; idade: number }]) {
    this.getDadosAlls = event;
  }
}
