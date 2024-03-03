import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './visitor/home/home.component';
import { AboutUsComponent } from './visitor/about-us/about-us.component';
import { ContactUsComponent } from './visitor/contact-us/contact-us.component';
import { NewsComponent } from './visitor/news/news.component';
import { EventsComponent } from './visitor/events/events.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './common/news-list/news-list.component';
import { EventsListComponent } from './common/events-list/events-list.component';
import { LoginComponent } from './administration/login/login.component';
import { HandleNewsComponent } from './administration/handle-news/handle-news.component';
import { HandleEventsComponent } from './administration/handle-events/handle-events.component';
import { UpdatePasswordComponent } from './administration/update-password/update-password.component';
import { AddEventComponent } from './administration/add-event/add-event.component';
import { UpdateEventComponent } from './administration/update-event/update-event.component';
import { DeleteEventComponent } from './administration/delete-event/delete-event.component';
import { AddNewsComponent } from './administration/add-news/add-news.component';
import { UpdateNewsComponent } from './administration/update-news/update-news.component';
import { DeleteNewsComponent } from './administration/delete-news/delete-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NewsListComponent,
    EventsListComponent,
    NewsComponent,
    EventsComponent,
    LoginComponent,
    HandleNewsComponent,
    HandleEventsComponent,
    UpdatePasswordComponent,
    AddEventComponent,
    UpdateEventComponent,
    DeleteEventComponent,
    AddNewsComponent,
    UpdateNewsComponent,
    DeleteNewsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
