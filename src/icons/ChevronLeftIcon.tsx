import type { FC } from 'react';
import type { IconProps } from './types';

const ChevronLeftIcon: FC<IconProps> = ({ 
  width = 20,
  height = 20,
  viewBox = '0 0 24 24',
  fill = 'none',
  stroke = 'currentColor',
  ...props 
}) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    stroke={stroke}
    viewBox={viewBox}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

export default ChevronLeftIcon;
