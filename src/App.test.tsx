import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock react-slick Slider to just render children
jest.mock('react-slick', () => ({
  __esModule: true,
  default: (props: { children?: React.ReactNode }) => <div>{props.children}</div>
}));

describe('Portfolio Application', () => {
  beforeEach(() => {
    // Reset theme to default
    document.body.className = '';
  });

  describe('Navigation', () => {
    it('renders all navigation links', () => {
      render(<App />);
      
      expect(screen.getByRole('menuitem', { name: /about/i })).toBeInTheDocument();
      expect(screen.getByRole('menuitem', { name: /projects/i })).toBeInTheDocument();
      expect(screen.getByRole('menuitem', { name: /skills/i })).toBeInTheDocument();
      expect(screen.getByRole('menuitem', { name: /contact/i })).toBeInTheDocument();
    });

    it('toggles theme when theme button is clicked', async () => {
      render(<App />);
      
      const themeButtons = screen.getAllByLabelText(/switch to light theme/i);
      const themeButton = themeButtons[0]; // Use the first theme button
      
      fireEvent.click(themeButton);
      
      await waitFor(() => {
        expect(document.body).toHaveClass('light-theme');
      });
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels', () => {
      render(<App />);
      
      const themeButtons = screen.getAllByLabelText(/switch to.*theme/i);
      expect(themeButtons.length).toBeGreaterThan(0);
    });

    it('has skip link for keyboard navigation', () => {
      render(<App />);
      
      const skipLink = screen.getByText(/skip to main content/i);
      expect(skipLink).toBeInTheDocument();
      expect(skipLink).toHaveAttribute('href', '#main-content');
    });

    it('has proper navigation structure', () => {
      render(<App />);
      
      const nav = screen.getByRole('navigation', { name: /main navigation/i });
      expect(nav).toBeInTheDocument();
      
      const menubar = screen.getByRole('menubar');
      expect(menubar).toBeInTheDocument();
    });
  });

  describe('Main Sections', () => {
    it('renders About section', () => {
      render(<App />);
      expect(screen.getByText(/About Me/i)).toBeInTheDocument();
      expect(screen.getByText(/Wetaskiwin, Alberta/i)).toBeInTheDocument();
    });

    it('renders Projects section', async () => {
      render(<App />);
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument();
      });
    });

    it('renders Skills section', async () => {
      render(<App />);
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /Skills/i })).toBeInTheDocument();
      });
    });

    it('renders Contact section', async () => {
      render(<App />);
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /Contact Me/i })).toBeInTheDocument();
      });
    });
  });

  describe('SEO Elements', () => {
    it('has proper heading hierarchy', async () => {
      render(<App />);
      
      // Wait for lazy-loaded components
      await waitFor(() => {
        const headings = screen.getAllByRole('heading');
        expect(headings.length).toBeGreaterThan(0);
      });
      
      // Test main section headings
      expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
    });

    it('has proper alt text on images', () => {
      render(<App />);
      
      const brandImage = screen.getByAltText(/derek wilford.*professional web developer/i);
      expect(brandImage).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('renders without crashing', () => {
      const { container } = render(<App />);
      expect(container.firstChild).toBeTruthy();
    });
  });
});