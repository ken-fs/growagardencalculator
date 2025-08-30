"use client";

import { formatCurrency } from "@/utils/calculator";
import { Crop } from "@/types";

interface CropCardProps {
  crop: Crop;
  getRarityColor: (rarity: string) => string;
  getRarityText: (rarity: string) => string;
}

export const CropCard: React.FC<CropCardProps> = ({
  crop,
  getRarityColor,
  getRarityText,
}) => {
  return (
    <div className="p-4 border border-border rounded-lg hover:shadow-tech-glow transition-all duration-300 bg-secondary/30 hover:bg-secondary/50">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={crop.image}
          alt={crop.name}
          className="w-8 h-8 object-contain"
          onError={(e) => {
            e.currentTarget.src = "/crops/default.svg";
          }}
        />
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{crop.name}</h3>
        </div>
        <span className="text-lg font-bold text-tech-glow">
          {formatCurrency(crop.baseValue)}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium border ${getRarityColor(
            crop.rarity
          )}`}
        >
          {getRarityText(crop.rarity)}
        </span>
        <span className="text-sm text-muted-foreground">Sheckles</span>
      </div>
    </div>
  );
};
