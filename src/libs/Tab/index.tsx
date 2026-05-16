import { useState, type FC } from 'react'
import { cn } from '@/utils'
import type { TabProps } from './types'

/**
 * Tab组件 - 参考Ant Design设计
 */
const Tab: FC<TabProps> = ({
  items,
  defaultActiveKey,
  activeKey,
  onChange,
  className,
  tabBarClassName,
  tabContentClassName,
  size = 'medium',
  type = 'line'
}) =>{
  const [internalActiveKey, setInternalActiveKey] = useState(
    activeKey || defaultActiveKey || items[0]?.key || ''
  )

  const currentActiveKey = activeKey || internalActiveKey

  const handleTabClick = (key: string, disabled?: boolean) => {
    if (disabled) return
    
    if (!activeKey) {
      setInternalActiveKey(key)
    }
    onChange?.(key)
  }

  const activeItem = items.find(item => item.key === currentActiveKey)

  // 尺寸样式
  const sizeStyles = {
    small: {
      tabBar: 'gemini:h-8',
      tab: 'gemini:px-3 gemini:py-1 gemini:text-sm',
      content: 'gemini:pt-3'
    },
    medium: {
      tabBar: 'gemini:h-10',
      tab: 'gemini:px-4 gemini:py-2 gemini:text-sm',
      content: 'gemini:pt-4'
    },
    large: {
      tabBar: 'gemini:h-12',
      tab: 'gemini:px-6 gemini:py-3 gemini:text-base',
      content: 'gemini:pt-6'
    }
  }

  // 类型样式
  const typeStyles = {
    line: {
      tabBar: 'gemini:border-b gemini:border-gray-200',
      tab: 'gemini:border-b-2 gemini:border-transparent gemini:hover:text-blue-600 gemini:hover:border-blue-300',
      activeTab: 'gemini:text-blue-600 gemini:border-blue-500',
      content: ''
    },
    card: {
      tabBar: 'gemini:bg-gray-50 gemini:rounded-lg gemini:p-1',
      tab: 'gemini:rounded-md gemini:hover:bg-white gemini:hover:text-blue-600',
      activeTab: 'gemini:bg-white gemini:text-blue-600 gemini:shadow-sm',
      content: 'gemini:bg-white gemini:rounded-lg gemini:border gemini:border-gray-200 gemini:mt-2'
    }
  }

  return (
    <div className={cn('gemini:w-full', className)}>
      {/* Tab导航栏 - 右上角 */}
      <div className={cn(
        'gemini:flex gemini:items-center gemini:justify-end',
        sizeStyles[size].tabBar,
        typeStyles[type].tabBar,
        tabBarClassName
      )}>
        {items.map((item) => {
          const isActive = item.key === currentActiveKey
          const isDisabled = item.disabled

          return (
            <button
              key={item.key}
              onClick={() => handleTabClick(item.key, isDisabled)}
              disabled={isDisabled}
              className={cn(
                'gemini:flex gemini:items-center gemini:justify-center gemini:font-medium gemini:transition-all gemini:duration-200 gemini:focus:outline-none gemini:cursor-pointer',
                sizeStyles[size].tab,
                isActive ? typeStyles[type].activeTab : typeStyles[type].tab,
                isDisabled && 'gemini:opacity-50 gemini:cursor-not-allowed gemini:hover:text-gray-500 gemini:hover:border-transparent'
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      {/* Tab内容 */}
      <div className={cn(
        sizeStyles[size].content,
        typeStyles[type].content,
        tabContentClassName
      )}>
        {activeItem?.children}
      </div>
    </div>
  )
}

export default Tab

export type { TabProps, TabItem } from './types'

