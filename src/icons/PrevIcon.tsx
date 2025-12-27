import type { FC } from "react";
import type { IconProps } from "./types";

const PrevIcon: FC<IconProps> = ({
  width = 12,
  height = 12,
  viewBox = "0 0 12 12",
  fill = "currentColor",
  ...props
}) => (
  <svg width={width} height={height} viewBox={viewBox} fill={fill} {...props}>
    <path
      d="M7.5 9L4.5 6L7.5 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default PrevIcon;
