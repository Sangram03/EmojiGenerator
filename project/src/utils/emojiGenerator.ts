import { emojiDatabase } from '../data/emojiDatabase';

const categories = Object.keys(emojiDatabase) as Array<keyof typeof emojiDatabase>;

const getRandomEmojiFromCategory = (category: keyof typeof emojiDatabase, seed: number): string => {
  const emojis = emojiDatabase[category];
  const position = Math.abs(Math.floor(Math.sin(seed) * emojis.length));
  return emojis[position];
};

const generateSeedFromName = (name: string, index: number): number => {
  const charCodes = name.split('').map(char => char.charCodeAt(0));
  const baseSeed = charCodes.reduce((acc, code) => acc + code, 0);
  return baseSeed * (index + 1) * Math.PI;
};

export const generateEmoji = (name: string): string[] => {
  const normalizedName = name.toLowerCase().trim();
  if (!normalizedName) return [];

  // Randomly select three different categories
  const shuffledCategories = [...categories]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  // Generate one emoji from each selected category
  return shuffledCategories.map((category, index) => 
    getRandomEmojiFromCategory(category, generateSeedFromName(normalizedName, index))
  );
};