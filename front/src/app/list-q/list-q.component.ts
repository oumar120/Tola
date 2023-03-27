import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { User } from './../model/user.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-list-q',
  templateUrl: './list-q.component.html',
  styleUrls: ['./list-q.component.css']
})
export class ListQComponent {
  form!:FormGroup;
  questions!:any;
  question!:any;
  user!:User;
  file!:File;
  constructor(private userService:UserService,private formBuilder:FormBuilder,private router:Router){

  }
ngOnInit(): void {
  this.initForm();
  this.questions=this.userService.questions;
  this.user=JSON.parse(this.userService.getData() || '{}');
}
initForm(){
  this.form=this.formBuilder.group({
    id:0,
    id_question:0,
    content:'',
    image:''
  });
}
onSubmit(){
   let data=new FormData();
   data.append('id',this.form.get('id')?.value);
   data.append('id_question',this.form.get('id_question')?.value);
   data.append('content',this.form.get('content')?.value);
   data.append('image',this.form.get('image')?.value);
   this.userService.saveR(data).subscribe(
    (rep)=>{
       this.router.navigate(['home']);
    },
    (error)=>{console.log(error);}
   );
}
onUpload(event:any){
this.file=event.target.files[0];
this.form.get('image')?.setValue(this.file);
}
onSend(question:any){
this.question=question;
this.form.get('id')?.setValue(this.user.id);
this.form.get('id_question')?.setValue(question.id);
}
}
