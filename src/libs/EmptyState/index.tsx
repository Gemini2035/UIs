import { forwardRef } from "react";
import type {
  EmptyStateProps,
  EmptyStateRef,
  EmptyStateIconType,
} from "./types";
import {
  getEmptyStateStyles,
  getIconContainerStyles,
  getTitleStyles,
  getDescriptionStyles,
  getActionStyles,
} from "./styles";
import { EmptyStateIcon } from "./EmptyStateIcon";

export const EmptyState = forwardRef<EmptyStateRef, EmptyStateProps>(
  (
    {
      icon = "search" as const,
      title,
      description,
      action,
      size = "md",
      variant = "default",
      className,
      showIcon = true,
      style,
      ...props
    },
    ref
  ) => {
    // 获取样式类名
    const containerStyles = getEmptyStateStyles(size, variant, className);
    const iconContainerStyles = getIconContainerStyles(size);
    const titleStyles = getTitleStyles(size);
    const descriptionStyles = getDescriptionStyles(size);
    const actionStyles = getActionStyles();

    // 渲染图标
    const renderIcon = () => {
      if (!showIcon) return null;

      if (typeof icon === "string") {
        return (
          <div className={iconContainerStyles}>
            <EmptyStateIcon
              type={icon as EmptyStateIconType}
              className="w-full h-full"
            />
          </div>
        );
      }

      return <div className={iconContainerStyles}>{icon}</div>;
    };

    return (
      <div ref={ref} className={containerStyles} style={style} {...props}>
        {renderIcon()}

        {title && <h3 className={titleStyles}>{title}</h3>}

        {description && <p className={descriptionStyles}>{description}</p>}

        {action && <div className={actionStyles}>{action}</div>}
      </div>
    );
  }
);

export default EmptyState;

export { EmptyStateIcon };
export type {
  EmptyStateProps,
  EmptyStateRef,
  EmptyStateSize,
  EmptyStateVariant,
  EmptyStateIconType,
} from "./types";
