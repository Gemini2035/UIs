import {
  DocumentIcon,
  FolderIcon,
  InfoIcon,
  SearchIcon,
  SettingsIcon,
  SuccessIcon,
  UsersIcon,
  WarningIcon,
} from "@/icons";
import type { EmptyStateIconType } from "./types";
import ErrorIcon from "@/icons/ErrorIcon";

interface EmptyStateIconProps {
  type: EmptyStateIconType;
  className?: string;
}

/**
 * 空状态图标组件
 */
export function EmptyStateIcon({ type, className }: EmptyStateIconProps) {
  const iconMap = {
    search: <SearchIcon className={className} />,
    folder: <FolderIcon className={className} />,
    document: <DocumentIcon className={className} />,
    users: <UsersIcon className={className} />,
    settings: <SettingsIcon className={className} />,
    warning: <WarningIcon className={className} />,
    info: <InfoIcon className={className} />,
    success: <SuccessIcon className={className} />,
    error: <ErrorIcon className={className} />,
  };

  return iconMap[type] || iconMap.search;
}
