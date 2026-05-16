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

// =======================
// 自定义配置
// =======================
export const CustomOptions: Story = {
  render: () => (
    <div className="gemini:p-4">
      <ToastContainer />
      <button
        className="gemini:px-4 gemini:py-2 gemini:bg-purple-500 gemini:text-white gemini:rounded"
        onClick={() =>
          toast.show({
            message: '自定义提示',
            type: 'success',
            duration: 5000,
            closable: true,
            onClose: () => console.log('Toast 已关闭'),
          })
        }
      >
        自定义 Toast
      </button>
    </div>
  ),
};
