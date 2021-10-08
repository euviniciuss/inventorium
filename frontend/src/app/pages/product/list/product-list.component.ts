import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ProductService } from '../product.service';
import { ProductProps } from '../product.model';

import { ModalComponent } from 'src/app/components/templates/modal/modal.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductProps[] = [];
  totalProducts: number = 0;
  
  constructor(
    private router: Router,
    private productService: ProductService,
    public dialog: MatDialog
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

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '360px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Fechou');
    })
  }
}