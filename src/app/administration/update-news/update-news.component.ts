import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HandleNewsInterface } from '../../models/handle-news.interface';
import { NewsInterface } from '../../models/news.interface';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {

  public editor = ClassicEditor;
  form: FormGroup;
  news: NewsInterface;
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
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.newsService.getOneById(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(
        news => {
          this.news = news;
          this.initForm();
        }
      );
    }
  }

  initForm() {
    this.formSubmitted = false;
    this.control = this.formBuilder.control('', Validators.required);
    this.form = this.formBuilder.group({});
    this.form.addControl('id', this.formBuilder.control(this.news.id, [Validators.required]));
    this.form.addControl('description', this.formBuilder.control('', [Validators.required]));
    this.form.addControl('title', this.formBuilder.control(this.news.title, [Validators.required]));
  }

  save() {
    this.formSubmitted = true;
    if (this.form.valid) {
      const data: HandleNewsInterface = this.form.getRawValue();
      data.picture = this.filesUploaded.length > 0 ? this.filesUploaded[0] : null;
      this.newsService.update(data).subscribe(
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

  public onChange({ editor }: ChangeEvent) {
    this.form.get('description').setValue(editor.data.get());
  }
}
