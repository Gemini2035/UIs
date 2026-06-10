import type { HTMLAttributes, ReactNode } from 'react'

export type ProgressingType = 'line' | 'circle'
export type ProgressingStatus = 'normal' | 'active' | 'success' | 'exception'
export type ProgressingSize = 'default' | 'small' | number
export type ProgressingStrokeLinecap = 'round' | 'butt' | 'square'

export interface ProgressingSuccess {
  percent?: number
  strokeColor?: string
}

export interface ProgressingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** 自定义展示内容 */
  format?: (percent: number) => ReactNode
  /** 进度百分比 */
  percent?: number
  /** 是否显示进度文字 */
  showInfo?: boolean
  /** 环形进度尺寸 */
  size?: ProgressingSize
  /** 分段展示，仅条形进度生效 */
  steps?: number
  /** 进度状态 */
  status?: ProgressingStatus
  /** 进度条颜色 */
  strokeColor?: string
  /** 进度端点形状 */
  strokeLinecap?: ProgressingStrokeLinecap
  /** 进度条宽度 */
  strokeWidth?: number
  /** 成功进度段 */
  success?: ProgressingSuccess
  /** 轨道颜色 */
  trailColor?: string
  /** 进度类型 */
  type?: ProgressingType
}

export type ProgressingRef = HTMLDivElement
