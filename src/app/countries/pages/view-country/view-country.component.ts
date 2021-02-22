import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.scss']
})
export class ViewCountryComponent implements OnInit {

  public country: Country = null;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(({id}) => {
      this.countryService.searchByCode(id).subscribe(country => {
        this.country = country;
        console.log(country);
      });
    });
  }

}
