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
    <div className="p-4 space-x-2">
      <ToastContainer />
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => toast.success('操作成功！')}
      >
        成功
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => toast.error('操作失败，请重试')}
      >
        错误
      </button>
      <button
        className="px-4 py-2 bg-yellow-500 text-white rounded"
        onClick={() => toast.warning('请注意检查输入')}
      >
        警告
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
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
    <div className="p-4">
      <ToastContainer />
      <button
        className="px-4 py-2 bg-purple-500 text-white rounded"
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
