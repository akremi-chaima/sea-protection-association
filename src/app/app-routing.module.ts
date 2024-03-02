import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './visitor/home/home.component';
import { AboutUsComponent } from './visitor/about-us/about-us.component';
import { ContactUsComponent } from './visitor/contact-us/contact-us.component';
import { NewsComponent } from './visitor/news/news.component';
import { EventsComponent } from './visitor/events/events.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
