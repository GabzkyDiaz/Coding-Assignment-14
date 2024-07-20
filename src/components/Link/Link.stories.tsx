// @ts-ignore
import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Link from './Link';
import { LinkProps } from './Link.types';
import { userEvent, within } from '@storybook/testing-library';
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
  title: 'StyledComponents/Link',
  component: Link,
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    children: { control: 'text' },
    href: { control: 'text' },
    visible: { control: 'boolean' },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
} as Meta<typeof Link>;

type LinkStoryProps = LinkProps & { visible: boolean };

const Template: StoryFn<LinkStoryProps> = ({ visible, ...args }): ReactElement => 
  visible ? (
    <StoryContainer>
      <Link {...args} />
    </StoryContainer>
  ) : (
    <div style={{ display: 'none' }} />
  );

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Link',
  href: 'https://www.facebook.com/',
  disabled: false,
  visible: true,
  backgroundColor: 'transparent',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = await canvas.getByText('Primary Link');
  await userEvent.click(link);
};

export const Hover = Template.bind({});
Hover.args = {
  children: 'Hover Link',
  href: 'https://www.facebook.com/',
  disabled: false,
  visible: true,
  backgroundColor: 'transparent',
};
Hover.parameters = {
  pseudo: { hover: true },
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Link',
  href: 'https://www.facebook.com/',
  disabled: true,
  visible: true,
  backgroundColor: 'transparent',
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = await canvas.getByText('Disabled Link');
  await userEvent.hover(link);
};
