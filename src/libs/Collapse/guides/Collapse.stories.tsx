import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Collapse } from '@/libs';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Collapse',
  component: Collapse,
  tags: ['autodocs'],
  argTypes: {
    accordion: { control: 'boolean' },
    ghost: { control: 'boolean' },
    bordered: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'ghost'],
    },
    collapsible: {
      control: 'select',
      options: ['header', 'icon', 'disabled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Basic: Story = {
  render: () => (
    <Collapse>
      <Collapse.Panel header="面板 1" key="1">
        这是面板 1 的内容
      </Collapse.Panel>
      <Collapse.Panel header="面板 2" key="2">
        这是面板 2 的内容
      </Collapse.Panel>
    </Collapse>
  ),
};

export const Accordion: Story = {
  render: () => (
    <Collapse accordion>
      <Collapse.Panel header="面板 1" key="1">
        内容 1
      </Collapse.Panel>
      <Collapse.Panel header="面板 2" key="2">
        内容 2
      </Collapse.Panel>
    </Collapse>
  ),
};

export const DefaultActive: Story = {
  render: () => (
    <Collapse defaultActiveKey={['1']}>
      <Collapse.Panel header="面板 1" key="1">
        默认展开
      </Collapse.Panel>
      <Collapse.Panel header="面板 2" key="2">
        收起
      </Collapse.Panel>
    </Collapse>
  ),
};

export const Controlled: Story = {
  render: () => {
    const ControlledCollapse = () => {
      const [activeKey, setActiveKey] = useState<string[]>(['1']);

      return (
        <Collapse
          activeKey={activeKey}
          onChange={(key) => setActiveKey(Array.isArray(key) ? key : [key])}
        >
          <Collapse.Panel header="面板 1" key="1">
            受控内容 1
          </Collapse.Panel>
          <Collapse.Panel header="面板 2" key="2">
            受控内容 2
          </Collapse.Panel>
        </Collapse>
      );
    };

    return <ControlledCollapse />;
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <Collapse variant="default">
        <Collapse.Panel header="默认样式" key="1">
          内容
        </Collapse.Panel>
      </Collapse>

      <Collapse variant="bordered">
        <Collapse.Panel header="边框样式" key="1">
          内容
        </Collapse.Panel>
      </Collapse>

      <Collapse variant="ghost">
        <Collapse.Panel header="幽灵样式" key="1">
          内容
        </Collapse.Panel>
      </Collapse>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <Collapse size="sm">
        <Collapse.Panel header="小尺寸" key="1">
          内容
        </Collapse.Panel>
      </Collapse>

      <Collapse size="md">
        <Collapse.Panel header="中尺寸" key="1">
          内容
        </Collapse.Panel>
      </Collapse>

      <Collapse size="lg">
        <Collapse.Panel header="大尺寸" key="1">
          内容
        </Collapse.Panel>
      </Collapse>
    </div>
  ),
};

export const CustomArrow: Story = {
  render: () => (
    <Collapse>
      <Collapse.Panel
        header="自定义箭头"
        key="1"
        arrow={<span>🔽</span>}
      >
        内容
      </Collapse.Panel>
    </Collapse>
  ),
};

export const DisabledPanel: Story = {
  render: () => (
    <Collapse>
      <Collapse.Panel header="正常面板" key="1">
        内容 1
      </Collapse.Panel>
      <Collapse.Panel header="禁用面板" key="2" disabled>
        内容 2
      </Collapse.Panel>
    </Collapse>
  ),
};

export const HideArrow: Story = {
  render: () => (
    <Collapse>
      <Collapse.Panel header="无箭头" key="1" showArrow={false}>
        内容
      </Collapse.Panel>
    </Collapse>
  ),
};

export const CustomHeader: Story = {
  render: () => (
    <Collapse>
      <Collapse.Panel
        key="1"
        header={
          <div className="flex items-center gap-2">
            <span>📝</span>
            <span>自定义头部</span>
          </div>
        }
      >
        内容
      </Collapse.Panel>
    </Collapse>
  ),
};

export const CustomStyle: Story = {
  render: () => (
    <Collapse className="border border-dashed border-blue-400">
      <Collapse.Panel
        header="自定义样式"
        key="1"
        headerContainerClassName="bg-blue-50 text-blue-700"
        contentClassName="bg-gray-50"
      >
        内容
      </Collapse.Panel>
    </Collapse>
  ),
};
