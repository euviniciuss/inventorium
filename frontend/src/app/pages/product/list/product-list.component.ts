import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { ProductProps } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductProps[] = [];
  totalProducts: number = 0;
  displayedColumns = ['id', 'name', 'price']

  constructor(
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      this.totalProducts = this.products.length;
    });
  }

  navigateToProductsCreate(): void {
    this.router.navigate(['/product/create']);
  }
}
