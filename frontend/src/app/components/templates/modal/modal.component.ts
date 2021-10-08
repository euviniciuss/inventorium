import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ProductProps } from 'src/app/pages/product/product.model';

import { ProductService } from '../../../pages/product/product.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  product: ProductProps = {
    name: '',
    price: 0,
  };

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalComponent>,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = '1';
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    })
  }

  deleteProduct(): void {
    this.productService.delete(`${this.product.id}`).subscribe(() => {
      this.productService.showMessage('Produto Excluído com sucesso!')
    });
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
