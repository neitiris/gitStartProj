import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public items: any[] = [
    { text: '22 Syncmaster LCD Monitor', cost: '$399.99', img: 'http://demo.templates-master.com/demo01/media/catalog/' +
      'product/cache/6/small_image/135x135/9df78eab33525d08d6e5fb8d27136e95/2/2/22-syncmaster-lcd-monitor.jpg'},
    { text: '22 Syncmaster LCD Monitor', cost: '$399.99', img: 'http://demo.templates-master.com/demo01/media/catalog/' +
      'product/cache/6/small_image/135x135/9df78eab33525d08d6e5fb8d27136e95/2/2/22-syncmaster-lcd-monitor.jpg'},
    { text: '22 Syncmaster LCD Monitor', cost: '$399.99', img: 'http://demo.templates-master.com/demo01/media/catalog/' +
      'product/cache/6/small_image/135x135/9df78eab33525d08d6e5fb8d27136e95/2/2/22-syncmaster-lcd-monitor.jpg'},
    { text: '22 Syncmaster LCD Monitor', cost: '$399.99', img: 'http://demo.templates-master.com/demo01/media/catalog/' +
      'product/cache/6/small_image/135x135/9df78eab33525d08d6e5fb8d27136e95/2/2/22-syncmaster-lcd-monitor.jpg'},
    { text: '22 Syncmaster LCD Monitor', cost: '$399.99', img: 'http://demo.templates-master.com/demo01/media/catalog/' +
      'product/cache/6/small_image/135x135/9df78eab33525d08d6e5fb8d27136e95/2/2/22-syncmaster-lcd-monitor.jpg'},
    { text: '22 Syncmaster LCD Monitor', cost: '$399.99', img: 'http://demo.templates-master.com/demo01/media/catalog/' +
      'product/cache/6/small_image/135x135/9df78eab33525d08d6e5fb8d27136e95/2/2/22-syncmaster-lcd-monitor.jpg'},
    { text: '22 Syncmaster LCD Monitor', cost: '$399.99', img: 'http://demo.templates-master.com/demo01/media/catalog/' +
      'product/cache/6/small_image/135x135/9df78eab33525d08d6e5fb8d27136e95/2/2/22-syncmaster-lcd-monitor.jpg'},
    { text: '22 Syncmaster LCD Monitor', cost: '$399.99', img: 'http://demo.templates-master.com/demo01/media/catalog/' +
      'product/cache/6/small_image/135x135/9df78eab33525d08d6e5fb8d27136e95/2/2/22-syncmaster-lcd-monitor.jpg'},
    { text: '22 Syncmaster LCD Monitor', cost: '$399.99', img: 'http://demo.templates-master.com/demo01/media/catalog/' +
      'product/cache/6/small_image/135x135/9df78eab33525d08d6e5fb8d27136e95/2/2/22-syncmaster-lcd-monitor.jpg'},
  ];

  constructor() { }

  public ngOnInit() {
    console.log('Home inited');
  }

}
