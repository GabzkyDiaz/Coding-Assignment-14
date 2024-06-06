import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'StyledComponents/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    hoverColor: { control: 'color' }, // Add control for hoverColor
    visible: { control: 'boolean' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Button>;

interface TemplateProps extends ButtonProps {
  visible: boolean;
}

const Template: StoryFn<TemplateProps> = ({ visible, ...args }) => (
  visible ? <Button {...args} /> : <div></div>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  visible: true,
  disabled: false,
  hoverColor: '#3700b3', // Default hover color
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true,
  backgroundColor: 'gray',
  hoverColor: '#6f6f6f', // Hover color when disabled
  visible: true,
};
