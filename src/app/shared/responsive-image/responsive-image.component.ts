import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-responsive-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img
      [src]="currentSrc"
      [srcset]="srcSet"
      [sizes]="sizes"
      [alt]="alt"
      loading="lazy"
      (error)="onError()"
    />
  `
})
export class ResponsiveImageComponent {
  @Input() imageBase = '';
  @Input() alt = '';
  @Input() sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px';
  @Input() fallback = '';

  private basePath = 'assets/images';
  currentSrc = '';
  srcSet = '';

  ngOnInit() {
    const base = `${this.basePath}/${this.imageBase}`;
    this.currentSrc = `${base}-800w.jpg`;
    this.srcSet = `${base}-480w.jpg 480w, ${base}-800w.jpg 800w, ${base}-1200w.jpg 1200w`;
  }

  onError() {
    if (this.fallback) this.currentSrc = this.fallback;
  }
}
