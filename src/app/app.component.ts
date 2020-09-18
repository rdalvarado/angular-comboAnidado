import { Component, VERSION } from '@angular/core';
import { DataService } from './dataService';
import { Country } from './country';
import { State } from './state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  //selectedCountry:Country[] = [new Country(0, 'India'),new Country(0, 'India'),new Country(0, 'India')]; 
  selectedCountry: any[];
  countries: Country[];
  states: any[];
  numbers: number[];
  constructor(private _dataService: DataService) {
    this.numbers = [0,1,2];
    this.countries = this._dataService.getCountries();
    this.states = [];
    this.selectedCountry = this.countries.map(v => 0);
  }


  onSelect(countryid: any, index: any, selectedCountry: Country[]) {
    debugger;
    this.states[index] = this._dataService.getStates().filter((item)=> item.countryid == countryid.value);
    debugger;
  }  
}
