import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HandleNewsInterface } from '../../models/handle-news.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  form: FormGroup;
  control: FormControl;
  formSubmitted: boolean;
  filesUploaded: Array<any> = [];
  errors: any = {
    description: {
      required: `Ce champ est obligatoire.`,
    },
    title: {
      required: `Ce champ est obligatoire.`,
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private newsService: NewsService,
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
    this.form.addControl('description', this.formBuilder.control('', [Validators.required]));
    this.form.addControl('title', this.formBuilder.control('', [Validators.required]));
  }

  save() {
    this.formSubmitted = true;
    if (this.form.valid && this.filesUploaded.length > 0) {
      const data: HandleNewsInterface = this.form.getRawValue();
      data.picture = this.filesUploaded[0];
      this.newsService.save(data).subscribe(
        response => {
          this.initForm();
          this.router.navigate(['administration/news']);
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

  cancel() {
    this.router.navigate(['administration/news']);
  }

  getFile($event, index?: string) {
    if (!index) {
      this.filesUploaded = Array.from($event.target.files);
      let maxSize = 0;
      for (let file of this.filesUploaded) {
        maxSize = maxSize + file.size;
      }
    } else {
      $event.preventDefault();
      this.filesUploaded.splice(Number(index), 1);
    }
    $event.target.value = null;
  }

}
