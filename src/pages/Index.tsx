import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTemplate, setActiveTemplate] = useState('all');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const codeSteps = [
    '<div className="hero">\n',
    '  <h1>Добро пожаловать</h1>\n',
    '  <p>Ваш сайт готов!</p>\n',
    '  <button>Начать</button>\n',
    '</div>'
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedCode('');
    setCurrentStep(0);
  };

  useEffect(() => {
    if (isGenerating && currentStep < codeSteps.length) {
      const timer = setTimeout(() => {
        setGeneratedCode(prev => prev + codeSteps[currentStep]);
        setCurrentStep(prev => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    } else if (currentStep >= codeSteps.length) {
      setTimeout(() => {
        setIsGenerating(false);
        setCurrentStep(0);
      }, 2000);
    }
  }, [isGenerating, currentStep]);

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
          
          <div className="mt-16 relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
            <Card className="p-8 bg-card/50 backdrop-blur-xl border-2 gradient-border relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className={`w-3 h-3 rounded-full transition-all ${
                    isGenerating ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                  }`} />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-muted-foreground ml-4">
                  {isGenerating ? 'AI генерирует сайт...' : 'Готово к генерации'}
                </span>
                <Button 
                  size="sm" 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="ml-auto bg-primary/20 hover:bg-primary/30"
                >
                  <Icon name="Play" size={14} className="mr-1" />
                  {isGenerating ? 'Генерация...' : 'Запустить демо'}
                </Button>
              </div>
              <div className="bg-muted/30 rounded-lg p-6 text-left font-mono text-sm min-h-[180px] relative">
                {generatedCode.length > 0 ? (
                  <div className="whitespace-pre-wrap">
                    {generatedCode.split('\n').map((line, idx) => (
                      <div key={idx} className="animate-fade-in">
                        {line.includes('<div') || line.includes('</div>') ? (
                          <span className="text-primary">{line}</span>
                        ) : line.includes('<h1') || line.includes('</h1>') || line.includes('<p') || line.includes('</p>') || line.includes('<button') || line.includes('</button>') ? (
                          <span className="text-muted-foreground">{line}</span>
                        ) : (
                          <span className="text-muted-foreground">{line}</span>
                        )}
                      </div>
                    ))}
                    {isGenerating && <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1">|</span>}
                  </div>
                ) : (
                  <div className="text-muted-foreground/50 flex items-center justify-center h-full">
                    <div className="text-center">
                      <Icon name="Code" size={48} className="mx-auto mb-2 opacity-30" />
                      <p>Нажмите "Запустить демо" чтобы увидеть AI в действии</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
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