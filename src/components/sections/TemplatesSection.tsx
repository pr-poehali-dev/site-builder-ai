import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Template {
  id: number;
  name: string;
  category: string;
  image: string;
  color: string;
}

interface TemplatesSectionProps {
  activeTemplate: string;
  setActiveTemplate: (value: string) => void;
}

const templates: Template[] = [
  { id: 1, name: 'E-commerce Store', category: 'shop', image: '🛍️', color: 'from-purple-500 to-pink-500' },
  { id: 2, name: 'Portfolio Pro', category: 'portfolio', image: '💼', color: 'from-blue-500 to-cyan-500' },
  { id: 3, name: 'Tech Blog', category: 'blog', image: '📝', color: 'from-orange-500 to-red-500' },
  { id: 4, name: 'Business Landing', category: 'business', image: '🏢', color: 'from-green-500 to-emerald-500' },
  { id: 5, name: 'Creative Portfolio', category: 'portfolio', image: '🎨', color: 'from-violet-500 to-purple-500' },
  { id: 6, name: 'Food Blog', category: 'blog', image: '🍕', color: 'from-yellow-500 to-orange-500' },
];

const TemplatesSection = ({ activeTemplate, setActiveTemplate }: TemplatesSectionProps) => {
  const filteredTemplates = activeTemplate === 'all' 
    ? templates 
    : templates.filter(t => t.category === activeTemplate);

  return (
    <section id="templates" className="container mx-auto px-6 py-20 bg-muted/20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black mb-4">
          Библиотека <span className="text-gradient">шаблонов</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Готовые решения для быстрого старта
        </p>
        
        <div className="flex gap-3 justify-center flex-wrap">
          {['all', 'shop', 'portfolio', 'blog', 'business'].map((cat) => (
            <Badge 
              key={cat}
              variant={activeTemplate === cat ? 'default' : 'outline'}
              className={`cursor-pointer px-6 py-2 text-sm transition-all ${
                activeTemplate === cat 
                  ? 'bg-gradient-to-r from-primary to-secondary glow-purple' 
                  : 'hover:border-primary/50'
              }`}
              onClick={() => setActiveTemplate(cat)}
            >
              {cat === 'all' ? '🌐 Все' : 
               cat === 'shop' ? '🛒 Магазин' :
               cat === 'portfolio' ? '💼 Портфолио' :
               cat === 'blog' ? '📝 Блог' : '🏢 Бизнес'}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <Card 
            key={template.id}
            className="overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 group cursor-pointer"
          >
            <div className={`h-48 bg-gradient-to-br ${template.color} flex items-center justify-center text-8xl group-hover:scale-105 transition-transform`}>
              {template.image}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{template.name}</h3>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs">React</Badge>
                <Badge variant="outline" className="text-xs">Responsive</Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TemplatesSection;
