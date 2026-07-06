import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Modal } from "@/libs";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    title: { control: "text" },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "full"],
    },
    mask: { control: "boolean" },
    maskClosable: { control: "boolean" },
    closable: { control: "boolean" },
    destroyOnClose: { control: "boolean" },
    zIndex: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const OpenButton = ({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) => (
  <button
    className="gemini:rounded gemini:bg-blue-500 gemini:px-4 gemini:py-2 gemini:text-white gemini:transition-colors gemini:hover:bg-blue-600"
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export const Basic: Story = {
  render: () => {
    const BasicModal = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <OpenButton onClick={() => setOpen(true)}>打开弹窗</OpenButton>

          <Modal open={open} onClose={() => setOpen(false)} title="标题">
            <div className="gemini:p-6">
              <p className="gemini:text-gray-700">这是弹窗内容。</p>
            </div>
          </Modal>
        </>
      );
    };

    return <BasicModal />;
  },
};

export const Sizes: Story = {
  render: () => {
    const SizesModal = () => {
      const [size, setSize] = useState<"sm" | "md" | "lg" | "xl" | "full">(
        "md"
      );
      const [open, setOpen] = useState(false);

      return (
        <>
          <div className="gemini:flex gemini:flex-wrap gemini:gap-2">
            {(["sm", "md", "lg", "xl", "full"] as const).map((item) => (
              <button
                className="gemini:rounded gemini:border gemini:px-3 gemini:py-1 gemini:text-sm gemini:hover:bg-gray-50"
                key={item}
                onClick={() => {
                  setSize(item);
                  setOpen(true);
                }}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>

          <Modal
            open={open}
            onClose={() => setOpen(false)}
            size={size}
            title={`尺寸：${size}`}
          >
            <div className="gemini:p-6">
              <p className="gemini:text-gray-700">当前弹窗尺寸为 {size}。</p>
            </div>
          </Modal>
        </>
      );
    };

    return <SizesModal />;
  },
};

export const WithFooter: Story = {
  render: () => {
    const WithFooterModal = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <OpenButton onClick={() => setOpen(true)}>打开带底部的弹窗</OpenButton>

          <Modal
            footer={
              <>
                <button
                  className="gemini:rounded gemini:border gemini:px-3 gemini:py-1 gemini:hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                  type="button"
                >
                  取消
                </button>
                <button
                  className="gemini:rounded gemini:bg-blue-500 gemini:px-3 gemini:py-1 gemini:text-white gemini:hover:bg-blue-600"
                  onClick={() => setOpen(false)}
                  type="button"
                >
                  确定
                </button>
              </>
            }
            open={open}
            onClose={() => setOpen(false)}
            title="带底部操作"
          >
            <div className="gemini:p-6">
              <p className="gemini:text-gray-700">
                footer 可以放确认、取消等操作按钮。
              </p>
            </div>
          </Modal>
        </>
      );
    };

    return <WithFooterModal />;
  },
};

export const MaskNotClosable: Story = {
  render: () => {
    const MaskNotClosableModal = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <OpenButton onClick={() => setOpen(true)}>点击遮罩不关闭</OpenButton>

          <Modal
            maskClosable={false}
            open={open}
            onClose={() => setOpen(false)}
            title="需要明确关闭"
          >
            <div className="gemini:p-6">
              <p className="gemini:text-gray-700">
                点击遮罩不会关闭，仍可点击右上角按钮或按 ESC 关闭。
              </p>
            </div>
          </Modal>
        </>
      );
    };

    return <MaskNotClosableModal />;
  },
};

export const LongContent: Story = {
  render: () => {
    const LongContentModal = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <OpenButton onClick={() => setOpen(true)}>打开长内容弹窗</OpenButton>

          <Modal
            open={open}
            onClose={() => setOpen(false)}
            size="lg"
            title="长内容"
          >
            <div className="gemini:space-y-4 gemini:p-6">
              {Array.from({ length: 18 }).map((_, index) => (
                <p className="gemini:text-gray-700" key={index}>
                  第 {index + 1} 段内容。弹窗内容区域会在最大高度内滚动，背景页面保持锁定。
                </p>
              ))}
            </div>
          </Modal>
        </>
      );
    };

    return <LongContentModal />;
  },
};

export const CustomStyle: Story = {
  render: () => {
    const CustomStyleModal = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <OpenButton onClick={() => setOpen(true)}>自定义样式</OpenButton>

          <Modal
            classNames={{
              body: "gemini:bg-slate-50",
              closeButton: "gemini:border gemini:border-slate-200 gemini:bg-white",
              content: "gemini:max-w-2xl gemini:border gemini:border-slate-200",
              footer: "gemini:bg-white",
              header: "gemini:bg-white",
              mask: "gemini:bg-slate-950/40",
            }}
            footer={
              <button
                className="gemini:rounded gemini:bg-slate-900 gemini:px-3 gemini:py-1 gemini:text-white"
                onClick={() => setOpen(false)}
                type="button"
              >
                完成
              </button>
            }
            open={open}
            onClose={() => setOpen(false)}
            title="自定义外观"
          >
            <div className="gemini:p-6">
              <p className="gemini:text-gray-700">
                可以分别覆盖遮罩、内容容器、头部、主体、底部和关闭按钮样式。
              </p>
            </div>
          </Modal>
        </>
      );
    };

    return <CustomStyleModal />;
  },
};
