import type { CardShadow, CardBorder } from './types'

/**
 * 获取卡片阴影样式
 */
export const getShadowStyles = (shadow: CardShadow): string => {
  const shadows = {
    none: '',
    sm: 'gemini:shadow-sm',
    md: 'gemini:shadow-md',
    lg: 'gemini:shadow-lg',
    xl: 'gemini:shadow-xl',
    '2xl': 'gemini:shadow-2xl',
  }
  return shadows[shadow] || shadows.none
}

/**
 * 获取卡片边框样式
 */
export const getBorderStyles = (border: CardBorder): string => {
  const borders = {
    none: '',
    sm: 'gemini:border gemini:border-gray-200',
    md: 'gemini:border-2 gemini:border-gray-200',
    lg: 'gemini:border-4 gemini:border-gray-200',
    xl: 'gemini:border-8 gemini:border-gray-200',
    '2xl': 'gemini:border-16 gemini:border-gray-200',
  }
  return borders[border] || borders.none
}

/**
 * 获取卡片圆角样式
 */
export const getRoundedStyles = (rounded: boolean): string => {
  return rounded ? 'gemini:rounded-lg' : 'gemini:rounded-none'
}

/**
 * 获取卡片hover效果样式
 */
export const getHoverStyles = (disabledHover: boolean = false): string => {
  return disabledHover ? '' : 'gemini:hover:shadow-xl gemini:hover:scale-101 gemini:hover:-translate-y-1 gemini:hover:translate-x-1 gemini:origin-bottom-left'
}

/**
 * 组合所有样式类名
 */
export const getCardStyles = (
  shadow: CardShadow = 'none',
  border: CardBorder = 'none',
  rounded: boolean = false,
  disabledHover: boolean = false,
  customClassName?: string
): string => {
  const baseStyles = 'gemini:block gemini:p-4 gemini:bg-white gemini:transition-all gemini:duration-300 gemini:ease-in-out gemini:cursor-pointer'
  const shadowStyles = getShadowStyles(shadow)
  const borderStyles = getBorderStyles(border)
  const roundedStyles = getRoundedStyles(rounded)
  const hoverStyles = getHoverStyles(disabledHover)
  
  // 检查是否已经设置了宽度，如果没有则添加默认宽度
  const hasWidthClass = customClassName && /\bw-\w+/.test(customClassName)
  const defaultWidth = hasWidthClass ? '' : 'gemini:w-full'
  
  return [
    baseStyles,
    defaultWidth,
    shadowStyles,
    borderStyles,
    roundedStyles,
    hoverStyles,
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}
