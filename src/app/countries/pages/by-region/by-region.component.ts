import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss']
})
export class ByRegionComponent {

  public countries: Country[] = null;
  public errorMessage: string = null;
  public regions = ["africa", "americas", "asia", "europe", "oceania"];
  public activeRegion: string = null;

  constructor(
    private countryService: CountryService
  ) { }

  public getCssBtnRegions(region: string) {
    return (region === this.activeRegion) ? 'btn-primary' : 'btn-outline-primary';
  }

  public search(query: string) {

    if (!query) {
      this.errorMessage = "You can't enter an empty search";
      return;
    }

    if (query === this.activeRegion) return;
    
    this.countryService.searchByRegion(query)
    .subscribe(x => {
      this.countries = x;

      if (this.countries.length === 0) {
        this.errorMessage = "Nothing found for " + query;
      } else {
        this.errorMessage = null;
        this.activeRegion = query;
      }
    }, (error) => {
      this.errorMessage = "Nothing found for " + query;
      this.countries = null;
    });
  }

}
