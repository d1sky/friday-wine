## Винное путешествие (Angular)

Сайт о вине: история, география, производство, сорта винограда, стили вина, кино.

### Локально

```bash
npm install
npm start
```

Откройте `http://localhost:4200`.

### Публикация на GitHub Pages

1. **Создайте репозиторий на GitHub** (например, `friday-white-wine`). Не добавляйте README, .gitignore и лицензию — они уже в проекте.

2. **Включите GitHub Pages:**  
   Репозиторий → **Settings** → **Pages** → **Source:** **GitHub Actions**.

3. **Пуш в репозиторий:**

```bash
git init
git add .
git commit -m "Initial commit: wine site Angular"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/ИМЯ_РЕПОЗИТОРИЯ.git
git push -u origin main
```

4. После пуша в ветку `main` запустится workflow **Build and Deploy to GitHub Pages**. Дождитесь зелёной галочки в **Actions**.

5. Сайт будет доступен по адресу:  
   `https://ВАШ_ЛОГИН.github.io/ИМЯ_РЕПОЗИТОРИЯ/`

### Содержимое

- Главная (параллакс, навигация)
- История вина (хронология эпох)
- География и терруар
- Процесс производства (этапы с фото)
- Сорта винограда
- Стили вина
- Кино и вино (подборка фильмов)

