import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface EmojiFormProps {
  onGenerate: (name: string) => void;
}

export const EmojiForm: React.FC<EmojiFormProps> = ({ onGenerate }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onGenerate(name);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name..."
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition-all text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 dark:bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center gap-2"
        >
          <Sparkles size={16} />
          Generate
        </button>
      </div>
    </form>
  );
};