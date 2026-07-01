/**
 * Toast 组件类型定义
 */

export type ToastType = 'success' | 'error' | 'warning' | 'info'
export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export interface ToastStateTheme {
  background?: string
  border?: string
  text?: string
}

export interface ToastTheme {
  background?: string
  border?: string
  mutedText?: string
  text?: string
  success?: ToastStateTheme
  error?: ToastStateTheme
  warning?: ToastStateTheme
  info?: ToastStateTheme
}

export interface ToastOptions {
  /** 提示内容 */
  message: string
  /** 提示类型 */
  type?: ToastType
  /** 显示时长（毫秒），0表示不自动关闭 */
  duration?: number
  /** 是否可关闭 */
  closable?: boolean
  /** 关闭回调 */
  onClose?: () => void
  /** 显示位置 */
  position?: ToastPosition
}

export type ToastRuntimeOptions = Required<Omit<ToastOptions, 'position'>> & Pick<ToastOptions, 'position'>

export interface ToastInstance {
  /** Toast唯一ID */
  id: string
  /** Toast配置 */
  options: ToastRuntimeOptions
  /** 创建时间 */
  timestamp: number
}

export interface ToastContainerProps {
  /** 容器主题 */
  theme?: ToastTheme
  /** 默认显示位置 */
  position?: ToastPosition
  /** 最大同时显示数量 */
  maxCount?: number
}

export interface ToastMethodOptions {
  /** 显示位置 */
  position?: ToastPosition
}
