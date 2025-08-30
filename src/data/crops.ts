import { Crop } from '@/types';

export const crops: Crop[] = [
  // 常见水果
  { id: 'apple', name: 'Apple', baseValue: 248, image: '/crops/apple.png', category: 'fruit', rarity: 'common' },
  { id: 'banana', name: 'Banana', baseValue: 156, image: '/crops/banana.png', category: 'fruit', rarity: 'common' },
  { id: 'orange', name: 'Orange', baseValue: 189, image: '/crops/orange.png', category: 'fruit', rarity: 'common' },
  { id: 'grape', name: 'Grape', baseValue: 234, image: '/crops/grape.png', category: 'fruit', rarity: 'common' },
  { id: 'strawberry', name: 'Strawberry', baseValue: 178, image: '/crops/strawberry.png', category: 'fruit', rarity: 'common' },
  { id: 'blueberry', name: 'Blueberry', baseValue: 145, image: '/crops/blueberry.png', category: 'fruit', rarity: 'common' },
  { id: 'raspberry', name: 'Raspberry', baseValue: 167, image: '/crops/raspberry.png', category: 'fruit', rarity: 'common' },
  { id: 'lemon', name: 'Lemon', baseValue: 198, image: '/crops/lemon.png', category: 'fruit', rarity: 'common' },
  { id: 'lime', name: 'Lime', baseValue: 176, image: '/crops/lime.png', category: 'fruit', rarity: 'common' },
  { id: 'peach', name: 'Peach', baseValue: 223, image: '/crops/peach.png', category: 'fruit', rarity: 'common' },
  { id: 'pear', name: 'Pear', baseValue: 201, image: '/crops/pear.png', category: 'fruit', rarity: 'common' },
  { id: 'cherry', name: 'Cherry', baseValue: 189, image: '/crops/cherry.png', category: 'fruit', rarity: 'common' },
  { id: 'watermelon', name: 'Watermelon', baseValue: 312, image: '/crops/watermelon.png', category: 'fruit', rarity: 'common' },
  { id: 'pineapple', name: 'Pineapple', baseValue: 267, image: '/crops/pineapple.png', category: 'fruit', rarity: 'common' },
  { id: 'mango', name: 'Mango', baseValue: 289, image: '/crops/mango.png', category: 'fruit', rarity: 'common' },
  { id: 'kiwi', name: 'Kiwi', baseValue: 234, image: '/crops/kiwi.png', category: 'fruit', rarity: 'common' },
  { id: 'papaya', name: 'Papaya', baseValue: 256, image: '/crops/papaya.png', category: 'fruit', rarity: 'common' },
  { id: 'coconut', name: 'Coconut', baseValue: 278, image: '/crops/coconut.png', category: 'fruit', rarity: 'common' },
  { id: 'avocado', name: 'Avocado', baseValue: 245, image: '/crops/avocado.png', category: 'fruit', rarity: 'common' },
  { id: 'dragon_fruit', name: 'Dragon Fruit', baseValue: 445, image: '/crops/dragon_fruit.png', category: 'fruit', rarity: 'uncommon' },

  // 常见蔬菜
  { id: 'carrot', name: 'Carrot', baseValue: 89, image: '/crops/carrot.png', category: 'vegetable', rarity: 'common' },
  { id: 'tomato', name: 'Tomato', baseValue: 123, image: '/crops/tomato.png', category: 'vegetable', rarity: 'common' },
  { id: 'potato', name: 'Potato', baseValue: 98, image: '/crops/potato.png', category: 'vegetable', rarity: 'common' },
  { id: 'onion', name: 'Onion', baseValue: 76, image: '/crops/onion.png', category: 'vegetable', rarity: 'common' },
  { id: 'corn', name: 'Corn', baseValue: 134, image: '/crops/corn.png', category: 'vegetable', rarity: 'common' },
  { id: 'pepper', name: 'Pepper', baseValue: 112, image: '/crops/pepper.png', category: 'vegetable', rarity: 'common' },
  { id: 'cucumber', name: 'Cucumber', baseValue: 95, image: '/crops/cucumber.png', category: 'vegetable', rarity: 'common' },
  { id: 'lettuce', name: 'Lettuce', baseValue: 67, image: '/crops/lettuce.png', category: 'vegetable', rarity: 'common' },
  { id: 'broccoli', name: 'Broccoli', baseValue: 145, image: '/crops/broccoli.png', category: 'vegetable', rarity: 'common' },
  { id: 'cauliflower', name: 'Cauliflower', baseValue: 156, image: '/crops/cauliflower.png', category: 'vegetable', rarity: 'common' },
  { id: 'cabbage', name: 'Cabbage', baseValue: 89, image: '/crops/cabbage.png', category: 'vegetable', rarity: 'common' },
  { id: 'spinach', name: 'Spinach', baseValue: 78, image: '/crops/spinach.png', category: 'vegetable', rarity: 'common' },
  { id: 'eggplant', name: 'Eggplant', baseValue: 134, image: '/crops/eggplant.png', category: 'vegetable', rarity: 'common' },
  { id: 'pumpkin', name: 'Pumpkin', baseValue: 189, image: '/crops/pumpkin.png', category: 'vegetable', rarity: 'common' },
  { id: 'squash', name: 'Squash', baseValue: 167, image: '/crops/squash.png', category: 'vegetable', rarity: 'common' },
  { id: 'beetroot', name: 'Beetroot', baseValue: 112, image: '/crops/beetroot.png', category: 'vegetable', rarity: 'common' },
  { id: 'radish', name: 'Radish', baseValue: 67, image: '/crops/radish.png', category: 'vegetable', rarity: 'common' },
  { id: 'turnip', name: 'Turnip', baseValue: 89, image: '/crops/turnip.png', category: 'vegetable', rarity: 'common' },
  { id: 'asparagus', name: 'Asparagus', baseValue: 178, image: '/crops/asparagus.png', category: 'vegetable', rarity: 'common' },
  { id: 'artichoke', name: 'Artichoke', baseValue: 234, image: '/crops/artichoke.png', category: 'vegetable', rarity: 'uncommon' },

  // 花卉
  { id: 'rose', name: 'Rose', baseValue: 189, image: '/crops/rose.png', category: 'flower', rarity: 'common' },
  { id: 'tulip', name: 'Tulip', baseValue: 145, image: '/crops/tulip.png', category: 'flower', rarity: 'common' },
  { id: 'sunflower', name: 'Sunflower', baseValue: 167, image: '/crops/sunflower.png', category: 'flower', rarity: 'common' },
  { id: 'daisy', name: 'Daisy', baseValue: 98, image: '/crops/daisy.png', category: 'flower', rarity: 'common' },
  { id: 'lily', name: 'Lily', baseValue: 178, image: '/crops/lily.png', category: 'flower', rarity: 'common' },
  { id: 'orchid', name: 'Orchid', baseValue: 289, image: '/crops/orchid.png', category: 'flower', rarity: 'uncommon' },
  { id: 'lavender', name: 'Lavender', baseValue: 156, image: '/crops/lavender.png', category: 'flower', rarity: 'common' },
  { id: 'jasmine', name: 'Jasmine', baseValue: 201, image: '/crops/jasmine.png', category: 'flower', rarity: 'common' },
  { id: 'marigold', name: 'Marigold', baseValue: 123, image: '/crops/marigold.png', category: 'flower', rarity: 'common' },
  { id: 'carnation', name: 'Carnation', baseValue: 134, image: '/crops/carnation.png', category: 'flower', rarity: 'common' },
  { id: 'iris', name: 'Iris', baseValue: 189, image: '/crops/iris.png', category: 'flower', rarity: 'common' },
  { id: 'peony', name: 'Peony', baseValue: 223, image: '/crops/peony.png', category: 'flower', rarity: 'common' },
  { id: 'chrysanthemum', name: 'Chrysanthemum', baseValue: 167, image: '/crops/chrysanthemum.png', category: 'flower', rarity: 'common' },
  { id: 'hibiscus', name: 'Hibiscus', baseValue: 198, image: '/crops/hibiscus.png', category: 'flower', rarity: 'common' },
  { id: 'geranium', name: 'Geranium', baseValue: 145, image: '/crops/geranium.png', category: 'flower', rarity: 'common' },

  // 特殊作物
  { id: 'golden_apple', name: 'Golden Apple', baseValue: 1240, image: '/crops/golden_apple.png', category: 'special', rarity: 'epic' },
  { id: 'rainbow_fruit', name: 'Rainbow Fruit', baseValue: 3100, image: '/crops/rainbow_fruit.png', category: 'special', rarity: 'legendary' },
  { id: 'crystal_berry', name: 'Crystal Berry', baseValue: 890, image: '/crops/crystal_berry.png', category: 'special', rarity: 'rare' },
  { id: 'moon_fruit', name: 'Moon Fruit', baseValue: 1560, image: '/crops/moon_fruit.png', category: 'special', rarity: 'epic' },
  { id: 'star_fruit', name: 'Star Fruit', baseValue: 2340, image: '/crops/star_fruit.png', category: 'special', rarity: 'epic' },
  { id: 'diamond_melon', name: 'Diamond Melon', baseValue: 4450, image: '/crops/diamond_melon.png', category: 'special', rarity: 'legendary' },
  { id: 'emerald_grape', name: 'Emerald Grape', baseValue: 1780, image: '/crops/emerald_grape.png', category: 'special', rarity: 'epic' },
  { id: 'ruby_apple', name: 'Ruby Apple', baseValue: 2230, image: '/crops/ruby_apple.png', category: 'special', rarity: 'epic' },
  { id: 'sapphire_berry', name: 'Sapphire Berry', baseValue: 1890, image: '/crops/sapphire_berry.png', category: 'special', rarity: 'epic' },
  { id: 'amethyst_flower', name: 'Amethyst Flower', baseValue: 2670, image: '/crops/amethyst_flower.png', category: 'special', rarity: 'epic' },
];

export const getCropById = (id: string): Crop | undefined => {
  return crops.find(crop => crop.id === id);
};

export const getCropsByCategory = (category: Crop['category']): Crop[] => {
  return crops.filter(crop => crop.category === category);
};

export const getCropsByRarity = (rarity: Crop['rarity']): Crop[] => {
  return crops.filter(crop => crop.rarity === rarity);
};
