"use client";

import React, { useState, useRef, useEffect } from "react";
import { formatCurrency } from "@/utils/calculator";

interface SelectableItem {
  id: string;
  name: string;
  baseValue: number;
  image: string;
  rarity: string;
  category?: string;
}

interface IconSelectorProps {
  items: SelectableItem[];
  value: string;
  onChange: (itemId: string) => void;
  className?: string;
  placeholder?: string;
  searchPlaceholder?: string;
}

export const IconSelector: React.FC<IconSelectorProps> = ({
  items,
  value,
  onChange,
  className = "",
  placeholder = "选择项目",
  searchPlaceholder = "搜索...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedItem = items.find((item) => item.id === value);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemSelect = (itemId: string) => {
    onChange(itemId);
    setIsOpen(false);
    setSearchTerm("");
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "uncommon":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "rare":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "epic":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "legendary":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* 选择器按钮 */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 tech-input rounded-lg focus:ring-2 focus:ring-tech-glow focus:border-transparent text-foreground text-left flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          {selectedItem && (
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-6 h-6 object-contain"
              onError={(e) => {
                e.currentTarget.src = "/crops/default.svg";
              }}
            />
          )}
          <span>
            {selectedItem
              ? `${selectedItem.name} - ${formatCurrency(
                  selectedItem.baseValue
                )} Sheckles`
              : placeholder}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* 下拉菜单 */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg max-h-80 overflow-hidden">
          {/* 搜索框 */}
          <div className="p-3 border-b border-border bg-background/90">
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 text-sm bg-secondary/80 border border-border rounded focus:ring-2 focus:ring-tech-glow focus:border-transparent text-foreground"
              autoFocus
            />
          </div>

          {/* 项目列表 */}
          <div className="max-h-60 overflow-y-auto bg-background/90">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleItemSelect(item.id)}
                  className={`w-full p-3 text-left flex items-center gap-3 hover:bg-secondary/70 transition-colors duration-200 ${
                    item.id === value
                      ? "bg-tech-glow/30 text-tech-glow"
                      : "text-foreground bg-background/80"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-6 h-6 object-contain flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = "/crops/default.svg";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{item.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {formatCurrency(item.baseValue)} Sheckles
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getRarityColor(
                        item.rarity
                      )}`}
                    >
                      {item.rarity}
                    </span>
                  </div>
                </button>
              ))
            ) : (
              <div className="p-3 text-center text-muted-foreground bg-background/80">
                未找到匹配的项目
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
