import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  form: FormGroup;
  control: FormControl;
  formSubmitted: boolean;
  errors: any = {
    password: {
      required: `Ce champ est obligatoire.`,
    },
    newPassword: {
      required: `Ce champ est obligatoire.`,
    },
    newPasswordConfirmation: {
      required: `Ce champ est obligatoire.`,
    },
  }

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formSubmitted = false;
    this.control = this.formBuilder.control('', Validators.required);
    this.form = this.formBuilder.group({});
    this.form.addControl('password', this.formBuilder.control('', [Validators.required]));
    this.form.addControl('newPassword', this.formBuilder.control('', [Validators.required]));
    this.form.addControl('newPasswordConfirmation', this.formBuilder.control('', [Validators.required]));
  }

  save() {
    this.formSubmitted = true;
    if (this.form.valid) {
      const data = this.form.getRawValue();
      this.userService.updatePassword(data).subscribe(
        response => {
          this.initForm();
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
}
