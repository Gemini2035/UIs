import { forwardRef } from 'react'
import { cn } from '@/utils'
import type {
  ProgressingProps,
  ProgressingRef,
  ProgressingSize,
  ProgressingStatus,
  ProgressingStrokeLinecap,
} from './types'

const statusBarClass: Record<ProgressingStatus, string> = {
  normal: 'gemini:bg-blue-500',
  active: 'gemini:bg-blue-500',
  success: 'gemini:bg-emerald-500',
  exception: 'gemini:bg-red-500',
}

const statusTextClass: Record<ProgressingStatus, string> = {
  normal: 'gemini:text-slate-600',
  active: 'gemini:text-blue-600',
  success: 'gemini:text-emerald-600',
  exception: 'gemini:text-red-600',
}

const statusStrokeColor: Record<ProgressingStatus, string> = {
  normal: '#3b82f6',
  active: '#3b82f6',
  success: '#10b981',
  exception: '#ef4444',
}

const lineSizeClass: Record<Exclude<ProgressingSize, number>, string> = {
  default: 'gemini:h-2',
  small: 'gemini:h-1',
}

const circleSizeValue = (size: ProgressingSize) => {
  if (typeof size === 'number') return size
  return size === 'small' ? 40 : 64
}

const normalizePercent = (percent: number | undefined) => {
  if (typeof percent !== 'number' || !Number.isFinite(percent)) return 0
  return Math.max(0, Math.min(percent, 100))
}

const resolveStatus = (status: ProgressingStatus | undefined, percent: number) => {
  if (status) return status
  return percent >= 100 ? 'success' : 'normal'
}

const linecapClass = (strokeLinecap: ProgressingStrokeLinecap) => {
  if (strokeLinecap === 'butt') return 'gemini:rounded-none'
  return 'gemini:rounded-full'
}

const Progressing = forwardRef<ProgressingRef, ProgressingProps>(
  (
    {
      className,
      format,
      percent = 0,
      showInfo = true,
      size = 'default',
      status,
      steps,
      strokeColor,
      strokeLinecap = 'round',
      strokeWidth = 6,
      style,
      success,
      trailColor = '#e5e7eb',
      type = 'line',
      ...props
    },
    ref
  ) => {
    const displayPercent = normalizePercent(percent)
    const resolvedStatus = resolveStatus(status, displayPercent)
    const info = format ? format(percent) : `${Math.round(percent)}%`
    const resolvedStrokeColor = strokeColor ?? statusStrokeColor[resolvedStatus]
    const successPercent = normalizePercent(success?.percent)
    const successStrokeColor = success?.strokeColor ?? statusStrokeColor.success

    if (type === 'circle') {
      const circleSize = circleSizeValue(size)
      const radius = Math.max((circleSize - strokeWidth) / 2, 0)
      const circumference = 2 * Math.PI * radius
      const dashOffset = circumference * (1 - displayPercent / 100)
      const successDashOffset = circumference * (1 - successPercent / 100)

      return (
        <div
          ref={ref}
          className={cn('gemini:relative gemini:inline-grid gemini:shrink-0 gemini:place-items-center', className)}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={displayPercent}
          style={{ width: circleSize, height: circleSize, ...style }}
          {...props}
        >
          <svg
            width={circleSize}
            height={circleSize}
            viewBox={`0 0 ${circleSize} ${circleSize}`}
            className="gemini:-rotate-90"
          >
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              fill="none"
              stroke={trailColor}
              strokeWidth={strokeWidth}
            />
            {successPercent > 0 ? (
              <circle
                cx={circleSize / 2}
                cy={circleSize / 2}
                r={radius}
                fill="none"
                stroke={successStrokeColor}
                strokeLinecap={strokeLinecap}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={successDashOffset}
              />
            ) : null}
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              fill="none"
              stroke={resolvedStrokeColor}
              strokeLinecap={strokeLinecap}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className="gemini:transition-[stroke-dashoffset]"
            />
          </svg>
          {showInfo ? (
            <span className={cn('gemini:absolute gemini:text-[11px] gemini:font-semibold gemini:leading-none', statusTextClass[resolvedStatus])}>
              {info}
            </span>
          ) : null}
        </div>
      )
    }

    const lineHeightClass = typeof size === 'number' ? undefined : lineSizeClass[size]
    const lineHeightStyle = typeof size === 'number' ? { height: size } : undefined

    return (
      <div
        ref={ref}
        className={cn('gemini:flex gemini:w-full gemini:items-center gemini:gap-3', className)}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={displayPercent}
        style={style}
        {...props}
      >
        {steps && steps > 0 ? (
          <div className="gemini:grid gemini:min-w-0 gemini:flex-1 gemini:gap-1" style={{ gridTemplateColumns: `repeat(${steps}, minmax(0, 1fr))` }}>
            {Array.from({ length: steps }).map((_, index) => {
              const stepPercent = (index + 1) / steps * 100
              const isCompleted = displayPercent >= stepPercent
              const isSuccess = successPercent >= stepPercent
              return (
                <div
                  key={index}
                  className={cn(
                    'gemini:overflow-hidden',
                    lineHeightClass,
                    linecapClass(strokeLinecap),
                    isCompleted ? statusBarClass[resolvedStatus] : 'gemini:bg-gray-200',
                    isSuccess ? 'gemini:bg-emerald-500' : undefined,
                  )}
                  style={{
                    ...lineHeightStyle,
                    backgroundColor: isSuccess ? successStrokeColor : isCompleted && strokeColor ? strokeColor : undefined,
                  }}
                />
              )
            })}
          </div>
        ) : (
          <div
            className={cn('gemini:relative gemini:min-w-0 gemini:flex-1 gemini:overflow-hidden gemini:bg-gray-200', lineHeightClass, linecapClass(strokeLinecap))}
            style={{ backgroundColor: trailColor, ...lineHeightStyle }}
          >
            {successPercent > 0 ? (
              <div
                className={cn('gemini:absolute gemini:inset-y-0 gemini:left-0', linecapClass(strokeLinecap))}
                style={{
                  width: `${successPercent}%`,
                  backgroundColor: successStrokeColor,
                }}
              />
            ) : null}
            <div
              className={cn('gemini:relative gemini:h-full gemini:transition-[width]', linecapClass(strokeLinecap), strokeColor ? undefined : statusBarClass[resolvedStatus])}
              style={{
                width: `${displayPercent}%`,
                backgroundColor: strokeColor,
              }}
            />
          </div>
        )}
        {showInfo ? (
          <span className={cn('gemini:w-11 gemini:shrink-0 gemini:text-right gemini:text-xs gemini:font-medium', statusTextClass[resolvedStatus])}>
            {info}
          </span>
        ) : null}
      </div>
    )
  }
)

Progressing.displayName = 'Progressing'

export default Progressing
export type {
  ProgressingProps,
  ProgressingRef,
  ProgressingSize,
  ProgressingStatus,
  ProgressingStrokeLinecap,
  ProgressingSuccess,
  ProgressingType,
} from './types'
