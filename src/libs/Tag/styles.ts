import { cn } from "@/utils";
import type { TagColor, TagSize } from "./types";

export const tagStyles = {
  base: "gemini:inline-flex gemini:items-center gemini:font-medium gemini:rounded-md gemini:border gemini:border-solid gemini:transition-all gemini:duration-200",
  
  colors: {
    default: "gemini:bg-gray-100 gemini:text-gray-700 gemini:border-gray-200",
    primary: "gemini:bg-blue-100 gemini:text-blue-700 gemini:border-blue-200",
    success: "gemini:bg-green-100 gemini:text-green-700 gemini:border-green-200",
    warning: "gemini:bg-yellow-100 gemini:text-yellow-700 gemini:border-yellow-200",
    error: "gemini:bg-red-100 gemini:text-red-700 gemini:border-red-200",
    info: "gemini:bg-cyan-100 gemini:text-cyan-700 gemini:border-cyan-200",
    magenta: "gemini:bg-pink-100 gemini:text-pink-700 gemini:border-pink-200",
    red: "gemini:bg-red-100 gemini:text-red-700 gemini:border-red-200",
    volcano: "gemini:bg-orange-100 gemini:text-orange-700 gemini:border-orange-200",
    orange: "gemini:bg-orange-100 gemini:text-orange-700 gemini:border-orange-200",
    gold: "gemini:bg-yellow-100 gemini:text-yellow-700 gemini:border-yellow-200",
    lime: "gemini:bg-lime-100 gemini:text-lime-700 gemini:border-lime-200",
    green: "gemini:bg-green-100 gemini:text-green-700 gemini:border-green-200",
    cyan: "gemini:bg-cyan-100 gemini:text-cyan-700 gemini:border-cyan-200",
    blue: "gemini:bg-blue-100 gemini:text-blue-700 gemini:border-blue-200",
    geekblue: "gemini:bg-indigo-100 gemini:text-indigo-700 gemini:border-indigo-200",
    purple: "gemini:bg-purple-100 gemini:text-purple-700 gemini:border-purple-200"
  },
  
  sizes: {
    small: "gemini:px-2 gemini:py-0.5 gemini:text-xs gemini:h-5",
    middle: "gemini:px-2.5 gemini:py-1 gemini:text-sm gemini:h-6",
    large: "gemini:px-3 gemini:py-1.5 gemini:text-base gemini:h-8"
  },

  states: {
    hover: "gemini:hover:opacity-80",
    closable: "gemini:cursor-pointer gemini:hover:bg-opacity-80"
  }
};

export function getTagStyles(
  color: TagColor | string = 'default', 
  size: TagSize = 'middle', 
  closable?: boolean,
  bordered?: boolean,
  className?: string
) {
  const isCustomColor = typeof color === 'string' && !Object.keys(tagStyles.colors).includes(color);
  
  return cn(
    tagStyles.base,
    !isCustomColor && tagStyles.colors[color as TagColor],
    tagStyles.sizes[size],
    closable && tagStyles.states.closable,
    !closable && tagStyles.states.hover,
    !bordered && "gemini:border-transparent",
    className
  );
}

export function getCloseIconStyles() {
  return "gemini:ml-1 gemini:cursor-pointer gemini:hover:opacity-70 gemini:transition-opacity gemini:duration-200";
}
