import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursesComponent } from './courses/courses.component';
import {FormsModule} from '@angular/forms';
import { SingleCourseComponent } from './courses/single-course/single-course.component';
import { HighLightDirective } from './mydirectives/highlight.directive';
import { ShortenPipe } from './mypipes/shorten.pipe';
import { TrainerFilterPipe } from './mypipes/trainer-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CoursesComponent,
    SingleCourseComponent,
    HighLightDirective,
    ShortenPipe,
    TrainerFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
