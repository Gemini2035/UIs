import type { FC } from "react";
import type { IconProps } from "./types";

const ArrowIcon: FC<IconProps> = ({
  viewBox = "0 0 24 24",
  fill = "none",
  stroke = "currentColor",
  width = 12,
  height = 12,
  ...props
}) => (
  <svg
    fill={fill}
    stroke={stroke}
    viewBox={viewBox}
    width={width}
    height={height}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default ArrowIcon;
