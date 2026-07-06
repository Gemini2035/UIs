import {
  forwardRef,
  startTransition,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";
import { CloseIcon } from "@/icons";
import { cn } from "@/utils";
import {
  getModalBodyStyles,
  getModalCloseButtonStyles,
  getModalContentStyles,
  getModalFooterStyles,
  getModalHeaderStyles,
  getModalMaskStyles,
  getModalRootStyles,
} from "./styles";
import type { ModalProps, ModalRef } from "./types";

const DefaultCloseIcon = () => <CloseIcon className="gemini:h-5 gemini:w-5" />;

const Modal = forwardRef<ModalRef, ModalProps>(
  (
    {
      open = false,
      title,
      size = "md",
      mask = true,
      maskClosable = true,
      closable = true,
      closeIcon,
      destroyOnClose = false,
      classNames,
      footer,
      className,
      children,
      onClose,
      afterOpenChange,
      zIndex = 1000,
      ...props
    },
    ref
  ) => {
    const titleId = useId();
    const [shouldRender, setShouldRender] = useState(open);
    const [isAnimating, setIsAnimating] = useState(open);

    useEffect(() => {
      if (open) {
        startTransition(() => {
          setShouldRender(true);
        });
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsAnimating(true);
          });
        });
      } else {
        startTransition(() => {
          setIsAnimating(false);
        });
        const timer = setTimeout(() => {
          setShouldRender(false);
        }, 300);
        return () => clearTimeout(timer);
      }
    }, [open]);

    useEffect(() => {
      if (afterOpenChange) {
        afterOpenChange(open);
      }
    }, [afterOpenChange, open]);

    useEffect(() => {
      if (!open) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose?.();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose, open]);

    useEffect(() => {
      if (!open) return;

      const scrollY = window.scrollY || 0;
      const { style: bodyStyle } = document.body;
      const { style: htmlStyle } = document.documentElement;

      bodyStyle.position = "fixed";
      bodyStyle.top = `-${scrollY}px`;
      bodyStyle.left = "0";
      bodyStyle.right = "0";
      bodyStyle.width = "100%";
      bodyStyle.overflow = "hidden";
      htmlStyle.overflow = "hidden";
      htmlStyle.overscrollBehavior = "none";

      const preventDefault = (event: Event) => {
        event.preventDefault();
      };

      window.addEventListener("touchmove", preventDefault, { passive: false });
      window.addEventListener("wheel", preventDefault, { passive: false });

      return () => {
        window.removeEventListener("touchmove", preventDefault);
        window.removeEventListener("wheel", preventDefault);
        bodyStyle.position = "";
        bodyStyle.top = "";
        bodyStyle.left = "";
        bodyStyle.right = "";
        bodyStyle.width = "";
        bodyStyle.overflow = "";
        htmlStyle.overflow = "";
        htmlStyle.overscrollBehavior = "";
        window.scrollTo(0, scrollY);
      };
    }, [open]);

    const handleMaskClick = useCallback(() => {
      if (maskClosable) {
        onClose?.();
      }
    }, [maskClosable, onClose]);

    if (!shouldRender && destroyOnClose) {
      return null;
    }

    if (!shouldRender) {
      return null;
    }

    return (
      <div
        className={cn(getModalRootStyles(isAnimating, classNames?.root))}
        style={{ zIndex }}
      >
        {mask && (
          <div
            aria-hidden="true"
            className={cn(getModalMaskStyles(isAnimating, classNames?.mask))}
            onClick={handleMaskClick}
          />
        )}

        <div
          ref={ref}
          aria-labelledby={title ? titleId : undefined}
          aria-modal="true"
          className={cn(
            getModalContentStyles(size, isAnimating, classNames?.content),
            className
          )}
          role="dialog"
          {...props}
        >
          {(title || closable) && (
            <div className={cn(getModalHeaderStyles(classNames?.header))}>
              {title && (
                <h2
                  className="gemini:flex-1 gemini:text-lg gemini:font-semibold gemini:text-gray-900"
                  id={titleId}
                >
                  {title}
                </h2>
              )}
              {closable && (
                <button
                  aria-label="关闭弹窗"
                  className={cn(getModalCloseButtonStyles(classNames?.closeButton))}
                  onClick={onClose}
                  type="button"
                >
                  {closeIcon || <DefaultCloseIcon />}
                </button>
              )}
            </div>
          )}

          {!title && closable && (
            <button
              aria-label="关闭弹窗"
              className={cn(getModalCloseButtonStyles(classNames?.closeButton))}
              onClick={onClose}
              type="button"
            >
              {closeIcon || <DefaultCloseIcon />}
            </button>
          )}

          <div
            className={cn(getModalBodyStyles(classNames?.body))}
            onTouchMove={(event) => event.stopPropagation()}
            onWheel={(event) => event.stopPropagation()}
            style={{ overscrollBehavior: "contain" }}
          >
            {children}
          </div>

          {footer && (
            <div className={cn(getModalFooterStyles(classNames?.footer))}>
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Modal;

export type { ModalClassNames, ModalProps, ModalRef, ModalSize } from "./types";
