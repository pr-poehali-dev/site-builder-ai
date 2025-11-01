export const generateCodeFromPrompt = (prompt: string): string[] => {
  const lowerPrompt = prompt.toLowerCase();
  
  if (lowerPrompt.includes('магазин') || lowerPrompt.includes('товар') || lowerPrompt.includes('продукт')) {
    return [
      '<div className="shop">\n',
      '  <header className="navbar">\n',
      '    <h1>Интернет-магазин</h1>\n',
      '    <nav>Каталог | Корзина | Контакты</nav>\n',
      '  </header>\n',
      '  <section className="products">\n',
      '    <div className="product-card">\n',
      '      <img src="product.jpg" />\n',
      '      <h3>Товар #1</h3>\n',
      '      <p className="price">$99.99</p>\n',
      '      <button>В корзину</button>\n',
      '    </div>\n',
      '  </section>\n',
      '</div>'
    ];
  } else if (lowerPrompt.includes('портфолио') || lowerPrompt.includes('резюме') || lowerPrompt.includes('работы')) {
    return [
      '<div className="portfolio">\n',
      '  <header className="hero">\n',
      '    <h1>Иван Иванов</h1>\n',
      '    <p className="subtitle">Web-дизайнер & Разработчик</p>\n',
      '  </header>\n',
      '  <section className="projects">\n',
      '    <h2>Мои работы</h2>\n',
      '    <div className="project-grid">\n',
      '      <div className="project-item">\n',
      '        <img src="project1.jpg" />\n',
      '        <h3>Проект #1</h3>\n',
      '      </div>\n',
      '    </div>\n',
      '  </section>\n',
      '</div>'
    ];
  } else if (lowerPrompt.includes('блог') || lowerPrompt.includes('статьи') || lowerPrompt.includes('новости')) {
    return [
      '<div className="blog">\n',
      '  <header>\n',
      '    <h1>Мой блог</h1>\n',
      '    <p>Интересные статьи каждый день</p>\n',
      '  </header>\n',
      '  <main className="articles">\n',
      '    <article className="post">\n',
      '      <h2>Заголовок статьи</h2>\n',
      '      <p className="meta">15 ноября 2024</p>\n',
      '      <p>Текст статьи...</p>\n',
      '      <a href="#">Читать далее →</a>\n',
      '    </article>\n',
      '  </main>\n',
      '</div>'
    ];
  } else if (lowerPrompt.includes('лендинг') || lowerPrompt.includes('landing') || lowerPrompt.includes('продающ')) {
    return [
      '<div className="landing">\n',
      '  <section className="hero">\n',
      '    <h1>Революционный продукт</h1>\n',
      '    <p>Измените свою жизнь уже сегодня</p>\n',
      '    <button className="cta">Получить доступ</button>\n',
      '  </section>\n',
      '  <section className="features">\n',
      '    <div className="feature">\n',
      '      <h3>✨ Преимущество #1</h3>\n',
      '      <p>Описание преимущества</p>\n',
      '    </div>\n',
      '  </section>\n',
      '</div>'
    ];
  } else {
    return [
      '<div className="website">\n',
      '  <header className="header">\n',
      '    <h1>Добро пожаловать!</h1>\n',
      '    <p>Ваш сайт успешно создан</p>\n',
      '  </header>\n',
      '  <main className="content">\n',
      '    <section>\n',
      '      <h2>О проекте</h2>\n',
      '      <p>Описание вашего проекта</p>\n',
      '    </section>\n',
      '  </main>\n',
      '  <footer>\n',
      '    <p>© 2024 Ваш сайт</p>\n',
      '  </footer>\n',
      '</div>'
    ];
  }
};
