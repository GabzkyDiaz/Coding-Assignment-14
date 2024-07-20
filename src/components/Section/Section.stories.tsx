// @ts-ignore
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Section from './Section';
import { SectionProps } from './Section.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<SectionProps> = (args) => <Section {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Section',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Section',
  disabled: true,
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const section = await canvas.getByText('Primary Section');
  await userEvent.click(section);
};
