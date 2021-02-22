import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.scss']
})
export class ByCapitalComponent {

  public countries: Country[] = null;
  public errorMessage: string = null;
  public placeholder = "Search Capital";

  constructor(
    private countryService: CountryService
  ) { }
  
  public search(query: string) {
    this.countryService.searchByCapital(query)
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
}
