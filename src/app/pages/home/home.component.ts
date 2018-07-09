import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { IAuthData } from '../../shared/interfaces';
import { ApiService } from '../../services/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  // @ViewChild(sliderBox) slides: Slides;
  @ViewChild('sliderContentId') public sliderContent: ElementRef;
  public logged = false;

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

  // FUNCTIONS SHOULD BE WRITTEN ONLY AFTER 'constructor'!!!!
  // public myFunctionplus() {
  //   sliderContent.scrollBy(100, 0);
  //   console.log('myFunctionplus');
  // }
  // public myFunctionminus() {
  //   window.scrollBy(-100, 0);
  //   console.log('myFunctionlinus');
  // }
  public user: IAuthData = {email: '', password: ''};
  constructor(
    private api: ApiService,
    private router: Router,
  ) {}
  public ngOnInit() {
    console.log('LoginComponent inited');
    this.userloggedin();
  }

  public slideTo(direction: string) {
    const currentLeft: number = this.sliderContent.nativeElement.offsetLeft || 0;
    switch (direction) {
      case 'left':
        this.sliderContent.nativeElement.style.left = currentLeft - 200 + 'px';
        break;
      case 'right':
        this.sliderContent.nativeElement.style.left = currentLeft + 200 + 'px';
        break;
    }
  }
  public authenticate(data: IAuthData) {
    console.log('data', data);
    if (data.email && data.password) {
      this.api.post('/signin', {email: data.email, password: data.password}).subscribe(
        (user) => {
          if (user && user.data && user.data.authToken) {
            localStorage.setItem('currentUser', JSON.stringify(user.data));
            console.log(localStorage.getItem('currentUser'));
            this.router.navigate([ '', 'home' ]);
            location.reload();
          }
          return user;
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
    location.reload();
  }
}
