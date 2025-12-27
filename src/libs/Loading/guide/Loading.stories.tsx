import type { Meta, StoryObj } from '@storybook/react-vite';
import { Loading } from '@/libs';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['spinner', 'dots', 'pulse', 'skeleton'],
    },
    showText: {
      control: 'boolean',
    },
    fullscreen: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Basic: Story = {
  args: {},
};

export const WithText: Story = {
  args: {
    text: '加载中...',
    showText: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Loading size="xs" />
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
      <Loading size="xl" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Loading variant="spinner" />
        <span className="text-sm text-gray-500">Spinner</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Loading variant="dots" />
        <span className="text-sm text-gray-500">Dots</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Loading variant="pulse" />
        <span className="text-sm text-gray-500">Pulse</span>
      </div>

      <div className="flex flex-col items-center gap-2 w-40">
        <Loading variant="skeleton" />
        <span className="text-sm text-gray-500">Skeleton</span>
      </div>
    </div>
  ),
};

export const Fullscreen: Story = {
  args: {
    fullscreen: true,
    text: '正在加载数据...',
    showText: true,
  },
};
