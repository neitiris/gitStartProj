import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-side',
  templateUrl: './userside.component.html',
  styleUrls: ['./userside.component.css']
})
export class UsersideComponent implements OnInit {
  public usersList: any[] = [];
  public usersListString = '';

  constructor(public userService: UserService,
              private router: Router) {}

  public  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    const urlParams = '?page=1&limit=50';
    this.userService.getUsers(urlParams).subscribe(
      (resp: any) => {
        console.log('getUsers resp', resp);
        this.usersList = resp.rows;
        this.usersListString = JSON.stringify(this.usersList, null, 2);
        console.log('usersListString', this.usersList);
      },
      (err: any) => {
        console.log('err', err);
      },
    );
  }
  public goToDetails(id) {
    this.router.navigate(['', 'useredit', id]);
  }
  public createUser() {
    this.router.navigate(['', 'useredit', 'newUser']);
  }
}
