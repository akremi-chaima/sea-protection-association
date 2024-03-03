import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstsHelper } from '../../consts.helper';
import { HandleEventInterface } from '../../models/handle-event.interface';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  event: HandleEventInterface;
  form: FormGroup;
  control: FormControl;
  formSubmitted: boolean;
  errors: any = {
    address: {
      required: `Ce champ est obligatoire.`,
    },
    title: {
      required: `Ce champ est obligatoire.`,
    },
    date: {
      required: `Ce champ est obligatoire.`,
      pattern: `La valeur saisie n'est pas valide.`
    },
  }

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.eventService.getOneById(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(
        event => {
          this.event = event;
          this.initForm();
        }
      );
    }
  }

  initForm() {
    this.formSubmitted = false;
    this.control = this.formBuilder.control('', Validators.required);
    this.form = this.formBuilder.group({});
    this.form.addControl('id', this.formBuilder.control(this.event.id, [Validators.required]));
    this.form.addControl('address', this.formBuilder.control(this.event.address, [Validators.required]));
    this.form.addControl('title', this.formBuilder.control(this.event.title, [Validators.required]));
    this.form.addControl('date', this.formBuilder.control(this.event.date, [Validators.required, Validators.pattern(ConstsHelper.eventDate)]));
  }

  save() {
    this.formSubmitted = true;
    if (this.form.valid) {
      const data: HandleEventInterface = this.form.getRawValue();
      data.date = this.formatDate(data.date)
      this.eventService.update(data).subscribe(
        response => {
          this.initForm();
          this.router.navigate(['administration/events']);
        }, error => {
          if (error.status === 401) {
            // delete token from local storage and redirect to login page
            this.router.navigate(['administration/login']);
            localStorage.removeItem('token');
          }
        }
      );
    }
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

  formatDate(date: string) {
    const splitDateTime = date.split(' ');
    const splitDate = splitDateTime[0].split('/');
    return splitDate[2] + '-' + splitDate[1] + '-' + splitDate[0] + ' ' + splitDateTime[1] + ':00';
  }
}

