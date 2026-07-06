import type { ModalSize } from "./types";

export const getModalRootStyles = (
  open: boolean,
  customClassName?: string
): string => {
  const baseStyles =
    "gemini:fixed gemini:inset-0 gemini:flex gemini:items-center gemini:justify-center gemini:p-4 gemini:transition-opacity gemini:duration-300 gemini:ease-out";
  const opacityStyles = open ? "gemini:opacity-100" : "gemini:opacity-0";
  const pointerStyles = open
    ? "gemini:pointer-events-auto"
    : "gemini:pointer-events-none";

  return [baseStyles, opacityStyles, pointerStyles, customClassName]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
};

export const getModalMaskStyles = (
  open: boolean,
  customClassName?: string
): string => {
  const baseStyles =
    "gemini:absolute gemini:inset-0 gemini:bg-black/50 gemini:transition-opacity gemini:duration-300 gemini:ease-out";
  const opacityStyles = open ? "gemini:opacity-100" : "gemini:opacity-0";

  return [baseStyles, opacityStyles, customClassName]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
};

export const getModalSizeStyles = (size: ModalSize): string => {
  const sizes = {
    sm: "gemini:max-w-sm",
    md: "gemini:max-w-lg",
    lg: "gemini:max-w-3xl",
    xl: "gemini:max-w-4xl",
    full: "gemini:max-w-[calc(100vw-2rem)] gemini:h-[calc(100vh-2rem)]",
  };

  return sizes[size] || sizes.md;
};

export const getModalContentStyles = (
  size: ModalSize,
  open: boolean,
  customClassName?: string
): string => {
  const baseStyles =
    "gemini:relative gemini:w-full gemini:max-h-[90vh] gemini:overflow-hidden gemini:rounded-xl gemini:bg-white gemini:shadow-xl gemini:transition-all gemini:duration-300 gemini:ease-out gemini:flex gemini:flex-col";
  const sizeStyles = getModalSizeStyles(size);
  const transformStyles = open
    ? "gemini:opacity-100 gemini:scale-100 gemini:translate-y-0"
    : "gemini:opacity-0 gemini:scale-95 gemini:translate-y-4";

  return [baseStyles, sizeStyles, transformStyles, customClassName]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
};

export const getModalHeaderStyles = (customClassName?: string): string => {
  const baseStyles =
    "gemini:flex gemini:items-center gemini:justify-between gemini:gap-4 gemini:border-b gemini:border-gray-200 gemini:px-6 gemini:py-4 gemini:flex-shrink-0";

  return [baseStyles, customClassName]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
};

export const getModalBodyStyles = (customClassName?: string): string => {
  const baseStyles = "gemini:min-h-0 gemini:flex-1 gemini:overflow-y-auto";

  return [baseStyles, customClassName]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
};

export const getModalFooterStyles = (customClassName?: string): string => {
  const baseStyles =
    "gemini:flex gemini:items-center gemini:justify-end gemini:gap-2 gemini:border-t gemini:border-gray-200 gemini:px-6 gemini:py-4 gemini:flex-shrink-0";

  return [baseStyles, customClassName]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
};

export const getModalCloseButtonStyles = (
  customClassName?: string
): string => {
  const baseStyles =
    "gemini:absolute gemini:right-4 gemini:top-4 gemini:z-10 gemini:flex gemini:h-8 gemini:w-8 gemini:items-center gemini:justify-center gemini:rounded-lg gemini:text-gray-500 gemini:transition-all gemini:duration-200 gemini:hover:bg-gray-100 gemini:hover:text-gray-700 gemini:focus:outline-none gemini:focus:ring-2 gemini:focus:ring-gray-500 gemini:focus:ring-offset-2";

  return [baseStyles, customClassName]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
};
