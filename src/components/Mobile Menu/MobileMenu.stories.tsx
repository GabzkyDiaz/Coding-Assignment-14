// @ts-ignore
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { MobileMenu } from './MobileMenu';
import { MobileMenuProps } from './MobileMenu.types';

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

Collapsed.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button', { name: /Expand/i });
  await userEvent.click(button);
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

Hover.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const menuItem = await canvas.getByText('Home');
  await userEvent.hover(menuItem);
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

Focus.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const menuItem = await canvas.getByText('Home');
  await userEvent.click(menuItem);  // Focus is typically set by click
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

Expanded.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button', { name: /Collapse/i });
  await userEvent.click(button);
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

Disabled.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole('button', { name: /Expand/i });
  await userEvent.click(button);  // Clicking disabled button should not change the state
};
