import type { CollapseSize, CollapseVariant } from './types'

/**
 * 获取 Collapse 组件的尺寸样式
 */
export const getCollapseSizeStyles = (size: CollapseSize): string => {
  const sizes = {
    sm: 'gemini:text-sm',
    md: 'gemini:text-base',
    lg: 'gemini:text-lg',
  }
  return sizes[size] || sizes.md
}

/**
 * 获取 Collapse 组件的变体样式
 */
export const getCollapseVariantStyles = (variant: CollapseVariant, bordered: boolean, ghost: boolean): string => {
  if (ghost) {
    return 'gemini:bg-transparent'
  }
  
  if (bordered || variant === 'bordered') {
    return 'gemini:border gemini:border-gray-200 gemini:rounded-lg gemini:overflow-hidden'
  }
  
  return 'gemini:bg-white gemini:rounded-lg'
}

/**
 * 获取 Collapse 组件的基础样式
 */
export const getCollapseStyles = (
  size: CollapseSize = 'md',
  variant: CollapseVariant = 'default',
  bordered: boolean = false,
  ghost: boolean = false,
  customClassName?: string
): string => {
  const baseStyles = 'gemini:w-full'
  const sizeStyles = getCollapseSizeStyles(size)
  const variantStyles = getCollapseVariantStyles(variant, bordered, ghost)
  
  return [
    baseStyles,
    sizeStyles,
    variantStyles,
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * 获取 Collapse.Panel 的样式
 */
export const getPanelStyles = (customClassName?: string): string => {
  const baseStyles = 'gemini:border-b gemini:border-gray-200 gemini:last:border-b-0'
  
  return [
    baseStyles,
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * 获取 Panel 头部的样式
 */
export const getPanelHeaderStyles = (
  disabled: boolean = false,
  customClassName?: string
): string => {
  const baseStyles = 'gemini:flex gemini:items-center gemini:justify-between gemini:w-full gemini:px-4 gemini:py-3 gemini:text-left gemini:font-medium gemini:transition-colors gemini:duration-200 gemini:cursor-pointer gemini:hover:bg-gray-50 gemini:focus:outline-none gemini:focus:ring-2 gemini:focus:ring-blue-500 gemini:focus:ring-inset'
  const disabledStyles = disabled ? 'gemini:opacity-50 gemini:cursor-not-allowed gemini:hover:bg-transparent' : ''
  
  return [
    baseStyles,
    disabledStyles,
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * 获取 Panel 内容的样式
 */
export const getPanelContentStyles = (customClassName?: string): string => {
  const baseStyles = 'gemini:px-4 gemini:pb-4 gemini:text-gray-700 gemini:overflow-hidden gemini:transition-all gemini:duration-300 gemini:ease-in-out'
  
  return [
    baseStyles,
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * 获取箭头图标的样式
 */
export const getArrowStyles = (isActive: boolean, disabled: boolean = false): string => {
  const baseStyles = 'gemini:flex-shrink-0 gemini:w-4 gemini:h-4 gemini:transition-transform gemini:duration-200 gemini:ease-in-out'
  const activeStyles = isActive ? 'gemini:rotate-180' : 'gemini:rotate-0'
  const disabledStyles = disabled ? 'gemini:opacity-50' : ''
  
  return [
    baseStyles,
    activeStyles,
    disabledStyles,
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * 获取内容容器的样式（用于动画）
 */
export const getContentContainerStyles = (isActive: boolean): string => {
  const baseStyles = 'gemini:transition-all gemini:duration-300 gemini:ease-in-out'
  const activeStyles = isActive ? 'gemini:max-h-screen gemini:opacity-100' : 'gemini:max-h-0 gemini:opacity-0'
  
  return [
    baseStyles,
    activeStyles,
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}
