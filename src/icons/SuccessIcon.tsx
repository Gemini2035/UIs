import type { FC } from "react";
import type { IconProps } from "./types";

const SuccessIcon: FC<IconProps> = ({ viewBox = "0 0 24 24", fill = "none", stroke = "currentColor", strokeWidth = "1.5", ...props }) => (
    <svg
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22,4 12,14.01 9,11.01" />
    </svg>
  );

export default SuccessIcon;