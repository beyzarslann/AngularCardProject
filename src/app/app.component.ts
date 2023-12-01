import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Camping',
      imageUrl: '/assets/camping.jpg',
      username: 'Camp',
      content: 'Camping is a wonderful outdoor activity that allows people to connect with nature and escape the hustle and bustle of daily life. '
    },
    {
      title: 'Climbing',
      imageUrl: '/assets/paragliding.jpg',
      username: 'Climb',
      content: 'Climbing is an exhilarating adventure that combines physical challenge with the thrill of reaching new heights.'
    },
    {
      title: 'Surfing',
      imageUrl: '/assets/surf.jpg',
      username: 'Surf',
      content: 'Surfing is a dynamic water sport that involves riding ocean waves on a specially designed board. '
    }

  ];



}
