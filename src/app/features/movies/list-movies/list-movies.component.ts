import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../core/services/movies.service';
import { Subscription } from '../../../../../node_modules/rxjs';
import { Movie } from '../../../core/models/movie';
import { Route, Router } from '../../../../../node_modules/@angular/router';
import { MessageService, MenuItem, ConfirmationService, SortEvent } from '../../../../../node_modules/primeng/api';
import { formatDate, customSortTable } from '../../shared/functions';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  subscription: Subscription;
  data: Movie[] = [];
  cols: any[];
  selectedMovie: Movie;
  displayDialog = false;
  displayDialogAdd = false;
  loading = false;
  items: MenuItem[];
  msgs = [];
  getAllMovies() {
    this.loading = true;
    this.subscription = this.moviesServices.getAll().subscribe(data => {

      const dataClone: Movie[] = [];
      let index = 0;
      for (const movie of data) {
        movie.id = index;
        index++;
        dataClone.push(movie);
      }
      this.data = dataClone;
      this.loading = false;
    },
      error => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: error.message });
      });
  }
  constructor(private moviesServices: MoviesService, private router: Router, private messageService: MessageService,
    private confirmationService: ConfirmationService) {
    this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'director', header: 'Director' },
      { field: 'releaseDate', header: 'Realise Date' },
      { field: 'type', header: 'Type' }
    ];
    this.items = [
      { label: 'Edit', icon: 'pi pi-search', command: (event) => this.onRowSelect(event) },
      { label: 'Delete', icon: 'pi pi-times', command: (event) => this.deleteMovie(this.selectedMovie) }
    ];


    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.getAllMovies();
  }
  updateSubmit(event, message) {
    this.getAllMovies();
    this.displayDialog = false;
    this.displayDialogAdd = false;
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: message });
  }
  onRowSelect(event) {
    this.displayDialog = true;
  }
  showDialogToAdd() {
    this.displayDialogAdd = true;
  }
  deleteMovie(movie: Movie) {
    this.confirmationService.confirm({
      message: `Are you sure you want delete ${movie.title}?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.procedDeleteMovie(movie.id);
      },
      reject: () => {

      }
    });
  }
  procedDeleteMovie(id) {
    this.subscription = this.moviesServices.deleteMovie(id).subscribe(data => {
      this.getAllMovies();
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Movie deleted' });
    },
      error => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: error.message });
      });
  }
  filterSubmit(event) {
    this.loading = true;
    if (event.releaseDateDate) {
      event.releaseDate = formatDate(event.releaseDateDate);
    } else {
      event.releaseDate = '';
    }
    this.subscription = this.moviesServices.searchMovie(event).subscribe(data => {

      const dataClone: Movie[] = [];
      let index = 0;
      for (const movie of data) {
        movie.id = index;
        index++;
        dataClone.push(movie);
      }
      this.data = dataClone;
      this.loading = false;
    },
      error => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: error.message });
      });
  }
  ngOnInit() {

  }
  customSort(event: SortEvent) {
    customSortTable(event, 'DD/MM/YYYY');
}
}
