import type { EmptyStateSize, EmptyStateVariant } from './types'
import { cn } from '@/utils'

/**
 * 获取空状态组件的样式类名
 */
export function getEmptyStateStyles(
  size: EmptyStateSize = 'md',
  variant: EmptyStateVariant = 'default',
  className?: string
): string {
  const baseStyles = 'gemini:flex gemini:flex-col gemini:items-center gemini:justify-center gemini:text-center'
  
  const sizeStyles = {
    sm: 'gemini:py-8 gemini:px-4',
    md: 'gemini:py-12 gemini:px-6',
    lg: 'gemini:py-16 gemini:px-8'
  }
  
  const variantStyles = {
    default: 'gemini:bg-gray-50 gemini:rounded-lg',
    minimal: 'gemini:bg-transparent',
    card: 'gemini:bg-white gemini:border gemini:border-gray-200 gemini:rounded-lg gemini:shadow-sm'
  }
  
  return cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  )
}

/**
 * 获取图标容器的样式类名
 */
export function getIconContainerStyles(size: EmptyStateSize = 'md'): string {
  const sizeStyles = {
    sm: 'gemini:w-12 gemini:h-12 gemini:mb-3',
    md: 'gemini:w-16 gemini:h-16 gemini:mb-4',
    lg: 'gemini:w-20 gemini:h-20 gemini:mb-6'
  }
  
  return cn(
    'gemini:flex gemini:items-center gemini:justify-center gemini:text-gray-400',
    sizeStyles[size]
  )
}

/**
 * 获取标题的样式类名
 */
export function getTitleStyles(size: EmptyStateSize = 'md'): string {
  const sizeStyles = {
    sm: 'gemini:text-lg gemini:font-semibold',
    md: 'gemini:text-xl gemini:font-semibold',
    lg: 'gemini:text-2xl gemini:font-semibold'
  }
  
  return cn(
    'gemini:text-gray-900 gemini:mb-2',
    sizeStyles[size]
  )
}

/**
 * 获取描述的样式类名
 */
export function getDescriptionStyles(size: EmptyStateSize = 'md'): string {
  const sizeStyles = {
    sm: 'gemini:text-sm',
    md: 'gemini:text-base',
    lg: 'gemini:text-lg'
  }
  
  return cn(
    'gemini:text-gray-600 gemini:mb-4 gemini:max-w-md',
    sizeStyles[size]
  )
}

/**
 * 获取操作按钮容器的样式类名
 */
export function getActionStyles(): string {
  return 'gemini:mt-2'
}
