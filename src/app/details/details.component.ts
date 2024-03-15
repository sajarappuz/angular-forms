import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
    <div class="box">
      <h3>{{message.name}}</h3>
      <span>{{message.email}}</span>
      <span>{{message.message}}</span>
      <button (click)="onDelete()">Delete</button>
    </div>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
@Input() message: any = {};
@Input() index:number = 1;
@Output() delete : EventEmitter<number> = new EventEmitter<number>();
 onDelete(){
  this.delete.emit(this.index)
 }
}
