import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isProductMenuOpen = false;
  isDropdownOpen = false;
  hideSideMenu = signal(true);
  @Input({required: true}) cart: Product[] = [];

  toggleProductMenu(): void {
    this.isProductMenuOpen = !this.isProductMenuOpen;
  }

  closeProductMenu(): void {
    this.isProductMenuOpen = false;
  }

  toggleDropdown(isOpen: boolean): void {
    this.isDropdownOpen = isOpen;
  }

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }

}
