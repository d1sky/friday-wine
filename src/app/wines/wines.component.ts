import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WINE_STYLES, WineStyle } from '../wine-data';

@Component({
  selector: 'app-wines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.scss']
})
export class WinesComponent {
  wineStyles: WineStyle[] = WINE_STYLES;

  onImageError(style: WineStyle): void {
    if (style.fallbackImage) {
      style.image = style.fallbackImage;
    }
  }
}

