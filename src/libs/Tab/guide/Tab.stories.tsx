import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, type FC } from "react";
import { Tab } from "@/libs";

const items = [
  {
    key: "tab1",
    label: "标签页 1",
    children: <div className="p-4">内容 1</div>,
  },
  {
    key: "tab2",
    label: "标签页 2",
    children: <div className="p-4">内容 2</div>,
  },
  {
    key: "tab3",
    label: "标签页 3",
    children: <div className="p-4">内容 3</div>,
  },
];

const itemsWithDisabled = [
  ...items,
  {
    key: "tab4",
    label: "禁用标签",
    disabled: true,
    children: <div className="p-4">不可用内容</div>,
  },
];

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    type: {
      control: "radio",
      options: ["line", "card"],
    },
    defaultActiveKey: {
      control: "text",
    },
    activeKey: {
      control: false,
    },
    onChange: {
      action: "change",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

// =======================
// 基础用法（非受控）
// =======================
export const Basic: Story = {
  args: {
    items,
  },
};

// =======================
// 默认激活项
// =======================
export const DefaultActive: Story = {
  args: {
    items,
    defaultActiveKey: "tab2",
  },
};

// =======================
// 卡片风格
// =======================
export const CardType: Story = {
  args: {
    items,
    type: "card",
  },
};

// =======================
// 不同尺寸
// =======================
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[600px]">
      <Tab items={items} size="small" />
      <Tab items={items} size="medium" />
      <Tab items={items} size="large" />
    </div>
  ),
};

// =======================
// 禁用标签
// =======================
export const DisabledTab: Story = {
  args: {
    items: itemsWithDisabled,
  },
};

// =======================
// 受控模式
// =======================
export const Controlled: Story = {
  render: () => {
    const ControlledTab: FC = () => {
      const [activeKey, setActiveKey] = useState("tab1");

      return (
        <div className="w-[600px]">
          <Tab
            items={items}
            activeKey={activeKey}
            onChange={(key) => setActiveKey(key)}
          />

          <div className="mt-4 text-sm text-gray-500">
            当前激活 Tab：<strong>{activeKey}</strong>
          </div>
        </div>
      );
    };
    return <ControlledTab />;
  },
};

// =======================
// 自定义样式
// =======================
export const CustomClassName: Story = {
  args: {
    items,
    tabBarClassName: "bg-gray-100 rounded-md px-2",
    tabContentClassName: "border border-gray-200 rounded-md mt-2",
  },
};
