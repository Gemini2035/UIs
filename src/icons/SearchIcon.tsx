import type { FC } from "react";
import type { IconProps } from "./types";

const SearchIcon: FC<IconProps> = ({
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
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

export default SearchIcon;
