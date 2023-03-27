import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {

  question!:any;
constructor(private activatedRoute:ActivatedRoute,private accueil:AccueilComponent,private userService:UserService){}
ngOnInit(): void {
  this.activatedRoute.queryParams.subscribe(
    (rep:any)=>{
        console.log(rep.id)
       this.question=this.userService.questions[rep.id];
        console.log(this.question);
    }
  )
}
getUrl(arg:any){
return this.accueil.getURL(arg);
}
onSend(arg:any){
this.accueil.onSend(arg)
}
positif(arg:any){

}
negatif(){

}
}
