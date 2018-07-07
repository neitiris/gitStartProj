import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/';

@Component({
  selector: 'app-userchange',
  templateUrl: './userchange.component.html',
  styleUrls: ['./userchange.component.css']
})
export class UserchangeComponent implements OnInit {

  public user: any = {};

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public _user: UserService
  ) { }

  public ngOnInit() {
    console.log('ngOnInit this.route', this.route);
    this.route.params.subscribe((param: any) => {
      if (param['id']) {
        this.requestUser(param['id']);
      }
    });
  }

  public userSettings(){
    // getUserById()
  }

  public requestUser(id: any) {
    if (id) {
      this._user.getUserById(id).subscribe(
        (resp: any) => {
          console.log('resp', resp);
          if (resp && resp.data) {
            this.user = resp.data;
          }
        },
        (err: any) => {
          console.log('err', err);
        }
      );
    }
  }
}

