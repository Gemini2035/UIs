import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progressing } from '@/libs';

const meta: Meta<typeof Progressing> = {
  title: 'Components/Progressing',
  component: Progressing,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['line', 'circle'],
    },
    percent: {
      control: { type: 'number', min: 0, max: 100 },
    },
    status: {
      control: 'select',
      options: ['normal', 'active', 'success', 'exception'],
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
    },
    showInfo: {
      control: 'boolean',
    },
    strokeLinecap: {
      control: 'select',
      options: ['round', 'butt', 'square'],
    },
    strokeWidth: {
      control: { type: 'number', min: 1, max: 20 },
    },
    steps: {
      control: { type: 'number', min: 0, max: 12 },
    },
    strokeColor: {
      control: 'color',
    },
    trailColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progressing>;


// =======================
// 基础条形进度
// =======================
export const Basic: Story = {
  args: {
    percent: 45,
  },
  decorators: [
    (Story) => (
      <div className="gemini:w-80">
        <Story />
      </div>
    ),
  ],
};


// =======================
// 环形进度
// =======================
export const Circle: Story = {
  args: {
    percent: 68,
    type: 'circle',
  },
};


// =======================
// 不同状态
// =======================
export const Statuses: Story = {
  render: () => (
    <div className="gemini:grid gemini:w-80 gemini:gap-5">
      <Progressing percent={45} status="normal" />
      <Progressing percent={60} status="active" />
      <Progressing percent={100} status="success" />
      <Progressing percent={30} status="exception" />
      <div className="gemini:flex gemini:items-center gemini:gap-5">
        <Progressing percent={45} status="normal" type="circle" />
        <Progressing percent={60} status="active" type="circle" />
        <Progressing percent={100} status="success" type="circle" />
        <Progressing percent={30} status="exception" type="circle" />
      </div>
    </div>
  ),
};


// =======================
// 不同尺寸
// =======================
export const Sizes: Story = {
  render: () => (
    <div className="gemini:grid gemini:w-80 gemini:gap-5">
      <Progressing percent={36} size="small" />
      <Progressing percent={36} size="default" />
      <div className="gemini:flex gemini:items-center gemini:gap-5">
        <Progressing percent={36} size="small" type="circle" />
        <Progressing percent={36} size="default" type="circle" />
        <Progressing percent={36} size={88} strokeWidth={8} type="circle" />
      </div>
    </div>
  ),
};


// =======================
// 端点形状
// =======================
export const StrokeLinecap: Story = {
  render: () => (
    <div className="gemini:grid gemini:w-80 gemini:gap-5">
      <Progressing percent={64} strokeLinecap="round" />
      <Progressing percent={64} strokeLinecap="butt" />
      <Progressing percent={64} strokeLinecap="square" />
      <div className="gemini:flex gemini:items-center gemini:gap-5">
        <Progressing percent={64} strokeLinecap="round" type="circle" />
        <Progressing percent={64} strokeLinecap="butt" type="circle" />
        <Progressing percent={64} strokeLinecap="square" type="circle" />
      </div>
    </div>
  ),
};


// =======================
// 分段进度
// =======================
export const Steps: Story = {
  args: {
    percent: 62,
    steps: 8,
  },
  decorators: [
    (Story) => (
      <div className="gemini:w-80">
        <Story />
      </div>
    ),
  ],
};


// =======================
// 成功进度段
// =======================
export const SuccessSegment: Story = {
  render: () => (
    <div className="gemini:grid gemini:w-80 gemini:gap-5">
      <Progressing percent={70} success={{ percent: 30 }} />
      <Progressing percent={70} steps={8} success={{ percent: 30 }} />
      <div className="gemini:flex gemini:items-center gemini:gap-5">
        <Progressing percent={70} success={{ percent: 30 }} type="circle" />
        <Progressing
          percent={70}
          success={{ percent: 30, strokeColor: '#14b8a6' }}
          strokeColor="#6366f1"
          type="circle"
        />
      </div>
    </div>
  ),
};


// =======================
// 自定义颜色
// =======================
export const CustomColors: Story = {
  render: () => (
    <div className="gemini:grid gemini:w-80 gemini:gap-5">
      <Progressing percent={52} strokeColor="#7c3aed" trailColor="#ede9fe" />
      <Progressing
        percent={52}
        strokeColor="#f97316"
        strokeWidth={8}
        trailColor="#ffedd5"
        type="circle"
      />
    </div>
  ),
};


// =======================
// 隐藏进度文字
// =======================
export const WithoutInfo: Story = {
  render: () => (
    <div className="gemini:grid gemini:w-80 gemini:gap-5">
      <Progressing percent={52} showInfo={false} />
      <Progressing percent={52} showInfo={false} type="circle" />
    </div>
  ),
};
