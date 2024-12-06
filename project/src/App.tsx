import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { EmojiForm } from './components/EmojiForm';
import { EmojiDisplay } from './components/EmojiDisplay';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import { generateEmoji } from './utils/emojiGenerator';

function App() {
  const [currentName, setCurrentName] = useState('');
  const [currentEmojis, setCurrentEmojis] = useState<string[]>([]);

  const handleGenerate = (name: string) => {
    setCurrentName(name);
    setCurrentEmojis(generateEmoji(name));
  };

  const handleRefresh = () => {
    if (currentName) {
      setCurrentEmojis(generateEmoji(currentName));
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-900 dark:to-purple-900 flex flex-col items-center justify-center p-4 transition-colors">
        <ThemeToggle />
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="text-purple-600 dark:text-purple-400" />
            Emoji Generator
            <Sparkles className="text-purple-600 dark:text-purple-400" />
          </h1>
          <p className="text-gray-600 dark:text-gray-300">Generate unique emojis based on your name!</p>
        </div>

        <EmojiForm onGenerate={handleGenerate} />

        {currentEmojis.length > 0 && (
          <div className="mt-8 animate-fade-in">
            <EmojiDisplay 
              name={currentName} 
              emojis={currentEmojis} 
              onRefresh={handleRefresh}
            />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;