import type { TooltipPlacement, TooltipTheme, TooltipAnimation } from './types'

/**
 * 获取Tooltip主题样式
 */
export const getThemeStyles = (theme: TooltipTheme): string => {
  const themes = {
    light: 'gemini:bg-white gemini:text-gray-900 gemini:border gemini:border-gray-200 gemini:shadow-lg',
  }
  return themes[theme] || themes.light
}

/**
 * 获取Tooltip位置样式 - 移除CSS定位，使用JavaScript计算位置
 */
export const getPlacementStyles = (): string => {
  // 由于使用JavaScript计算位置，这里只返回空字符串
  // 避免CSS定位与JavaScript计算的位置冲突
  return ''
}

/**
 * 获取箭头样式
 */
export const getArrowStyles = (placement: TooltipPlacement): string => {
  const arrowBase = 'gemini:absolute gemini:w-2 gemini:h-2 gemini:transform gemini:rotate-45'
  const lightArrow = 'gemini:bg-white gemini:border gemini:border-gray-200'

  const arrowColor = lightArrow

  const arrowPositions = {
    top: `${arrowColor} gemini:-bottom-1 gemini:left-1/2 gemini:transform gemini:-translate-x-1/2`,
    topLeft: `${arrowColor} gemini:-bottom-1 gemini:left-4`,
    topRight: `${arrowColor} gemini:-bottom-1 gemini:right-4`,
    bottom: `${arrowColor} gemini:-top-1 gemini:left-1/2 gemini:transform gemini:-translate-x-1/2`,
    bottomLeft: `${arrowColor} gemini:-top-1 gemini:left-4`,
    bottomRight: `${arrowColor} gemini:-top-1 gemini:right-4`,
    left: `${arrowColor} gemini:-right-1 gemini:top-1/2 gemini:transform gemini:-translate-y-1/2`,
    leftTop: `${arrowColor} gemini:-right-1 gemini:top-4`,
    leftBottom: `${arrowColor} gemini:-right-1 gemini:bottom-4`,
    right: `${arrowColor} gemini:-left-1 gemini:top-1/2 gemini:transform gemini:-translate-y-1/2`,
    rightTop: `${arrowColor} gemini:-left-1 gemini:top-4`,
    rightBottom: `${arrowColor} gemini:-left-1 gemini:bottom-4`,
  }

  return `${arrowBase} ${arrowPositions[placement] || arrowPositions.top}`
}

/**
 * 获取动画样式
 */
export const getAnimationStyles = (animation: TooltipAnimation, visible: boolean): string => {
  const animations = {
    fade: visible
      ? 'gemini:opacity-100 gemini:transition-opacity gemini:duration-200 gemini:ease-in-out'
      : 'gemini:opacity-0 gemini:transition-opacity gemini:duration-200 gemini:ease-in-out',
    zoom: visible
      ? 'gemini:opacity-100 gemini:scale-100 gemini:transition-all gemini:duration-200 gemini:ease-in-out'
      : 'gemini:opacity-0 gemini:scale-95 gemini:transition-all gemini:duration-200 gemini:ease-in-out',
    slide: visible
      ? 'gemini:opacity-100 gemini:translate-y-0 gemini:transition-all gemini:duration-200 gemini:ease-in-out'
      : 'gemini:opacity-0 gemini:translate-y-1 gemini:transition-all gemini:duration-200 gemini:ease-in-out',
    none: '',
  }
  return animations[animation] || animations.fade
}

/**
 * 获取基础样式
 */
export const getBaseStyles = (): string => {
  return [
    'gemini:absolute gemini:z-50',
    'gemini:px-3 gemini:py-2',
    'gemini:text-sm gemini:font-medium',
    'gemini:rounded-md',
    'gemini:pointer-events-none',
    'gemini:max-w-xs',
    'gemini:break-words',
    'gemini:whitespace-normal',
    'gemini:min-h-fit',
    'gemini:h-auto',
  ].join(' ')
}

/**
 * 获取交互式样式
 */
export const getInteractiveStyles = (interactive: boolean, trigger: string): string => {
  // 如果是hover触发，需要允许鼠标事件以便用户可以hover到tooltip内容上
  if (trigger === 'hover') {
    return 'gemini:pointer-events-auto'
  }
  return interactive ? 'gemini:pointer-events-auto' : 'gemini:pointer-events-none'
}

/**
 * 组合所有样式类名
 */
export const getTooltipStyles = (
  theme: TooltipTheme = 'light',
  animation: TooltipAnimation = 'fade',
  visible: boolean = false,
  interactive: boolean = false,
  customClassName?: string,
  trigger: string = 'hover'
): string => {
  const baseStyles = getBaseStyles()
  const themeStyles = getThemeStyles(theme)
  const placementStyles = getPlacementStyles()
  const animationStyles = getAnimationStyles(animation, visible)
  const interactiveStyles = getInteractiveStyles(interactive, trigger)

  return [
    baseStyles,
    themeStyles,
    placementStyles,
    animationStyles,
    interactiveStyles,
    customClassName,
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}
