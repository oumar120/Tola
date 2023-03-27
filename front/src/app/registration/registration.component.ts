import { UserService } from './../services/user.service';
import { Component} from '@angular/core';
import {NgForm}     from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  reponse!:string;
  isExist!:boolean;
  constructor(private userService:UserService,private router:Router){}

  onSubmit(form:NgForm){
    this.userService.onSaveUser(form.value).subscribe(
      (reponse)=>{
         console.log(reponse);
         this.router.navigate([""]);
      },
      (error)=>{
          this.isExist=true;
          alert("le mail que vous avez saisi existe déjà!\n veuillez vous connecter ou choisir un autre");
      }
    )
  }
}
