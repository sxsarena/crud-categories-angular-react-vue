import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FilterService {

  private categoriesUrl = 'http://localhost:3000/api/categories';

  constructor(private http: Http) { }

  getCategories(){
    return this.http.get(this.categoriesUrl).map(res => res.json().items);
  }

}
