import type { LoadingSize } from './types'

/**
 * 尺寸映射
 */
export const SIZE_MAP: Record<LoadingSize, string> = {
  xs: 'gemini:w-4 gemini:h-4',
  sm: 'gemini:w-6 gemini:h-6',
  md: 'gemini:w-8 gemini:h-8',
  lg: 'gemini:w-12 gemini:h-12',
  xl: 'gemini:w-16 gemini:h-16'
}

/**
 * 文本尺寸映射
 */
export const TEXT_SIZE_MAP: Record<LoadingSize, string> = {
  xs: 'gemini:text-xs',
  sm: 'gemini:text-sm',
  md: 'gemini:text-base',
  lg: 'gemini:text-lg',
  xl: 'gemini:text-xl'
}

