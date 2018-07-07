import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ApproutingModule} from './approuting.module';

import { CoverComponent } from './pages/cover/cover.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UnknownComponent } from './pages/unknown/unknown.component';
import { ApiService, UserService } from './services/';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { UsersideComponent } from './pages/userside/userside.component';
import { UserchangeComponent } from './pages/userchange/userchange.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    UnknownComponent,
    UserchangeComponent,
    UsersideComponent
  ],
  imports: [
    Angular2FontawesomeModule,
    BrowserModule,
    FormsModule,
    ApproutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    ApiService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
