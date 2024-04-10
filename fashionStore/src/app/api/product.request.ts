import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductRequest {
  private BASE_URL = 'https://product-fake-api.onrender.com';

  constructor(private http: HttpClient) {}

  // Criando um método que fará a requisição de leitura de produtos
  getProducts() {
    return this.http.get<Iproduct[]>(`${this.BASE_URL}/products`);
  }

  getOneProduct(id: string) {
    return this.http.get<Iproduct>(`${this.BASE_URL}/products/${id}`);
  }
}
