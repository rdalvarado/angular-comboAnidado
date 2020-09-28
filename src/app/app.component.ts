import { Component, VERSION } from '@angular/core';
import { DataService } from './dataService';
import { Country } from './country';
import { State } from './state';
import { User } from './user';

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
  users: User[];
  constructor(private _dataService: DataService) {
    this.numbers = [0,1,2];
    this.countries = this._dataService.getCountries();
    this.states = [];
    this.selectedCountry = this.countries.map(v => 0);
    this.users = this._dataService.getUsers();
    this.users[0].country = this.countries[0];
    this.states[0] = this._dataService.getStates().filter(
      (item)=> item.countryid == this.users[0].country.id);       
    this.users[0].state = this.states[0][2];
     
    debugger;

  }

  checkIf(value: any, state: State){
    return value.length > 0;
  }

  checkIf1(value: any, country: Country, fila: number){
    return value.length > 0;
  }

  onSelect(countryid: any, index: any, selectedCountry: Country[]) {
    debugger;
    if(countryid!=null){
      this.states[index] = this._dataService.getStates().filter((item)=> item.countryid == countryid.id);
    }else{
      this.states[index] = null;
    }
    

    //this.users[index].country.state = this._dataService.getStates().filter((item)=> item.countryid == countryid.id);
    debugger;
  }  
}
