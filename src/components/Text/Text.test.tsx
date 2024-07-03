// @ts-ignore
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text Component', () => {
  test('renders Medium Text', () => {
    render(<Text text="Medium Text" size="small" visible={true} bold={false} disabled={false} fontColor="black" />);
    const textElement = screen.getByText('Medium Text');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle('font-size: 16px');
  });
});




