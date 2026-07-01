/**
 * Toast 通知组件
 */

import type { ToastInstance, ToastMethodOptions, ToastOptions, ToastPosition } from './types'
import { default as ToastContainer } from './ToastContainer'

let toastId = 0

const generateId = (): string => {
  return `toast-${Date.now()}-${++toastId}`
}

const showToast = (options: ToastOptions) => {
  if (typeof window === 'undefined') return

  const toast: ToastInstance = {
    id: generateId(),
    options: {
      message: options.message,
      type: options.type || 'info',
      duration: options.duration ?? 3000,
      closable: options.closable ?? true,
      onClose: options.onClose || (() => {}),
      position: options.position,
    },
    timestamp: Date.now(),
  }

  window.dispatchEvent(new CustomEvent('show-toast', { detail: toast }))
}

const buildQuickOptions = (
  message: string,
  duration?: number,
  position?: ToastPosition,
  extra?: ToastMethodOptions
): ToastOptions => ({
  message,
  duration,
  position: position ?? extra?.position,
})

const toast = {
  success: (message: string, duration?: number, positionOrOptions?: ToastPosition | ToastMethodOptions) => {
    if (typeof positionOrOptions === 'string') {
      showToast({
        ...buildQuickOptions(message, duration, positionOrOptions),
        type: 'success',
      })
      return
    }

    showToast({
      ...buildQuickOptions(message, duration, undefined, positionOrOptions),
      type: 'success',
    })
  },
  error: (message: string, duration?: number, positionOrOptions?: ToastPosition | ToastMethodOptions) => {
    if (typeof positionOrOptions === 'string') {
      showToast({
        ...buildQuickOptions(message, duration, positionOrOptions),
        type: 'error',
      })
      return
    }

    showToast({
      ...buildQuickOptions(message, duration, undefined, positionOrOptions),
      type: 'error',
    })
  },
  warning: (message: string, duration?: number, positionOrOptions?: ToastPosition | ToastMethodOptions) => {
    if (typeof positionOrOptions === 'string') {
      showToast({
        ...buildQuickOptions(message, duration, positionOrOptions),
        type: 'warning',
      })
      return
    }

    showToast({
      ...buildQuickOptions(message, duration, undefined, positionOrOptions),
      type: 'warning',
    })
  },
  info: (message: string, duration?: number, positionOrOptions?: ToastPosition | ToastMethodOptions) => {
    if (typeof positionOrOptions === 'string') {
      showToast({
        ...buildQuickOptions(message, duration, positionOrOptions),
        type: 'info',
      })
      return
    }

    showToast({
      ...buildQuickOptions(message, duration, undefined, positionOrOptions),
      type: 'info',
    })
  },
  show: (options: ToastOptions) => {
    showToast(options)
  },
}

export { ToastContainer }
export type {
  ToastContainerProps,
  ToastClassNames,
  ToastInstance,
  ToastMethodOptions,
  ToastOptions,
  ToastPosition,
  ToastStateTheme,
  ToastTheme,
  ToastType,
} from './types'

export default toast
