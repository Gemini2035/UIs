import type { FC } from "react";
import type { IconProps } from "./types";

const UsersIcon: FC<IconProps> = ({
  viewBox = "0 0 24 24",
  fill = "none",
  stroke = "currentColor",
  strokeWidth = "1.5",
  ...props
}) => (
  <svg
    viewBox={viewBox}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="m22 21-2-2" />
    <path d="m16 16 2 2" />
  </svg>
);

export default UsersIcon;