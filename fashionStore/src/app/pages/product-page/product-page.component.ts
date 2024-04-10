import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductRequest } from '../../api/product.request';
import { Iproduct } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [ProductRequest],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  // Nesse componente, iremos objetivar trazer os parametros vaŕiaveis de url e
  // interagirmos com eles.
  // Iremos criar um signal para armazenar a receita que virá via requisição
  readonly productSignal = signal<Iproduct | null>(null);

  constructor(
    private route: ActivatedRoute,
    private productRequest: ProductRequest
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.productRequest.getOneProduct(id).subscribe((data) => {
          this.productSignal.set(data);
        });
      }
    });
  }

  get product() {
    return this.productSignal();
  }
}
