# truebusiness landing page

Production-ready статический лендинг компании truebusiness.

## Локальный запуск

```bash
npm run dev
```

Откройте `http://localhost:4173`.

Установка зависимостей не требуется: сайт статический, а локальный сервер запускается через Python 3.

## Деплой на Vercel

Импортируйте этот GitHub-репозиторий в Vercel. Настройки определяются из `vercel.json`:

- Framework Preset: `Other`
- Build Command: не требуется
- Output Directory: `dist`

