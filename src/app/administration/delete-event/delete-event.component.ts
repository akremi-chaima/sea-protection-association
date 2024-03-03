import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    if (!this.route.snapshot.paramMap.get('id')) {
      this.cancel();
    }
  }

  delete() {
    this.eventService.delete(parseInt(this.route.snapshot.paramMap.get('id'), 10)).subscribe(
      response => {
        this.cancel();
      }, error => {
        if (error.status === 401) {
          // delete token from local storage and redirect to login page
          this.router.navigate(['administration/login']);
          localStorage.removeItem('token');
        }
      }
    );
  }

  cancel() {
    this.router.navigate(['administration/events']);
  }
}
