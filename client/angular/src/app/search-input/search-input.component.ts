import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Input() perTitle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert('Submited!');
  }

}
