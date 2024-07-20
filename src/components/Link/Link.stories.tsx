// @ts-ignore
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Link from './Link';
import { LinkProps } from './Link.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'StyledComponents/Link',
  component: Link,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Link',
  href: '#',
  onClick: (e) => e.preventDefault(), // Prevent default action
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Link',
  href: '#',
  disabled: true,
  onClick: (e) => e.preventDefault(), // Prevent default action
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = await canvas.getByText('Primary Link');
  await userEvent.click(link);
};
