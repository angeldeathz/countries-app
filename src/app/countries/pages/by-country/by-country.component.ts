import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { filter, map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent {

  public countries: Country[] = null;
  public errorMessage: string = null;
  public placeholder = "Search Country";
  public suggestCountries: Country[] = [];

  constructor(
    private countryService: CountryService
  ) { }

  public search(query: string) {

    if (!query) {
      this.errorMessage = "You can't enter an empty search";
      return;
    }
    
    this.suggestCountries = [];

    this.countryService.searchByCountry(query)
    .subscribe(x => {
      this.countries = x;

      if (this.countries.length === 0) {
        this.errorMessage = "Nothing found for " + query;
      } else {
        this.errorMessage = null;
      }
    }, (error) => {
      this.errorMessage = "Nothing found for " + query;
      this.countries = null;
    });
  }

  public suggests(query: string){

    this.countryService.searchByCountry(query)
    .subscribe(countries => {
      console.log(countries);
      this.suggestCountries = countries.splice(0, 4);
    }, () => {
      this.suggestCountries = [];
    });
  }
}
