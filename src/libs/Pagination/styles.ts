import type { PaginationSize, PaginationAlign } from "./types";

export const paginationStyles = {
  base: "gemini:flex gemini:items-center gemini:gap-1 gemini:text-sm",
  
  sizes: {
    small: "gemini:text-xs",
    middle: "gemini:text-sm", 
    large: "gemini:text-base"
  },
  
  alignments: {
    left: "gemini:justify-start",
    center: "gemini:justify-center",
    right: "gemini:justify-end"
  },

  item: {
    base: "gemini:inline-flex gemini:items-center gemini:justify-center gemini:min-w-[32px] gemini:h-8 gemini:px-3 gemini:rounded-md gemini:border gemini:border-gray-300 gemini:text-gray-700 gemini:cursor-pointer gemini:transition-all gemini:duration-200 gemini:hover:border-blue-500 gemini:hover:text-blue-600 gemini:focus:outline-none gemini:focus:ring-2 gemini:focus:ring-blue-500 gemini:focus:ring-opacity-50",
    active: "gemini:bg-blue-500 gemini:text-white gemini:border-blue-500 gemini:hover:bg-blue-600 gemini:hover:border-blue-600",
    disabled: "gemini:opacity-50 gemini:cursor-not-allowed gemini:hover:border-gray-300 gemini:hover:text-gray-700 gemini:hover:bg-white",
    ellipsis: "gemini:cursor-default gemini:hover:border-gray-300 gemini:hover:text-gray-700 gemini:hover:bg-white"
  },

  jump: {
    base: "gemini:inline-flex gemini:items-center gemini:justify-center gemini:w-8 gemini:h-8 gemini:rounded-md gemini:border gemini:border-gray-300 gemini:bg-white gemini:text-gray-700 gemini:cursor-pointer gemini:transition-all gemini:duration-200 gemini:hover:border-blue-500 gemini:hover:text-blue-600 gemini:focus:outline-none gemini:focus:ring-2 gemini:focus:ring-blue-500 gemini:focus:ring-opacity-50",
    disabled: "gemini:opacity-50 gemini:cursor-not-allowed gemini:hover:border-gray-300 gemini:hover:text-gray-700 gemini:hover:bg-white"
  },

  sizeChanger: {
    base: "gemini:flex gemini:items-center gemini:gap-2 gemini:text-sm",
    select: "gemini:px-2 gemini:py-1 gemini:border gemini:border-gray-300 gemini:rounded-md gemini:bg-white gemini:text-gray-700 gemini:focus:outline-none gemini:focus:ring-2 gemini:focus:ring-blue-500 gemini:focus:ring-opacity-50 gemini:focus:border-blue-500",
    label: "gemini:text-gray-600"
  },

  quickJumper: {
    base: "gemini:flex gemini:items-center gemini:gap-2 gemini:text-sm",
    input: "gemini:w-16 gemini:px-2 gemini:py-1 gemini:border gemini:border-gray-300 gemini:rounded-md gemini:bg-white gemini:text-gray-700 gemini:text-center gemini:focus:outline-none gemini:focus:ring-2 gemini:focus:ring-blue-500 gemini:focus:ring-opacity-50 gemini:focus:border-blue-500",
    label: "gemini:text-gray-600"
  },

  total: {
    base: "gemini:text-sm gemini:text-gray-600 gemini:mr-4"
  },

  simple: {
    base: "gemini:flex gemini:items-center gemini:gap-2 gemini:text-sm",
    input: "gemini:w-12 gemini:px-2 gemini:py-1 gemini:border gemini:border-gray-300 gemini:rounded-md gemini:bg-white gemini:text-gray-700 gemini:text-center gemini:focus:outline-none gemini:focus:ring-2 gemini:focus:ring-blue-500 gemini:focus:ring-opacity-50 gemini:focus:border-blue-500",
    separator: "gemini:text-gray-500"
  }
};

export function getPaginationStyles(
  size: PaginationSize = 'middle',
  align: PaginationAlign = 'left',
  className?: string
) {
  const baseClasses = [
    paginationStyles.base,
    paginationStyles.sizes[size],
    paginationStyles.alignments[align]
  ].filter(Boolean).join(' ');
  
  return className ? `${baseClasses} ${className}` : baseClasses;
}

export function getPaginationItemStyles(
  active?: boolean,
  disabled?: boolean,
  ellipsis?: boolean,
  className?: string
) {
  const classes = [
    paginationStyles.item.base,
    active && paginationStyles.item.active,
    disabled && paginationStyles.item.disabled,
    ellipsis && paginationStyles.item.ellipsis
  ].filter(Boolean).join(' ');
  
  return className ? `${classes} ${className}` : classes;
}

export function getPaginationJumpStyles(
  disabled?: boolean,
  className?: string
) {
  const classes = [
    paginationStyles.jump.base,
    disabled && paginationStyles.jump.disabled
  ].filter(Boolean).join(' ');
  
  return className ? `${classes} ${className}` : classes;
}

export function getPaginationSizeChangerStyles(className?: string) {
  return className ? `${paginationStyles.sizeChanger.base} ${className}` : paginationStyles.sizeChanger.base;
}

export function getPaginationQuickJumperStyles(className?: string) {
  return className ? `${paginationStyles.quickJumper.base} ${className}` : paginationStyles.quickJumper.base;
}

export function getPaginationTotalStyles(className?: string) {
  return className ? `${paginationStyles.total.base} ${className}` : paginationStyles.total.base;
}

export function getPaginationSimpleStyles(className?: string) {
  return className ? `${paginationStyles.simple.base} ${className}` : paginationStyles.simple.base;
}
