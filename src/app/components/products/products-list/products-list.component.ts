import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

products: Product[] = [
  {
    id: 1,
    category: 'Mobiles',
    name: 'Samsung S20',
    manufactureYear: 2018,
    price: 80000

  },
  {
    id: 2,
    category: 'Laptops',
    name: 'Hp-pavilion i7',
    manufactureYear: 2020,
    price: 180000

  },
  {
    id: 3,
    category: 'Watche',
    name: 'MI-smart Wacth',
    manufactureYear: 2021,
    price: 20000

  }
];
constructor() {}

ngOnInit(): void {
  
 

}

}
