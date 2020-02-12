import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';
import { Genre } from '../models/genre.mode';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MovieService } from '../services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Movie } from '../models/movie.mode';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  public genres: Genre[] = []
  public movieForm: FormGroup;
  public movie: Movie;

  constructor(private genreService: GenreService,
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.movieForm = this.fb.group({
      title: [''],
      numberInStock: [''],
      dailyRentalRate: [''],
      genreId: ['-1']
    })


    this.route.paramMap.subscribe((params) => {
      let id = params.get('id')
      if (id === 'new') {
        this.movie = new Movie("-1");
        this.movieForm = this.fb.group({
          title: [''],
          numberInStock: [''],
          dailyRentalRate: [''],
          genreId: ['-1']
        })
      } else {
        this.movieService.getMovie(id)
          .subscribe(
            (response) => {
              this.movie = response;

              this.movieForm = this.fb.group({
                title: [this.movie.title],
                numberInStock: [this.movie.numberInStock],
                dailyRentalRate: [this.movie.dailyRentalRate],
                genreId: [this.movie.genre._id]
              })
            },
            (error) => {
              console.log(error)
            }
          )




      }
    })





    this.genreService.getAllGenres()
      .subscribe(
        (response) => {
          //console.log(response)
          this.genres = response;

        }
      )
  }

  handleSave() {
    //console.log('Saving movie....')
    //console.log(this.movieForm.value)

    this.movie.title = this.movieForm.value.title
    this.movie.numberInStock = this.movieForm.value.numberInStock
    this.movie.dailyRentalRate = this.movieForm.value.dailyRentalRate
    this.movie.genreId = this.movieForm.value.genreId

    console.log(this.movie)
    this.movieService.saveMovie(this.movie)
      .subscribe(
        (response) => {
          console.log('movie created....')
          this.router.navigate(['/movies'])
        },
        (errorMessage: string) => {
          alert(errorMessage)
        }
      )
  }

}
