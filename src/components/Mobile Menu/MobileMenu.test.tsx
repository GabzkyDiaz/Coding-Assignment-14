// @ts-ignore
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MobileMenu } from './MobileMenu';

describe('MobileMenu Component', () => {
  test('renders Collapsed MobileMenu', () => {
    render(<MobileMenu options={['Home', 'Skills', 'Contact']} visible={true} defaultExpanded={false} disabled={false} />);
    const button = screen.getByRole('button', { name: /Expand/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /Collapse/i })).toBeInTheDocument();
  });
});
