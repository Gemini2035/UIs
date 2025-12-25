import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from '@/libs';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    thickness: {
      control: 'select',
      options: ['thin', 'medium', 'thick', 'extra-thick'],
    },
    rounded: {
      control: 'boolean',
    },
    dashed: {
      control: 'boolean',
    },
    color: {
      control: 'text',
    },
    length: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Basic: Story = {
  args: {},
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-24 items-center gap-6">
      <span>左</span>
      <Divider orientation="vertical" />
      <span>右</span>
    </div>
  ),
};

export const ThicknessVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Divider thickness="thin" />
      <Divider thickness="medium" />
      <Divider thickness="thick" />
      <Divider thickness="extra-thick" />
    </div>
  ),
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const Dashed: Story = {
  args: {
    dashed: true,
  },
};

export const CustomColor: Story = {
  render: () => (
    <div className="space-y-4">
      <Divider color="#ef4444" />
      <Divider color="bg-blue-500" />
      <Divider color="var(--primary-color)" />
    </div>
  ),
};

export const LengthControl: Story = {
  render: () => (
    <div className="space-y-4">
      <Divider length={50} />
      <Divider length={80} />
    </div>
  ),
};

export const Combined: Story = {
  args: {
    orientation: 'horizontal',
    thickness: 'thick',
    rounded: true,
    dashed: true,
    color: '#3b82f6',
    length: 80,
  },
};
