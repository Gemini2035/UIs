import { useCallback, useEffect, useState, type FC } from 'react'
import { cn } from '@/utils'
import type {
  ToastContainerProps,
  ToastInstance,
  ToastPosition,
  ToastStateTheme,
  ToastTheme,
  ToastType,
} from './types'

const DEFAULT_MAX_COUNT = 3
const DEFAULT_POSITION: ToastPosition = 'top-center'

const baseTheme: Required<Pick<ToastTheme, 'background' | 'border' | 'mutedText' | 'text'>> = {
  background: 'var(--site-canvas)',
  border: 'var(--site-border)',
  mutedText: 'var(--site-text-tertiary)',
  text: 'var(--site-text)',
}

const positionClassMap: Record<ToastPosition, string> = {
  'top-left': 'gemini:top-4 gemini:left-4 gemini:items-start',
  'top-center': 'gemini:top-4 gemini:left-1/2 gemini:-translate-x-1/2 gemini:items-stretch',
  'top-right': 'gemini:top-4 gemini:right-4 gemini:items-end',
  'bottom-left': 'gemini:bottom-4 gemini:left-4 gemini:items-start',
  'bottom-center': 'gemini:bottom-4 gemini:left-1/2 gemini:-translate-x-1/2 gemini:items-stretch',
  'bottom-right': 'gemini:bottom-4 gemini:right-4 gemini:items-end',
}

const positionOrder: ToastPosition[] = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
]

const getVariantTheme = (theme: ToastTheme | undefined, type: ToastType): ToastStateTheme => {
  return theme?.[type] ?? {}
}

const getIcon = (type: ToastType) => {
  switch (type) {
    case 'success':
      return (
        <svg className="gemini:w-5 gemini:h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      )
    case 'error':
      return (
        <svg className="gemini:w-5 gemini:h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      )
    case 'warning':
      return (
        <svg className="gemini:w-5 gemini:h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      )
    case 'info':
      return (
        <svg className="gemini:w-5 gemini:h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      )
    default:
      return null
  }
}

const ToastContainer: FC<ToastContainerProps> = ({
  maxCount = DEFAULT_MAX_COUNT,
  position = DEFAULT_POSITION,
  theme,
}) => {
  const visibleMaxCount = Math.max(1, maxCount)
  const [toasts, setToasts] = useState<ToastInstance[]>([])

  const resolvedTheme = {
    ...baseTheme,
    ...theme,
  }

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => {
      const toast = prev.find((item) => item.id === id)
      toast?.options.onClose?.()
      return prev.filter((item) => item.id !== id)
    })
  }, [])

  const getPosition = (toast: ToastInstance) => toast.options.position ?? position

  useEffect(() => {
    const handleToast = (event: Event) => {
      const customEvent = event as CustomEvent<ToastInstance>
      const nextToast = customEvent.detail

      setToasts((prev) => {
        const nextToasts = [...prev, nextToast]
        if (nextToasts.length <= visibleMaxCount) {
          return nextToasts
        }

        const overflow = nextToasts.slice(0, nextToasts.length - visibleMaxCount)
        overflow.forEach((item) => item.options.onClose?.())
        return nextToasts.slice(-visibleMaxCount)
      })

      if (nextToast.options.duration > 0) {
        window.setTimeout(() => {
          removeToast(nextToast.id)
        }, nextToast.options.duration)
      }
    }

    window.addEventListener('show-toast', handleToast)
    return () => window.removeEventListener('show-toast', handleToast)
  }, [removeToast, visibleMaxCount])

  const toastsByPosition = {
    'bottom-center': [] as ToastInstance[],
    'bottom-left': [] as ToastInstance[],
    'bottom-right': [] as ToastInstance[],
    'top-center': [] as ToastInstance[],
    'top-left': [] as ToastInstance[],
    'top-right': [] as ToastInstance[],
  }

  toasts.forEach((item) => {
    toastsByPosition[getPosition(item)].push(item)
  })

  const renderToast = (toast: ToastInstance) => {
    const variantTheme = getVariantTheme(theme, toast.options.type)
    const background = variantTheme.background ?? resolvedTheme.background
    const border = variantTheme.border ?? resolvedTheme.border
    const text = variantTheme.text ?? resolvedTheme.text

    return (
      <div
        key={toast.id}
        className={cn(
          'gemini:pointer-events-auto gemini:flex gemini:w-full gemini:items-start gemini:gap-3',
          'gemini:rounded-[var(--site-radius-control)] gemini:border gemini:px-4 gemini:py-3',
          'gemini:text-sm gemini:leading-6 gemini:shadow-sm'
        )}
        role="status"
        style={{
          background,
          borderColor: border,
          color: text,
        }}
      >
        <div className="gemini:mt-0.5 gemini:shrink-0" style={{ color: text }}>
          {getIcon(toast.options.type)}
        </div>

        <div className="gemini:flex-1 gemini:break-words">{toast.options.message}</div>

        {toast.options.closable && (
          <button
            aria-label="关闭"
            className="gemini:shrink-0 gemini:transition-colors"
            onClick={() => removeToast(toast.id)}
            style={{ color: resolvedTheme.mutedText }}
            type="button"
          >
            <svg className="gemini:w-4 gemini:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    )
  }

  const hasVisibleToasts = toasts.length > 0

  if (!hasVisibleToasts) {
    return null
  }

  return (
    <div className="gemini:pointer-events-none gemini:fixed gemini:inset-0 gemini:z-9999">
      {positionOrder.map((stackPosition) => {
        const stackToasts = toastsByPosition[stackPosition]
        if (stackToasts.length === 0) return null

        return (
          <div
            className={cn(
              'gemini:absolute gemini:flex gemini:w-[calc(100vw-2rem)] gemini:max-w-[32rem] gemini:flex-col gemini:gap-2',
              positionClassMap[stackPosition]
            )}
            key={stackPosition}
          >
            {stackToasts.map(renderToast)}
          </div>
        )
      })}
    </div>
  )
}

export default ToastContainer
