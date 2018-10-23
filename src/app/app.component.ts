import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  // selector: ['app-root'], // div app-root
  // selector: '.app-root', //div class="app-root"
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'my-app';
  sliderImages = ["https://i.stack.imgur.com/EUs9p.png",
  					"https://i.stack.imgur.com/EUs9p.png",
  					"https://i.stack.imgur.com/EUs9p.png"]
}

