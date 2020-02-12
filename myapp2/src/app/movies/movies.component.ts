import { Component, OnInit, ContentChild, ViewChild, ErrorHandler } from '@angular/core';
import { Movie } from '../models/movie.mode';
import { MovieService } from '../services/movies.service';
import { Router } from '@angular/router';
import { MyHandler } from '../services/myglobalerrorhanlder';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[]
})
export class MoviesComponent implements OnInit {

  public movieData:Movie[] = [];

  // @ViewChild('myHead')
  // public heading;

  constructor(private movieService:MovieService, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.movieService.getAllMovies()
      .subscribe(
         (movies:Movie[])=>{
            //console.log('request processed successfully')
            //console.log(movies)
            this.movieData = movies;
          }
        )
  }

  handleNewMovie(){
    this.router.navigate(['/movies', 'new'])
  }
  // ngAfterViewInit(){
  //   console.log(this.heading)
  //   this.heading.nativeElement.innerText='This is new Heading...'
  // }

  
}
