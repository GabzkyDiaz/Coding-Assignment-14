// @ts-ignore
import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { action } from '@storybook/addon-actions';
import Link from './Link';
import { LinkProps } from './Link.types';
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
    children: { control: 'text' },
    href: { control: 'text' },
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' },
    backgroundColor: { control: 'color' },
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
  onClick: action('link-click'), // Explicit spy function for onClick
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
  onClick: action('link-hover'), // Explicit spy function for onClick
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
  onClick: action('link-disabled'), // Explicit spy function for onClick
};
