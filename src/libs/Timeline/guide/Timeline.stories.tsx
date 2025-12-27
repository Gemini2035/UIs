
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timeline } from '@/libs';

const { Item: TimelineItem } = Timeline;

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    mode: {
      control: 'radio',
      options: ['left', 'right', 'alternate'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    showLine: {
      control: 'boolean',
    },
    lineColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

// =======================
// 基础时间轴
// =======================
export const Basic: Story = {
  render: () => (
    <Timeline>
      <TimelineItem label="2023-01-01">
        <h3>项目开始</h3>
        <p>开始开发新项目</p>
      </TimelineItem>
      <TimelineItem label="2023-02-01">
        <h3>功能开发</h3>
        <p>完成核心功能开发</p>
      </TimelineItem>
      <TimelineItem label="2023-03-01">
        <h3>项目上线</h3>
        <p>项目正式上线</p>
      </TimelineItem>
    </Timeline>
  ),
};

// =======================
// 不同布局模式
// =======================
export const Modes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[600px]">
      <Timeline mode="left">
        <TimelineItem label="2023-01-01">左侧模式</TimelineItem>
        <TimelineItem label="2023-02-01">内容</TimelineItem>
      </Timeline>
      <Timeline mode="right">
        <TimelineItem label="2023-01-01">右侧模式</TimelineItem>
        <TimelineItem label="2023-02-01">内容</TimelineItem>
      </Timeline>
      <Timeline mode="alternate">
        <TimelineItem label="2023-01-01">交替模式</TimelineItem>
        <TimelineItem label="2023-02-01">内容</TimelineItem>
        <TimelineItem label="2023-03-01">内容</TimelineItem>
      </Timeline>
    </div>
  ),
};

// =======================
// 不同尺寸
// =======================
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[600px]">
      <Timeline size="sm">
        <TimelineItem label="2023-01-01">小尺寸</TimelineItem>
        <TimelineItem label="2023-02-01">内容</TimelineItem>
      </Timeline>
      <Timeline size="md">
        <TimelineItem label="2023-01-01">中等尺寸</TimelineItem>
        <TimelineItem label="2023-02-01">内容</TimelineItem>
      </Timeline>
      <Timeline size="lg">
        <TimelineItem label="2023-01-01">大尺寸</TimelineItem>
        <TimelineItem label="2023-02-01">内容</TimelineItem>
      </Timeline>
    </div>
  ),
};

// =======================
// 不同状态
// =======================
export const Statuses: Story = {
  render: () => (
    <Timeline>
      <TimelineItem label="2023-01-01" status="finish" color="green">
        已完成
      </TimelineItem>
      <TimelineItem label="2023-02-01" status="process" color="blue">
        进行中
      </TimelineItem>
      <TimelineItem label="2023-03-01" status="error" color="red">
        出错
      </TimelineItem>
      <TimelineItem label="2023-04-01" status="pending" color="gray">
        待处理
      </TimelineItem>
    </Timeline>
  ),
};

// =======================
// 自定义时间轴点
// =======================
export const CustomDot: Story = {
  render: () => (
    <Timeline>
      <TimelineItem label="2023-01-01" dot={<span className="text-2xl">🎉</span>}>
        自定义图标
      </TimelineItem>
      <TimelineItem label="2023-02-01" dot={<span className="text-2xl">⭐</span>}>
        自定义图标
      </TimelineItem>
    </Timeline>
  ),
};

// =======================
// 隐藏连接线
// =======================
export const NoLine: Story = {
  args: {
    showLine: false,
    children: (
      <>
        <TimelineItem label="2023-01-01">项目开始</TimelineItem>
        <TimelineItem label="2023-02-01">内容</TimelineItem>
      </>
    ),
  },
};
