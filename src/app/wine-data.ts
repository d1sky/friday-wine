export interface GrapeVariety {
  name: string;
  color: 'red' | 'white' | 'rose';
  origin: string;
  characteristics: string;
  commonWines: string;
  keyFact?: string;
  image?: string;
  imageAlt?: string;
  fallbackImage?: string;
  currentSrc?: string;
}

export interface WineStyle {
  name: string;
  color: 'red' | 'white' | 'rose' | 'sparkling' | 'fortified';
  description: string;
  foodPairing: string;
  servingTip?: string;
  examples?: string;
  image?: string;
  imageAlt?: string;
  fallbackImage?: string;
  currentSrc?: string;
}

export const GRAPE_VARIETIES: GrapeVariety[] = [
  {
    name: 'Cabernet Sauvignon',
    color: 'red',
    origin: 'Бордо, Франция',
    characteristics:
      'Плотное тело, выраженные танины, ноты чёрной смородины, кедра, специй.',
    commonWines:
      'Бордоские купажи, вина Новой Зеландии, Калифорнии, Чили.',
    keyFact: 'Один из самых узнаваемых сортов мира; в Бордо обычно купажируется с Мерло и Каберне Фран.',
    image: 'assets/images/grape-cabernet.jpg',
    imageAlt: 'Cabernet Sauvignon',
    fallbackImage: 'https://images.pexels.com/photos/2801288/pexels-photo-2801288.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Merlot',
    color: 'red',
    origin: 'Бордо, Франция',
    characteristics:
      'Мягкие танины, вкусы сливы, чёрной вишни, шоколада.',
    commonWines: 'Моно-сорта и купажи Бордо, вина Калифорнии, Чили.',
    keyFact: 'Доминирует в правобережье Бордо (Сент-Эмильон, Помроль) и даёт округлые, доступные вина.',
    image: 'assets/images/grape-merlot.jpg',
    imageAlt: 'Merlot',
    fallbackImage: 'https://images.pexels.com/photos/2801288/pexels-photo-2801288.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Pinot Noir',
    color: 'red',
    origin: 'Бургундия, Франция',
    characteristics:
      'Лёгкое–среднее тело, ноты вишни, клубники, землистость, грибы.',
    commonWines:
      'Красные бургундские, спарклинг из Шампани, вина Германии и Новой Зеландии.',
    keyFact: 'Сложен в выращивании; в Шампани — основа многих блендов для игристого вина.',
    image: 'assets/images/grape-pinot.jpg',
    imageAlt: 'Pinot Noir',
    fallbackImage: 'https://images.pexels.com/photos/2801288/pexels-photo-2801288.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Chardonnay',
    color: 'white',
    origin: 'Бургундия, Франция',
    characteristics:
      'От свежих зелёных яблок и цитрусов до маслянистых ванильных тонов при выдержке в дубе.',
    commonWines:
      'Белые бургундские, шампанское, вина Калифорнии, Австралии, Чили.',
    keyFact: 'Универсальный белый сорт: от невыдержанных минеральных до насыщенных дубовых стилей.',
    image: 'assets/images/grape-chardonnay.jpg',
    imageAlt: 'Chardonnay',
    fallbackImage: 'https://images.pexels.com/photos/2801288/pexels-photo-2801288.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Sauvignon Blanc',
    color: 'white',
    origin: 'Луара и Бордо, Франция',
    characteristics:
      'Высокая кислотность, ноты лайма, крыжовника, трав, иногда тропических фруктов.',
    commonWines:
      'Вина Луары, Бордо (в купажах), Новой Зеландии, Чили.',
    keyFact: 'В Новой Зеландии (Мальборо) приобрёл мировую известность с ярким травяно-цитрусовым стилем.',
    image: 'assets/images/grape-sauvignon.jpg',
    imageAlt: 'Sauvignon Blanc',
    fallbackImage: 'https://images.pexels.com/photos/2801288/pexels-photo-2801288.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Riesling',
    color: 'white',
    origin: 'Германия',
    characteristics:
      'От сухих до сладких, яркая кислотность, ноты цитрусов, персика, петролевая нота при выдержке.',
    commonWines: 'Рейнгессен, Мозель, Эльзас, Австралия.',
    keyFact: 'Король немецких вин; от сухих до благородно-сладких (Spätlese, Auslese) и ледяных (Eiswein).',
    image: 'assets/images/grape-riesling.jpg',
    imageAlt: 'Riesling',
    fallbackImage: 'https://images.pexels.com/photos/2801288/pexels-photo-2801288.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const WINE_STYLES: WineStyle[] = [
  {
    name: 'Красное тихое вино',
    color: 'red',
    description:
      'Ферментируется на мезге с кожицей, что даёт цвет, танины и структуру. Может быть лёгким (Pinot Noir, Гаме) или мощным (Cabernet Sauvignon, Сира). Температура подачи важна: слишком тёплое вино теряет свежесть, слишком холодное — кажется жёстким.',
    foodPairing:
      'Красное мясо, тушёные блюда, зрелые сыры, блюда на гриле.',
    servingTip: 'Лёгкие красные 12–14 °C, полнотелые 16–18 °C.',
    examples: 'Бордо, Бургундия, Бароло, Напа, Мальбек (Мендоса).',
    image: 'assets/images/wine-red.jpg',
    imageAlt: 'Красное вино',
    fallbackImage: 'https://images.pexels.com/photos/214573/pexels-photo-214573.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Белое тихое вино',
    color: 'white',
    description:
      'Обычно ферментируется без кожицы, даёт свежесть, аромат фруктов и цветов; может выдерживаться в нержавейке (минеральный, фруктовый стиль) или в дубе (маслянистость, ваниль). Широкий спектр — от лёгких Sauvignon Blanc до насыщенных Chardonnay.',
    foodPairing:
      'Рыба, морепродукты, салаты, белое мясо, мягкие сыры.',
    servingTip: 'Лёгкие/ароматные 8–10 °C, выдержанные в дубе 10–12 °C.',
    examples: 'Шабли, Сансер, Соаве, Рислинг (Мозель, Рейн), Шардоне (Калифорния, Австралия).',
    image: 'assets/images/wine-white.jpg',
    imageAlt: 'Белое вино',
    fallbackImage: 'https://images.pexels.com/photos/214573/pexels-photo-214573.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Розовое вино',
    color: 'rose',
    description:
      'Краткий контакт с кожицей красного винограда даёт деликатный розовый цвет и лёгкий ягодный аромат. Бывает сухим (Прованс, Тавель) и полусухим. Часто пьют охлаждённым как аперитив или к лёгким блюдам.',
    foodPairing:
      'Лёгкие закуски, салаты, блюда из птицы, пикники.',
    servingTip: 'Подавать охлаждённым, 8–10 °C.',
    examples: 'Прованс, Тавель, розовое из Пино Нуар, шираз. Розовое шампанское.',
    image: 'assets/images/wine-rose.jpg',
    imageAlt: 'Розовое вино',
    fallbackImage: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Игристое вино',
    color: 'sparkling',
    description:
      'Содержит растворённый углекислый газ. Классический метод (вторичная ферментация в бутылке) даёт мелкую, стойкую пену (шампанское, кава, многие премиальные игристые). Резервуарный метод (в танках) — проще и дешевле (просекко, сек). Подача холодной подчёркивает пузырьки и свежесть.',
    foodPairing:
      'Аперитив, морепродукты, фритюр, десерты (в зависимости от сладости).',
    servingTip: 'Шампанское и игристое 6–8 °C, в высоком бокале или флере.',
    examples: 'Шампанское, Просекко, Кава, Креман, игристое из Нового Света.',
    image: 'assets/images/wine-sparkling.jpg',
    imageAlt: 'Игристое вино',
    fallbackImage: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Креплёное вино',
    color: 'fortified',
    description:
      'В вино добавляют спирт (бренди) во время или после брожения. Спирт останавливает брожение или стабилизирует вино, повышая крепость (обычно 17–22%) и придавая характер. Разные стили: портвейн (сладкий, Португалия), херес (сухой и сладкий, Испания), мадера (остров Мадейра), марсала.',
    foodPairing:
      'Десерты, выдержанные сыры, орехи; некоторые стили — к сигарам.',
    servingTip: 'Портвейн и сладкие креплёные 14–16 °C; херес фино охлаждённым.',
    examples: 'Портвейн, херес (фино, олоросо), мадера, марсала.',
    image: 'assets/images/wine-fortified.jpg',
    imageAlt: 'Креплёное вино',
    fallbackImage: 'https://images.pexels.com/photos/1557230/pexels-photo-1557230.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

