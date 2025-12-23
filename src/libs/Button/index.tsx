import { forwardRef } from 'react'
import type { ButtonProps, ButtonRef } from './types'
import { getButtonStyles } from './styles'
import { cn } from '@/utils'
import { LoadingIcon } from '@/icons'

export const Button = forwardRef<ButtonRef, ButtonProps>(
  (
    {
      type = 'primary',
      size = 'md',
      rounded = false,
      disabled = false,
      loading = false,
      className,
      children,
      htmlType = 'button',
      onClick,
      ...props
    },
    ref
  ) => {
    // 计算最终状态
    const isDisabled = disabled || loading

    // 获取样式类名
    const buttonStyles = getButtonStyles(
      type,
      size,
      rounded,
      isDisabled,
      loading,
      className
    )

    // 处理点击事件
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) {
        event.preventDefault()
        return
      }
      onClick?.(event)
    }

    return (
      <button
        ref={ref}
        type={htmlType}
        disabled={isDisabled}
        onClick={handleClick}
        className={cn(buttonStyles)}
        {...props}
      >
        {loading && <LoadingIcon className="animate-spin w-4 h-4 mr-2" />}
        {children}
      </button>
    )
  }
)

export default Button

// 导出类型
export type {
  ButtonProps,
  ButtonRef,
  ButtonType,
  ButtonSize,
} from './types'