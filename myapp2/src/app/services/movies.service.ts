import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
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
                    // .pipe(
                    //     catchError(this.handleError)
                    // )
    }

    

    public saveMovie(movie){

        const {title, numberInStock, dailyRentalRate, genreId} = movie;

        if(movie._id === "-1"){
            return this.http.post<Movie>(this.moviesUrl, {title, numberInStock, dailyRentalRate, genreId})
        }else{
            return this.http.put<Movie>(this.moviesUrl+'/'+movie._id, {title, numberInStock, dailyRentalRate, genreId} )
        }
    }

    public getMovie(id){
        return this.http.get<Movie>(this.moviesUrl + '/' + id)
    }

    handleError(error:HttpErrorResponse){
        let message = '';
        if(error.error instanceof ErrorEvent){
            //client error 
            message = error.error.message;
        }else{
            //server error
            message = `Error Code: ${error.status}\nMessage: ${error.message}`;
            //log the errors 
        }
        return throwError(message)
    }
    
}