import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMoviesComponent } from './filter-movies.component';

describe('FilterMoviesComponent', () => {
  let component: FilterMoviesComponent;
  let fixture: ComponentFixture<FilterMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
