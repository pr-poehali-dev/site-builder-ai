import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  userPrompt: string;
  setUserPrompt: (value: string) => void;
  isGenerating: boolean;
  handleGenerate: () => void;
  generatedCode: string;
  generatedHTML: string;
}

const HeroSection = ({
  userPrompt,
  setUserPrompt,
  isGenerating,
  handleGenerate,
  generatedCode,
  generatedHTML
}: HeroSectionProps) => {
  return (
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
  );
};

export default HeroSection;
