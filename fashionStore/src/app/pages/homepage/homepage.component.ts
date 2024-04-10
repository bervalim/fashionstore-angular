import { Component } from '@angular/core';
import { ProductRequest } from '../../api/product.request';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [ProductRequest, ProductService],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  constructor(private productService: ProductService) {}

  // Criando um getter para proporcionar reatividade a HomePage
  get productList() {
    return this.productService.getProducts();
  }

  // Criando um método para gerar um link dinâmico:
  productURL(id: number) {
    return `/products/${id}`;
  }
}
