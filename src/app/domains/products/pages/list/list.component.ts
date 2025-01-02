import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@product/components/product/product.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ProductComponent,RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id?: string;

  cart = this.cartService.cart;

  constructor(){
  }

  ngOnInit(){
   this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges){
      this.getProducts()
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  private getProducts(){
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (products) =>{
        this.products.set(products);
      },
      error : () =>{
      } 
    });
  }

  private getCategories() {
    this.categoryService.getAll()
      .subscribe({
        next: (data) => {
          const filteredCategories = this.filterCategories(data);

          const uniqueCategories = Array.from(
            new Map(filteredCategories.map(category => [category.name, category])).values()
          );
          this.categories.set(uniqueCategories);
        },
        error: () => {
        }
      });
  }

  private filterCategories(categories: Category[]): Category[] {
    return categories.filter(category => 
      category.name === 'Furniture' || 
      category.name === 'Miscellaneous' ||
      category.name === 'Shoes'
    );
  }
  

}
