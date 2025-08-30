"use client";

import React from "react";
import { Pet } from "@/types";
import { IconSelector } from "./IconSelector";

interface PetSelectorProps {
  pets: Pet[];
  value: string;
  onChange: (petId: string) => void;
  className?: string;
}

export const PetSelector: React.FC<PetSelectorProps> = ({
  pets,
  value,
  onChange,
  className = "",
}) => {
  return (
    <IconSelector
      items={pets}
      value={value}
      onChange={onChange}
      className={className}
      placeholder="Select Pet"
      searchPlaceholder="Search pets..."
    />
  );
};
