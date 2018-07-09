import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor( public router: Router) { }

  public  ngOnInit() {
    console.log('Cover init.');
  }
  public logOutFunk() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']);
  }
}
