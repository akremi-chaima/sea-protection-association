import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-handle-events',
  templateUrl: './handle-events.component.html',
  styleUrls: ['./handle-events.component.css']
})
export class HandleEventsComponent {

  constructor(private router: Router) {
  }

  redirect() {
    this.router.navigate(['administration/event/create'])
  }
}
