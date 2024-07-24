import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBarComp from '../../components/organisms/NavBarComp';

describe('Render buttons correctly', () => {
  test('Check if downlaod buttons in th documents', () => {
    render(
      <MemoryRouter>
        <NavBarComp />
      </MemoryRouter>,
    );
    const btn_download_my_cv = screen.getAllByRole('button', {
      name: 'Download My CV',
    });
    expect(btn_download_my_cv).toBeInTheDocument;
  });
});

describe('Render links correctly', () => {
  test('Check if LOGO link in the navbar', () => {
    render(
      <MemoryRouter>
        <NavBarComp />
      </MemoryRouter>,
    );
    const logo_link = screen.getByRole('link', {
      name: 'A.Amiar',
    });
    expect(logo_link).toBeInTheDocument;
  });

  test('Check if ABOUT ME link in the navbar', () => {
    render(
      <MemoryRouter>
        <NavBarComp />
      </MemoryRouter>,
    );
    const about_link = screen.getByRole('link', {
      name: 'About Mee',
    });
    expect(about_link).toBeInTheDocument;
  });

  test('Check if EXPERIENCE link in the navbar', () => {
    render(
      <MemoryRouter>
        <NavBarComp />
      </MemoryRouter>,
    );
    const experience_link = screen.getByRole('link', {
      name: 'Experience',
    });
    expect(experience_link).toBeInTheDocument;
  });

  test('Check if PORTFOLIO link in the navbar', () => {
    render(
      <MemoryRouter>
        <NavBarComp />
      </MemoryRouter>,
    );
    const portfolio_link = screen.getByRole('link', {
      name: 'Portfolio',
    });
    expect(portfolio_link).toBeInTheDocument;
  });

  test('Check if TESTIMONIALS link in the navbar', () => {
    render(
      <MemoryRouter>
        <NavBarComp />
      </MemoryRouter>,
    );
    const testimonials_link = screen.getByRole('link', {
      name: 'Testimonials',
    });
    expect(testimonials_link).toBeInTheDocument;
  });

  test('Check if CONTACT link in the navbar', () => {
    render(
      <MemoryRouter>
        <NavBarComp />
      </MemoryRouter>,
    );
    const contact_link = screen.getByRole('link', {
      name: 'Contact',
    });
    expect(contact_link).toBeInTheDocument;
  });
});
