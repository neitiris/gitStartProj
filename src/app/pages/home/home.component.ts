import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import {AuthService} from '../../services/auth';
import {Router} from '@angular/router';
import {IAuthData} from '../../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  // @ViewChild(sliderBox) slides: Slides;
  @ViewChild('sliderContentId') public sliderContent: ElementRef;
  public user: IAuthData = {email: '', password: ''};
  constructor(
    private router: Router,
    private authservice: AuthService,
  ) {}
  // Array with content of center blocks
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
  // Calling userloggedin from Auth Service
  public ngOnInit() {
    console.log('LoginComponent inited');
    this.authservice.userloggedin();
  }
  // Activating buttons right/left in sliceshow
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
  // Calling Exit function from AuthService
  quit() {
    this.authservice.logOutFunk();
  }
  // Calling boolean status variable logged from AuthService
  lLogged() {
    return this.authservice.logged;
  }
  // Calling authorisation function from AuthService
  auth(user) {
    this.authservice.authenticate(user);
  }
}
