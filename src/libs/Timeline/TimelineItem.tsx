import { forwardRef, type ReactNode } from 'react'
import type { TimelineItemProps, TimelineItemRef, TimelineMode, TimelineSize } from './types'
import { getTimelineItemStyles, getTimelineDotStyles, getTimelineContentStyles, getTimelineLabelStyles } from './styles'
import { cn } from '@/utils'

/**
 * TimelineItem 组件的扩展属性（内部使用）
 */
interface ExtendedTimelineItemProps extends TimelineItemProps {
  mode?: TimelineMode
  size?: TimelineSize
  isLast?: boolean
}

const TimelineItem = forwardRef<TimelineItemRef, ExtendedTimelineItemProps>(
  (
    {
      label,
      color = 'blue',
      status = 'process',
      dot,
      showLine = true,
      lineColor,
      mode = 'left',
      size = 'md',
      isLast = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // 获取样式类名
    const itemStyles = getTimelineItemStyles(mode, size, status, color, showLine, className)
    const dotStyles = getTimelineDotStyles(size, color, status)
    const contentStyles = getTimelineContentStyles(mode, size)
    const labelStyles = getTimelineLabelStyles(mode, size)

    // 渲染时间轴点
    const renderDot = (): ReactNode => {
      if (dot) {
        return (
          <div className={cn('gemini:shrink-0', dotStyles)}>
            {dot}
          </div>
        )
      }

      // 根据状态渲染不同的点
      const getDotContent = (): ReactNode => {
        switch (status) {
          case 'finish':
            return '✓'
          case 'error':
            return '✕'
          case 'process':
            return '●'
          default:
            return '○'
        }
      }

      return (
        <div className={cn(dotStyles)}>
          {getDotContent()}
        </div>
      )
    }

    // 渲染连接线
    const renderLine = (): ReactNode => {
      if (!showLine || isLast) return null

      const lineColorClass = lineColor 
        ? `gemini:bg-[${lineColor}]` 
        : color === 'blue' ? 'gemini:bg-blue-300' 
        : color === 'green' ? 'gemini:bg-green-300'
        : color === 'red' ? 'gemini:bg-red-300'
        : color === 'orange' ? 'gemini:bg-orange-300'
        : color === 'purple' ? 'gemini:bg-purple-300'
        : 'gemini:bg-gray-300'

      return (
        <div 
          className={cn(
            'gemini:absolute gemini:left-6 gemini:top-0 gemini:bottom-0 gemini:w-0.5 gemini:rounded-full',
            lineColorClass
          )}
          style={lineColor ? { backgroundColor: lineColor } : undefined}
        />
      )
    }

    return (
      <div
        ref={ref}
        className={cn(itemStyles)}
        {...props}
      >
        {/* 连接线 */}
        {renderLine()}
        
        {/* 时间轴点 */}
        {renderDot()}
        
        {/* 内容区域 */}
        <div className="gemini:flex-1">
          {/* 标签 */}
          {label && (
            <div className={cn(labelStyles)}>
              {label}
            </div>
          )}
          
          {/* 内容 */}
          <div className={cn(contentStyles)}>
            {children}
          </div>
        </div>
      </div>
    )
  }
)

TimelineItem.displayName = 'TimelineItem'

export default TimelineItem
