import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { getResponsiveDefault, getSrcSet, isLocalAsset } from '../shared/image-helpers';
import { WINE_STYLES, WineStyle } from '../wine-data';
import { ResponsiveImageComponent } from '../shared/responsive-image/responsive-image.component';

@Component({
  selector: 'app-wines',
  standalone: true,
  imports: [CommonModule, ResponsiveImageComponent],
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.scss']
})
export class WinesComponent implements OnInit {
  wineStyles: WineStyle[] = WINE_STYLES;

  ngOnInit() {
    this.wineStyles.forEach((s) => {
      if (s.image) s.currentSrc = getResponsiveDefault(s.image);
    });
  }

  getSrcSetForStyle(style: WineStyle): string {
    const src = style.currentSrc || style.image;
    return src && isLocalAsset(src) && style.image ? getSrcSet(style.image) : '';
  }

  onImageError(style: WineStyle): void {
    if (style.fallbackImage) {
      style.currentSrc = style.fallbackImage;
    }
  }
}

