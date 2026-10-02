import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageItem } from '../image-item/image-item';

export interface GalleryImage {
  url: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ImageItem],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  images: GalleryImage[] = [
    { url: 'https://picsum.photos/id/1015/600/400', alt: 'Río entre montañas' },
    { url: 'https://picsum.photos/id/1016/600/400', alt: 'Montañas nevadas' },
    { url: 'https://picsum.photos/id/1018/600/400', alt: 'Valle con río' },
    { url: 'https://picsum.photos/id/1021/600/400', alt: 'Bosque de pinos' },
    { url: 'https://picsum.photos/id/1024/600/400', alt: 'Perro en la playa' },
    { url: 'https://picsum.photos/id/1025/600/400', alt: 'Cachorro' },
    { url: 'https://picsum.photos/id/1031/600/400', alt: 'Atardecer en el mar' },
    { url: 'https://picsum.photos/id/1035/600/400', alt: 'Carretera de montaña' }
  ];
}