import { User } from './../model/user.model';
import { UserService } from './../services/user.service';
import { Component,OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  reponses:any;
  form!:FormGroup
  question!:{
    'id':number,
    'content':string
  };
  user!:User;
  compteur:number=0;
  comments!:any;
  clicked:boolean=false;
  constructor(private userService:UserService,private formBuilder:FormBuilder){}
ngOnInit(): void {
  this.userService.getR().subscribe(
    (rep)=>{
      this.reponses=rep;
    }
  );
  this.userService.getQ().subscribe(
    (rep)=>{
      this.userService.questions=rep;  
    }
  )
  this.user=JSON.parse(this.userService.getData() || '{}');
}

onAddComment(id:number){
  this.form=this.formBuilder.group({
    content:''
  });
  this.userService.getC(id).subscribe(
    (rep)=>{
      this.comments=rep;
      console.log(this.comments);
    }
  )
}
onSubmitForm(data:any){
   this.form.addControl('user_id',new FormControl(data.user_id));
   this.form.addControl('reponse_id',new FormControl(data.reponse_id));
   this.userService.saveC(this.form.value).subscribe(
    ()=>{
      this.form.get('content')?.setValue('');
      this.userService.getC(data.reponse.id).subscribe(
        (rep)=>{
          this.comments=rep;
        }
      )
    }
   )
}
onSubmit(f:NgForm){
   this.userService.saveR(f.value).subscribe(
    (rep)=>{
       window.location.reload();
    });
}
onSend(i:number){
this.reponses.subscribe(
  (rep:any)=>{
    this.question=rep[i];
  });
}
positif(vote:any){
  if(!this.clicked){
    this.clicked=true;
    this.compteur++;
  }
  else{
  this.clicked=false;
  this.compteur--;
  }
 /*this.userService.getV(vote).subscribe(
  (rep)=>{
   if(!rep.id){
    this.reponses[vote.id_reponse].vote.length++;
    this.userService.saveV(vote);
   }
   else{
    this.reponses[vote.id_reponse].vote.length--;
    this.userService.deleteV(vote);
   }
  }
 )*/
}
negatif(){

}
getURL(reponse:any){
  const style={
    'background-image':"url(http://127.0.0.1:8000/uploads/"+reponse+")",
    'background-size':"cover"
  }
  return style;
}
}
