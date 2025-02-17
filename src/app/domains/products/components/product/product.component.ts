import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

    @Input({required: true}) product!: Product;
    @Input() rating: number = 1;

    @Output() addToCart = new EventEmitter();

    ngOnInit(): void {
      this.rating = this.generateRandomRating();
    }

    addToCartHandler(){
      this.addToCart.emit(this.product);
    }

    private generateRandomRating(): number {
      return Math.floor(Math.random() * 5) + 1;
    }

    get filledStars() {
      return Array(Math.floor(this.rating)).fill(0);
    }
  
    get emptyStars() {
      return Array(5 - Math.floor(this.rating)).fill(0);
    }

  }
