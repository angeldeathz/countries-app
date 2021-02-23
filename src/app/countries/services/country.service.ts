import { HttpClient } from '@angular/common/http';

import {environment} from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  public searchByCountry(query: string): Observable<Country[]> {
    const url = environment.urlRestCountries + "name/" + query
    return this.httpClient.get<Country[]>(url);
  }

  public searchByCapital(query: string): Observable<Country[]> {
    const url = environment.urlRestCountries + "capital/" + query;
    return this.httpClient.get<Country[]>(url);
  }
  
  public searchByRegion(query: string): Observable<Country[]> {
    const url = environment.urlRestCountries + "region/" + query;
    return this.httpClient.get<Country[]>(url)
  }

  public searchByCode(query: string): Observable<Country> {
    const url = environment.urlRestCountries + "alpha/" + query;
    return this.httpClient.get<Country>(url);
  }
}
