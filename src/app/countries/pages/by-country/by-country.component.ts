import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent implements OnInit {

  public countries: Country[] = null;
  public hayError = false;
  public errorMessage: string = null;

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
  }

  public search(query: string) {
    this.countryService.search(query)
    .subscribe(x => {
      this.countries = x;

      if (this.countries.length === 0) {
        this.hayError = true;
        this.errorMessage = "Nothing found for " + query;
      } else {
        this.hayError = false;
      }
    }, (error) => {
      this.hayError = true;
      this.errorMessage = "Nothing found for " + query;
      this.countries = null;
    });
  }
}
