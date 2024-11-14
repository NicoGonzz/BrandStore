import { Component, Input, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './domains/shared/components/header/header.component';
import { Product } from './domains/shared/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BrandStore';

  cart = signal<Product[]>([]);

  constructor(private router: Router) {}

  shouldShowHeader(): boolean {
    return this.router.url !== '/';
  }

}
