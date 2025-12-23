import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/libs/Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '一个精简的按钮组件，仅保留基本功能，专为简单项目使用而设计。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'text', 'danger', 'default'],
      description: '按钮变体',
      table: {
        type: { summary: 'ButtonType' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '按钮尺寸',
      table: {
        type: { summary: 'ButtonSize' },
        defaultValue: { summary: 'md' },
      },
    },
    rounded: {
      control: 'boolean',
      description: '是否圆角',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: '是否显示加载状态',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    htmlType: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML按钮类型',
      table: {
        type: { summary: "'button' | 'submit' | 'reset'" },
        defaultValue: { summary: 'button' },
      },
    },
    children: {
      control: 'text',
      description: '按钮内容',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * 基础按钮示例
 */
export const Default: Story = {
  args: {
    children: '点击我',
    type: 'primary',
    size: 'md',
    rounded: false,
    disabled: false,
    loading: false,
  },
}

/**
 * 所有变体展示
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button type="primary">主要按钮</Button>
      <Button type="secondary">次要按钮</Button>
      <Button type="outline">轮廓按钮</Button>
      <Button type="ghost">幽灵按钮</Button>
      <Button type="text">文本按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="default">默认按钮</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示所有可用的按钮变体类型。',
      },
    },
  },
}

/**
 * 所有尺寸展示
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="xs">超小按钮</Button>
      <Button size="sm">小按钮</Button>
      <Button size="md">中等按钮</Button>
      <Button size="lg">大按钮</Button>
      <Button size="xl">超大按钮</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示所有可用的按钮尺寸。',
      },
    },
  },
}

/**
 * 圆角设置
 */
export const Rounded: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button rounded={false}>方框按钮</Button>
      <Button rounded={true}>圆角按钮</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示圆角和方框两种样式。',
      },
    },
  },
}

/**
 * 状态展示
 */
export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>正常状态</Button>
      <Button loading>加载中</Button>
      <Button disabled>禁用</Button>
      <Button loading disabled>加载且禁用</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示按钮的不同状态：正常、加载、禁用。',
      },
    },
  },
}

/**
 * 事件处理示例
 */
export const WithClickHandler: Story = {
  render: () => (
    <Button
      onClick={(e) => {
        e.preventDefault()
        alert('按钮被点击了！')
      }}
    >
      点击我
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示如何处理按钮点击事件。',
      },
    },
  },
}

/**
 * 表单集成示例
 */
export const FormIntegration: Story = {
  render: () => (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        alert('表单已提交')
      }}
      onReset={() => {
        alert('表单已重置')
      }}
      className="flex gap-4"
    >
      <Button type="primary" htmlType="submit">
        提交表单
      </Button>
      <Button type="secondary" htmlType="reset">
        重置
      </Button>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示如何在表单中使用按钮，包括提交和重置功能。',
      },
    },
  },
}

/**
 * 组合示例：不同变体的所有尺寸
 */
export const AllVariantsAndSizes: Story = {
  render: () => {
    const variants: Array<'primary' | 'secondary' | 'outline' | 'ghost' | 'text' | 'danger' | 'default'> = [
      'primary',
      'secondary',
      'outline',
      'ghost',
      'text',
      'danger',
      'default',
    ]
    const sizes: Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'> = ['xs', 'sm', 'md', 'lg', 'xl']

    return (
      <div className="space-y-6">
        {variants.map((variant) => (
          <div key={variant} className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 capitalize">{variant}</h3>
            <div className="flex flex-wrap items-center gap-2">
              {sizes.map((size) => (
                <Button key={size} type={variant} size={size}>
                  {size.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: '展示所有变体和尺寸的组合效果。',
      },
    },
  },
}

/**
 * 圆角与方框对比
 */
export const RoundedComparison: Story = {
  render: () => {
    const variants: Array<'primary' | 'secondary' | 'outline'> = ['primary', 'secondary', 'outline']

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-700">方框按钮 (rounded=false)</h3>
          <div className="flex flex-wrap gap-2">
            {variants.map((variant) => (
              <Button key={variant} type={variant} rounded={false}>
                {variant}
              </Button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-700">圆角按钮 (rounded=true)</h3>
          <div className="flex flex-wrap gap-2">
            {variants.map((variant) => (
              <Button key={variant} type={variant} rounded={true}>
                {variant}
              </Button>
            ))}
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: '对比不同变体的圆角和方框样式。',
      },
    },
  },
}

/**
 * 加载状态示例
 */
export const LoadingStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button type="primary" loading>
        加载中
      </Button>
      <Button type="secondary" loading>
        加载中
      </Button>
      <Button type="outline" loading>
        加载中
      </Button>
      <Button type="danger" loading>
        加载中
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示不同变体的加载状态。',
      },
    },
  },
}

/**
 * 禁用状态示例
 */
export const DisabledStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button type="primary" disabled>
        禁用
      </Button>
      <Button type="secondary" disabled>
        禁用
      </Button>
      <Button type="outline" disabled>
        禁用
      </Button>
      <Button type="ghost" disabled>
        禁用
      </Button>
      <Button type="text" disabled>
        禁用
      </Button>
      <Button type="danger" disabled>
        禁用
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示不同变体的禁用状态。',
      },
    },
  },
}
