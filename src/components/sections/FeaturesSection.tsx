import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const features = [
  { icon: 'Sparkles', title: 'AI-генерация', desc: 'Опишите сайт — получите готовый результат' },
  { icon: 'Code', title: 'Экспорт кода', desc: 'HTML, CSS, JS — скачайте и используйте' },
  { icon: 'Palette', title: 'Визуальный редактор', desc: 'Настраивайте дизайн без кода' },
  { icon: 'Blocks', title: 'Библиотека шаблонов', desc: 'Готовые решения для любых целей' },
  { icon: 'Zap', title: 'Быстрый старт', desc: 'От идеи до сайта за минуты' },
  { icon: 'Share2', title: 'Интеграции', desc: 'Формы, соцсети, аналитика' },
];

const FeaturesSection = () => {
  return (
    <section id="how" className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4">
          Как это <span className="text-gradient">работает</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Простой процесс создания сайта с помощью AI
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          { num: '01', title: 'Опишите идею', desc: 'Расскажите, какой сайт нужен' },
          { num: '02', title: 'AI создаст сайт', desc: 'Автоматическая генерация дизайна и кода' },
          { num: '03', title: 'Настройте и экспортируйте', desc: 'Редактируйте и скачивайте код' },
        ].map((step) => (
          <div key={step.num} className="relative group">
            <div className="text-8xl font-black text-gradient opacity-20 absolute -top-8 -left-4 group-hover:opacity-30 transition-opacity">
              {step.num}
            </div>
            <Card className="p-8 relative overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-bold mb-3 relative">{step.title}</h3>
              <p className="text-muted-foreground relative">{step.desc}</p>
            </Card>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <Card 
            key={idx}
            className="p-6 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-purple">
              <Icon name={feature.icon as any} className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
