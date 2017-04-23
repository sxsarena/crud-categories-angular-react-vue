import { Component, Output } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output() categories

  constructor(private categoriesService: FilterService) {
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
