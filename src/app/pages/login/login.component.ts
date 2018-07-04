import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { IAuthData } from '../../shared/interfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public user: IAuthData = { email: '', password: '' };

  constructor() { }

  public ngOnInit() {
    console.log('LoginComponent inited');
  }

  public authenticate(data: IAuthData) {
    console.log('data', data);
    if (data.email && data.password) {
      console.log('authenticate data: ', data);
      data.email = '';
      data.password = '';
    }
  }
}

