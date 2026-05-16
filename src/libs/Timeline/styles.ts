import type { TimelineMode, TimelineSize, TimelineColor, TimelineStatus } from './types'

/**
 * 获取 Timeline 组件的样式类名
 */
export const getTimelineStyles = (
  mode: TimelineMode = 'left',
  size: TimelineSize = 'md',
  showLine: boolean = true,
  className?: string
): string => {
  const baseStyles = 'gemini:relative'

  const modeStyles = {
    left: 'gemini:pl-6',
    right: 'gemini:pr-6',
    alternate: 'gemini:px-6'
  }

  const sizeStyles = {
    sm: 'gemini:space-y-4',
    md: 'gemini:space-y-6',
    lg: 'gemini:space-y-8'
  }

  const lineStyles = showLine ? 'gemini:before:absolute gemini:before:left-6 gemini:before:top-0 gemini:before:bottom-0 gemini:before:w-0.5 gemini:before:bg-gray-300 gemini:before:rounded-full' : ''

  return `${baseStyles} ${modeStyles[mode]} ${sizeStyles[size]} ${lineStyles} ${className || ''}`
}

/**
 * 获取 TimelineItem 组件的样式类名
 */
export const getTimelineItemStyles = (
  mode: TimelineMode = 'left',
  size: TimelineSize = 'md',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _status: TimelineStatus = 'process',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _color: TimelineColor = 'blue',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _showLine: boolean = true,
  className?: string
): string => {
  const baseStyles = 'gemini:relative gemini:flex gemini:items-start'

  const modeStyles = {
    left: 'gemini:space-x-4',
    right: 'gemini:flex-row-reverse gemini:space-x-reverse gemini:space-x-4',
    alternate: 'gemini:space-x-4'
  }

  const sizeStyles = {
    sm: 'gemini:text-sm',
    md: 'gemini:text-base',
    lg: 'gemini:text-lg'
  }

  return `${baseStyles} ${modeStyles[mode]} ${sizeStyles[size]} ${className || ''}`
}

/**
 * 获取 Timeline 连接线的样式类名
 */
export const getTimelineLineStyles = (
  color: TimelineColor = 'blue',
  showLine: boolean = true
): string => {
  if (!showLine) return ''

  const colorStyles = {
    blue: 'gemini:bg-blue-300',
    green: 'gemini:bg-green-300',
    red: 'gemini:bg-red-300',
    orange: 'gemini:bg-orange-300',
    purple: 'gemini:bg-purple-300',
    gray: 'gemini:bg-gray-300'
  }

  return `gemini:absolute gemini:left-6 gemini:top-0 gemini:bottom-0 gemini:w-0.5 gemini:rounded-full ${colorStyles[color]}`
}

/**
 * 获取 Timeline 点的样式类名
 */
export const getTimelineDotStyles = (
  size: TimelineSize = 'md',
  color: TimelineColor = 'blue',
  status: TimelineStatus = 'process'
): string => {
  const baseStyles = 'gemini:flex-shrink-0 gemini:rounded-full gemini:flex gemini:items-center gemini:justify-center gemini:shadow-lg'

  const sizeStyles = {
    sm: 'gemini:w-6 gemini:h-6 gemini:text-xs',
    md: 'gemini:w-8 gemini:h-8 gemini:text-sm',
    lg: 'gemini:w-10 gemini:h-10 gemini:text-base'
  }

  const statusStyles = {
    pending: 'gemini:bg-gray-100 gemini:border-2 gemini:border-gray-300',
    process: 'gemini:bg-blue-500 gemini:text-white',
    finish: 'gemini:bg-green-500 gemini:text-white',
    error: 'gemini:bg-red-500 gemini:text-white'
  }

  const colorStyles = {
    blue: status === 'process' ? 'gemini:bg-blue-500' : status === 'finish' ? 'gemini:bg-green-500' : 'gemini:bg-gray-500',
    green: status === 'process' ? 'gemini:bg-green-500' : status === 'finish' ? 'gemini:bg-green-500' : 'gemini:bg-gray-500',
    red: status === 'process' ? 'gemini:bg-red-500' : status === 'finish' ? 'gemini:bg-green-500' : 'gemini:bg-gray-500',
    orange: status === 'process' ? 'gemini:bg-orange-500' : status === 'finish' ? 'gemini:bg-green-500' : 'gemini:bg-gray-500',
    purple: status === 'process' ? 'gemini:bg-purple-500' : status === 'finish' ? 'gemini:bg-green-500' : 'gemini:bg-gray-500',
    gray: status === 'process' ? 'gemini:bg-gray-500' : status === 'finish' ? 'gemini:bg-green-500' : 'gemini:bg-gray-500'
  }

  return `${baseStyles} ${sizeStyles[size]} ${statusStyles[status]} ${colorStyles[color]}`
}

/**
 * 获取 Timeline 内容区域的样式类名
 */
export const getTimelineContentStyles = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mode: TimelineMode = 'left',
  size: TimelineSize = 'md',
  className?: string
): string => {
  const baseStyles = 'gemini:flex-1 gemini:bg-white gemini:rounded-lg gemini:shadow-sm gemini:border gemini:border-gray-200'

  const sizeStyles = {
    sm: 'gemini:p-4',
    md: 'gemini:p-6',
    lg: 'gemini:p-8'
  }

  return `${baseStyles} ${sizeStyles[size]} ${className || ''}`
}

/**
 * 获取 Timeline 标签的样式类名
 */
export const getTimelineLabelStyles = (
  mode: TimelineMode = 'left',
  size: TimelineSize = 'md',
  className?: string
): string => {
  const baseStyles = 'gemini:text-gray-600 gemini:font-medium'

  const sizeStyles = {
    sm: 'gemini:text-xs',
    md: 'gemini:text-sm',
    lg: 'gemini:text-base'
  }

  const modeStyles = {
    left: 'gemini:mb-2',
    right: 'gemini:mb-2 gemini:text-right',
    alternate: 'gemini:mb-2'
  }

  return `${baseStyles} ${sizeStyles[size]} ${modeStyles[mode]} ${className || ''}`
}
