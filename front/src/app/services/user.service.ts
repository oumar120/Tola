import { User } from './../model/user.model';
import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class UserService{
reponse!:boolean;
questions!:any;
constructor(private httpClient:HttpClient){}
 public onSaveUser(user:[]):Observable<any>{
  const url="http://127.0.0.1:8000/api/registration";
  return this.httpClient.post<any>(url,user);
}
public onGetUser(user:User){
  const url="http://127.0.0.1:8000/api/login/"+user.email+"/"+user.password;
  return this.httpClient.get<any>(url);
}
saveData(user:User){
  sessionStorage.setItem("user",JSON.stringify(user));
}
getData(){
 return sessionStorage.getItem("user");
}
removeData(){
  sessionStorage.removeItem("user");
}
saveQ(question:{}){
  const url="http://127.0.0.1:8000/api/setdata";
  return this.httpClient.post<any>(url,question);
}
saveR(reponse:any){
  const url="http://127.0.0.1:8000/api/setreponse";
  return this.httpClient.post<any>(url,reponse);
}
getQ(){
  const url="http://127.0.0.1:8000/api/getQ/";
  return this.httpClient.get<any>(url);
}
getR(){
  const url="http://127.0.0.1:8000/api/getR/";
  return this.httpClient.get<any>(url);
}
saveC(comment:any){
  const url="http://127.0.0.1:8000/api/setC";
  return this.httpClient.post<any>(url,comment);
}
getC(id:number){
  const url="http://127.0.0.1:8000/api/getC/"+id;
  return this.httpClient.get<any>(url);
}
saveV(vote:any){
  const url="http://127.0.0.1:8000/api/setvote";
  return this.httpClient.post<any>(url,vote);
}
getV(vote:any){
  const url="http://127.0.0.1:8000/api/getV/"+vote.id_user+"/"+vote.id_reponse;
  return this.httpClient.get<any>(url);
}
deleteV(vote:any){
  
}
}