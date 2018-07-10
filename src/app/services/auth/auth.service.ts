import {IAuthData} from '../../shared/interfaces';
import {Injectable} from '@angular/core';
import {ApiService} from '../index';
import {Router} from '@angular/router';

@Injectable()

export class AuthService {
  public logged = false;
  public user: IAuthData = {email: '', password: ''};
  constructor(
    private api: ApiService,
    private router: Router,
  ) {}
  public authenticate(data: IAuthData) {
    console.log('data', data);
    if (data.email && data.password) {
      this.api.post('/signin', {email: data.email, password: data.password}).subscribe(
        (user) => {
          if (user && user.data && user.data.authToken) {
            localStorage.setItem('currentUser', JSON.stringify(user.data));
            console.log(localStorage.getItem('currentUser'));
            this.user.email = user.data.email;
            // this.router.navigate([ '', 'home' ]);
            // location.reload();
          }
        },
        (err: any) => {
          console.log('err', err);
        }
      );
    }
  }

  public userloggedin() {
    if (localStorage.getItem('currentUser')) {
      this.logged = true;
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      console.log('Json', JSON.stringify(localStorage.getItem('currentUser')));
    }
  }
  public logOutFunk() {
    localStorage.removeItem('currentUser');
    // location.reload();
  }

}
