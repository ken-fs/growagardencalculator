import { Pet } from "@/types";

export const pets: Pet[] = [
  // Farm Pets
  {
    id: "cow",
    name: "Cow",
    baseValue: 500,
    image: "/pets/cow.png",
    category: "farm",
    rarity: "common",
  },
  {
    id: "chicken",
    name: "Chicken",
    baseValue: 300,
    image: "/pets/chicken.png",
    category: "farm",
    rarity: "common",
  },
  {
    id: "pig",
    name: "Pig",
    baseValue: 400,
    image: "/pets/pig.png",
    category: "farm",
    rarity: "common",
  },
  {
    id: "sheep",
    name: "Sheep",
    baseValue: 350,
    image: "/pets/sheep.png",
    category: "farm",
    rarity: "common",
  },
  {
    id: "goat",
    name: "Goat",
    baseValue: 450,
    image: "/pets/goat.png",
    category: "farm",
    rarity: "common",
  },
  {
    id: "duck",
    name: "Duck",
    baseValue: 250,
    image: "/pets/duck.png",
    category: "farm",
    rarity: "common",
  },
  {
    id: "rabbit",
    name: "Rabbit",
    baseValue: 200,
    image: "/pets/rabbit.png",
    category: "farm",
    rarity: "common",
  },
  {
    id: "horse",
    name: "Horse",
    baseValue: 800,
    image: "/pets/horse.png",
    category: "farm",
    rarity: "uncommon",
  },
  {
    id: "donkey",
    name: "Donkey",
    baseValue: 600,
    image: "/pets/donkey.png",
    category: "farm",
    rarity: "uncommon",
  },
  {
    id: "llama",
    name: "Llama",
    baseValue: 700,
    image: "/pets/llama.png",
    category: "farm",
    rarity: "uncommon",
  },

  // Wild Animals
  {
    id: "fox",
    name: "Fox",
    baseValue: 1200,
    image: "/pets/fox.png",
    category: "wild",
    rarity: "rare",
  },
  {
    id: "wolf",
    name: "Wolf",
    baseValue: 1500,
    image: "/pets/wolf.png",
    category: "wild",
    rarity: "rare",
  },
  {
    id: "bear",
    name: "Bear",
    baseValue: 2000,
    image: "/pets/bear.png",
    category: "wild",
    rarity: "rare",
  },
  {
    id: "deer",
    name: "Deer",
    baseValue: 1000,
    image: "/pets/deer.png",
    category: "wild",
    rarity: "rare",
  },
  {
    id: "squirrel",
    name: "Squirrel",
    baseValue: 800,
    image: "/pets/squirrel.png",
    category: "wild",
    rarity: "uncommon",
  },
  {
    id: "hedgehog",
    name: "Hedgehog",
    baseValue: 900,
    image: "/pets/hedgehog.png",
    category: "wild",
    rarity: "uncommon",
  },
  {
    id: "owl",
    name: "Owl",
    baseValue: 1100,
    image: "/pets/owl.png",
    category: "wild",
    rarity: "rare",
  },
  {
    id: "eagle",
    name: "Eagle",
    baseValue: 1800,
    image: "/pets/eagle.png",
    category: "wild",
    rarity: "rare",
  },
  {
    id: "hawk",
    name: "Hawk",
    baseValue: 1300,
    image: "/pets/hawk.png",
    category: "wild",
    rarity: "rare",
  },
  {
    id: "falcon",
    name: "Falcon",
    baseValue: 1600,
    image: "/pets/falcon.png",
    category: "wild",
    rarity: "rare",
  },

  // Special Pets
  {
    id: "golden_cow",
    name: "Golden Cow",
    baseValue: 5000,
    image: "/pets/golden_cow.png",
    category: "special",
    rarity: "epic",
  },
  {
    id: "rainbow_chicken",
    name: "Rainbow Chicken",
    baseValue: 3000,
    image: "/pets/rainbow_chicken.png",
    category: "special",
    rarity: "epic",
  },
  {
    id: "crystal_pig",
    name: "Crystal Pig",
    baseValue: 4000,
    image: "/pets/crystal_pig.png",
    category: "special",
    rarity: "epic",
  },
  {
    id: "moon_sheep",
    name: "Moon Sheep",
    baseValue: 3500,
    image: "/pets/moon_sheep.png",
    category: "special",
    rarity: "epic",
  },
  {
    id: "star_goat",
    name: "Star Goat",
    baseValue: 4500,
    image: "/pets/star_goat.png",
    category: "special",
    rarity: "epic",
  },
  {
    id: "diamond_duck",
    name: "Diamond Duck",
    baseValue: 2500,
    image: "/pets/diamond_duck.png",
    category: "special",
    rarity: "epic",
  },
  {
    id: "emerald_rabbit",
    name: "Emerald Rabbit",
    baseValue: 2000,
    image: "/pets/emerald_rabbit.png",
    category: "special",
    rarity: "epic",
  },
  {
    id: "ruby_horse",
    name: "Ruby Horse",
    baseValue: 8000,
    image: "/pets/ruby_horse.png",
    category: "special",
    rarity: "epic",
  },
  {
    id: "sapphire_donkey",
    name: "Sapphire Donkey",
    baseValue: 6000,
    image: "/pets/sapphire_donkey.png",
    category: "special",
    rarity: "epic",
  },
  {
    id: "amethyst_llama",
    name: "Amethyst Llama",
    baseValue: 7000,
    image: "/pets/amethyst_llama.png",
    category: "special",
    rarity: "epic",
  },
  {
    id: "legendary_fox",
    name: "Legendary Fox",
    baseValue: 12000,
    image: "/pets/legendary_fox.png",
    category: "special",
    rarity: "legendary",
  },
  {
    id: "mythical_wolf",
    name: "Mythical Wolf",
    baseValue: 15000,
    image: "/pets/mythical_wolf.png",
    category: "special",
    rarity: "legendary",
  },
  {
    id: "divine_bear",
    name: "Divine Bear",
    baseValue: 20000,
    image: "/pets/divine_bear.png",
    category: "special",
    rarity: "legendary",
  },
  {
    id: "celestial_deer",
    name: "Celestial Deer",
    baseValue: 10000,
    image: "/pets/celestial_deer.png",
    category: "special",
    rarity: "legendary",
  },
  {
    id: "cosmic_squirrel",
    name: "Cosmic Squirrel",
    baseValue: 8000,
    image: "/pets/cosmic_squirrel.png",
    category: "special",
    rarity: "legendary",
  },
  {
    id: "eternal_hedgehog",
    name: "Eternal Hedgehog",
    baseValue: 9000,
    image: "/pets/eternal_hedgehog.png",
    category: "special",
    rarity: "legendary",
  },
  {
    id: "infinite_owl",
    name: "Infinite Owl",
    baseValue: 11000,
    image: "/pets/infinite_owl.png",
    category: "special",
    rarity: "legendary",
  },
  {
    id: "ultimate_eagle",
    name: "Ultimate Eagle",
    baseValue: 18000,
    image: "/pets/ultimate_eagle.png",
    category: "special",
    rarity: "legendary",
  },
  {
    id: "supreme_hawk",
    name: "Supreme Hawk",
    baseValue: 13000,
    image: "/pets/supreme_hawk.png",
    category: "special",
    rarity: "legendary",
  },
  {
    id: "transcendent_falcon",
    name: "Transcendent Falcon",
    baseValue: 16000,
    image: "/pets/transcendent_falcon.png",
    category: "special",
    rarity: "legendary",
  },
];

export const getPetById = (id: string): Pet | undefined => {
  return pets.find((pet) => pet.id === id);
};

export const getPetsByCategory = (category: Pet["category"]): Pet[] => {
  return pets.filter((pet) => pet.category === category);
};

export const getPetsByRarity = (rarity: Pet["rarity"]): Pet[] => {
  return pets.filter((pet) => pet.rarity === rarity);
};

export const getFarmPets = (): Pet[] => {
  return getPetsByCategory("farm");
};

export const getWildPets = (): Pet[] => {
  return getPetsByCategory("wild");
};

export const getSpecialPets = (): Pet[] => {
  return getPetsByCategory("special");
};
