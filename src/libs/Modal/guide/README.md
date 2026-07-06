# Modal 组件

一个居中弹窗组件，适合承载确认操作、详情预览、表单和可滚动内容。

## 功能特性

- 居中弹层与遮罩
- 支持 ESC 键关闭
- 支持点击遮罩关闭
- 打开时锁定背景滚动
- 支持关闭动画后卸载
- 支持标题、底部操作区和自定义关闭图标
- 通过 `classNames` 覆盖根容器、遮罩、内容、头部、主体、底部和关闭按钮样式

## 基础用法

```tsx
import { Modal } from "@/ui";
import { useState } from "react";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>打开弹窗</button>
      <Modal open={open} onClose={() => setOpen(false)} title="标题">
        <div className="gemini:p-6">内容</div>
      </Modal>
    </>
  );
}
```

## API

| 属性                 | 说明                 | 类型                                      | 默认值  |
| -------------------- | -------------------- | ----------------------------------------- | ------- |
| open                 | 是否可见             | `boolean`                                 | `false` |
| title                | 标题                 | `ReactNode`                               | -       |
| size                 | 弹窗尺寸             | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'`  |
| mask                 | 是否显示遮罩         | `boolean`                                 | `true`  |
| maskClosable         | 点击遮罩是否关闭     | `boolean`                                 | `true`  |
| closable             | 是否显示关闭按钮     | `boolean`                                 | `true`  |
| closeIcon            | 自定义关闭图标       | `ReactNode`                               | -       |
| destroyOnClose       | 关闭时销毁子元素     | `boolean`                                 | `false` |
| classNames           | 分区域类名           | `ModalClassNames`                         | -       |
| className            | 弹窗内容容器类名     | `string`                                  | -       |
| footer               | 底部内容             | `ReactNode`                               | -       |
| onClose              | 关闭回调             | `() => void`                              | -       |
| afterOpenChange      | 打开状态改变后的回调 | `(open: boolean) => void`                 | -       |
| zIndex               | z-index 层级         | `number`                                  | `1000`  |

## 使用示例

### 不同尺寸

```tsx
<Modal open={open} size="sm" onClose={onClose}>
  小尺寸
</Modal>

<Modal open={open} size="xl" onClose={onClose}>
  大尺寸
</Modal>
```

### 带底部操作

```tsx
<Modal
  open={open}
  onClose={onClose}
  footer={
    <>
      <button onClick={onClose}>取消</button>
      <button onClick={handleSubmit}>确定</button>
    </>
  }
>
  内容
</Modal>
```

### 禁止遮罩关闭

```tsx
<Modal open={open} maskClosable={false} onClose={onClose}>
  点击遮罩不会关闭
</Modal>
```

### 样式定制

```tsx
<Modal
  classNames={{
    content: "gemini:border gemini:border-gray-200",
    header: "gemini:bg-gray-50",
    body: "gemini:p-6",
    footer: "gemini:bg-gray-50",
    mask: "gemini:bg-black/40",
  }}
>
  内容
</Modal>
```

## 注意事项

1. 弹窗打开时会锁定背景滚动，关闭时恢复原滚动位置。
2. 内容区域默认可滚动，适合长内容。
3. `className` 作用于弹窗内容容器；分区域样式请使用 `classNames`。
