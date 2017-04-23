import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {

  @Output() adverts;

  constructor() { }

  ngOnInit() {
    this.adverts = [
      {
        name: 'IPhone 5S Branco 16GB com 1 ano de...',
        image: 'http://lorempixel.com/170/130/technics/',
        price: 'R$ 2.000',
        time: 'Hoje às 12:20',
        specifications: '1 quarto | 52m² | Condomínio: R$110',
        local: 'Botafogo, Rio de Janeiro'
      },
      {
        name: 'IPhone 5S',
        image: 'http://lorempixel.com/170/130/technics/',
        price: 'R$ 2.000'
      },
      {
        name: 'Fun Residencial - 02 quartos c/ suíte e Brinde...',
        image: 'http://lorempixel.com/170/130/technics/',
        price: 'R$ 2.000'
      }
    ];
  }

}
