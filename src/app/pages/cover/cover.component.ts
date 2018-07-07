import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor() {}

  public  ngOnInit() {
    console.log('Cover init.');
  }
}
