// @ts-ignore
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Section from './Section';
import { SectionProps } from './Section.types';
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
  title: 'StyledComponents/Section',
  component: Section,
  argTypes: {
    children: { 
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
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
} as Meta<typeof Section>;

type SectionStoryProps = SectionProps & { visible: boolean };

const Template: StoryFn<SectionStoryProps> = ({ visible, ...args }) => 
  visible ? (
    <StoryContainer>
      <Section {...args} />
    </StoryContainer>
  ) : (
    <div style={{ display: 'none' }} />
  );

export const Primary = Template.bind({});
Primary.args = {
  children: 'This is a primary section',
  disabled: false,
  visible: true,
  backgroundColor: 'white',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const section = await canvas.getByText('This is a primary section');
  await userEvent.click(section);
  // Add assertions or interactions here if needed
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'This section is disabled',
  disabled: true,
  visible: true,
  backgroundColor: 'grey',
};
