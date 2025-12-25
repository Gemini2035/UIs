import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyState, Button } from '@/libs';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: [
        'search',
        'folder',
        'document',
        'users',
        'settings',
        'warning',
        'info',
        'success',
        'error',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'card'],
    },
    showIcon: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Basic: Story = {
  args: {
    icon: 'search',
    title: 'No results found',
    description: 'Try searching with different keywords',
  },
};

export const WithAction: Story = {
  args: {
    icon: 'folder',
    title: 'No files found',
    description: 'Upload your first file to get started',
    action: <Button>Upload File</Button>,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <EmptyState
        size="sm"
        icon="document"
        title="Small size"
        description="Small empty state"
      />
      <EmptyState
        size="md"
        icon="document"
        title="Medium size"
        description="Medium empty state"
      />
      <EmptyState
        size="lg"
        icon="document"
        title="Large size"
        description="Large empty state"
      />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <EmptyState
        variant="default"
        icon="users"
        title="Default"
        description="Default variant"
      />

      <EmptyState
        variant="minimal"
        icon="users"
        title="Minimal"
        description="Minimal variant"
      />

      <EmptyState
        variant="card"
        icon="users"
        title="Card"
        description="Card variant"
        action={<Button>Create User</Button>}
      />
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <EmptyState
      icon={
        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
          ⭐
        </div>
      }
      title="Custom icon"
      description="Using a custom ReactNode as icon"
    />
  ),
};

export const WithoutIcon: Story = {
  args: {
    showIcon: false,
    title: 'No icon',
    description: 'Icon is hidden',
  },
};

export const CustomStyle: Story = {
  args: {
    icon: 'info',
    title: 'Custom styled',
    description: 'With custom className',
    className: 'bg-blue-50 border border-blue-200',
  },
};
