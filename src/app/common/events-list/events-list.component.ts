import {Component, Input, OnInit} from '@angular/core';
import { EventInterface } from '../../models/event.interface';
import { ParticipantService } from '../../services/participant.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ConstsHelper } from '../../consts.helper';
import { ParticipantInterface } from '../../models/participant.interface';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  @Input()
  isPublic: boolean;

  events: Array<EventInterface> = [];
  selectedEvent: EventInterface | null = null;
  form: FormGroup;
  control: FormControl;
  formSubmitted: boolean;
  errors: any = {
    lastName: {
      required: `Ce champ est obligatoire.`,
    },
    firstName: {
      required: `Ce champ est obligatoire.`,
    },
    email: {
      required: `L'adresse email est obligatoire.`,
      pattern: `L'adresse email saisie n'est pas valide.`
    },
    phoneNumber: {
      required: `Ce champ est obligatoire.`,
      pattern: `Ce champ n'est pas valide.`,
    },
  }
  constructor(
    private participantService: ParticipantService,
    private eventService: EventService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.events = [];
    this.eventService.get().subscribe(events => {
      this.events = events;
    });
  }

  initForm() {
    this.formSubmitted = false;
    this.control = this.formBuilder.control('', Validators.required);
    this.form = this.formBuilder.group({});
    this.form.addControl('eventId', this.formBuilder.control(this.selectedEvent.id, [Validators.required]));
    this.form.addControl('lastName', this.formBuilder.control('', [Validators.required]));
    this.form.addControl('firstName', this.formBuilder.control('', [Validators.required]));
    this.form.addControl('email', this.formBuilder.control('', [Validators.required, Validators.pattern(ConstsHelper.emailPattern)]));
    this.form.addControl('phoneNumber', this.formBuilder.control('', [Validators.required, Validators.pattern(ConstsHelper.phoneNumber)]));
  }

  getError(formControlValues: string): string {
    let errorMsg = '';
    if (this.form.controls[formControlValues].invalid) {
      Object.keys(this.form.controls[formControlValues].errors).map(
        key => {
          errorMsg = this.errors[formControlValues][key];
        }
      );
    }
    return errorMsg;
  }

  setSelectedEvent(event: EventInterface) {
    this.selectedEvent = event;
    this.initForm();
  }

  save() {
    this.formSubmitted = true;
    if (this.form.valid) {
      const participant: ParticipantInterface = this.form.getRawValue();
      this.participantService.save(participant).subscribe(
        response => {
          window.location.reload();
        }
      );
    }
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
