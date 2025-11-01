import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import knowledgeBase, { KnowledgeCategory, KnowledgeTopic } from '@/data/knowledgeBase';

const LearningInterface = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<KnowledgeTopic | null>(null);
  const [progress, setProgress] = useState<Record<string, boolean>>({});

  const category = knowledgeBase.find(c => c.id === selectedCategory);

  const handleTopicComplete = (topicId: string) => {
    setProgress(prev => ({ ...prev, [topicId]: true }));
  };

  const completedCount = Object.keys(progress).length;
  const totalTopics = knowledgeBase.reduce((acc, cat) => acc + cat.topics.length, 0);
  const progressPercent = Math.round((completedCount / totalTopics) * 100);

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Icon name="GraduationCap" size={16} className="mr-2" />
              AI Обучение
            </Badge>
            <h1 className="text-5xl font-black mb-4">
              База знаний по <span className="text-gradient">веб-разработке</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный курс от основ HTML до продвинутых React паттернов
            </p>
            
            {completedCount > 0 && (
              <div className="mt-8 max-w-md mx-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Прогресс обучения</span>
                  <span className="text-sm text-muted-foreground">
                    {completedCount} / {totalTopics}
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeBase.map((cat) => {
              const categoryProgress = cat.topics.filter(t => progress[t.id]).length;
              const categoryPercent = Math.round((categoryProgress / cat.topics.length) * 100);
              
              return (
                <Card
                  key={cat.id}
                  className="p-6 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 cursor-pointer group"
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform glow-purple">
                      <Icon name={cat.icon as any} className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {cat.topics.length} уроков
                      </p>
                      
                      {categoryProgress > 0 && (
                        <div className="mb-2">
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
                              style={{ width: `${categoryPercent}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground mt-1">
                            {categoryPercent}% завершено
                          </span>
                        </div>
                      )}
                    </div>
                    <Icon 
                      name="ChevronRight" 
                      className="text-muted-foreground group-hover:text-primary transition-colors" 
                      size={20} 
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (selectedTopic && category) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <Button
            variant="outline"
            className="mb-6"
            onClick={() => setSelectedTopic(null)}
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Назад к урокам
          </Button>

          <Card className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <Badge className="mb-3">{category.title}</Badge>
                <h1 className="text-4xl font-black mb-2">{selectedTopic.title}</h1>
                <p className="text-lg text-muted-foreground">{selectedTopic.description}</p>
              </div>
              {progress[selectedTopic.id] && (
                <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                  <Icon name="Check" size={14} className="mr-1" />
                  Завершено
                </Badge>
              )}
            </div>

            {selectedTopic.code && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Icon name="Code" size={20} />
                  Код
                </h3>
                <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-pre-wrap">{selectedTopic.code}</pre>
                </div>
              </div>
            )}

            {selectedTopic.examples && selectedTopic.examples.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Icon name="BookOpen" size={20} />
                  Примеры
                </h3>
                <div className="space-y-6">
                  {selectedTopic.examples.map((example, idx) => (
                    <Card key={idx} className="p-6 bg-muted/20">
                      <h4 className="text-lg font-semibold mb-2">{example.title}</h4>
                      {example.explanation && (
                        <p className="text-sm text-muted-foreground mb-4">{example.explanation}</p>
                      )}
                      <div className="bg-background rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre className="whitespace-pre-wrap">{example.code}</pre>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {selectedTopic.bestPractices && selectedTopic.bestPractices.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  Лучшие практики
                </h3>
                <ul className="space-y-2">
                  {selectedTopic.bestPractices.map((practice, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name="Check" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedTopic.tips && selectedTopic.tips.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Icon name="Lightbulb" size={20} className="text-yellow-500" />
                  Советы
                </h3>
                <ul className="space-y-2">
                  {selectedTopic.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name="AlertCircle" size={16} className="text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3 mt-8 pt-8 border-t">
              <Button
                className="flex-1"
                variant={progress[selectedTopic.id] ? 'outline' : 'default'}
                onClick={() => handleTopicComplete(selectedTopic.id)}
              >
                <Icon 
                  name={progress[selectedTopic.id] ? 'CheckCircle' : 'Check'} 
                  size={16} 
                  className="mr-2" 
                />
                {progress[selectedTopic.id] ? 'Урок завершен' : 'Отметить как завершенный'}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (category) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container mx-auto px-6 max-w-5xl">
          <Button
            variant="outline"
            className="mb-6"
            onClick={() => setSelectedCategory(null)}
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Все категории
          </Button>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-4 glow-purple">
              <Icon name={category.icon as any} className="text-white" size={32} />
            </div>
            <h1 className="text-5xl font-black mb-4">{category.title}</h1>
            <p className="text-xl text-muted-foreground">
              {category.topics.length} уроков для изучения
            </p>
          </div>

          <div className="space-y-4">
            {category.topics.map((topic, idx) => {
              const isCompleted = progress[topic.id];
              
              return (
                <Card
                  key={topic.id}
                  className={`p-6 hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer group ${
                    isCompleted ? 'border-green-500/30 bg-green-500/5' : ''
                  }`}
                  onClick={() => setSelectedTopic(topic)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${
                      isCompleted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
                    } transition-colors flex-shrink-0`}>
                      {isCompleted ? <Icon name="Check" size={20} /> : idx + 1}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {topic.description}
                      </p>
                      
                      <div className="flex gap-2 mt-3 flex-wrap">
                        {topic.code && (
                          <Badge variant="outline" className="text-xs">
                            <Icon name="Code" size={12} className="mr-1" />
                            Код
                          </Badge>
                        )}
                        {topic.examples && (
                          <Badge variant="outline" className="text-xs">
                            <Icon name="BookOpen" size={12} className="mr-1" />
                            {topic.examples.length} примеров
                          </Badge>
                        )}
                        {topic.bestPractices && (
                          <Badge variant="outline" className="text-xs">
                            <Icon name="CheckCircle" size={12} className="mr-1" />
                            Best practices
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <Icon 
                      name="ChevronRight" 
                      className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" 
                      size={20} 
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default LearningInterface;
