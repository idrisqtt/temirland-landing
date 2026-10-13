# TemirLand landing page

Production-ready статический лендинг компании TemirLand.

## Локальный запуск

```bash
python3 -m http.server 4173 --directory dist
```

Откройте `http://localhost:4173`.

## Деплой на Vercel

Импортируйте этот GitHub-репозиторий в Vercel. Настройки определяются из `vercel.json`:

- Framework Preset: `Other`
- Build Command: не требуется
- Output Directory: `dist`

