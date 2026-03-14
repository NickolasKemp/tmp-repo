# Lab3 — SonarQube аналіз коду

Проєкт для демонстрації аналізу коду SonarQube та виправлення знайдених проблем.

## Вимоги

- Node.js (для `npm run sonar`)
- SonarQube сервер на **http://localhost:9000**

## Як запустити аналіз

1. **Запустіть SonarQube** (якщо ще не запущений):
   - Логін за замовчуванням: `admin` / `admin`

2. **Створіть проект у SonarQube** (перший раз):
   - Відкрийте http://localhost:9000
   - Увійдіть → **Create project manually** → Project key: `lab3-sonarqube-demo`, Name: **Lab3 SonarQube Demo**
   - Оберіть **Locally** → **Generate a token** (наприклад, `lab3-token`) → **Continue**
   - Збережіть згенерований токен.

3. **Запустіть аналіз з токеном**:

   ```bash
   npm install
   export SONAR_TOKEN=ваш_токен_з_кроку_2
   npm run sonar
   ```

   Або в одному рядку (macOS/Linux):

   ```bash
   SONAR_TOKEN=ваш_токен npm run sonar
   ```

4. Перегляньте результат у браузері: http://localhost:9000/dashboard?id=lab3-sonarqube-demo

## Що виправлено в коді (відповідно до SonarQube)

- **Безпека:** прибрано hardcoded-секрети та `eval()`; використовується безпечний парсинг (наприклад, `JSON.parse`) або валідація вводу.
- **Якість:** прибрано невикористані змінні, заміна `var` на `const`/`let`, використання `===` замість `==`.
- **Помилки:** додано обробку помилок у `async`-функціях, не порожній `catch` (логування або повторний викид).
- **Код-запахи:** прибрано `console.log` з бізнес-логіки, усунено дублювання коду, спрощено умови (знижена когнітивна складність).

## Структура

- `src/index.js` — основний модуль
- `src/utils.js` — допоміжні функції
- `sonar-project.properties` — конфігурація SonarQube
