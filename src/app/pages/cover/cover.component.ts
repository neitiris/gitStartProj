import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth';

@Component({
  selector: 'app-page-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor( public router: Router,
               private authservice: AuthService) { }

  public  ngOnInit() {
    console.log('Cover init.');
  }
  logOut() {
    this.authservice.logOutFunk(); // Calling log out function from AuthService
  }
}
