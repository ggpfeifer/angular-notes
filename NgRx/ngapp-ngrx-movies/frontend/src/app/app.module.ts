import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './component/movies/movies.component';
import { MoviesBuscadorComponent } from './component/movies/movies-buscador/movies-buscador.component';
import { MoviesDetalleComponent } from './component/movies/movies-detalle/movies-detalle.component';
import { MoviesListadoComponent } from './component/movies/movies-listado/movies-listado.component';
import { MoviesResultadosComponent } from './component/movies/movies-resultados/movies-resultados.component';
import { MoviesBuscadorService } from './service/movies-buscador.service';
import { MoviesResultadosService } from './service/movies-resultados.service';
import { MoviesDetalleService } from './service/movies-detalle.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesBuscadorComponent,
    MoviesDetalleComponent,
    MoviesListadoComponent,
    MoviesResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MoviesBuscadorService,
    MoviesResultadosService,
    MoviesDetalleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
