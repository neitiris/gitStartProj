import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/';

@Component({
  selector: 'app-user-side',
  templateUrl: './userside.component.html',
  styleUrls: ['./userside.component.css']
})
export class UsersideComponent implements OnInit {

  public usersList: any[] = [];
  public usersListString: string = '';

  constructor(public userService: UserService) {}

  public  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.userService.getUsers().subscribe(
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
}
