import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-hal-autocomplete-simple',
  templateUrl: './hal-autocomplete-simple.component.html',
  styleUrls: ['./hal-autocomplete-simple.component.scss']
})
export class AutocompleteHalSimple implements OnInit {

  autocompleteUrl = 'http://localhost:3000/data';

  inputValue;

  onChange(value) {
    this.inputValue = value;
  }
  headers = {'Content-Type':'application/json; charset=utf-8'};

  constructor() { 
  }

  ngOnInit() {

  }
}
