import { Component, Output } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output() categories;
  @Output() isOpen: boolean = false;

  constructor(private categoriesService: FilterService) {
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  showFilter() {
    this.isOpen = true;
  }

  hideFilter() {
    this.isOpen = false;
  }

  onSelectCategory(event) {
    event.preventDefault();

    this.categories.forEach((item) => {
      if (item.label.toLowerCase() !== event.toElement.innerText.toLowerCase()) {
        item.isClosed = true;
        item.isSubmenuOpen = false;
      } else {
        item.isClosed = false;
        item.isSubmenuOpen = true;
      }
    });
  }

  onShowAll() {
    event.preventDefault();
    this.categories.forEach((item) => {
      item.isClosed = false;
      item.isSubmenuOpen = false;
    });
  }
}
