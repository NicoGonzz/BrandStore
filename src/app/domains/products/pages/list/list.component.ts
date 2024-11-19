import { Component, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@product/components/product/product.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { error } from 'console';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ProductComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  cart = this.cartService.cart;

  constructor(){
  }

  ngOnInit(){
    this.productService.getProducts()
    .subscribe({
      next: (products) =>{
        this.products.set(products)
      },
      error : () =>{
      } 
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
