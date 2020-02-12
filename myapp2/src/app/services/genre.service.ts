import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Genre } from '../models/genre.mode';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private genresUrl = environment.apiEndPoint + 'genres';

  constructor(private http:HttpClient) { }

  public getAllGenres(){
    return this.http.get<Genre[]>(this.genresUrl)
  }
}
