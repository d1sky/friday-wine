import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { getResponsiveDefault, getSrcSet, isLocalAsset } from '../shared/image-helpers';
import { ResponsiveImageComponent } from '../shared/responsive-image/responsive-image.component';

export interface GeographyBlock {
  id: string;
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  fallbackImage?: string;
  currentSrc?: string;
}

@Component({
  selector: 'app-geography',
  standalone: true,
  imports: [CommonModule, ResponsiveImageComponent],
  templateUrl: './geography.component.html',
  styleUrls: ['./geography.component.scss']
})
export class GeographyComponent implements OnInit {
  blocks: GeographyBlock[] = [
    {
      id: 'old-world',
      title: 'Старый Свет',
      content:
        'К «старому свету» относят винные регионы Европы и Средиземноморья с многовековой историей виноделия: Франция, Италия, Испания, Германия, Португалия, Австрия, Швейцария, Греция. Здесь акцент делается на терруаре и традиции; сорта и приёмы часто закреплены законом. Во Франции система AOC (Appellation d\'origine contrôlée) привязывает вино к определённой территории и правилам производства. В Италии с 1963 года действуют ступени DOC и DOCG (контролируемое и гарантированное наименование по происхождению); IGT допускает большую свободу. Урожайность, разрешённые сорта и технологии строго регламентированы — этикетка чаще указывает регион или апелласьон, а не сорт винограда.',
      image: 'assets/images/geography-old-world.jpg',
      imageAlt: 'Виноградники Европы, старый свет',
      fallbackImage: 'https://images.pexels.com/photos/3952047/pexels-photo-3952047.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'new-world',
      title: 'Новый Свет',
      content:
        'Регионы «нового света» — страны, где виноделие массово развивалось в эпоху колонизации и позже: США (Калифорния, Вашингтон, Орегон), Чили, Аргентина, Австралия, Новая Зеландия, ЮАР, а также Канада, Китай и др. Законодательство обычно не привязывает вино к столь жёстким правилам по сортам и урожайности; на этикетке часто доминирует название сорта (Cabernet Sauvignon, Chardonnay). Климат часто более солнечный и предсказуемый, что даёт спелые, фруктовые стили; виноделы свободнее экспериментируют с выдержкой в дубе, смесями и технологиями. Многие регионы за несколько десятилетий завоевали мировое признание (например, Мальборо для Sauvignon Blanc, Напа для Cabernet).',
      image: 'assets/images/geography-new-world.jpg',
      imageAlt: 'Виноградники нового света',
      fallbackImage: 'https://images.pexels.com/photos/2961029/pexels-photo-2961029.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'terroir',
      title: 'Терруар',
      content:
        'Терруар — совокупность природных и человеческих факторов места: климат, тип почвы, рельеф, экспозиция склона, высота над уровнем моря, местные сорта и вековые приёмы работы. Один и тот же сорт (например, Pinot Noir) в Бургундии, Орегоне и Центральном Отаго даёт вина с разным характером — именно из-за терруара. Во «старом свете» терруар часто закреплён в названии апелласьона; в «новом» о нём всё чаще говорят, выделяя отдельные участки (single vineyard) и микрозоны. Понимание терруара помогает выбирать вино под настроение и блюдо и ценить разнообразие происхождения.',
      image: 'assets/images/geography-terroir.jpg',
      imageAlt: 'Почва и лоза, терруар',
      fallbackImage: 'https://images.pexels.com/photos/3013467/pexels-photo-3013467.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'microclimate',
      title: 'Микроклимат',
      content:
        'Микроклимат — климат конкретного участка или даже ряда лоз: он зависит от близости к воде (озеро, река, море), от направления склона (южный получает больше солнца), высоты (ночью прохладнее — лучше кислотность), лесных массивов и построек. В прохладных зонах виноград дольше зреет, сохраняя кислотность и тонкие ароматы; в жарких — набирает больше сахара и плотности. Виноделы используют микроклимат осознанно: сажают на склонах, у рек (как Мозель), на высоте (Мендоса, Каха-Маркес). Эти нюансы напрямую влияют на стиль вина и объясняют, почему соседние участки могут давать разные по характеру вина.',
      image: 'assets/images/geography-microclimate.jpg',
      imageAlt: 'Склон виноградника, микроклимат',
      fallbackImage: 'https://images.pexels.com/photos/3952047/pexels-photo-3952047.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  ngOnInit() {
    this.blocks.forEach((b) => {
      b.currentSrc = getResponsiveDefault(b.image);
    });
  }

  getSrcSetForBlock(block: GeographyBlock): string {
    return isLocalAsset(block.currentSrc || block.image) ? getSrcSet(block.image) : '';
  }

  onImageError(block: GeographyBlock): void {
    if (block.fallbackImage) {
      block.currentSrc = block.fallbackImage;
    }
  }
}
