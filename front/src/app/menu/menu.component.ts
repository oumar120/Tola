import { Router } from '@angular/router';
import { AccueilComponent } from './../accueil/accueil.component';
import { User } from './../model/user.model';
import { UserService } from './../services/user.service';
import { NgForm } from '@angular/forms';
import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
user!:User;
constructor(private userService:UserService,private accueil:AccueilComponent,private router:Router){}
ngOnInit(): void {
  this.user=JSON.parse(this.userService.getData() || '{}');
}
onSubmit(f:NgForm){
   this.userService.saveQ(f.value).subscribe(
    (reponse)=>{
      this.userService.getQ().subscribe(
        ()=>{
         window.location.reload();
        }
      )
    }
    );
}
}
