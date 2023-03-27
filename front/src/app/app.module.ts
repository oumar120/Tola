import { UserService } from './services/user.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule}      from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { QuestionComponent } from './question/question.component';
import {MatDialogModule}  from '@angular/material/dialog';
import {MatCardModule,MatCardActions} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule}  from '@angular/material/list'
import { ListQComponent } from './list-q/list-q.component';
import { QrComponent } from './qr/qr.component';
const appRoute: Routes=[
  {path:"",component:AuthPageComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"home",component:AccueilComponent},
  {path:"question",component:ListQComponent},
  {path:'home/qr',component:QrComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    RegistrationComponent,
    AccueilComponent,
    MenuComponent,
    QuestionComponent,
    ListQComponent,
    QrComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoute),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  providers: [
    UserService,
    AccueilComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
