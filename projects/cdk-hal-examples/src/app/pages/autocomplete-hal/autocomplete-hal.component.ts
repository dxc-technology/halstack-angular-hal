import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-hal',
  templateUrl: './autocomplete-hal.component.html',
  styleUrls: ['./autocomplete-hal.component.scss']
})
export class AutocompleteHalComponent implements OnInit {

  autocompleteUrl = 'http://localhost:3000/data';

  inputValue;

  onChange(value) {
    this.inputValue = value;
  }
  headers = {'Content-Type':'application/json; charset=utf-8'};

  constructor() { }

  ngOnInit() {
  }

}
