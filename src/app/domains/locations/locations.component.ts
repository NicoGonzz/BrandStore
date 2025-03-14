import { CommonModule } from '@angular/common';
import { Component, signal, ViewChild } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, GoogleMap, MapMarker, MatFormFieldModule, MatInputModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {

  @ViewChild('searchInput') searchInput!: HTMLInputElement;

  center = signal<{ lat: number; lng: number }>({ lat: -34.6037, lng: -58.3816 });
  zoom = signal(12);
  selectedLocation = signal<{ lat: number; lng: number; } | null>(null);
  $locations = signal<{ lat: number; lng: number }[]>([]);
  constructor(){
    setTimeout(()=>{
      this.selectedLocation.set({lat: 35, lng: -118});
    }, 2000);
  }
ngAfterViewInit() {
  if (!this.searchInput) return;

  const autocomplete = new google.maps.places.Autocomplete(this.searchInput, {
    types: ['geocode'],
    componentRestrictions: { country: 'AR' }
  });

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();
    if (place && place.geometry && place.geometry.location) {
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      this.selectedLocation.set(location);
      this.$locations.set([...this.$locations(), location]);
      this.center.set(location);
    } else {
      console.error('Place not found or invalid.');
    }
  });
}
}
  

