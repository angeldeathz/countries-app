import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent implements OnInit {

  @Input() countries: Country[] = null;

  constructor() { }

  ngOnInit() {
  }

}
