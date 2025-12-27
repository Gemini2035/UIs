import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type FC } from 'react';
import { Tag } from '@/libs';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
    },
    size: {
      control: 'radio',
      options: ['small', 'middle', 'large'],
    },
    closable: {
      control: 'boolean',
    },
    bordered: {
      control: 'boolean',
    },
    onClose: {
      action: 'close',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;


// =======================
// 基础用法
// =======================
export const Basic: Story = {
  args: {
    children: 'Default Tag',
  },
};


// =======================
// 不同颜色
// =======================
export const Colors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag color="default">Default</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="error">Error</Tag>
    </div>
  ),
};


// =======================
// 不同尺寸
// =======================
export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Tag size="small">Small</Tag>
      <Tag size="middle">Middle</Tag>
      <Tag size="large">Large</Tag>
    </div>
  ),
};


// =======================
// 可关闭（非受控）
// =======================
export const Closable: Story = {
  args: {
    children: 'Closable Tag',
    closable: true,
  },
};


// =======================
// 可关闭（受控）
// =======================
export const ControlledClose: Story = {
  render: () => {
    const ControlledClose: FC = () => {
      const [visible, setVisible] = useState(true);
      if (!visible) return null;
      return <Tag closable onClose={() => setVisible(false)}>Controlled Tag</Tag>;
    };
    return <ControlledClose />;
  },
};


// =======================
// 无边框
// =======================
export const NoBorder: Story = {
  args: {
    children: 'No Border Tag',
    bordered: false,
  },
};


// =======================
// 自定义样式
// =======================
export const CustomStyle: Story = {
  args: {
    children: 'Custom Style',
    className: 'bg-purple-100 text-purple-700',
  },
};