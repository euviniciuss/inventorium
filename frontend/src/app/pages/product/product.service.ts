import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { ProductProps } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "http://localhost:8080/products";
  idProduct: string = '';
  urlProduct: string = `${this.baseUrl}/${this.idProduct}`;

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
  ) { }

  //Mensagem de confirmação
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['positive-snack-bar']
    });
  }

  //Criação de produto no backend
  create(product: ProductProps): Observable<ProductProps> {
    return this.http.post<ProductProps>(this.baseUrl, product);
  }

  //Ler produtos no backend
  read(): Observable<ProductProps[]> {
    return this.http.get<ProductProps[]>(this.baseUrl);
  }

  //Ler um  produto pelo Id
  readById(id: string): Observable<ProductProps> {
    this.idProduct = id;
    this.urlProduct;
    return this.http.get<ProductProps>(this.urlProduct);
  }

  //Atualizar um produto
  update(product: ProductProps): Observable<ProductProps> {
    return this.http.put<ProductProps>(this.urlProduct, product);
  }

}
