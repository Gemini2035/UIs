import type { Meta, StoryObj } from '@storybook/react-vite';
import { useRef } from 'react';
import { Slider, type SliderRef } from '@/libs';

const mockItems = [
  <div key="1" className="h-32 bg-blue-500 flex items-center justify-center text-white">
    Item 1
  </div>,
  <div key="2" className="h-32 bg-green-500 flex items-center justify-center text-white">
    Item 2
  </div>,
  <div key="3" className="h-32 bg-red-500 flex items-center justify-center text-white">
    Item 3
  </div>,
  <div key="4" className="h-32 bg-yellow-500 flex items-center justify-center text-white">
    Item 4
  </div>,
  <div key="5" className="h-32 bg-purple-500 flex items-center justify-center text-white">
    Item 5
  </div>,
];

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    itemsPerPage: {
      control: { type: 'number', min: 1, max: 6 },
    },
    slidePerPage: {
      control: { type: 'number', min: 1, max: 6 },
    },
    paddingLeft: {
      control: { type: 'number', min: 0, max: 40 },
    },
    gap: {
      control: { type: 'number', min: 0, max: 40 },
    },
    showNavigation: {
      control: 'boolean',
    },
    showIndicators: {
      control: 'boolean',
    },
    autoPlay: {
      control: 'boolean',
    },
    loop: {
      control: 'boolean',
    },
    draggable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;


// =======================
// 基础用法
// =======================
export const Basic: Story = {
  args: {
    items: mockItems,
    itemsPerPage: 2,
    slidePerPage: 1,
    paddingLeft: 16,
  },
};


// =======================
// 多项展示 + 间距
// =======================
export const MultipleItems: Story = {
  args: {
    items: mockItems,
    itemsPerPage: 3,
    slidePerPage: 1,
    gap: 16,
    paddingLeft: 24,
  },
};


// =======================
// 导航 + 指示器
// =======================
export const WithNavigationAndIndicators: Story = {
  args: {
    items: mockItems,
    itemsPerPage: 3,
    slidePerPage: 2,
    showNavigation: true,
    showIndicators: true,
    paddingLeft: 16,
  },
};


// =======================
// 自动播放
// =======================
export const AutoPlay: Story = {
  args: {
    items: mockItems,
    itemsPerPage: 2,
    slidePerPage: 1,
    autoPlay: true,
    autoPlayInterval: 3000,
    loop: true,
    showIndicators: true,
  },
};


// =======================
// 非循环（智能隐藏按钮）
// =======================
export const NonLoop: Story = {
  args: {
    items: mockItems,
    itemsPerPage: 2,
    slidePerPage: 1,
    loop: false,
    showNavigation: true,
  },
};


// =======================
// 可拖拽
// =======================
export const Draggable: Story = {
  args: {
    items: mockItems,
    itemsPerPage: 2,
    slidePerPage: 1,
    draggable: true,
    showNavigation: true,
  },
};


// =======================
// Ref 控制示例
// =======================
export const ControlledByRef: Story = {
  render: () => {
    const ControlledByRefSlider = () => {
      const ref = useRef<SliderRef>(null);

      return (
        <div className="w-[500px]">
          <Slider
            ref={ref}
            items={mockItems}
            itemsPerPage={2}
            slidePerPage={1}
            showNavigation
          />

          <div className="mt-4 flex gap-2 justify-center">
            <button
              className="px-3 py-1 border rounded"
              onClick={() => ref.current?.slidePrev()}
            >
              上一页
            </button>
            <button
              className="px-3 py-1 border rounded"
              onClick={() => ref.current?.slideNext()}
            >
              下一页
            </button>
            <button
              className="px-3 py-1 border rounded"
              onClick={() => ref.current?.slideTo(0)}
            >
              第一页
            </button>
          </div>
        </div>
      );
    };

    return <ControlledByRefSlider />;
  },
};


// =======================
// 回调事件
// =======================
export const WithOnSlideChange: Story = {
  args: {
    items: mockItems,
    itemsPerPage: 2,
    slidePerPage: 1,
    showNavigation: true,
    onSlideChange: (index) => {
      console.log('当前索引:', index);
    },
  },
};
