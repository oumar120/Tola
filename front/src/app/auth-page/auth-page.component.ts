import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {
  constructor(private userService:UserService, private router:Router){}
onSubmit(form:NgForm){
  this.userService.onGetUser(form.value).subscribe(
    (reponse)=>{
     this.userService.saveData(reponse);
     this.router.navigate(["/home"]);
    },
    (error)=>{
     alert("email ou mot de passe incorrect");
    }
  )
}
}
