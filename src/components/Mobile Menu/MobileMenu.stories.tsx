import { Meta, StoryFn } from '@storybook/react';
import { MobileMenu, MobileMenuProps } from './MobileMenu';

export default {
  title: 'StyledComponents/MobileMenu',
  component: MobileMenu,
  argTypes: {
    options: { control: { type: 'object' } },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    visible: { control: 'boolean' },
    defaultExpanded: { control: 'boolean' },
    hover: { control: 'boolean' },
    focus: { control: 'boolean' },
  },
} as Meta<typeof MobileMenu>;

const Template: StoryFn<MobileMenuProps & { hover: boolean; focus: boolean }> = (args) => (
  <MobileMenu {...args} />
);

export const Collapsed = Template.bind({});
Collapsed.args = {
  options: ['Home', 'Skills', 'Contact'],
  visible: true,
  defaultExpanded: false,
  disabled: false,
  backgroundColor: '#333',
  hover: false,
  focus: false,
};

export const Hover = Template.bind({});
Hover.args = {
  options: ['Home', 'Skills', 'Contact'],
  visible: true,
  backgroundColor: '#333',
  defaultExpanded: false,
  disabled: false,
  hover: true,
  focus: false,
};

export const Focus = Template.bind({});
Focus.args = {
  options: ['Home', 'Skills', 'Contact'],
  visible: true,
  backgroundColor: '#333',
  defaultExpanded: false,
  disabled: false,
  hover: false,
  focus: true,
};

export const Expanded = Template.bind({});
Expanded.args = {
  options: ['Home', 'Skills', 'Contact'],
  visible: true,
  backgroundColor: '#333',
  defaultExpanded: true,
  disabled: false,
  hover: false,
  focus: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Home', 'Skills', 'Contact'],
  disabled: true,
  backgroundColor: 'gray',
  visible: true,
  defaultExpanded: false,
  hover: false,
  focus: false,
};
