// @ts-ignore
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import InputTextBox from './InputTextBox';
import { InputTextBoxProps } from './InputTextBox.types';
import styled from 'styled-components';

const StoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: #f0f0f0;
`;

export default {
  title: 'StyledComponents/InputTextBox',
  component: InputTextBox,
  argTypes: {
    value: { 
      control: 'text',
      table: {
        type: { summary: undefined },
        defaultValue: { summary: undefined },
      },
    },
    placeholder: { 
      control: 'text',
      table: {
        type: { summary: undefined },
        defaultValue: { summary: undefined },
      },
    },
    disabled: { 
      control: 'boolean',
      table: {
        type: { summary: undefined },
        defaultValue: { summary: undefined },
      },
    },
    backgroundColor: { 
      control: 'color',
      table: {
        type: { summary: undefined },
        defaultValue: { summary: undefined },
      },
    },
    visible: { 
      control: 'boolean',
      table: {
        type: { summary: undefined },
        defaultValue: { summary: undefined },
      },
    },
    onChange: {
      action: 'changed',
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
} as Meta<typeof InputTextBox>;

type InputTextBoxStoryProps = InputTextBoxProps & { visible: boolean };

const Template: StoryFn<InputTextBoxStoryProps> = ({ visible, ...args }) => 
  visible ? (
    <StoryContainer>
      <InputTextBox {...args} />
    </StoryContainer>
  ) : (
    <div style={{ display: 'none' }} />
  );

export const Empty = Template.bind({});
Empty.args = {
  value: '',
  placeholder: 'Type something...',
  disabled: false,
  visible: true,
  backgroundColor: 'white',
};

export const Focused = Template.bind({});
Focused.args = {
  value: '',
  placeholder: 'Focused...',
  disabled: false,
  visible: true,
  backgroundColor: 'white',
};

Focused.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = await canvas.getByPlaceholderText('Focused...');
  await userEvent.click(input);
};

export const Filled = Template.bind({});
Filled.args = {
  value: 'Some text',
  placeholder: 'Filled...',
  disabled: false,
  visible: true,
  backgroundColor: 'white',
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'Disabled',
  placeholder: 'Disabled...',
  disabled: true,
  visible: true,
  backgroundColor: 'transparent',
};

// Interaction Tests
Empty.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = await canvas.getByPlaceholderText('Type something...') as HTMLInputElement;
  await userEvent.type(input, 'Hello World');
  console.log('Typed text:', input.value); // Log the typed text
};

Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = await canvas.getByDisplayValue('Some text') as HTMLInputElement;
  await userEvent.clear(input);
  await userEvent.type(input, 'New text');
  console.log('New text:', input.value); // Log the new text
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = await canvas.getByDisplayValue('Disabled') as HTMLInputElement;
  console.log('Disabled input retrieved:', input); // Log the retrieved input element

  // Attempt to type into the disabled input
  try {
    await userEvent.type(input, 'Trying to type');
  } catch (e) {
    console.log('Cannot type into a disabled input');
  }

  // Log the disabled state
  if (input.disabled) {
    console.log('Input is disabled');
  }
};
