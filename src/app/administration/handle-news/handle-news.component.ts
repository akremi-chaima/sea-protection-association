import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-handle-news',
  templateUrl: './handle-news.component.html',
  styleUrls: ['./handle-news.component.css']
})
export class HandleNewsComponent {
  constructor(private router: Router) {
  }

  redirect() {
    this.router.navigate(['administration/news/create'])
  }
}
