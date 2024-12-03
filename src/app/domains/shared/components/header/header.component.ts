import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,TimeAgoPipe,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentDate: string;
  isProductMenuOpen = false;
  isDropdownOpen = false;
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;
  isMobileMenuOpen: boolean = false;

  constructor(
    public router: Router
  ){
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0]
  }

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

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  redirectTo(event: MouseEvent): void {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const href = target.getAttribute('href');
    if (href) {
      window.location.href = href; 
    }
    this.toggleMobileMenu();
  }

}
