import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddMovieComponent } from './add-movie/add-movie.component';
import { FilterMoviesComponent } from './filter-movies/filter-movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule, ReactiveFormsModule, MoviesRoutingModule
  ],
  exports: [UpdateMovieComponent, AddMovieComponent, FilterMoviesComponent
  ],
  providers: [],
  declarations: [ListMoviesComponent, UpdateMovieComponent, AddMovieComponent, FilterMoviesComponent]
})
export class MoviesModule { }
