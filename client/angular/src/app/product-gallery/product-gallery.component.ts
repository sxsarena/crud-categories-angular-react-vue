import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements OnInit {

  @Input() title: string;
  @Input() type: string = 'horizontal';
  @Output() products;

  constructor() {}

  ngOnInit() {
    const extras = [
      {
        name: 'IPhone 5S Branco 16GB com 1 ano',
        image: 'http://lorempixel.com/120/90/technics/',
        price: 'R$ 2.000'
      },
      {
        name: 'IPhone 5S',
        image: 'http://lorempixel.com/120/90/technics/',
        price: 'R$ 2.000'
      }
    ];

    this.products = [
      {
        name: 'IPhone 5S Branco 16GB com 1 ano de...',
        image: 'http://lorempixel.com/120/90/technics/',
        price: 'R$ 2.000'
      },
      {
        name: 'IPhone 5S',
        image: 'http://lorempixel.com/120/90/technics/',
        price: 'R$ 2.000'
      },
      {
        name: 'Fun Residencial - 02 quartos c/ suíte e Brinde...',
        image: 'http://lorempixel.com/120/90/technics/',
        price: 'R$ 2.000'
      }
    ];

    if(this.type === 'vertical') {
      this.products = this.products.concat(extras);
    }
  }

}
