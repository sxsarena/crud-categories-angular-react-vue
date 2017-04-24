import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button[app-my-button], a[app-my-button]',
  host: {
    '(click)': 'onClick()',
    '[class.default]': 'buttonType === "default"',
    '[class.primary]': 'buttonType === "primary"',
    '[class.secundary]': 'buttonType === "secundary"',
    '[class.nav]': 'buttonType === "nav"',
    '[class.small]': 'size === "small"',
    '[class.medium]': 'size === "medium"',
    '[class.large]': 'size === "large"'
  },
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {

  @Input() buttonType: string = 'default';
  @Input() size: string = 'medium';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert('Action');
  }

}
