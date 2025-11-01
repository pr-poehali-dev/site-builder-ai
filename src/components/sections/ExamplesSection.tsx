import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const examples = [
  { title: 'Интернет-магазин одежды', tech: 'React + Tailwind', visits: '12K' },
  { title: 'Портфолио дизайнера', tech: 'HTML + CSS', visits: '8.5K' },
  { title: 'Блог о путешествиях', tech: 'Next.js', visits: '15K' },
];

const ExamplesSection = () => {
  return (
    <section id="examples" className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black mb-4">
          Примеры <span className="text-gradient">сайтов</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Созданные нашими пользователями
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {examples.map((example, idx) => (
          <Card key={idx} className="p-6 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 group">
            <div className="h-48 bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Icon name="Globe" size={64} className="text-muted-foreground/30" />
            </div>
            <h3 className="text-xl font-bold mb-2">{example.title}</h3>
            <div className="flex items-center justify-between text-sm">
              <Badge variant="outline">{example.tech}</Badge>
              <span className="text-muted-foreground flex items-center gap-1">
                <Icon name="Eye" size={14} />
                {example.visits}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12 text-center backdrop-blur-xl border border-border/50">
        <h3 className="text-4xl font-black mb-4">
          Готовы создать свой сайт?
        </h3>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Присоединяйтесь к тысячам разработчиков и дизайнеров, которые уже используют SiteGenie
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-lg font-bold text-lg hover:opacity-90 transition-opacity glow-purple flex items-center gap-2">
            <Icon name="Rocket" size={20} />
            Начать бесплатно
          </button>
          <button className="px-8 py-4 border-2 border-primary/50 rounded-lg font-bold text-lg hover:bg-primary/10 transition-colors gradient-border flex items-center gap-2">
            <Icon name="Github" size={20} />
            GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
