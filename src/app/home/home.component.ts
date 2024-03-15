import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, DetailsComponent],
  template: `
     <div class="main-container">
       <h1>Add User</h1>
       <div>
        <form> 
          <div class="first-sec">
         <div class="each-field">
         <label for="name">Name</label>
         <input type="email" [(ngModel)]="name" placeholder="Enter your name.." name="name"/>
         </div>
         <div class="each-field">
         <label for="email">Email</label>
         <input type="email" name="email" [(ngModel)]="email" placeholder="Enter your email..">
         </div>
         <div class="each-field">
         <label for="message">Message</label>
         <textarea cols="4" rows="4"  placeholder="Enter your message.." name="message" [(ngModel)]="message"></textarea>
         </div>
          </div>
         <div class="button-sec">
          <button type="submit" (click)="onSubmit()">Send</button>
         </div>
       </form>
       </div>
       
       <div *ngIf="isSubmitted"  class="display-sec">
        <app-details 
        *ngFor="let msg of messages; let i = index"
        [message]="msg"
        [index] = "i"
        (delete)="deleteBox(i)"
        ></app-details>
       </div>
     </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  onSubmit(){
    this.isSubmitted = true;
    this.messages.push({
      'name': this.name,
      'email': this.email,
      'message': this.message
    })
    console.log(this.messages)
  }
  deleteBox(index:number){
    this.messages.splice(index,1)
    console.log(index)
  }
}
