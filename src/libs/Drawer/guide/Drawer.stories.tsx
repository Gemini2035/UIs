import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Drawer } from '@/libs';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
    },
    mask: { control: 'boolean' },
    maskClosable: { control: 'boolean' },
    closable: { control: 'boolean' },
    destroyOnClose: { control: 'boolean' },
    zIndex: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
  render: () => {
    const BasicDrawer = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setOpen(true)}
          >
            打开抽屉
          </button>

          <Drawer
            open={open}
            title="标题"
            onClose={() => setOpen(false)}
          >
            <p>这是抽屉内容</p>
          </Drawer>
        </>
      );
    };

    return <BasicDrawer />;
  }
};

export const Placements: Story = {
  render: () => {
    const PlacementsDrawer = () => {
      const [placement, setPlacement] = useState<
        'left' | 'right' | 'top' | 'bottom'
      >('right');
      const [open, setOpen] = useState(false);

      return (
        <>
          <div className="flex gap-2 mb-4">
            {(['left', 'right', 'top', 'bottom'] as const).map(p => (
              <button
                key={p}
                className="px-3 py-1 border rounded"
                onClick={() => {
                  setPlacement(p);
                  setOpen(true);
                }}
              >
                {p}
              </button>
            ))}
          </div>

          <Drawer
            open={open}
            placement={placement}
            onClose={() => setOpen(false)}
            title={`从 ${placement} 展开`}
          >
            内容
          </Drawer>
        </>
      );
    };

    return <PlacementsDrawer />;
  },
};

export const Sizes: Story = {
  render: () => {
    const SizesDrawer = () => {
      const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'full'>('md');
      const [open, setOpen] = useState(false);

      return (
        <>
          <div className="flex gap-2 mb-4">
            {(['sm', 'md', 'lg', 'full'] as const).map(s => (
              <button
                key={s}
                className="px-3 py-1 border rounded"
                onClick={() => {
                  setSize(s);
                  setOpen(true);
                }}
              >
                {s}
              </button>
            ))}
          </div>

          <Drawer
            open={open}
            size={size}
            onClose={() => setOpen(false)}
            title={`尺寸：${size}`}
          >
            内容
          </Drawer>
        </>
      );
    };

    return <SizesDrawer />;
  },
};

export const WithFooter: Story = {
  render: () => {
    const WithFooterDrawer = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setOpen(true)}
          >
            打开
          </button>

          <Drawer
            open={open}
            title="带底部操作"
            onClose={() => setOpen(false)}
            footer={
              <div className="flex justify-end gap-2">
                <button
                  className="px-3 py-1 border rounded"
                  onClick={() => setOpen(false)}
                >
                  取消
                </button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded">
                  确定
                </button>
              </div>
            }
          >
            内容
          </Drawer>
        </>
      );
    };

    return <WithFooterDrawer />;
  },
};

export const NoMask: Story = {
  render: () => {
    const NoMaskDrawer = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setOpen(true)}
          >
            无遮罩
          </button>

          <Drawer open={open} mask={false} onClose={() => setOpen(false)}>
            无遮罩抽屉
          </Drawer>
        </>
      );
    };

    return <NoMaskDrawer />;
  },
};

export const MaskNotClosable: Story = {
  render: () => {
    const MaskNotClosableDrawer = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setOpen(true)}
          >
            点击遮罩不关闭
          </button>

          <Drawer
            open={open}
            maskClosable={false}
            onClose={() => setOpen(false)}
          >
            点击遮罩不会关闭
          </Drawer>
        </>
      );
    };

    return <MaskNotClosableDrawer />;
  },
};

export const CustomStyle: Story = {
  render: () => {
    const CustomStyleDrawer = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setOpen(true)}
          >
            自定义样式
          </button>

          <Drawer
            open={open}
            onClose={() => setOpen(false)}
            className="rounded-l-xl"
            headerClassName="bg-gray-100"
            bodyClassName="bg-white"
            footerClassName="bg-gray-50"
            maskClassName="bg-black/40"
          >
            内容
          </Drawer>
        </>
      );
    };

    return <CustomStyleDrawer />;
  },
};
