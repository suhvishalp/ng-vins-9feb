import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component'
import {Routes, RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MovieFormComponent } from './movie-form/movie-form.component'
import { MyHandler } from './services/myglobalerrorhanlder';
import { MyInterceptor } from './services/httpInterceptor';
import { LogoutComponent } from './logout/logout.component';
import { MovieGuard } from './services/movie-guard.service';

const appRoutes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path:'movies', component:MoviesComponent, canActivate:[MovieGuard]},
  {path:'movies/:id', component: MovieFormComponent,  canActivate:[MovieGuard]},
  {path:'logout', component: LogoutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    MoviesComponent,
    MovieFormComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:MyInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
