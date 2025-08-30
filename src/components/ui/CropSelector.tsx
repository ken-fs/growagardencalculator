"use client";

import React from "react";
import { Crop } from "@/types";
import { IconSelector } from "./IconSelector";

interface CropSelectorProps {
  crops: Crop[];
  value: string;
  onChange: (cropId: string) => void;
  className?: string;
}

export const CropSelector: React.FC<CropSelectorProps> = ({
  crops,
  value,
  onChange,
  className = "",
}) => {
  return (
    <IconSelector
      items={crops}
      value={value}
      onChange={onChange}
      className={className}
      placeholder="选择作物"
      searchPlaceholder="搜索作物..."
    />
  );
};
