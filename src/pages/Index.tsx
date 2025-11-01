import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTemplate, setActiveTemplate] = useState('all');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [userPrompt, setUserPrompt] = useState('');
  const [generatedHTML, setGeneratedHTML] = useState('');

  const generateCodeFromPrompt = (prompt: string) => {
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

  const [codeSteps, setCodeSteps] = useState<string[]>([]);

  const handleGenerate = () => {
    if (!userPrompt.trim()) return;
    
    const steps = generateCodeFromPrompt(userPrompt);
    setCodeSteps(steps);
    setIsGenerating(true);
    setGeneratedCode('');
    setCurrentStep(0);
  };

  useEffect(() => {
    if (isGenerating && currentStep < codeSteps.length) {
      const timer = setTimeout(() => {
        setGeneratedCode(prev => prev + codeSteps[currentStep]);
        setCurrentStep(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else if (currentStep >= codeSteps.length && codeSteps.length > 0) {
      setTimeout(() => {
        setIsGenerating(false);
        setGeneratedHTML(generatedCode);
      }, 1000);
    }
  }, [isGenerating, currentStep, codeSteps]);

  const templates = [
    { id: 1, name: 'E-commerce Store', category: 'shop', image: '🛍️', color: 'from-purple-500 to-pink-500' },
    { id: 2, name: 'Portfolio Pro', category: 'portfolio', image: '💼', color: 'from-blue-500 to-cyan-500' },
    { id: 3, name: 'Tech Blog', category: 'blog', image: '📝', color: 'from-orange-500 to-red-500' },
    { id: 4, name: 'Business Landing', category: 'business', image: '🏢', color: 'from-green-500 to-emerald-500' },
    { id: 5, name: 'Creative Portfolio', category: 'portfolio', image: '🎨', color: 'from-violet-500 to-purple-500' },
    { id: 6, name: 'Food Blog', category: 'blog', image: '🍕', color: 'from-yellow-500 to-orange-500' },
  ];

  const features = [
    { icon: 'Sparkles', title: 'AI-генерация', desc: 'Опишите сайт — получите готовый результат' },
    { icon: 'Code', title: 'Экспорт кода', desc: 'HTML, CSS, JS — скачайте и используйте' },
    { icon: 'Palette', title: 'Визуальный редактор', desc: 'Настраивайте дизайн без кода' },
    { icon: 'Blocks', title: 'Библиотека шаблонов', desc: 'Готовые решения для любых целей' },
    { icon: 'Zap', title: 'Быстрый старт', desc: 'От идеи до сайта за минуты' },
    { icon: 'Share2', title: 'Интеграции', desc: 'Формы, соцсети, аналитика' },
  ];

  const steps = [
    { num: '01', title: 'Опишите идею', desc: 'Расскажите, какой сайт нужен' },
    { num: '02', title: 'AI создаст сайт', desc: 'Автоматическая генерация дизайна и кода' },
    { num: '03', title: 'Настройте и экспортируйте', desc: 'Редактируйте и скачивайте код' },
  ];

  const examples = [
    { title: 'Интернет-магазин одежды', tech: 'React + Tailwind', visits: '12K' },
    { title: 'Портфолио дизайнера', tech: 'HTML + CSS', visits: '8.5K' },
    { title: 'Блог о путешествиях', tech: 'Next.js', visits: '15K' },
  ];

  const filteredTemplates = activeTemplate === 'all' 
    ? templates 
    : templates.filter(t => t.category === activeTemplate);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <div className="relative">
        <nav className="border-b border-border/50 backdrop-blur-xl bg-background/80 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center glow-purple">
                <Icon name="Sparkles" className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold text-gradient">SiteGenie</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Как работает</a>
              <a href="#templates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Шаблоны</a>
              <a href="#examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Примеры</a>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-purple">
                Начать бесплатно
              </Button>
            </div>
          </div>
        </nav>

        <section className="container mx-auto px-6 pt-20 pb-32 text-center">
          <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20 animate-fade-in">
            <Icon name="Zap" size={14} className="mr-1" />
            Бесплатный AI-конструктор сайтов
          </Badge>
          <h1 className="text-6xl md:text-7xl font-black mb-6 animate-slide-up">
            Создавайте сайты <br />
            <span className="text-gradient">силой AI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in">
            Опишите идею на русском языке, и наш AI создаст профессиональный сайт 
            с чистым кодом. Бесплатно и без программирования.
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 glow-purple text-lg px-8 h-14">
              <Icon name="Rocket" className="mr-2" size={20} />
              Создать сайт бесплатно
            </Button>
            <Button size="lg" variant="outline" className="gradient-border text-lg px-8 h-14">
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть демо
            </Button>
          </div>
          
          <div className="mt-16 max-w-6xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-xl border-2 gradient-border relative mb-6">
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3 text-foreground">
                  <Icon name="Sparkles" size={16} className="inline mr-2" />
                  Опишите, какой сайт вы хотите создать
                </label>
                <Textarea 
                  placeholder="Например: интернет-магазин одежды с корзиной и каталогом товаров"
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  className="min-h-[100px] bg-background/50 border-border/50 text-lg resize-none"
                  disabled={isGenerating}
                />
                <div className="flex gap-2 mt-3 flex-wrap">
                  <Badge 
                    variant="outline" 
                    className="cursor-pointer hover:bg-primary/20"
                    onClick={() => setUserPrompt('интернет-магазин одежды с каталогом')}
                  >
                    🛍️ Магазин
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="cursor-pointer hover:bg-primary/20"
                    onClick={() => setUserPrompt('портфолио веб-дизайнера с галереей работ')}
                  >
                    💼 Портфолио
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="cursor-pointer hover:bg-primary/20"
                    onClick={() => setUserPrompt('блог о технологиях со статьями')}
                  >
                    📝 Блог
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="cursor-pointer hover:bg-primary/20"
                    onClick={() => setUserPrompt('лендинг для стартапа с призывом к действию')}
                  >
                    🚀 Лендинг
                  </Badge>
                </div>
              </div>
              <Button 
                size="lg"
                onClick={handleGenerate}
                disabled={isGenerating || !userPrompt.trim()}
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 glow-purple"
              >
                <Icon name="Sparkles" className="mr-2" size={20} />
                {isGenerating ? 'AI генерирует сайт...' : 'Создать сайт с помощью AI'}
              </Button>
            </Card>

            {(generatedCode || isGenerating) && (
              <div className="grid md:grid-cols-2 gap-6 animate-scale-in">
                <Card className="p-6 bg-card/50 backdrop-blur-xl border-2 gradient-border relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-2">
                      <div className={`w-3 h-3 rounded-full transition-all ${
                        isGenerating ? 'bg-green-500 animate-pulse' : 'bg-green-500'
                      }`} />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-sm font-semibold ml-2">
                      <Icon name="Code" size={14} className="inline mr-1" />
                      Сгенерированный код
                    </span>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4 text-left font-mono text-xs max-h-[400px] overflow-auto">
                    {generatedCode.length > 0 ? (
                      <div className="whitespace-pre-wrap">
                        {generatedCode.split('\n').map((line, idx) => (
                          <div key={idx} className="animate-fade-in leading-relaxed">
                            {line.includes('<') && line.includes('>') ? (
                              <span className="text-primary">{line}</span>
                            ) : (
                              <span className="text-muted-foreground">{line}</span>
                            )}
                          </div>
                        ))}
                        {isGenerating && <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1">|</span>}
                      </div>
                    ) : (
                      <div className="text-muted-foreground/50 text-center py-8">
                        <Icon name="Loader2" size={32} className="mx-auto mb-2 animate-spin" />
                      </div>
                    )}
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-xl border-2 gradient-border relative">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Eye" size={14} className="text-accent" />
                    <span className="text-sm font-semibold">Предпросмотр сайта</span>
                  </div>
                  <div className="bg-white rounded-lg p-6 min-h-[350px] max-h-[400px] overflow-auto">
                    {generatedHTML ? (
                      <div className="animate-fade-in text-gray-900">
                        <div className="space-y-4">
                          <div className="border-b border-gray-200 pb-4">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">✨ Ваш сайт готов!</h1>
                            <p className="text-gray-600">AI успешно сгенерировал структуру</p>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700">HTML структура создана</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700">Семантическая разметка применена</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700">Готово к стилизации</span>
                            </div>
                          </div>
                          <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                            <p className="text-sm text-gray-700 font-semibold mb-2">🎨 Следующие шаги:</p>
                            <ul className="text-xs text-gray-600 space-y-1">
                              <li>• Добавить CSS стили</li>
                              <li>• Настроить адаптивность</li>
                              <li>• Подключить JavaScript</li>
                              <li>• Экспортировать код</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-gray-400 flex items-center justify-center h-full">
                        <div className="text-center">
                          {isGenerating ? (
                            <>
                              <Icon name="Loader2" size={48} className="mx-auto mb-3 animate-spin text-purple-500" />
                              <p className="text-sm">Создаём превью...</p>
                            </>
                          ) : (
                            <>
                              <Icon name="Eye" size={48} className="mx-auto mb-3 opacity-30" />
                              <p className="text-sm">Предпросмотр появится здесь</p>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            )}
          </div>
        </section>

        <section id="how" className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              Как это <span className="text-gradient">работает</span>
            </h2>
            <p className="text-xl text-muted-foreground">Три простых шага до готового сайта</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <Card key={idx} className="p-8 bg-card/50 backdrop-blur-xl border-2 hover:border-primary/50 transition-all duration-300 hover:glow-purple group">
                <div className="text-6xl font-black text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="text-gradient">Возможности</span> платформы
            </h2>
            <p className="text-xl text-muted-foreground">Всё необходимое для создания сайтов</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-6 bg-card/50 backdrop-blur-xl border-2 hover:border-secondary/50 transition-all duration-300 hover:glow-pink group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon as any} className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="templates" className="container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4">
              Библиотека <span className="text-gradient">шаблонов</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">Готовые решения для любых целей</p>
            
            <div className="flex gap-2 justify-center flex-wrap">
              {['all', 'portfolio', 'business', 'blog', 'shop'].map((cat) => (
                <Button
                  key={cat}
                  variant={activeTemplate === cat ? 'default' : 'outline'}
                  onClick={() => setActiveTemplate(cat)}
                  className={activeTemplate === cat ? 'bg-gradient-to-r from-primary to-secondary' : ''}
                >
                  {cat === 'all' ? 'Все' : cat === 'portfolio' ? 'Портфолио' : cat === 'business' ? 'Бизнес' : cat === 'blog' ? 'Блоги' : 'Магазины'}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <Card key={template.id} className="overflow-hidden bg-card/50 backdrop-blur-xl border-2 hover:border-accent/50 transition-all duration-300 hover:glow-blue group cursor-pointer">
                <div className={`h-48 bg-gradient-to-br ${template.color} flex items-center justify-center text-8xl group-hover:scale-110 transition-transform`}>
                  {template.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {template.category}
                    </Badge>
                    <Button size="sm" variant="ghost" className="text-primary">
                      Использовать <Icon name="ArrowRight" size={14} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="examples" className="container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4">
              <span className="text-gradient">Примеры</span> созданных сайтов
            </h2>
            <p className="text-xl text-muted-foreground">Реальные проекты наших пользователей</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {examples.map((example, idx) => (
              <Card key={idx} className="p-6 bg-card/50 backdrop-blur-xl border-2 hover:border-primary/50 transition-all duration-300 hover:glow-purple group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold mb-1">{example.title}</h3>
                    <p className="text-sm text-muted-foreground">{example.tech}</p>
                  </div>
                  <Icon name="ExternalLink" size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Eye" size={16} />
                  <span>{example.visits} просмотров</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <Card className="p-12 md:p-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-xl border-2 gradient-border text-center">
            <h2 className="text-5xl font-black mb-6">
              Готовы создать свой <span className="text-gradient">сайт</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам пользователей, которые уже создают сайты с помощью AI. 
              Полностью бесплатно, навсегда.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 glow-purple text-lg px-12 h-16">
              <Icon name="Sparkles" className="mr-2" size={24} />
              Начать создавать сейчас
            </Button>
          </Card>
        </section>

        <footer className="border-t border-border/50 py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={16} />
                </div>
                <span className="text-xl font-bold text-gradient">SiteGenie</span>
              </div>
              <p className="text-sm text-muted-foreground">
                © 2024 SiteGenie. Создавайте сайты силой AI
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;