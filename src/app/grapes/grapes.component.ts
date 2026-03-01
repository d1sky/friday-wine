import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { getResponsiveDefault, getSrcSet, isLocalAsset } from '../shared/image-helpers';
import { GRAPE_VARIETIES, GrapeVariety } from '../wine-data';
import { ResponsiveImageComponent } from '../shared/responsive-image/responsive-image.component';

@Component({
  selector: 'app-grapes',
  standalone: true,
  imports: [CommonModule, ResponsiveImageComponent],
  templateUrl: './grapes.component.html',
  styleUrls: ['./grapes.component.scss']
})
export class GrapesComponent implements OnInit {
  grapeVarieties: GrapeVariety[] = GRAPE_VARIETIES;

  ngOnInit() {
    this.grapeVarieties.forEach((g) => {
      if (g.image) g.currentSrc = getResponsiveDefault(g.image);
    });
  }

  getSrcSetForGrape(grape: GrapeVariety): string {
    const src = grape.currentSrc || grape.image;
    return src && isLocalAsset(src) && grape.image ? getSrcSet(grape.image) : '';
  }

  onImageError(grape: GrapeVariety): void {
    if (grape.fallbackImage) {
      grape.currentSrc = grape.fallbackImage;
    }
  }
}

