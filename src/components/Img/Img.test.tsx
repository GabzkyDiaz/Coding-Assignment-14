// @ts-ignore
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Img } from './Img';

describe('Img Component', () => {
  test('renders Primary Img', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" visible={true} disabled={false} />);
    expect(screen.getByAltText('Placeholder Image')).toBeInTheDocument();
  });

  test('renders Large Img', () => {
    render(<Img src="https://via.placeholder.com/600" alt="Large Placeholder Image" visible={true} disabled={false} />);
    expect(screen.getByAltText('Large Placeholder Image')).toBeInTheDocument();
  });

  test('renders Disabled Img', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" visible={true} disabled={true} backgroundColor="gray" />);
    const imgElement = screen.getByAltText('Placeholder Image').parentElement;
    expect(imgElement).toHaveStyle('opacity: 0.5');
    expect(imgElement).toHaveStyle('cursor: not-allowed');
  });
});
