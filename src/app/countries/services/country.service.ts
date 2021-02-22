import { HttpClient } from '@angular/common/http';

import {environment} from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  public search(query: string): Observable<Country[]> {
    const urlBase = environment.urlRestCountries;
    return this.httpClient.get<Country[]>(urlBase + "name/" + query);
  }
}
