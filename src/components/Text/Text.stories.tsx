import { Meta, StoryFn } from '@storybook/react';
import { Text, TextProps } from './Text';
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
  title: 'StyledComponents/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    bold: { control: 'boolean' },
    visible: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    fontColor: { control: 'color' },
  },
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = ({ disabled, ...args }) => (
  <StoryContainer>
    <Text {...args} disabled={disabled} />
  </StoryContainer>
);

export const Small = Template.bind({});
Small.args = {
  text: 'Small Text',
  size: 'small',
  visible: true,
  bold: false,
  disabled: false,
  fontColor: 'black',
};

export const Medium = Template.bind({});
Medium.args = {
  text: 'Medium Text',
  size: 'medium',
  visible: true,
  bold: false,
  disabled: false,
  fontColor: 'black',
};

export const Large = Template.bind({});
Large.args = {
  text: 'Large Text',
  size: 'large',
  visible: true,
  bold: false,
  disabled: false,
  fontColor: 'black',
};

export const Bold = Template.bind({});
Bold.args = {
  text: 'Bold Text',
  size: 'large',
  visible: true,
  bold: true,
  disabled: false,
  fontColor: 'black',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Text',
  bold: false,
  size: 'medium',
  disabled: true,
  visible: true,
  fontColor: 'black',
  backgroundColor: 'gray',  
};
