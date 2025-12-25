import type { FC } from "react";
import type { IconProps } from "./types";

const ErrorIcon: FC<IconProps> = ({ viewBox = "0 0 24 24", fill = "none", stroke = "currentColor", strokeWidth = "1.5", ...props }) => (
    <svg
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );

export default ErrorIcon;