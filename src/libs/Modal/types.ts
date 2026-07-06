import type { HTMLAttributes, ReactNode } from "react";

export type ModalRef = HTMLDivElement;

export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ModalClassNames {
  /** 根容器类名 */
  root?: string;
  /** 遮罩样式类名 */
  mask?: string;
  /** 内容容器类名 */
  content?: string;
  /** 内容区域类名 */
  body?: string;
  /** 头部区域类名 */
  header?: string;
  /** 关闭按钮类名 */
  closeButton?: string;
  /** 底部区域类名 */
  footer?: string;
}

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** 是否可见 */
  open?: boolean;
  /** 标题 */
  title?: ReactNode;
  /** 尺寸 */
  size?: ModalSize;
  /** 是否显示遮罩 */
  mask?: boolean;
  /** 点击遮罩是否关闭 */
  maskClosable?: boolean;
  /** 是否显示关闭按钮 */
  closable?: boolean;
  /** 自定义关闭图标 */
  closeIcon?: ReactNode;
  /** 是否在关闭时销毁子元素 */
  destroyOnClose?: boolean;
  /** 分区域类名 */
  classNames?: ModalClassNames;
  /** 底部内容 */
  footer?: ReactNode;
  /** 子元素 */
  children?: ReactNode;
  /** 关闭回调 */
  onClose?: () => void;
  /** 打开状态变化后的回调 */
  afterOpenChange?: (open: boolean) => void;
  /** z-index */
  zIndex?: number;
}
