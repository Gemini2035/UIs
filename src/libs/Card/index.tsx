import { forwardRef } from 'react'
import type { CardProps, CardRef } from './types'
import { getCardStyles } from './styles'
import { cn } from '@/utils'

const Card = forwardRef<CardRef, CardProps>(
  (
    {
      shadow = 'md',
      border = 'sm',
      rounded = false,
      disabledHover = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // 获取样式类名
    const cardStyles = getCardStyles(shadow, border, rounded, disabledHover, className)

    return (
      <div
        ref={ref}
        className={cn(cardStyles)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

export default Card

export type { CardProps, CardRef, CardShadow, CardBorder } from './types'
