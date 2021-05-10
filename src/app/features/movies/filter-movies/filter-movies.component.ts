import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../core/models/movie';

@Component({
  selector: 'app-filter-movies',
  templateUrl: './filter-movies.component.html',
  styleUrls: ['./filter-movies.component.css']
})
export class FilterMoviesComponent implements OnInit {

  @Output() movieEmitter = new EventEmitter<Movie>();
  movie: Movie = { title: '', director: '', releaseDateDate: null, releaseDate: '', type: '', id: 0 };
  constructor() { }

  ngOnInit() {
  }
  search() {
    this.movieEmitter.emit(this.movie);
  }
}
