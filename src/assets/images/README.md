# Локальные изображения

## Оптимизация под разные экраны

После того как все нужные файлы лежат в `src/assets/images/`, запустите:

```bash
npm run optimize-images
```

Скрипт (требует `sharp`):

- копирует **оригиналы** в подпапку `originals/`;
- создаёт облегчённые версии **480w**, **800w**, **1200w** (JPEG) для десктопа, планшета и мобильных.

Сайт подставляет эти варианты через `srcset`/`sizes` и фоновые картинки по медиа-запросам, чтобы уменьшить вес страницы на разных устройствах.

---

По умолчанию сайт подставляет запасные фото с Pexels. Чтобы использовать **свои или сгенерированные картинки**:

1. Скопируйте файлы `production-header.jpg` (шапка раздела) и `production-step-1.jpg` … `production-step-8.jpg` в эту папку (`src/assets/images/`).
2. Они лежат в папке ассетов Cursor-проекта, например:
   `~/.cursor/projects/Users-skydi-Desktop-friday-white-wine/assets/`
3. После копирования перезапустите `ng serve` — раздел «Производство» будет показывать эти изображения.

Имена файлов: `production-header.jpg`, `production-step-1.jpg`, `production-step-2.jpg`, … `production-step-8.jpg`.

Дополнительно для других разделов:
- `home-hero.jpg` — фон главного экрана (параллакс).
- `home-intro.jpg` — картинка в блоке «От лозы до бокала».
- `history-header.jpg` — шапка раздела «История вина».
- `history-era-1.jpg` … `history-era-8.jpg` — фото к каждой из восьми эпох в разделе «История вина».
- `geography-1.jpg`, `geography-2.jpg` — фото в шапке раздела «География и терруар».
- `geography-old-world.jpg`, `geography-new-world.jpg`, `geography-terroir.jpg`, `geography-microclimate.jpg` — блоки раздела «География».
- `grapes-header.jpg` — шапка раздела «Сорта винограда».
- `grape-cabernet.jpg`, `grape-merlot.jpg`, `grape-pinot.jpg`, `grape-chardonnay.jpg`, `grape-sauvignon.jpg`, `grape-riesling.jpg` — карточки сортов.
- `wines-1.jpg`, `wines-2.jpg` — фото в шапке раздела «Стили вина».
- `wine-red.jpg`, `wine-white.jpg`, `wine-rose.jpg`, `wine-sparkling.jpg`, `wine-fortified.jpg` — карточки стилей вина.
- **Раздел «Кино и вино»:** `films-header.jpg` — шапка; `film-sideways.jpg`, `film-good-year.jpg`, `film-bottle-shock.jpg`, `film-somm.jpg`, `film-burgundy.jpg`, `film-walk-clouds.jpg`, `film-wine-country.jpg`, `film-widow-clicquot.jpg` — карточки фильмов.
