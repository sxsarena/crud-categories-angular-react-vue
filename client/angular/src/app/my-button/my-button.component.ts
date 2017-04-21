import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {

  @Input() type: string = 'default';
  @Input() size: string = 'medium';
  @Input() icon: any = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert('Action');
  }

}
