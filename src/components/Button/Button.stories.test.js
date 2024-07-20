import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button interactions', () => {
  test('renders Primary Button', () => {
    render(<Button disabled={false} label="Button" />);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  test('renders Disabled Button and checks disabled state', () => {
    render(<Button disabled={true} label="Disabled" backgroundColor="gray" />);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
    fireEvent.mouseOver(button);
    expect(button).toHaveStyle('background-color: gray');
  });
});
