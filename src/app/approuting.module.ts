import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as pages from './pages/';
import {AdminGuard} from './services/authguard/admin-guard';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: pages.CoverComponent,
    children: [
      { path: 'useredit/:id', component: pages.UserchangeComponent},
      { path: 'userside', component: pages.UsersideComponent }
    ],
    canActivate: [AdminGuard]
  },
  { path: 'login', component: pages.LoginComponent },
  { path: 'about', component: pages.AboutComponent },
  { path: 'home', component: pages.HomeComponent },
  { path: 'unknown', component: pages.UnknownComponent }
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
