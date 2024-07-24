import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LinkMenuComp from '../../components/molecules/LinkMenuComp';
import { NAVBAR_MENU_LINKS } from '../../constants';
describe('Renders correctly', () => {
  test('Renders a list of navbar links', () => {
    render(
      <MemoryRouter>
        <LinkMenuComp menuLinksText={NAVBAR_MENU_LINKS} />
      </MemoryRouter>,
    );
    const links = screen.getByTestId('navbar-links-container');
    expect(links).toBeInTheDocument;
  });

  test('Renders 5 links', () => {
    render(
      <MemoryRouter>
        <LinkMenuComp menuLinksText={NAVBAR_MENU_LINKS} />
      </MemoryRouter>,
    );
    const links_length = screen.getAllByRole('link');
    expect(links_length).toHaveLength(5);
  });
});
