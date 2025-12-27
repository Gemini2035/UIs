import type { FC } from "react";
import type { IconProps } from "./types";

const LastIcon: FC<IconProps> = ({
  viewBox = "0 0 12 12",
  fill = "currentColor",
  width = 12,
  height = 12,
  ...props
}) => (
  <svg width={width} height={height} viewBox={viewBox} fill={fill} {...props}>
    <path
      d="M3 3L3 9M6 3L6 9M9 3L9 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default LastIcon;
