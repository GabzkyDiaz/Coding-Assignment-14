// @ts-ignore
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { fn } from '@storybook/test';
import Button, { ButtonProps } from './Button';

export default {
  title: 'StyledComponents/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    hoverColor: { control: 'color' },
    visible: { control: 'boolean' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>;

interface TemplateProps extends ButtonProps {
  visible: boolean;
}

const Template: StoryFn<TemplateProps> = ({ visible, ...args }) =>
  visible ? <Button {...args} /> : <div></div>;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  visible: true,
  disabled: false,
  hoverColor: '#3700b3',
  onClick: fn(), // Explicitly set the onClick actionn
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button', { name: /Button/i });
  await userEvent.click(button);
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true,
  backgroundColor: 'gray',
  hoverColor: '#6f6f6f',
  visible: true,
  onClick: fn(), // Explicitly set the onClick action
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button', { name: /Button/i });
  await userEvent.click(button); // Trying to click the disabled button should not trigger onClick
  await userEvent.hover(button); // Hovering should not change styles due to disabled state
};
