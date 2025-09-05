import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock react-slick Slider to just render children
jest.mock('react-slick', () => ({
  __esModule: true,
  default: (props: { children?: React.ReactNode }) => <div>{props.children}</div>
}));

describe('App', () => {
  it('renders About section', () => {
    render(<App />);
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  });

  it('renders Projects section', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument();
  });

  it('renders Skills section', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Skills/i })).toBeInTheDocument();
  });

  it('renders Contact section', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Contact Me/i })).toBeInTheDocument();
  });
});