import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent {

  @Input() placeholder = null;
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  public query: string;

  public search() {
    this.onSearch.emit(this.query);
  }
}
