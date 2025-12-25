import { forwardRef } from 'react'
import type { DividerProps, DividerRef } from './types'
import { getDividerStyles } from './styles'
import { cn } from '@/utils'

export const Divider = forwardRef<DividerRef, DividerProps>(
  (
    {
      orientation = 'horizontal',
      thickness = 'medium',
      rounded = false,
      color,
      dashed = false,
      length,
      className,
      ...props
    },
    ref
  ) => {
    // 获取样式类名
    const dividerStyles = getDividerStyles(
      orientation,
      thickness,
      rounded ?? false,
      color,
      dashed,
      length,
      className
    )

    return (
      <div
        ref={ref}
        className={cn(dividerStyles, className)}
        {...props}
      />
    )
  }
)

export default Divider
export type { DividerProps, DividerRef, DividerOrientation, DividerThickness } from './types'