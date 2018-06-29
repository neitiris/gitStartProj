import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutesComponent } from '../routes/routes.component';
import { ServicesComponent } from './services/services.component';
import { SharedComponent } from './shared/shared.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    ServicesComponent,
    SharedComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
