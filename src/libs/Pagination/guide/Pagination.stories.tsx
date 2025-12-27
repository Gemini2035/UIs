import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Pagination } from '@/libs';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    simple: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    showQuickJumper: {
      control: 'boolean',
    },
    showSizeChanger: {
      control: 'boolean',
    },
    showFirstLastJumpers: {
      control: 'boolean',
    },
    hideOnSinglePage: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;


// =======================
// 基础分页
// =======================
export const Basic: Story = {
  render: () => {
    const BasicPagination = () => {
      const [current, setCurrent] = useState(1);

      return (
        <Pagination
          current={current}
          total={100}
          onChange={(page) => setCurrent(page)}
        />
      );
    };

    return <BasicPagination />;
  },
};


// =======================
// 高级功能（完整能力）
// =======================
export const Advanced: Story = {
  render: () => {
    const AdvancedPagination = () => {
      const [current, setCurrent] = useState(1);
      const [pageSize, setPageSize] = useState(20);

      return (
        <Pagination
          current={current}
          pageSize={pageSize}
          total={500}
          showQuickJumper
          showSizeChanger
          showFirstLastJumpers
          pageSizeOptions={['10', '20', '50', '100']}
          showTotal={(total, range) =>
            `第 ${range[0]}-${range[1]} 条，共 ${total} 条`
          }
          onChange={(page, size) => {
            setCurrent(page);
            setPageSize(size);
          }}
        />
      );
    };

    return <AdvancedPagination />;
  },
};


// =======================
// 简单模式
// =======================
export const Simple: Story = {
  render: () => {
    const SimplePagination = () => {
      const [current, setCurrent] = useState(1);

      return (
        <Pagination
          simple
          current={current}
          total={100}
          onChange={(page) => setCurrent(page)}
        />
      );
    };

    return <SimplePagination />;
  },
};


// =======================
// 不同尺寸
// =======================
export const Sizes: Story = {
  render: () => {
    const SizesPagination = () => {
      const [current, setCurrent] = useState(1);

      return (
        <div className="flex flex-col gap-6">
          <Pagination
            size="small"
            current={current}
            total={100}
            onChange={setCurrent}
          />
          <Pagination
            size="middle"
            current={current}
            total={100}
            onChange={setCurrent}
          />
          <Pagination
            size="large"
            current={current}
            total={100}
            onChange={setCurrent}
          />
        </div>
      );
    };

    return <SizesPagination />;
  },
};


// =======================
// 对齐方式
// =======================
export const Align: Story = {
  render: () => {
    const AlignPagination = () => {
      const [current, setCurrent] = useState(1);

      return (
        <div className="w-full flex flex-col gap-6">
          <Pagination align="left" current={current} total={100} onChange={setCurrent} />
          <Pagination align="center" current={current} total={100} onChange={setCurrent} />
          <Pagination align="right" current={current} total={100} onChange={setCurrent} />
        </div>
      );
    };

    return <AlignPagination />;
  },
};


// =======================
// 禁用状态
// =======================
export const Disabled: Story = {
  args: {
    current: 1,
    total: 100,
    disabled: true,
  },
};


// =======================
// 只有一页时隐藏
// =======================
export const HideOnSinglePage: Story = {
  args: {
    current: 1,
    total: 5,
    pageSize: 10,
    hideOnSinglePage: true,
  },
};


// =======================
// 自定义跳转文案
// =======================
export const CustomTotal: Story = {
  render: () => {
    const CustomTotalPagination = () => {
      const [current, setCurrent] = useState(1);

      return (
        <Pagination
          current={current}
          total={230}
          showTotal={(total) => `共 ${total} 条数据`}
          onChange={setCurrent}
        />
      );
    };

    return <CustomTotalPagination />;
  },
};
