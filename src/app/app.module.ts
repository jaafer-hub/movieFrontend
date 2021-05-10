import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { MoviesService } from './core/services/movies.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MessageService, ConfirmationService } from '../../node_modules/primeng/api';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule

  ],
  providers: [MoviesService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
