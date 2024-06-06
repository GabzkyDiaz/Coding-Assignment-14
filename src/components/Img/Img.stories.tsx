import { Meta, StoryFn } from '@storybook/react';
import { Img, ImgProps } from './Img';
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
  title: 'StyledComponents/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Img>;

const Template: StoryFn<ImgProps & { visible: boolean }> = ({ visible, ...args }) => (
  visible ? (
    <StoryContainer>
      <Img {...args} />
    </StoryContainer>
  ) : <div style={{ display: 'none' }} />
);

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: '150px',
  height: '150px',
  visible: true,
  disabled: false,
  backgroundColor: 'transparent',
};

export const Large = Template.bind({});
Large.args = {
  src: 'https://via.placeholder.com/600',
  alt: 'Large Placeholder Image',
  width: '600px',
  height: '400px',
  visible: true,
  disabled: false,
  backgroundColor: 'transparent',
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  disabled: true,
  width: '150px',
  height: '150px',
  visible: true,
  backgroundColor: 'gray',
};
