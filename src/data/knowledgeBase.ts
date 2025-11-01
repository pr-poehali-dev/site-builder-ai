export interface KnowledgeCategory {
  id: string;
  title: string;
  icon: string;
  topics: KnowledgeTopic[];
}

export interface KnowledgeTopic {
  id: string;
  title: string;
  description: string;
  code?: string;
  examples?: CodeExample[];
  tips?: string[];
  bestPractices?: string[];
}

export interface CodeExample {
  title: string;
  code: string;
  language: string;
  explanation: string;
}

export const knowledgeBase: KnowledgeCategory[] = [
  {
    id: 'html',
    title: 'HTML — Структура сайта',
    icon: 'FileCode',
    topics: [
      {
        id: 'html-basics',
        title: 'Основы HTML',
        description: 'HTML — язык разметки для создания структуры веб-страниц',
        code: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Моя страница</title>
</head>
<body>
  <header>
    <h1>Заголовок сайта</h1>
    <nav>
      <a href="#home">Главная</a>
      <a href="#about">О нас</a>
    </nav>
  </header>
  
  <main>
    <section>
      <h2>Раздел контента</h2>
      <p>Параграф текста</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2024 Мой сайт</p>
  </footer>
</body>
</html>`,
        bestPractices: [
          'Используйте семантические теги (header, nav, main, footer)',
          'Всегда указывайте <!DOCTYPE html>',
          'Добавляйте мета-теги для SEO',
          'Используйте alt-атрибуты для изображений',
        ]
      },
      {
        id: 'html-forms',
        title: 'Формы и инпуты',
        description: 'Создание интерактивных форм для сбора данных',
        examples: [
          {
            title: 'Форма регистрации',
            language: 'html',
            code: `<form action="/submit" method="POST">
  <label for="name">Имя:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="password">Пароль:</label>
  <input type="password" id="password" name="password" minlength="8">
  
  <label for="country">Страна:</label>
  <select id="country" name="country">
    <option value="ru">Россия</option>
    <option value="us">США</option>
  </select>
  
  <button type="submit">Зарегистрироваться</button>
</form>`,
            explanation: 'Форма с валидацией на уровне HTML'
          }
        ],
        tips: [
          'Всегда используйте label для доступности',
          'Добавляйте атрибут required для обязательных полей',
          'Используйте правильные типы input (email, tel, number)',
        ]
      },
      {
        id: 'html-semantic',
        title: 'Семантическая разметка',
        description: 'Правильная структура для SEO и доступности',
        examples: [
          {
            title: 'Статья блога',
            language: 'html',
            code: `<article>
  <header>
    <h1>Заголовок статьи</h1>
    <time datetime="2024-11-01">1 ноября 2024</time>
    <address>Автор: <a href="/author">Иван Иванов</a></address>
  </header>
  
  <section>
    <h2>Введение</h2>
    <p>Текст статьи...</p>
  </section>
  
  <aside>
    <h3>Похожие статьи</h3>
    <ul>
      <li><a href="/article1">Статья 1</a></li>
    </ul>
  </aside>
  
  <footer>
    <p>Теги: <span>веб-разработка</span></p>
  </footer>
</article>`,
            explanation: 'Правильная семантическая структура статьи'
          }
        ]
      }
    ]
  },
  {
    id: 'css',
    title: 'CSS — Стилизация',
    icon: 'Palette',
    topics: [
      {
        id: 'css-selectors',
        title: 'Селекторы CSS',
        description: 'Выбор элементов для стилизации',
        examples: [
          {
            title: 'Типы селекторов',
            language: 'css',
            code: `/* Селектор тега */
p { color: blue; }

/* Селектор класса */
.button { padding: 10px; }

/* Селектор ID */
#header { background: white; }

/* Селектор потомка */
nav a { text-decoration: none; }

/* Прямой потомок */
ul > li { list-style: none; }

/* Псевдоклассы */
a:hover { color: red; }
input:focus { border-color: blue; }
li:first-child { font-weight: bold; }
li:nth-child(2n) { background: #f0f0f0; }

/* Псевдоэлементы */
p::before { content: "→ "; }
p::first-letter { font-size: 2em; }

/* Группировка */
h1, h2, h3 { font-family: Arial; }

/* Комбинированные */
.card.active { border: 2px solid green; }`,
            explanation: 'Все основные типы селекторов CSS'
          }
        ]
      },
      {
        id: 'css-flexbox',
        title: 'Flexbox — Гибкие контейнеры',
        description: 'Современная система раскладки элементов',
        examples: [
          {
            title: 'Навигационное меню',
            language: 'css',
            code: `.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

/* Вертикальное центрирование */
.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Равномерное распределение */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* grow shrink basis */
}`,
            explanation: 'Flexbox для создания адаптивных раскладок'
          }
        ],
        bestPractices: [
          'Используйте gap вместо margin для отступов между элементами',
          'flex: 1 означает flex: 1 1 0 (grow, shrink, basis)',
          'align-items для вертикального, justify-content для горизонтального',
        ]
      },
      {
        id: 'css-grid',
        title: 'CSS Grid — Сеточная раскладка',
        description: 'Двумерная система раскладки',
        examples: [
          {
            title: 'Макет страницы',
            language: 'css',
            code: `.layout {
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  min-height: 100vh;
  gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Адаптивная сетка */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}`,
            explanation: 'Grid для сложных макетов страниц'
          }
        ]
      },
      {
        id: 'css-animations',
        title: 'Анимации и переходы',
        description: 'Создание плавных анимаций',
        examples: [
          {
            title: 'Transitions и Animations',
            language: 'css',
            code: `/* Плавные переходы */
.button {
  background: blue;
  transition: all 0.3s ease;
}

.button:hover {
  background: darkblue;
  transform: scale(1.05);
}

/* Keyframe анимация */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeIn 0.5s ease-out;
}

/* Бесконечная анимация */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loader {
  animation: spin 1s linear infinite;
}

/* Задержка анимации */
.item:nth-child(1) { animation-delay: 0.1s; }
.item:nth-child(2) { animation-delay: 0.2s; }
.item:nth-child(3) { animation-delay: 0.3s; }`,
            explanation: 'Transitions для интерактивности, animations для сложных эффектов'
          }
        ],
        tips: [
          'Анимируйте только transform и opacity для лучшей производительности',
          'Используйте will-change для оптимизации',
          'transition для простых эффектов, animation для сложных',
        ]
      },
      {
        id: 'css-responsive',
        title: 'Адаптивный дизайн',
        description: 'Создание сайтов для всех устройств',
        examples: [
          {
            title: 'Media queries',
            language: 'css',
            code: `/* Mobile First подход */
.container {
  width: 100%;
  padding: 1rem;
}

/* Планшеты */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
  
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Десктоп */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
  
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Широкие экраны */
@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
}

/* Адаптивная типографика */
.title {
  font-size: clamp(1.5rem, 5vw, 3rem);
}

/* Адаптивные отступы */
.section {
  padding: clamp(1rem, 5vw, 4rem);
}`,
            explanation: 'Адаптивность с помощью media queries и современных CSS функций'
          }
        ]
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript — Интерактивность',
    icon: 'Code',
    topics: [
      {
        id: 'js-basics',
        title: 'Основы JavaScript',
        description: 'Переменные, типы данных, операторы',
        examples: [
          {
            title: 'Переменные и типы',
            language: 'javascript',
            code: `// Переменные
let name = "Иван";           // Строка
const age = 25;              // Число
let isActive = true;         // Boolean
let items = [1, 2, 3];       // Массив
let user = { name: "Иван" }; // Объект
let nothing = null;          // Null
let notDefined;              // Undefined

// Операторы
let sum = 10 + 5;
let diff = 10 - 5;
let product = 10 * 5;
let quotient = 10 / 5;
let remainder = 10 % 3;

// Сравнение
10 === 10;    // true (строгое равенство)
"10" === 10;  // false
"10" == 10;   // true (нестрогое, избегайте)

// Логические операторы
true && false;  // false (И)
true || false;  // true (ИЛИ)
!true;          // false (НЕ)

// Условия
if (age >= 18) {
  console.log("Совершеннолетний");
} else {
  console.log("Несовершеннолетний");
}

// Тернарный оператор
const status = age >= 18 ? "взрослый" : "ребенок";`,
            explanation: 'Основные типы данных и операторы JavaScript'
          }
        ]
      },
      {
        id: 'js-functions',
        title: 'Функции',
        description: 'Создание переиспользуемого кода',
        examples: [
          {
            title: 'Типы функций',
            language: 'javascript',
            code: `// Обычная функция
function greet(name) {
  return "Привет, " + name;
}

// Стрелочная функция
const greetArrow = (name) => {
  return \`Привет, \${name}\`;
};

// Короткая запись
const greetShort = (name) => \`Привет, \${name}\`;

// Параметры по умолчанию
function createUser(name, role = "user") {
  return { name, role };
}

// Деструктуризация параметров
function printUser({ name, age }) {
  console.log(\`\${name}, \${age} лет\`);
}

// Rest параметры
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Callback функции
function fetchData(callback) {
  setTimeout(() => {
    callback({ data: "result" });
  }, 1000);
}

fetchData((result) => {
  console.log(result);
});

// Замыкания (closures)
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const myCounter = counter();
myCounter(); // 1
myCounter(); // 2`,
            explanation: 'Различные способы создания и использования функций'
          }
        ]
      },
      {
        id: 'js-arrays',
        title: 'Массивы и методы',
        description: 'Работа с коллекциями данных',
        examples: [
          {
            title: 'Методы массивов',
            language: 'javascript',
            code: `const numbers = [1, 2, 3, 4, 5];

// map - преобразование каждого элемента
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter - фильтрация элементов
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce - свертка массива в одно значение
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// find - поиск первого элемента
const found = numbers.find(n => n > 3);
// 4

// some - проверка наличия элемента
const hasEven = numbers.some(n => n % 2 === 0);
// true

// every - проверка всех элементов
const allPositive = numbers.every(n => n > 0);
// true

// forEach - перебор элементов
numbers.forEach(n => console.log(n));

// Сортировка
const names = ["Яна", "Алексей", "Борис"];
names.sort(); // ["Алексей", "Борис", "Яна"]

const nums = [10, 2, 5, 1];
nums.sort((a, b) => a - b); // [1, 2, 5, 10]

// Комбинирование методов
const users = [
  { name: "Иван", age: 25 },
  { name: "Мария", age: 30 },
  { name: "Петр", age: 20 }
];

const result = users
  .filter(u => u.age >= 25)
  .map(u => u.name)
  .sort();
// ["Иван", "Мария"]`,
            explanation: 'Функциональные методы для работы с массивами'
          }
        ],
        bestPractices: [
          'Используйте map вместо циклов для преобразований',
          'filter + map лучше, чем forEach с условиями',
          'reduce для сложных операций агрегации',
          'Избегайте мутации исходного массива',
        ]
      },
      {
        id: 'js-async',
        title: 'Асинхронность',
        description: 'Работа с промисами и async/await',
        examples: [
          {
            title: 'Promises и Async/Await',
            language: 'javascript',
            code: `// Promise
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Иван" });
      } else {
        reject("Invalid ID");
      }
    }, 1000);
  });
}

// Использование промиса
fetchUser(1)
  .then(user => console.log(user))
  .catch(error => console.error(error));

// Async/Await (современный подход)
async function getUser() {
  try {
    const user = await fetchUser(1);
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
  }
}

// Параллельные запросы
async function getMultipleUsers() {
  const [user1, user2, user3] = await Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3)
  ]);
  return [user1, user2, user3];
}

// Fetch API
async function fetchData(url) {
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Network error');
  }
  
  const data = await response.json();
  return data;
}

// POST запрос
async function createUser(userData) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  });
  
  return response.json();
}`,
            explanation: 'Асинхронные операции с промисами и async/await'
          }
        ],
        tips: [
          'Всегда используйте try/catch с async/await',
          'Promise.all для параллельных запросов',
          'async/await читабельнее, чем .then().catch()',
        ]
      },
      {
        id: 'js-dom',
        title: 'DOM манипуляции',
        description: 'Взаимодействие с HTML элементами',
        examples: [
          {
            title: 'Работа с DOM',
            language: 'javascript',
            code: `// Поиск элементов
const el = document.getElementById('myId');
const els = document.querySelectorAll('.myClass');
const firstEl = document.querySelector('.myClass');

// Изменение содержимого
el.textContent = "Новый текст";
el.innerHTML = "<strong>HTML текст</strong>";

// Изменение стилей
el.style.color = "red";
el.style.backgroundColor = "blue";
el.classList.add('active');
el.classList.remove('inactive');
el.classList.toggle('visible');

// Создание элементов
const div = document.createElement('div');
div.className = 'card';
div.textContent = 'Карточка';
document.body.appendChild(div);

// Обработка событий
const button = document.querySelector('#myButton');

button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Кнопка нажата!');
});

// Делегирование событий
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.delete-btn')) {
    e.target.closest('.card').remove();
  }
});

// Форма
const form = document.querySelector('#myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);
});

// Инпут в реальном времени
const input = document.querySelector('#search');

input.addEventListener('input', (e) => {
  const query = e.target.value;
  console.log('Поиск:', query);
});`,
            explanation: 'Манипуляции с DOM для создания интерактивных интерфейсов'
          }
        ]
      }
    ]
  },
  {
    id: 'react',
    title: 'React — Современный фреймворк',
    icon: 'Component',
    topics: [
      {
        id: 'react-components',
        title: 'Компоненты React',
        description: 'Создание переиспользуемых UI компонентов',
        examples: [
          {
            title: 'Функциональные компоненты',
            language: 'typescript',
            code: `import React from 'react';

// Простой компонент
function Button() {
  return <button>Нажми меня</button>;
}

// Компонент с пропсами
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

function Button({ text, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

// Использование
function App() {
  const handleClick = () => {
    alert('Clicked!');
  };
  
  return (
    <div>
      <Button text="Сохранить" onClick={handleClick} />
      <Button text="Отмена" onClick={handleClick} variant="secondary" />
    </div>
  );
}

// Компонент с children
interface CardProps {
  title: string;
  children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}`,
            explanation: 'Создание компонентов с пропсами и TypeScript типами'
          }
        ]
      },
      {
        id: 'react-hooks',
        title: 'React Hooks',
        description: 'Хуки для работы со состоянием и эффектами',
        examples: [
          {
            title: 'useState и useEffect',
            language: 'typescript',
            code: `import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Сброс</button>
    </div>
  );
}

// useEffect для побочных эффектов
function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Выполняется при монтировании и изменении userId
    async function fetchUser() {
      setLoading(true);
      const response = await fetch(\`/api/users/\${userId}\`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }
    
    fetchUser();
    
    // Cleanup функция
    return () => {
      // Отмена запросов, таймеров и т.д.
    };
  }, [userId]); // Зависимости
  
  if (loading) return <div>Загрузка...</div>;
  if (!user) return <div>Пользователь не найден</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// useEffect для подписок
function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Пустой массив = выполнится один раз
  
  return <div>Ширина: {width}px</div>;
}`,
            explanation: 'useState для состояния, useEffect для побочных эффектов'
          },
          {
            title: 'useContext и useRef',
            language: 'typescript',
            code: `import { createContext, useContext, useRef, useEffect } from 'react';

// Контекст для глобального состояния
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Использование контекста
function ThemeButton() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  
  return (
    <button onClick={context.toggleTheme}>
      Тема: {context.theme}
    </button>
  );
}

// useRef для доступа к DOM
function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Автофокус при монтировании
    inputRef.current?.focus();
  }, []);
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current?.focus()}>
        Фокус на инпут
      </button>
    </div>
  );
}

// useRef для хранения значений
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = window.setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  };
  
  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  
  useEffect(() => {
    return () => stop(); // Cleanup
  }, []);
  
  return (
    <div>
      <p>Секунд: {count}</p>
      <button onClick={start}>Старт</button>
      <button onClick={stop}>Стоп</button>
    </div>
  );
}`,
            explanation: 'useContext для глобального состояния, useRef для DOM и значений'
          }
        ],
        bestPractices: [
          'Всегда указывайте зависимости в useEffect',
          'Используйте useCallback и useMemo для оптимизации',
          'Создавайте custom hooks для переиспользования логики',
          'useRef не вызывает ре-рендер при изменении',
        ]
      },
      {
        id: 'react-forms',
        title: 'Формы в React',
        description: 'Контролируемые компоненты и валидация',
        examples: [
          {
            title: 'Контролируемая форма',
            language: 'typescript',
            code: `import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  password: string;
  agree: boolean;
}

function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    agree: false
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  
  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно';
    }
    
    if (!formData.email.includes('@')) {
      newErrors.email = 'Некорректный email';
    }
    
    if (formData.password.length < 8) {
      newErrors.password = 'Минимум 8 символов';
    }
    
    if (!formData.agree) {
      newErrors.agree = 'Необходимо согласие';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Регистрация успешна!');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  
  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.type === 'checkbox' 
      ? e.target.checked 
      : e.target.value;
      
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Очистка ошибки при изменении
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Имя</label>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange('name')}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      
      <div>
        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      
      <div>
        <label>Пароль</label>
        <input
          type="password"
          value={formData.password}
          onChange={handleChange('password')}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      
      <div>
        <label>
          <input
            type="checkbox"
            checked={formData.agree}
            onChange={handleChange('agree')}
          />
          Согласен с условиями
        </label>
        {errors.agree && <span className="error">{errors.agree}</span>}
      </div>
      
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}`,
            explanation: 'Полноценная форма с валидацией и обработкой ошибок'
          }
        ]
      }
    ]
  },
  {
    id: 'typescript',
    title: 'TypeScript — Типизация',
    icon: 'FileType',
    topics: [
      {
        id: 'ts-basics',
        title: 'Основы TypeScript',
        description: 'Типы данных и интерфейсы',
        examples: [
          {
            title: 'Примитивные типы',
            language: 'typescript',
            code: `// Примитивные типы
let name: string = "Иван";
let age: number = 25;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Массивы
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b"];

// Кортежи
let tuple: [string, number] = ["Иван", 25];

// Enum
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let userRole: Role = Role.Admin;

// Any (избегайте!)
let anything: any = "hello";
anything = 123;

// Unknown (безопаснее any)
let value: unknown = "hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// Union types
let id: string | number = 123;
id = "abc123";

// Literal types
let status: "success" | "error" | "pending" = "success";

// Type alias
type ID = string | number;
type Status = "success" | "error" | "pending";

let userId: ID = 123;`,
            explanation: 'Основные типы данных в TypeScript'
          },
          {
            title: 'Интерфейсы и типы',
            language: 'typescript',
            code: `// Interface
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Опциональное поле
  readonly createdAt: Date; // Только чтение
}

const user: User = {
  id: 1,
  name: "Иван",
  email: "ivan@example.com",
  createdAt: new Date()
};

// Расширение интерфейсов
interface Admin extends User {
  permissions: string[];
  level: number;
}

const admin: Admin = {
  id: 1,
  name: "Админ",
  email: "admin@example.com",
  createdAt: new Date(),
  permissions: ["read", "write"],
  level: 5
};

// Type для сложных типов
type Point = {
  x: number;
  y: number;
};

type Shape = 
  | { type: "circle"; radius: number }
  | { type: "rectangle"; width: number; height: number }
  | { type: "square"; size: number };

function getArea(shape: Shape): number {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "square":
      return shape.size ** 2;
  }
}

// Утилитные типы
type PartialUser = Partial<User>; // Все поля опциональны
type RequiredUser = Required<User>; // Все поля обязательны
type ReadonlyUser = Readonly<User>; // Все поля readonly
type UserName = Pick<User, "name" | "email">; // Только выбранные поля
type UserWithoutEmail = Omit<User, "email">; // Без указанных полей

// Record
type UserRoles = Record<string, Role>;
const roles: UserRoles = {
  user1: Role.Admin,
  user2: Role.User
};`,
            explanation: 'Интерфейсы и типы для структурирования данных'
          }
        ]
      },
      {
        id: 'ts-functions',
        title: 'Типизация функций',
        description: 'Типы параметров и возвращаемых значений',
        examples: [
          {
            title: 'Функции с типами',
            language: 'typescript',
            code: `// Простая функция
function add(a: number, b: number): number {
  return a + b;
}

// Стрелочная функция
const multiply = (a: number, b: number): number => a * b;

// Опциональные параметры
function greet(name: string, greeting?: string): string {
  return \`\${greeting || "Hello"}, \${name}!\`;
}

// Параметры по умолчанию
function createUser(name: string, role: string = "user"): User {
  return { id: Date.now(), name, role };
}

// Rest параметры
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

// Типы функций
type MathOperation = (a: number, b: number) => number;

const divide: MathOperation = (a, b) => {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
};

// Generics в функциях
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(123);
const str = identity("hello");

// Generics с ограничениями
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Иван", age: 25 };
const name = getProperty(user, "name"); // string
const age = getProperty(user, "age"); // number

// Async функции
async function fetchUser(id: number): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}

// Перегрузка функций
function format(value: string): string;
function format(value: number): string;
function format(value: Date): string;
function format(value: string | number | Date): string {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return String(value);
}`,
            explanation: 'Типизация функций и использование generics'
          }
        ]
      }
    ]
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    icon: 'Wind',
    topics: [
      {
        id: 'tailwind-basics',
        title: 'Утилитарные классы',
        description: 'Быстрая стилизация с Tailwind',
        examples: [
          {
            title: 'Основные классы',
            language: 'html',
            code: `<!-- Цвета -->
<div class="bg-blue-500 text-white">Синий фон, белый текст</div>
<div class="bg-gray-100 text-gray-900">Серый фон</div>

<!-- Отступы -->
<div class="p-4">Padding 1rem</div>
<div class="px-6 py-4">Padding horizontal 1.5rem, vertical 1rem</div>
<div class="m-4">Margin 1rem</div>
<div class="mt-8">Margin top 2rem</div>

<!-- Размеры -->
<div class="w-full h-screen">Полная ширина и высота экрана</div>
<div class="w-1/2">50% ширины</div>
<div class="w-64 h-32">Width 16rem, height 8rem</div>

<!-- Flexbox -->
<div class="flex items-center justify-between">
  <span>Слева</span>
  <span>Справа</span>
</div>

<div class="flex flex-col gap-4">
  <div>Элемент 1</div>
  <div>Элемент 2</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- Типографика -->
<h1 class="text-4xl font-bold text-gray-900">Заголовок</h1>
<p class="text-lg text-gray-600 leading-relaxed">Параграф</p>

<!-- Границы и скругления -->
<div class="border border-gray-300 rounded-lg shadow-lg">
  Карточка с тенью
</div>

<!-- Hover и состояния -->
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-colors">
  Кнопка
</button>

<!-- Адаптивность -->
<div class="w-full md:w-1/2 lg:w-1/3">
  Мобильные: 100%, Планшет: 50%, Десктоп: 33%
</div>`,
            explanation: 'Основные утилитарные классы Tailwind CSS'
          },
          {
            title: 'Компоненты на Tailwind',
            language: 'html',
            code: `<!-- Кнопка -->
<button class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg active:scale-95">
  Нажми меня
</button>

<!-- Карточка -->
<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
  <img class="w-full h-48 object-cover" src="image.jpg" alt="Image">
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-2">Заголовок карточки</h2>
    <p class="text-gray-600">Описание карточки с дополнительной информацией.</p>
    <div class="mt-4 flex gap-2">
      <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Тег</span>
    </div>
  </div>
</div>

<!-- Форма -->
<form class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
  <div class="mb-4">
    <label class="block text-gray-700 font-semibold mb-2">
      Email
    </label>
    <input 
      type="email"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="your@email.com"
    />
  </div>
  
  <div class="mb-6">
    <label class="block text-gray-700 font-semibold mb-2">
      Пароль
    </label>
    <input 
      type="password"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  
  <button 
    type="submit"
    class="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors"
  >
    Войти
  </button>
</form>

<!-- Навигация -->
<nav class="bg-white shadow-md">
  <div class="container mx-auto px-6 py-4 flex items-center justify-between">
    <div class="text-2xl font-bold text-gray-800">Logo</div>
    <div class="hidden md:flex gap-6">
      <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Главная</a>
      <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">О нас</a>
      <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Контакты</a>
    </div>
    <button class="md:hidden">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</nav>`,
            explanation: 'Готовые компоненты на Tailwind CSS'
          }
        ],
        bestPractices: [
          'Используйте @apply в CSS для повторяющихся комбинаций',
          'Настройте theme в tailwind.config для брендовых цветов',
          'Используйте max-w-* для ограничения ширины контента',
          'Всегда добавляйте transition для hover эффектов',
        ]
      }
    ]
  },
  {
    id: 'performance',
    title: 'Оптимизация производительности',
    icon: 'Zap',
    topics: [
      {
        id: 'perf-react',
        title: 'Оптимизация React',
        description: 'Улучшение производительности React приложений',
        examples: [
          {
            title: 'React.memo и useMemo',
            language: 'typescript',
            code: `import React, { useState, useMemo, useCallback } from 'react';

// React.memo предотвращает лишние ре-рендеры
const ExpensiveComponent = React.memo(({ data }: { data: number[] }) => {
  console.log('Ре-рендер ExpensiveComponent');
  
  const sum = data.reduce((acc, n) => acc + n, 0);
  
  return <div>Сумма: {sum}</div>;
});

// useMemo для тяжелых вычислений
function DataTable({ items }: { items: Item[] }) {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  
  const sortedItems = useMemo(() => {
    console.log('Сортировка данных');
    return [...items].sort((a, b) => {
      return sortOrder === 'asc' 
        ? a.value - b.value 
        : b.value - a.value;
    });
  }, [items, sortOrder]); // Пересчет только при изменении зависимостей
  
  return (
    <div>
      <button onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}>
        Сортировка: {sortOrder}
      </button>
      {sortedItems.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

// useCallback для функций
function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  // Функция не пересоздается при каждом рендере
  const handleToggle = useCallback((id: number) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []); // Пустой массив = функция создается один раз
  
  return (
    <div>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={handleToggle} 
        />
      ))}
    </div>
  );
}

// React.memo с кастомным сравнением
const TodoItem = React.memo(
  ({ todo, onToggle }: { todo: Todo; onToggle: (id: number) => void }) => {
    return (
      <div onClick={() => onToggle(todo.id)}>
        {todo.text} {todo.completed ? '✓' : ''}
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Ре-рендер только если todo изменился
    return prevProps.todo.id === nextProps.todo.id &&
           prevProps.todo.completed === nextProps.todo.completed;
  }
);`,
            explanation: 'Мемоизация для оптимизации производительности React'
          },
          {
            title: 'Ленивая загрузка',
            language: 'typescript',
            code: `import React, { lazy, Suspense } from 'react';

// Ленивая загрузка компонентов
const HeavyComponent = lazy(() => import('./HeavyComponent'));
const AdminPanel = lazy(() => import('./AdminPanel'));

function App() {
  const [showHeavy, setShowHeavy] = useState(false);
  
  return (
    <div>
      <h1>Главная страница</h1>
      
      <button onClick={() => setShowHeavy(true)}>
        Загрузить компонент
      </button>
      
      {showHeavy && (
        <Suspense fallback={<div>Загрузка...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}

// Ленивая загрузка роутов
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loading">Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

// Предзагрузка при hover
function NavigationWithPreload() {
  const preloadAbout = () => {
    import('./pages/About'); // Начинает загрузку
  };
  
  return (
    <nav>
      <Link 
        to="/about" 
        onMouseEnter={preloadAbout}
      >
        О нас
      </Link>
    </nav>
  );
}`,
            explanation: 'Ленивая загрузка для уменьшения начального бандла'
          }
        ],
        tips: [
          'React.memo для компонентов с частыми ре-рендерами',
          'useMemo для тяжелых вычислений (сортировка, фильтрация)',
          'useCallback для функций, передаваемых в дочерние компоненты',
          'lazy() для маршрутов и больших компонентов',
          'Используйте React DevTools Profiler для поиска узких мест',
        ]
      },
      {
        id: 'perf-web',
        title: 'Web производительность',
        description: 'Общие методы оптимизации веб-приложений',
        tips: [
          'Минифицируйте CSS, JS и HTML',
          'Используйте CDN для статических ресурсов',
          'Включите gzip/brotli сжатие',
          'Оптимизируйте изображения (WebP, AVIF)',
          'Используйте lazy loading для изображений',
          'Инлайните критический CSS',
          'Уменьшите количество HTTP запросов',
          'Используйте HTTP/2 или HTTP/3',
          'Добавьте кэширование с правильными заголовками',
          'Избегайте layout shifts (CLS)',
        ]
      }
    ]
  },
  {
    id: 'seo',
    title: 'SEO — Поисковая оптимизация',
    icon: 'Search',
    topics: [
      {
        id: 'seo-meta',
        title: 'Meta теги',
        description: 'Оптимизация метаданных страницы',
        examples: [
          {
            title: 'Полный набор meta тегов',
            language: 'html',
            code: `<!DOCTYPE html>
<html lang="ru">
<head>
  <!-- Базовые мета-теги -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO теги -->
  <title>Заголовок страницы | Название сайта</title>
  <meta name="description" content="Описание страницы до 160 символов для поисковых систем">
  <meta name="keywords" content="ключевые, слова, через, запятую">
  <meta name="author" content="Имя автора">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://example.com/page">
  
  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Заголовок для соцсетей">
  <meta property="og:description" content="Описание для соцсетей">
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:url" content="https://example.com/page">
  <meta property="og:site_name" content="Название сайта">
  <meta property="og:locale" content="ru_RU">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Заголовок для Twitter">
  <meta name="twitter:description" content="Описание для Twitter">
  <meta name="twitter:image" content="https://example.com/image.jpg">
  <meta name="twitter:site" content="@username">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  
  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Название сайта",
    "url": "https://example.com",
    "description": "Описание сайта"
  }
  </script>
</head>
<body>
  <!-- Контент -->
</body>
</html>`,
            explanation: 'Полный набор метатегов для SEO и соцсетей'
          }
        ],
        bestPractices: [
          'Title: 50-60 символов, включайте ключевые слова',
          'Description: 150-160 символов, призыв к действию',
          'Уникальные title и description для каждой страницы',
          'OG Image: минимум 1200x630 пикселей',
          'Используйте canonical для дубликатов страниц',
        ]
      },
      {
        id: 'seo-structure',
        title: 'Структура и контент',
        description: 'Правильная структура для SEO',
        tips: [
          'Один H1 на странице с главным ключевым словом',
          'Иерархия заголовков H1 > H2 > H3',
          'Используйте alt для всех изображений',
          'Внутренняя перелинковка между страницами',
          'URL должны быть читаемыми (example.com/about, не example.com/?p=123)',
          'Используйте HTTPS для безопасности',
          'Создайте sitemap.xml',
          'Добавьте robots.txt',
          'Мобильная адаптивность (Mobile-First)',
          'Быстрая загрузка страниц (< 3 секунд)',
        ]
      }
    ]
  },
  {
    id: 'accessibility',
    title: 'Доступность (A11y)',
    icon: 'Heart',
    topics: [
      {
        id: 'a11y-basics',
        title: 'Основы доступности',
        description: 'Создание доступных интерфейсов',
        examples: [
          {
            title: 'Семантический HTML и ARIA',
            language: 'html',
            code: `<!-- Используйте семантические теги -->
<nav aria-label="Главная навигация">
  <ul>
    <li><a href="/">Главная</a></li>
    <li><a href="/about">О нас</a></li>
  </ul>
</nav>

<!-- Labels для форм -->
<form>
  <label for="email">Email:</label>
  <input 
    type="email" 
    id="email" 
    name="email"
    aria-required="true"
    aria-invalid="false"
  />
  
  <!-- Или с aria-label -->
  <input 
    type="search" 
    aria-label="Поиск по сайту"
    placeholder="Поиск..."
  />
</form>

<!-- Alt для изображений -->
<img src="logo.png" alt="Логотип компании">
<img src="decorative.png" alt="" role="presentation">

<!-- Кнопки должны быть кликабельными -->
<button type="button">Кнопка</button>

<!-- Не используйте div как кнопку -->
<div onclick="..." role="button" tabindex="0">
  Псевдо-кнопка
</div>

<!-- Skip link для пропуска навигации -->
<a href="#main" class="skip-link">
  Перейти к контенту
</a>

<main id="main">
  <!-- Основной контент -->
</main>

<!-- Модальное окно -->
<div 
  role="dialog" 
  aria-labelledby="modal-title"
  aria-modal="true"
>
  <h2 id="modal-title">Заголовок модалки</h2>
  <button aria-label="Закрыть модальное окно">×</button>
</div>

<!-- Аккордеон -->
<button 
  aria-expanded="false"
  aria-controls="section1"
>
  Раздел 1
</button>
<div id="section1" hidden>
  Контент раздела
</div>`,
            explanation: 'Семантический HTML и ARIA атрибуты для доступности'
          }
        ],
        bestPractices: [
          'Все интерактивные элементы доступны с клавиатуры',
          'Фокус виден при навигации Tab',
          'Контраст текста минимум 4.5:1 (WCAG AA)',
          'Размер кликабельных элементов минимум 44x44px',
          'Не полагайтесь только на цвет для передачи информации',
          'Анимации можно отключить (prefers-reduced-motion)',
          'Используйте aria-live для динамического контента',
        ],
        tips: [
          'Тестируйте с клавиатуры (Tab, Enter, Space, Esc)',
          'Используйте screen reader (NVDA, JAWS, VoiceOver)',
          'Проверьте с Lighthouse / axe DevTools',
          'Семантический HTML важнее ARIA',
        ]
      }
    ]
  }
];

export default knowledgeBase;
