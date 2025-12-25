import type { FC } from "react";
import type { IconProps } from "./types";

const CloseIcon: FC<IconProps> = ({
  width = 6,
  height = 6,
  fill = "none",
  strokeWidth = 2,
  stroke = "currentColor",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default CloseIcon;
