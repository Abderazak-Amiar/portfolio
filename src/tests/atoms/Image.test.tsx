import Image from '@components/atoms/Image';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
describe('Test Image component rendering', () => {
  test('Check if Image rendered correctly', () => {
    render(<Image imageLink="abderazak.png" />);
    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
  });

  test('Check if Image has src attribute', () => {
    render(<Image imageLink="abderazak.png" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'abderazak.png');
  });
});
