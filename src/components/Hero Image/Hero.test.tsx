// @ts-ignore
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero Component', () => {
  test('renders Primary Hero', () => {
    render(<Hero imageUrl="https://via.placeholder.com/800x400" title="Hero Title" subtitle="Hero Subtitle" visible={true} disabled={false} />);
    expect(screen.getByText('Hero Title')).toBeInTheDocument();
    expect(screen.getByText('Hero Subtitle')).toBeInTheDocument();
  });

  test('renders Disabled Hero', () => {
    render(<Hero imageUrl="https://via.placeholder.com/800x400" title="Hero Title" subtitle="Hero Subtitle" visible={true} disabled={true} backgroundColor="gray" />);
    const heroElement = screen.getByText('Hero Title').parentElement;
    expect(heroElement).toHaveStyle('opacity: 0.5');
    expect(heroElement).toHaveStyle('cursor: not-allowed');
    expect(heroElement).toHaveStyle('background-color: gray');
  });
});
