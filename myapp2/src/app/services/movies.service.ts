import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Movie } from '../models/movie.mode';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class MovieService{

    private moviesUrl = environment.apiEndPoint + 'movies';

    constructor(private http:HttpClient){
    }

    public getAllMovies(){
      return  this.http.get<Movie[]>(this.moviesUrl)
    }

    public saveMovie(movie){
        return this.http.post<Movie>(this.moviesUrl, movie)
    }

    
}