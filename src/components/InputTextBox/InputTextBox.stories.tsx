// @ts-ignore
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import InputTextBox from './InputTextBox';
import { InputTextBoxProps } from './InputTextBox.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'StyledComponents/InputTextBox',
  component: InputTextBox,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<InputTextBoxProps> = (args) => <InputTextBox {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

Empty.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = await canvas.getByRole('textbox');
  await userEvent.click(input);
};
