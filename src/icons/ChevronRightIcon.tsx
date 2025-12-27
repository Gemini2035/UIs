import type { FC } from "react";
import type { IconProps } from "./types";

const ChevronRightIcon: FC<IconProps> = ({
  width = 20,
  height = 20,
  viewBox = "0 0 24 24",
  fill = "none",
  stroke = "currentColor",
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
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default ChevronRightIcon;
