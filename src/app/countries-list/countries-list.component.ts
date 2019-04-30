import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  keyword: string = '';
  countries = [];
  filteredCountries = [];

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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.countries, event.previousIndex, event.currentIndex);
  }

}
