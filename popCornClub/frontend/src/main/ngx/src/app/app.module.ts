import { NgModule } from '@angular/core';
import { NavbarComponent } from "./main/home/navbar/navbar.component";
import { MoviesViewComponent } from "./main/movies/movies-view/movies-view.component";
import { FooterHomeComponent } from "./main/home/footer-home/footer-home.component";

import {
  APP_CONFIG,
  ONTIMIZE_MODULES,
  ONTIMIZE_PROVIDERS,
  OntimizeWebModule
} from 'ontimize-web-ngx';

import { CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesViewComponent } from './main/movies/movies-view/movies-view.component';

// Standard providers...
// Defining custom providers (if needed)...
export const customProviders: any = [
];

@NgModule({
  imports: [
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    AppRoutingModule

    ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesViewComponent,
    FooterHomeComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS,
    ...customProviders
  ],
})
export class AppModule { }
