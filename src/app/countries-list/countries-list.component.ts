import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  keyword: string = '';
  countries: any = [];
  filteredCountries: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCountries().subscribe(data => {
      this.countries = data;
    })
  }

  filterCountries() {
    this.dataService.getCountries().subscribe(data => {
      this.filteredCountries = data;
      this.countries = this.filteredCountries.filter(obj => {
        return obj['name'].toLowerCase().includes(this.keyword.toLowerCase());
      })
    });
  };

}
