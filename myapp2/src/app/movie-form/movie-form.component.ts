import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';
import { Genre } from '../models/genre.mode';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MovieService } from '../services/movies.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  public genres:Genre[] = []
  public movieForm:FormGroup;

  constructor(private genreService:GenreService, 
              private fb:FormBuilder,
              private movieService:MovieService,
              private router:Router) { }

  ngOnInit(): void {

    this.movieForm = this.fb.group({
      title: [''],
      numberInStock:[''],
      dailyRentalRate:[''],
      genreId:['-1']
    })


    this.genreService.getAllGenres()
        .subscribe(
          (response)=>{
            //console.log(response)
            this.genres = response;

          }
        )
  }

  handleSave(){
    //console.log('Saving movie....')
    //console.log(this.movieForm.value)
    this.movieService.saveMovie(this.movieForm.value)
          .subscribe(
            (response)=>{
              console.log('movie created....')
              this.router.navigate(['/movies'])
            }
          )
  }

}
