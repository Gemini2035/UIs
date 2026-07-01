import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast, ToastContainer } from '@/libs';

const meta: Meta = {
  title: 'Components/Toast',
  component: ToastContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ToastContainer>;

// =======================
// 基础使用
// =======================
export const Basic: Story = {
  render: () => (
    <div className="gemini:p-4 gemini:space-x-2">
      <ToastContainer />
      <button
        className="gemini:px-4 gemini:py-2 gemini:bg-green-500 gemini:text-white gemini:rounded"
        onClick={() => toast.success('操作成功！')}
      >
        成功
      </button>
      <button
        className="gemini:px-4 gemini:py-2 gemini:bg-red-500 gemini:text-white gemini:rounded"
        onClick={() => toast.error('操作失败，请重试')}
      >
        错误
      </button>
      <button
        className="gemini:px-4 gemini:py-2 gemini:bg-yellow-500 gemini:text-white gemini:rounded"
        onClick={() => toast.warning('请注意检查输入')}
      >
        警告
      </button>
      <button
        className="gemini:px-4 gemini:py-2 gemini:bg-blue-500 gemini:text-white gemini:rounded"
        onClick={() => toast.info('这是一条提示信息')}
      >
        信息
      </button>
    </div>
  ),
};

export const ThemedAndPositioned: Story = {
  render: () => (
    <div className="gemini:p-4 gemini:min-h-[320px]">
      <ToastContainer
        maxCount={2}
        position="top-center"
        theme={{
          background: 'var(--site-canvas)',
          border: 'var(--site-border)',
          mutedText: 'var(--site-text-tertiary)',
          text: 'var(--site-text)',
          topOffset: 'calc(var(--site-nav-height, 64px) + 12px)',
          success: {
            background: 'color-mix(in srgb, var(--site-action) 6%, var(--site-canvas))',
            text: 'var(--site-action)',
          },
          error: {
            background: 'color-mix(in srgb, #d93025 6%, var(--site-canvas))',
            text: '#b42318',
          },
          warning: {
            background: 'color-mix(in srgb, #f59e0b 8%, var(--site-canvas))',
            text: '#92400e',
          },
          info: {
            background: 'color-mix(in srgb, var(--site-action) 6%, var(--site-canvas))',
            text: 'var(--site-action)',
          },
        }}
        classNames={{
          stack: 'gemini:gap-0',
          toast: 'gemini:rounded-full',
        }}
      />
      <button
        className="gemini:px-4 gemini:py-2 gemini:bg-purple-500 gemini:text-white gemini:rounded"
        onClick={() =>
          toast.success('顶部居中，使用容器默认位置', 3000)
        }
      >
        默认位置
      </button>
      <button
        className="gemini:px-4 gemini:py-2 gemini:bg-slate-800 gemini:text-white gemini:rounded"
        onClick={() =>
          toast.info('这个 Toast 会出现在右下角', 3000, 'bottom-right')
        }
      >
        覆盖位置
      </button>
    </div>
  ),
};
