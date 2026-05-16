import { cn } from '@/utils'

/**
 * 获取Slider容器的样式类名
 */
export const getSliderStyles = (
  className?: string
) => {
  return cn(
    'gemini:relative gemini:w-full gemini:overflow-hidden',
    className
  )
}

/**
 * 获取滑动容器的样式类名
 */
export const getSliderTrackStyles = (
  className?: string
) => {
  // 暂时不使用 gap 参数，但保留接口兼容性
  return cn(
    'gemini:flex gemini:transition-transform gemini:duration-300 gemini:ease-in-out',
    className
  )
}

/**
 * 获取单个item的样式类名
 */
export const getSliderItemStyles = (
  className?: string
) => {
  return cn(
    'gemini:flex-shrink-0',
    className
  )
}

/**
 * 获取导航按钮的样式类名
 */
export const getNavigationButtonStyles = (
  direction: 'left' | 'right',
  variant: 'default' | 'outline' | 'ghost' = 'default',
  disabled: boolean = false,
  className?: string
) => {
  const baseStyles = cn(
    'gemini:absolute gemini:top-1/2 gemini:-translate-y-1/2 gemini:z-10',
    'gemini:w-10 gemini:h-10 gemini:rounded-full',
    'gemini:flex gemini:items-center gemini:justify-center',
    'gemini:transition-all gemini:duration-200',
    'gemini:focus:outline-none gemini:focus:ring-2 gemini:focus:ring-offset-2',
    disabled && 'gemini:hidden', // 禁用时直接隐藏
    !disabled && 'gemini:cursor-pointer gemini:hover:scale-110 gemini:active:scale-95' // 启用时显示pointer光标
  )

  const positionStyles = direction === 'left' 
    ? 'gemini:left-4' 
    : 'gemini:right-4'

  const variantStyles = {
    default: cn(
      'gemini:bg-white gemini:text-gray-800 gemini:shadow-lg',
      'gemini:hover:bg-gray-50',
      'gemini:focus:ring-gray-300'
    ),
    outline: cn(
      'gemini:bg-transparent gemini:border-2 gemini:border-white gemini:text-white',
      'gemini:hover:bg-white gemini:hover:text-gray-800',
      'gemini:focus:ring-white'
    ),
    ghost: cn(
      'gemini:bg-transparent gemini:text-white',
      'gemini:hover:bg-white/20',
      'gemini:focus:ring-white'
    )
  }

  return cn(
    baseStyles,
    positionStyles,
    variantStyles[variant],
    className
  )
}

/**
 * 获取指示器的样式类名
 */
export const getIndicatorStyles = (
  variant: 'dot' | 'number' | 'line' = 'dot',
  active: boolean = false,
  className?: string
) => {
  const baseStyles = cn(
    'gemini:transition-all gemini:duration-200 gemini:cursor-pointer',
    'gemini:focus:outline-none gemini:focus:ring-2 gemini:focus:ring-offset-2 gemini:focus:ring-gray-300'
  )

  const variantStyles = {
    dot: cn(
      'gemini:w-2 gemini:h-2 gemini:rounded-full',
      active 
        ? 'gemini:bg-white gemini:scale-125' 
        : 'gemini:bg-white/50 gemini:hover:bg-white/75'
    ),
    number: cn(
      'gemini:w-8 gemini:h-8 gemini:rounded-full gemini:flex gemini:items-center gemini:justify-center gemini:text-sm gemini:font-medium',
      active
        ? 'gemini:bg-white gemini:text-gray-800'
        : 'gemini:bg-white/50 gemini:text-white gemini:hover:bg-white/75'
    ),
    line: cn(
      'gemini:h-1 gemini:rounded-full',
      active
        ? 'gemini:bg-white'
        : 'gemini:bg-white/50 gemini:hover:bg-white/75'
    )
  }

  return cn(
    baseStyles,
    variantStyles[variant],
    className
  )
}

/**
 * 获取指示器容器的样式类名
 */
export const getIndicatorContainerStyles = (
  variant: 'dot' | 'number' | 'line' = 'dot',
  className?: string
) => {
  return cn(
    'gemini:flex gemini:items-center gemini:justify-center gemini:gap-2 gemini:mt-4',
    variant === 'line' && 'gemini:w-full',
    className
  )
}
