import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface WineFilm {
  title: string;
  titleOriginal: string;
  year: number;
  country: string;
  director?: string;
  description: string;
  wineTheme: string;
  image?: string;
  imageAlt?: string;
  fallbackImage?: string;
}

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  films: WineFilm[] = [
    {
      title: 'На обочине',
      titleOriginal: 'Sideways',
      year: 2004,
      country: 'США',
      director: 'Александр Пейн',
      description:
        'Два друга отправляются в путешествие по винным долинам Калифорнии перед свадьбой одного из них. Комедия-драма о жизни, отношениях и страсти к вину.',
      wineTheme:
        'Действие разворачивается в Санта-Инес (Santa Ynez Valley). Фильм так поднял интерес к Пино Нуар и разочаровал в Мерло, что явление назвали «эффектом На обочине»: продажи пино в США выросли более чем на 20%, производство в Калифорнии — на 170%.',
      image: 'assets/images/film-sideways.jpg',
      imageAlt: 'Sideways — На обочине',
      fallbackImage: 'https://images.pexels.com/photos/5377770/pexels-photo-5377770.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Хороший год',
      titleOriginal: 'A Good Year',
      year: 2006,
      country: 'Великобритания, США',
      director: 'Ридли Скотт',
      description:
        'Лондонский трейдер наследует виноградник в Провансе и поневоле погружается в размеренную жизнь среди лоз, местных жителей и старого вина.',
      wineTheme:
        'Съёмки проходили в Провансе. Фильм передаёт атмосферу южнофранцузского виноделия, терруара и смены ценностей — от биржи к бокалу вина за столом.',
      image: 'assets/images/film-good-year.jpg',
      imageAlt: 'A Good Year — Хороший год',
      fallbackImage: 'https://images.pexels.com/photos/3952047/pexels-photo-3952047.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Удар бутылкой',
      titleOriginal: 'Bottle Shock',
      year: 2008,
      country: 'США',
      director: 'Рэндалл Миллер',
      description:
        'Художественная версия «Суда в Париже» 1976 года: калифорнийские вина в слепой дегустации побеждают французские, меняя представление мира о вине Нового Света.',
      wineTheme:
        'В основе — реальное событие (Judgment of Paris): калифорнийские Chardonnay и Cabernet Sauvignon обошли знаменитые бургундские и бордоские вина. Фильм показывает зарождение культовых хозяйств Напы.',
      image: 'assets/images/film-bottle-shock.jpg',
      imageAlt: 'Bottle Shock — Удар бутылкой',
      fallbackImage: 'https://images.pexels.com/photos/1557230/pexels-photo-1557230.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Сомелье',
      titleOriginal: 'Somm',
      year: 2012,
      country: 'США',
      director: 'Джейсон Уайз',
      description:
        'Документальный фильм о четырёх сомелье, готовящихся к экзамену Master Sommelier — одному из самых сложных в мире (исторически не сдают около 95% кандидатов).',
      wineTheme:
        'Слепая дегустация, теория, сервис. Фильм показывает уровень знаний и страсти, необходимые для высшей ступени в профессии сомелье. Есть продолжения: Somm: Into the Bottle (2015), Somm 3 (2018).',
      image: 'assets/images/film-somm.jpg',
      imageAlt: 'Somm — Сомелье',
      fallbackImage: 'https://images.pexels.com/photos/214573/pexels-photo-214573.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Возвращение в Бургундию',
      titleOriginal: 'Ce qui nous lie',
      year: 2017,
      country: 'Франция',
      director: 'Седрик Клапиш',
      description:
        'Жан возвращается в семейное поместье в Бургундии после смерти отца. Трое братьев и сестёр должны вместе вести виноградник и пережить год от сбора урожая до следующей осени.',
      wineTheme:
        'Реалистичное изображение бургундского виноделия: сезоны, работа в винограднике и погребе, наследие и налоги. Консультантом выступил винодел Жан-Марк Руло.',
      image: 'assets/images/film-burgundy.jpg',
      imageAlt: 'Ce qui nous lie — Возвращение в Бургундию',
      fallbackImage: 'https://images.pexels.com/photos/2147960/pexels-photo-2147960.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Прогулка в облаках',
      titleOriginal: 'A Walk in the Clouds',
      year: 1995,
      country: 'США, Мексика',
      director: 'Альфонсо Арау',
      description:
        'Романтическая драма о ветеране войны, который в долине Напа помогает на винограднике и влюбляется в дочь хозяина. Визуально насыщенный образ винной Калифорнии.',
      wineTheme:
        'Съёмки в Калифорнии; сцена сбора урожая и пожара среди лоз стали визитной карточкой фильма. Романтика вина и семьи виноделов.',
      image: 'assets/images/film-walk-clouds.jpg',
      imageAlt: 'A Walk in the Clouds — Прогулка в облаках',
      fallbackImage: 'https://images.pexels.com/photos/2961029/pexels-photo-2961029.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Винная страна',
      titleOriginal: 'Wine Country',
      year: 2019,
      country: 'США',
      director: 'Эми Полер',
      description:
        'Комедия о подругах, которые едут в Напу отпраздновать 50-летие одной из них. Снята для Netflix, в главных ролях — комики из Saturday Night Live.',
      wineTheme:
        'Винные туры, дегустации, виноградники Напы и окрестностей — лёгкий и ироничный взгляд на «винный» отпуск и дружбу.',
      image: 'assets/images/film-wine-country.jpg',
      imageAlt: 'Wine Country — Винная страна',
      fallbackImage: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Вдова Клико',
      titleOriginal: 'The Widow Clicquot',
      year: 2024,
      country: 'США, Франция',
      director: 'Томас Напп',
      description:
        'Биографическая драма о Барб-Николь Клико Понсарден, которая после смерти мужа возглавила дом шампанских вин и превратила Veuve Clicquot в мировую марку.',
      wineTheme:
        'История шампанского дома и одной из первых женщин-руководителей в индустрии. Эпоха наполеоновских войн, экспорт в Россию, изобретения в производстве шампанского.',
      image: 'assets/images/film-widow-clicquot.jpg',
      imageAlt: 'The Widow Clicquot — Вдова Клико',
      fallbackImage: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  onImageError(film: WineFilm): void {
    if (film.fallbackImage) {
      film.image = film.fallbackImage;
    }
  }
}
