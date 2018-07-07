import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { IAuthData } from '../../shared/interfaces';
import { ApiService } from '../../services/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public user: IAuthData = {email: '', password: ''};
  constructor(
    private api: ApiService,
    private router: Router,
  ) {}
  public ngOnInit() {
    console.log('LoginComponent inited');
  }

  public authenticate(data: IAuthData) {
    console.log('data', data);
    if (data.email && data.password) {
      this.api.post('/signin', {email: data.email, password: data.password}).subscribe(
        (user) => {
          if (user && user.data && user.data.authToken) {
            localStorage.setItem('currentUser', JSON.stringify(user.data));
            console.log(localStorage.getItem('currentUser'));
            this.router.navigate([ '', 'userside' ]);
          }
          return user;
        },
        (err: any) => {
          console.log('err', err);
        }
      );
    }
  }
}
