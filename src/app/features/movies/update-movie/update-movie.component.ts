import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Movie } from '../../../core/models/movie';
import { Observable } from '../../../../../node_modules/rxjs';
import { MoviesService } from '../../../core/services/movies.service';
import { delay, switchMap, tap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { formatDate } from '../../shared/functions';
import { MessageService } from '../../../../../node_modules/primeng/api';
@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit, OnChanges {
  @Input() movie: Movie;
  @Output() submitForm = new EventEmitter<number>();
  loading = false;
  form: FormGroup = new FormGroup(
    {
      title: new FormControl('', {
        validators: [
          Validators.required
        ]

      }),
      director: new FormControl('', {
        validators: [
          Validators.required
        ]

      }),
      releaseDateDate: new FormControl('', {
        validators: [
          Validators.required
        ]

      }),
      type: new FormControl('', {
        validators: [
          Validators.required
        ]

      }),
      id: new FormControl(),

    });

  constructor(private route: ActivatedRoute, private moviesServices: MoviesService, private messageService: MessageService) {


  }

  save() {
    if (!this.form.invalid) {
      this.movie = this.form.value;
      const date = formatDate(this.movie.releaseDateDate);
      this.movie.releaseDate = date;
      this.loading = true;
      this.route.paramMap.pipe(
        switchMap(paramMap => this.moviesServices.updateMovie(this.movie.id.toString(), this.movie))).subscribe(data => {
          this.loading = false;
          this.submitForm.emit(1);
        },
          error => {
            this.loading = false;
            this.messageService.add({ severity: 'error', summary: 'Error Message', detail: error.message });
          });

    }

  }
  ngOnChanges() {
    if (this.movie) {
      const arrayRelease = this.movie.releaseDate.split('/');
      const stringRelease = arrayRelease[1] + '/' + arrayRelease[0] + '/' + arrayRelease[2];
      this.movie.releaseDateDate = new Date(stringRelease);
      this.form.patchValue(this.movie);
    }
  }
  ngOnInit() {
    /* this.route.paramMap.pipe(
      switchMap(paramMap => this.moviesServices.getMovie(paramMap.get('id')))).subscribe(data => {
         this.movie = data;
         this.form.patchValue(this.movie);
       });*/




  }

}
