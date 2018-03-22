import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public images = [
  	'../assets/images/image1.jpeg',
  	'../assets/images/image2.jpeg',
  	'../assets/images/image3.jpg',
    '../assets/images/image4.jpeg'
  ]
}
