import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GRAPE_VARIETIES, GrapeVariety } from '../wine-data';

@Component({
  selector: 'app-grapes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grapes.component.html',
  styleUrls: ['./grapes.component.scss']
})
export class GrapesComponent {
  grapeVarieties: GrapeVariety[] = GRAPE_VARIETIES;

  onImageError(grape: GrapeVariety): void {
    if (grape.fallbackImage) {
      grape.image = grape.fallbackImage;
    }
  }
}

