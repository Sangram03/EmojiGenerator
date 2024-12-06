import React from 'react';
import { Copy, RefreshCw } from 'lucide-react';

interface EmojiDisplayProps {
  name: string;
  emojis: string[];
  onRefresh: () => void;
}

export const EmojiDisplay: React.FC<EmojiDisplayProps> = ({ name, emojis, onRefresh }) => {
  const copyToClipboard = (emojis: string[]) => {
    navigator.clipboard.writeText(emojis.join(' '));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
      <div className="text-center mb-4">
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <div className="flex justify-center items-center gap-8 mb-4">
            {emojis.map((emoji, index) => (
              <div
                key={index}
                className="text-6xl hover:animate-bounce cursor-pointer transform transition-transform hover:scale-110"
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => copyToClipboard(emojis)}
            className="bg-purple-600 dark:bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center gap-2"
          >
            <Copy size={16} />
            Copy Emojis
          </button>
          
          <button
            onClick={onRefresh}
            className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <RefreshCw size={16} />
            Refresh
          </button>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">
          Generated for {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Each emoji comes from a different category!
        </p>
      </div>
    </div>
  );
};