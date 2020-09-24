import { Component, ViewChild } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //@ViewChild('f') signupForm: NgForm;

  title = 'Form handling-Angular7';
  
  user: User = new User();
  submitted = false;
  users=[];


  constructor(){}

  createUser(user: Object) {
    console.log(user);
     this.users.push(user);
  }

  onSubmit(){
    this.submitted = true;
    this.createUser(this.user);
   // this.signupForm.reset();
  }

}
