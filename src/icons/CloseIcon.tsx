import type { FC } from 'react';
import type { IconProps } from './types'

const CloseIcon: FC<IconProps> = ({ className = "w-6 h-6", size, strokeWidth = 2 }) => {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default CloseIcon;
