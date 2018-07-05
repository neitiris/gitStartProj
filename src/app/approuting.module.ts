import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as pages from './pages/';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: pages.LoginComponent },
  { path: 'home', component: pages.HomeComponent },
  { path: 'about', component: pages.AboutComponent },
  { path: 'unknown', component: pages.UnknownComponent },
  { path: 'userside', component: pages.UsersideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class ApproutingModule {

}

// import { Routes } from '@angular/router';
// import * as pages from './pages/';
//
// export const ROUTES: Routes = [
//   { path: '', component: pages.LoginComponent },
//   { path: 'login', component: pages.LoginComponent },
//   { path: 'home', component: pages.HomeComponent },
//   { path: 'about', component: pages.AboutComponent },
// ];
