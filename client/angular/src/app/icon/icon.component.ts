import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  host: {
    '[class.icon]': 'true',
    '[class.left]': 'position === "left"',
    '[class.right]': 'position === "right"',
    '[class.center]': 'position === "center"'
  },
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() name: string = 'user';
  @Input() position: string = 'left';
  @Input() size = '17';

  constructor() { }

  ngOnInit() {
  }

}
