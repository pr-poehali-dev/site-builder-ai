import { useState, useEffect } from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TemplatesSection from '@/components/sections/TemplatesSection';
import ExamplesSection from '@/components/sections/ExamplesSection';
import Footer from '@/components/sections/Footer';
import { generateCodeFromPrompt } from '@/utils/codeGenerator';

const Index = () => {
  const [activeTemplate, setActiveTemplate] = useState('all');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [userPrompt, setUserPrompt] = useState('');
  const [generatedHTML, setGeneratedHTML] = useState('');
  const [codeSteps, setCodeSteps] = useState<string[]>([]);

  const handleGenerate = () => {
    if (!userPrompt.trim()) return;
    
    const steps = generateCodeFromPrompt(userPrompt);
    setCodeSteps(steps);
    setIsGenerating(true);
    setGeneratedCode('');
    setGeneratedHTML('');
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
  }, [isGenerating, currentStep, codeSteps, generatedCode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <div className="relative">
        <Header />
        
        <HeroSection 
          userPrompt={userPrompt}
          setUserPrompt={setUserPrompt}
          isGenerating={isGenerating}
          handleGenerate={handleGenerate}
          generatedCode={generatedCode}
          generatedHTML={generatedHTML}
        />

        <FeaturesSection />

        <TemplatesSection 
          activeTemplate={activeTemplate}
          setActiveTemplate={setActiveTemplate}
        />

        <ExamplesSection />

        <Footer />
      </div>
    </div>
  );
};

export default Index;
