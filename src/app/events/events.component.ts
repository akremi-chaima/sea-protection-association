import { Component, OnInit } from '@angular/core';
import { EventInterface } from '../models/event.interface';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Array<EventInterface> = [];
  selectedEvent: EventInterface | null = null;

  ngOnInit() {
    this.events = [
      {
        id: 1,
        title: 'Aide pour l\'humanité',
        address: 'Plage Prado',
        date: '23/02/2024 12:12',
        participants: 5
      },
      {
        id: 1,
        title: 'Aide pour l\'humanité',
        address: 'Plage Prado',
        date: '23/02/2024 12:12',
        participants: 10
      },
      {
        id: 1,
        title: 'Aide pour l\'humanité',
        address: 'Plage Prado',
        date: '23/02/2024 12:12',
        participants: 20
      },
      {
        id: 1,
        title: 'Aide pour l\'humanité',
        address: 'Plage Prado',
        date: '23/02/2024 12:12',
        participants: 15
      },
    ];
  }

  setSelectedEvent(event: EventInterface) {
    this.selectedEvent = event;
  }
}
