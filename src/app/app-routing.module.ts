import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './visitor/home/home.component';
import { AboutUsComponent } from './visitor/about-us/about-us.component';
import { ContactUsComponent } from './visitor/contact-us/contact-us.component';
import { NewsComponent } from './visitor/news/news.component';
import { EventsComponent } from './visitor/events/events.component';
import { LoginComponent } from './administration/login/login.component';
import { HandleNewsComponent } from './administration/handle-news/handle-news.component';
import { LocalStorageService } from './services/local-storage.service';
import { HandleEventsComponent } from './administration/handle-events/handle-events.component';
import { UpdatePasswordComponent } from './administration/update-password/update-password.component';
import { AddEventComponent } from './administration/add-event/add-event.component';
import { UpdateEventComponent } from './administration/update-event/update-event.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'administration/login', component: LoginComponent },
  { path: 'administration/news', canActivate: [LocalStorageService], component: HandleNewsComponent },
  { path: 'administration/events', canActivate: [LocalStorageService], component: HandleEventsComponent },
  { path: 'administration/update/password', canActivate: [LocalStorageService], component: UpdatePasswordComponent },
  { path: 'administration/event/create', canActivate: [LocalStorageService], component: AddEventComponent },
  { path: 'administration/event/update/:id', canActivate: [LocalStorageService], component: UpdateEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
