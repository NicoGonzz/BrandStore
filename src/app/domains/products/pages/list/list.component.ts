import { Component, signal } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ProductComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor(){

    const initProducts: Product[] = [ 
    {
      id: Date.now(),
      title: 'Producto 1',
      price: 120,
      image: 'https://picsum.photos/640/640?r=24',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 2',
      price: 220,
      image: 'https://picsum.photos/640/640?r=24',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 3',
      price: 180,
      image: 'https://picsum.photos/640/640?r=24',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 4',
      price: 130,
      image: 'https://picsum.photos/640/640?r=24',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 5',
      price: 140,
      image: 'https://picsum.photos/640/640?r=24',
      creationAt: new Date().toISOString()
    }
  ];
  this.products.set(initProducts)
}
  addToCart(product: Product) {
    this.cart.update(prevState => [...prevState,product])
  }

}
