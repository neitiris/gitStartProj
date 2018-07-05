import {Component, OnInit, ViewEncapsulation} from '@angular/core';
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
  constructor(private api: ApiService) {
  }

  public ngOnInit() {
    console.log('LoginComponent inited');
  }

  public authenticate(data: IAuthData) {
    console.log('data', data);
    if (data.email && data.password) {
      this.api.post('signin', {email: data.email, password: data.password}).subscribe(
        (user) => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
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

