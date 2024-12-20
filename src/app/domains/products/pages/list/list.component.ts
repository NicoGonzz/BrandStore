import { Component, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@product/components/product/product.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { error } from 'console';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ProductComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  cart = this.cartService.cart;

  constructor(){
  }

  ngOnInit(){
   this.getProducts();
   this.getCategories();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  private getProducts(){
    this.productService.getProducts()
    .subscribe({
      next: (products) =>{
        this.products.set(products)
      },
      error : () =>{
      } 
    });
  }

  private getCategories() {
    this.categoryService.getAll()
      .subscribe({
        next: (data) => {
          // Elimina categorías duplicadas por nombre
          const uniqueCategories = Array.from(
            new Map(data.map(category => [category.name, category])).values()
          );
          console.log(uniqueCategories);
          this.categories.set(uniqueCategories);
        },
        error: () => {
          console.error('Error al obtener las categorías');
        }
      });
  }
  

}
