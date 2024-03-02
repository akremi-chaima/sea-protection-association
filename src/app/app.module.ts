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
