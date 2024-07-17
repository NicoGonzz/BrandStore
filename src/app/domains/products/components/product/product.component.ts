import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

    @Input({required: true}) img: string = '';
    @Input({required: true}) price: number = 0;
    @Input({required: true}) title: string = '';
    @Input() rating: number = 1;

    @Output() addToCart = new EventEmitter();

    addToCartHandler(){
      console.log('Click desde el hijo');
      this.addToCart.emit('Hola este es un mensaje desde el hijo' + this.title);
    }

    get filledStars() {
      return Array(Math.floor(this.rating)).fill(0);
    }
  
    get emptyStars() {
      return Array(5 - Math.floor(this.rating)).fill(0);
    }

  }
