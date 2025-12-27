import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';;
import { Tooltip, Button } from '@/libs';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    trigger: {
      control: 'radio',
      options: ['hover', 'click', 'focus', 'contextMenu'],
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight',
        'left',
        'leftTop',
        'leftBottom',
        'right',
        'rightTop',
        'rightBottom',
      ],
    },
    theme: {
      control: 'radio',
      options: ['light'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// =======================
// 基础用法
// =======================
export const Basic: Story = {
  render: () => (
    <Tooltip title="这是一个提示">
      <Button>悬停我</Button>
    </Tooltip>
  ),
};

// =======================
// 不同触发方式
// =======================
export const Triggers: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip title="鼠标悬停" trigger="hover">
        <Button>Hover</Button>
      </Tooltip>
      <Tooltip title="点击触发" trigger="click">
        <Button>Click</Button>
      </Tooltip>
      <Tooltip title="聚焦触发" trigger="focus">
        <input className="border p-1" placeholder="Focus me" />
      </Tooltip>
      <Tooltip title="右键触发" trigger="contextMenu">
        <Button>右键</Button>
      </Tooltip>
    </div>
  ),
};

// =======================
// 不同位置
// =======================
export const Placements: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip title="上方" placement="top">
        <Button>top</Button>
      </Tooltip>
      <Tooltip title="下方" placement="bottom">
        <Button>bottom</Button>
      </Tooltip>
      <Tooltip title="左侧" placement="left">
        <Button>left</Button>
      </Tooltip>
      <Tooltip title="右侧" placement="right">
        <Button>right</Button>
      </Tooltip>
      <Tooltip title="左上" placement="topLeft">
        <Button>topLeft</Button>
      </Tooltip>
      <Tooltip title="右下" placement="bottomRight">
        <Button>bottomRight</Button>
      </Tooltip>
    </div>
  ),
};

// =======================
// 可交互内容
// =======================
export const Interactive: Story = {
  render: () => (
    <Tooltip
      title={
        <div className="p-2">
          <p>可交互内容</p>
          <button
            className="mt-1 px-2 py-1 bg-blue-500 text-white rounded"
            onClick={() => alert('点击了')}
          >
            点击我
          </button>
        </div>
      }
      interactive
    >
      <Button>可交互</Button>
    </Tooltip>
  ),
};

// =======================
// 自定义偏移和跟随鼠标
// =======================
export const OffsetAndFollow: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip title="自定义偏移" offset={[10, 20]}>
        <Button>偏移</Button>
      </Tooltip>
      <Tooltip title="跟随鼠标" followCursor>
        <Button>跟随</Button>
      </Tooltip>
    </div>
  ),
};

// =======================
// 受控显示
// =======================
export const Controlled: Story = {
  render: () => {
    const Controlled = () => {
      const [visible, setVisible] = useState(true);
      return (
        <Tooltip title="受控显示" visible={visible} onVisibleChange={setVisible}>
          <Button>受控</Button>
        </Tooltip>
      );
    };
    return <Controlled />;
  },
};

// =======================
// 自定义渲染容器
// =======================
export const CustomContainer: Story = {
  render: () => (
    <div id="custom-container" className="relative w-full h-64 border p-4">
      <Tooltip
        title="自定义容器"
        getRenderContainer={() =>
          document.getElementById('custom-container') as HTMLElement
        }
      >
        <Button>自定义容器</Button>
      </Tooltip>
    </div>
  ),
};
