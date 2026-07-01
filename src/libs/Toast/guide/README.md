# Toast 通知组件

轻量 Toast 容器，默认只提供最基础的结构和样式，主题颜色、默认位置和最大同时显示数量都可以由使用方传入。

## 使用方法

### 1. 在根布局中添加 ToastContainer

```tsx
import { ToastContainer } from "@/ui/Toast";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <ToastContainer
          position="top-center"
          maxCount={3}
          theme={{
            background: "var(--site-canvas)",
            border: "var(--site-border)",
            text: "var(--site-text)",
            mutedText: "var(--site-text-tertiary)",
            success: {
              background: "color-mix(in srgb, var(--site-action) 6%, var(--site-canvas))",
              text: "var(--site-action)",
            },
            error: {
              background: "color-mix(in srgb, #d93025 6%, var(--site-canvas))",
              text: "#b42318",
            },
          }}
        />
      </body>
    </html>
  );
}
```

### 2. 使用 Toast API

```tsx
"use client";

import { toast } from "@/ui/Toast";

function MyComponent() {
  const handleSuccess = () => {
    toast.success("操作成功！");
  };

  const handleError = () => {
    toast.error("操作失败，请重试", 3000, "bottom-right");
  };

  const handleWarning = () => {
    toast.warning("请注意检查输入");
  };

  const handleInfo = () => {
    toast.info("这是一条提示信息", 3000, { position: "top-left" });
  };

  return (
    <div>
      <button onClick={handleSuccess}>成功</button>
      <button onClick={handleError}>错误</button>
      <button onClick={handleWarning}>警告</button>
      <button onClick={handleInfo}>信息</button>
    </div>
  );
}
```

### 位置优先级

- `ToastContainer` 上的 `position` 是默认位置。
- `toast.success/error/warning/info` 传入的位置会覆盖容器默认值。
- 如果两边都设置了位置，优先使用 `toast` 方法传入的位置。

## API

### ToastContainer

```tsx
<ToastContainer
  theme={...}
  position="top-center"
  maxCount={3}
/>
```

- `theme`: 控制容器基础色和不同状态的背景色、文字色
- `position`: 默认显示位置
- `maxCount`: 最大同时显示数量，默认 `3`

### toast.success(message, duration?, position?)

显示成功提示。

- `message`: string - 提示内容
- `duration`: number - 显示时长（毫秒），默认 `3000`
- `position`: ToastPosition - 显示位置

### toast.error(message, duration?, position?)

显示错误提示。

### toast.warning(message, duration?, position?)

显示警告提示。

### toast.info(message, duration?, position?)

显示信息提示。

### toast.show(options)

自定义 Toast。

```tsx
toast.show({
  message: "自定义提示",
  type: "success",
  duration: 5000,
  position: "bottom-right",
  closable: true,
  onClose: () => console.log("Toast已关闭"),
});
```

## 配置项

```typescript
type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

interface ToastStateTheme {
  background?: string;
  border?: string;
  text?: string;
}

interface ToastTheme {
  background?: string;
  border?: string;
  mutedText?: string;
  text?: string;
  success?: ToastStateTheme;
  error?: ToastStateTheme;
  warning?: ToastStateTheme;
  info?: ToastStateTheme;
}

interface ToastOptions {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  closable?: boolean;
  onClose?: () => void;
  position?: ToastPosition;
}
```
