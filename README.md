# NoteHub

NoteHub — застосунок для створення, пошуку, перегляду та видалення особистих нотаток. Проєкт перенесено з React/Vite на Next.js із використанням App Router.

## Функціональність

- головна сторінка з описом застосунку;
- список нотаток із пошуком і пагінацією;
- створення та видалення нотаток;
- сторінка деталей окремої нотатки;
- обробка станів завантаження та помилок;
- серверний prefetch даних і hydration кешу TanStack Query.

## Маршрути

| Маршрут       | Призначення                                   |
| ------------- | --------------------------------------------- |
| `/`           | Головна сторінка NoteHub                      |
| `/notes`      | Список, пошук, створення та видалення нотаток |
| `/notes/[id]` | Детальна інформація про одну нотатку          |

## Технології

- Next.js 16 та React 19;
- TypeScript;
- TanStack Query;
- Axios;
- Formik і Yup;
- CSS Modules;
- Prettier та ESLint.

## Встановлення і запуск

1. Клонуйте репозиторій:

   ```bash
   git clone https://github.com/Dmytro777-lab/06-notehub-nextjs.git
   ```

2. Перейдіть у папку проєкту та встановіть залежності:

   ```bash
   cd 06-notehub-nextjs
   npm install
   ```

3. Створіть у корені файл `.env` і додайте токен API:

   ```env
   NEXT_PUBLIC_NOTEHUB_TOKEN=ваш_токен
   ```

4. Запустіть застосунок у режимі розробки:

   ```bash
   npm run dev
   ```

Відкрийте [http://localhost:3000](http://localhost:3000).

## Команди

```bash
npm run dev          # запуск у режимі розробки
npm run lint         # перевірка ESLint
npm run format        # форматування Prettier
npm run format:check # перевірка форматування
npm run build        # production-збірка
npm run start        # запуск production-версії
```

## Автор

Dmytro Dorofeyev
