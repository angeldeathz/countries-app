import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CountriesModule } from './countries/countries.module';
import { RoutesApp } from './route.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CountriesModule,
    RoutesApp
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
