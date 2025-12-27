import { forwardRef, type ReactElement, cloneElement, Children } from "react";
import type { TimelineProps, TimelineRef } from "./types";
import { getTimelineStyles } from "./styles";
import { cn } from "@/utils";
import TimelineItem from "./TimelineItem";

const TimelineCore = forwardRef<TimelineRef, TimelineProps>(
  (
    {
      mode = "left",
      size = "md",
      showLine = true,
      lineColor,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // 处理子组件，传递必要的 props
    const processedChildren = Children.map(children, (child, index) => {
      if (child && typeof child === "object" && "type" in child) {
        const element = child as ReactElement<{
          mode?: string;
          size?: string;
          showLine?: boolean;
          lineColor?: string;
          isLast?: boolean;
        }>;
        return cloneElement(element, {
          key: element.key || index,
          mode,
          size,
          showLine,
          lineColor,
          isLast: index === Children.count(children) - 1,
        });
      }
      return child;
    });

    // 获取样式类名
    const timelineStyles = getTimelineStyles(mode, size, showLine, className);

    return (
      <div
        ref={ref}
        className={cn(timelineStyles)}
        style={
          lineColor
            ? ({ "--timeline-line-color": lineColor } as React.CSSProperties)
            : undefined
        }
        {...props}
      >
        {processedChildren}
      </div>
    );
  }
);

const Timeline = Object.assign(TimelineCore, {
  Item: TimelineItem,
});

export default Timeline;

export type {
  TimelineProps,
  TimelineRef,
  TimelineMode,
  TimelineSize,
  TimelineColor,
  TimelineStatus,
  TimelineItemProps,
  TimelineItemRef,
} from "./types";
