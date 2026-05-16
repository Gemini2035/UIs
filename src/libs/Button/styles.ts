import type { ButtonType, ButtonSize } from './types'

/**
 * 获取按钮变体样式
 */
export const getVariantStyles = (variant: ButtonType): string => {
  const variants = {
    primary: 'gemini:bg-blue-600 gemini:text-white gemini:hover:bg-blue-700 gemini:focus:ring-blue-500',
    default: 'gemini:bg-white gemini:text-gray-700 gemini:hover:bg-gray-50 gemini:focus:ring-gray-500 gemini:border gemini:border-gray-300',
    secondary: 'gemini:bg-gray-100 gemini:text-gray-900 gemini:hover:bg-gray-200 gemini:focus:ring-gray-500 gemini:border gemini:border-gray-300',
    outline: 'gemini:bg-transparent gemini:text-blue-600 gemini:hover:bg-blue-50 gemini:focus:ring-blue-500 gemini:border gemini:border-blue-600',
    ghost: 'gemini:bg-transparent gemini:text-gray-700 gemini:hover:bg-gray-100 gemini:focus:ring-gray-500',
    text: 'gemini:bg-transparent gemini:text-gray-700 gemini:focus:ring-gray-500',
    danger: 'gemini:bg-red-600 gemini:text-white gemini:hover:bg-red-700 gemini:focus:ring-red-500',
  }
  return variants[variant] || variants.primary
}

/**
 * 获取按钮尺寸样式
 */
export const getSizeStyles = (size: ButtonSize): string => {
  const sizes = {
    xs: 'gemini:px-2 gemini:py-1 gemini:text-xs gemini:min-h-[1.5rem]',
    sm: 'gemini:px-3 gemini:py-1.5 gemini:text-sm gemini:min-h-[2rem]',
    md: 'gemini:px-4 gemini:py-2 gemini:text-sm gemini:min-h-[2.5rem]',
    lg: 'gemini:px-6 gemini:py-3 gemini:text-base gemini:min-h-[3rem]',
    xl: 'gemini:px-8 gemini:py-4 gemini:text-lg gemini:min-h-[3.5rem]',
  }
  return sizes[size] || sizes.md
}

/**
 * 获取按钮圆角样式
 */
export const getRoundedStyles = (rounded: boolean): string => {
  return rounded ? 'gemini:rounded-lg' : 'gemini:rounded-none'
}

/**
 * 组合所有样式类名
 */
export const getButtonStyles = (
  variant: ButtonType = 'primary',
  size: ButtonSize = 'md',
  rounded: boolean = false,
  disabled: boolean = false,
  loading: boolean = false,
  customClassName?: string
): string => {
  const baseStyles = 'gemini:inline-flex gemini:gap-1 gemini:items-center gemini:justify-center gemini:font-medium gemini:text-center gemini:transition-all gemini:duration-200 gemini:ease-in-out gemini:focus:outline-none gemini:focus:ring-2 gemini:focus:ring-offset-2 gemini:cursor-pointer gemini:disabled:opacity-50 gemini:disabled:cursor-not-allowed'
  const variantStyles = getVariantStyles(variant)
  const sizeStyles = getSizeStyles(size)
  const roundedStyles = getRoundedStyles(rounded)
  const disabledStyles = disabled ? 'gemini:opacity-50 gemini:cursor-not-allowed' : ''
  const loadingStyles = loading ? 'gemini:cursor-wait' : ''
  
  return [
    baseStyles,
    variantStyles,
    sizeStyles,
    roundedStyles,
    disabledStyles,
    loadingStyles,
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}