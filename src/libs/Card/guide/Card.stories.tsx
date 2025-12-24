import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '@/libs';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    border: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    rounded: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    children: '这是一个基础卡片',
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
    children: '这是一个圆角卡片',
  },
};

export const ShadowVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      <Card>none</Card>
      <Card shadow="sm">sm</Card>
      <Card shadow="md">md</Card>
      <Card shadow="lg">lg</Card>
      <Card shadow="xl">xl</Card>
      <Card shadow="2xl">2xl</Card>
    </div>
  ),
};

export const BorderVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      <Card border="sm">sm</Card>
      <Card border="md">md</Card>
      <Card border="lg">lg</Card>
      <Card border="xl">xl</Card>
      <Card border="2xl">2xl</Card>
    </div>
  ),
};

export const Combined: Story = {
  args: {
    shadow: 'md',
    border: 'sm',
    rounded: true,
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">完整效果卡片</h3>
        <p className="text-gray-600">
          包含阴影、边框和圆角
        </p>
      </div>
    ),
  },
};

export const CustomStyle: Story = {
  args: {
    shadow: 'lg',
    rounded: true,
    className: 'hover:shadow-xl transition-shadow',
    children: '自定义样式的卡片',
  },
};
