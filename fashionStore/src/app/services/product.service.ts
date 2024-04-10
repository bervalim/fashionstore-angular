import { Injectable, signal } from '@angular/core';
import { ProductRequest } from '../api/product.request';
import { Iproduct } from '../interfaces/product.interface';

@Injectable()
export class ProductService {
  // instanciando um signal que será responsável por armazenar a lista de produtos:
  readonly productList = signal<Iproduct[]>([]);

  constructor(private productRequest: ProductRequest) {
    this.productRequest.getProducts().subscribe((data) => {
      this.productList.set(data);
    });
  }

  // Retornando o signal:
  getProducts() {
    return this.productList();
  }
}
