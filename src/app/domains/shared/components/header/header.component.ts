import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

  toggleProductMenu(): void {
    this.isProductMenuOpen = !this.isProductMenuOpen;
  }

  closeProductMenu(): void {
    this.isProductMenuOpen = false;
  }

  toggleDropdown(isOpen: boolean): void {
    this.isDropdownOpen = isOpen;
  }
}
