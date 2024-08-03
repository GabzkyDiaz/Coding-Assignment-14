// @ts-ignore
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Hero, HeroProps } from './Hero';

export default {
  title: 'StyledComponents/Hero',
  component: Hero,
  argTypes: {
    backgroundColor: { control: 'color' },
    visible: { control: 'boolean' },
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Hero>;

const Template: StoryFn<HeroProps> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imageUrl: 'https://via.placeholder.com/800x400',
  title: 'Hero Title',
  subtitle: 'Hero Subtitle',
  visible: true,
  disabled: false,
  backgroundColor: 'transparent',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const heroTitle = await canvas.getByText('Hero Title');
  await userEvent.hover(heroTitle); // Example interaction
};

export const Disabled = Template.bind({});
Disabled.args = {
  imageUrl: 'https://via.placeholder.com/800x400',
  title: 'Hero Title',
  subtitle: 'Hero Subtitle',
  disabled: true,
  backgroundColor: 'gray',
  visible: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const heroTitle = await canvas.getByText('Hero Title');
  await userEvent.hover(heroTitle); // Example interaction
  // Additional interactions for disabled state can be added here
};
