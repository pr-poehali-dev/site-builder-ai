import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
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
  );
};

export default Header;
