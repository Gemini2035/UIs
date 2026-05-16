import type { DrawerPlacement, DrawerSize } from './types'

/**
 * 获取 Drawer 的位置样式
 */
export const getDrawerPlacementStyles = (placement: DrawerPlacement): string => {
  const placements = {
    top: 'gemini:top-0 gemini:left-0 gemini:right-0',
    right: 'gemini:top-0 gemini:right-0 gemini:bottom-0',
    bottom: 'gemini:bottom-0 gemini:left-0 gemini:right-0',
    left: 'gemini:top-0 gemini:left-0 gemini:bottom-0',
  }
  return placements[placement] || placements.right
}

/**
 * 获取 Drawer 的尺寸样式
 */
export const getDrawerSizeStyles = (size: DrawerSize, placement: DrawerPlacement): string => {
  const isHorizontal = placement === 'left' || placement === 'right'
  
  if (size === 'full') {
    // 使用视口单位，避免在关闭时造成布局占位或导致白屏区域
    return 'gemini:w-screen gemini:h-screen'
  }
  
  const sizes = {
    sm: isHorizontal ? 'gemini:w-64' : 'gemini:h-64',
    md: isHorizontal ? 'gemini:w-96' : 'gemini:h-96',
    lg: isHorizontal ? 'gemini:w-[46rem]' : 'gemini:h-[46rem]',
  }
  
  return sizes[size] || sizes.md
}

/**
 * 获取 Drawer 打开/关闭的动画样式
 */
export const getDrawerTransformStyles = (
  placement: DrawerPlacement,
  open: boolean
): string => {
  if (open) return 'gemini:translate-x-0 gemini:translate-y-0'
  
  const transforms = {
    top: 'gemini:-translate-y-full',
    right: 'gemini:translate-x-full', // 关闭时从右向左滑出
    bottom: 'gemini:translate-y-full',
    left: 'gemini:-translate-x-full',
  }
  
  return transforms[placement] || transforms.right
}

/**
 * 获取 Drawer 组件的基础样式
 */
export const getDrawerStyles = (
  placement: DrawerPlacement,
  size: DrawerSize,
  open: boolean,
  customClassName?: string
): string => {
  const baseStyles = 'gemini:fixed gemini:bg-white gemini:shadow-xl gemini:transition-transform gemini:duration-300 gemini:ease-out gemini:z-50 gemini:flex gemini:flex-col gemini:will-change-transform'
  const placementStyles = getDrawerPlacementStyles(placement)
  const sizeStyles = getDrawerSizeStyles(size, placement)
  const transformStyles = getDrawerTransformStyles(placement, open)
  const pointerStyles = open ? 'gemini:pointer-events-auto' : 'gemini:pointer-events-none'
  
  return [
    baseStyles,
    placementStyles,
    sizeStyles,
    transformStyles,
    pointerStyles,
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * 获取遮罩层样式
 */
export const getMaskStyles = (open: boolean, customClassName?: string): string => {
  const baseStyles = 'gemini:fixed gemini:inset-0 gemini:h-screen gemini:bg-black/50 gemini:transition-opacity gemini:duration-300 gemini:ease-out gemini:z-40'
  const opacityStyles = open ? 'gemini:opacity-100' : 'gemini:opacity-0'
  const pointerStyles = open ? 'gemini:pointer-events-auto' : 'gemini:pointer-events-none'
  
  return [
    baseStyles,
    opacityStyles,
    pointerStyles,
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * 获取头部样式
 */
export const getHeaderStyles = (customClassName?: string): string => {
  const baseStyles = 'gemini:flex gemini:items-center gemini:justify-between gemini:px-6 gemini:py-4 gemini:border-b gemini:border-gray-200 gemini:flex-shrink-0'
  
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
 * 获取内容区域样式
 */
export const getBodyStyles = (customClassName?: string): string => {
  const baseStyles = 'gemini:min-h-0 gemini:flex-1 gemini:overflow-y-auto'
  
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
 * 获取底部样式
 */
export const getFooterStyles = (customClassName?: string): string => {
  const baseStyles = 'gemini:flex gemini:items-center gemini:justify-end gemini:px-6 gemini:py-4 gemini:border-t gemini:border-gray-200 gemini:flex-shrink-0 gemini:gap-2'
  
  return [
    baseStyles,
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}


