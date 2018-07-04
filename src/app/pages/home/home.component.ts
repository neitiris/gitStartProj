import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  // @ViewChild(sliderBox) slides: Slides;
  @ViewChild('sliderContentId') public sliderContent: ElementRef;

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
  constructor() { }

  public ngOnInit() {
    console.log('Home inited');
  }

  public ngAfterViewInit() {
    // This is how you should debug if you have access to this element!
    console.log('ngAfterViewInit this.sliderContent', this.sliderContent);
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

}
