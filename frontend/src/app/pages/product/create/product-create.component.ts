import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { ProductProps } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: ProductProps = {
    name: '',
    price: 0
  }

  constructor(
    private router: Router, 
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso');
      console.log(this.product);
    })    
  };

  navigateToProducts(): void {
    this.router.navigate(['/product']);
  }

}
