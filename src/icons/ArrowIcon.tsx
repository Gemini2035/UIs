import type { FC } from "react";
import type { IconProps } from "./types";

const ArrowIcon: FC<IconProps> = ({
  viewBox = "0 0 24 24",
  fill = "none",
  stroke = "currentColor",
  ...props
}) => (
  <svg fill={fill} stroke={stroke} viewBox={viewBox} {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default ArrowIcon;
