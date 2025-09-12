import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { About } from './About';

describe('About Component', () => {
  it('renders about section with proper heading', () => {
    render(<About />);
    
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
  });

  it('contains key information about Derek', () => {
    render(<About />);
    
    expect(screen.getByText(/wetaskiwin, alberta/i)).toBeInTheDocument();
    expect(screen.getByText(/18 years/i)).toBeInTheDocument();
    expect(screen.getByText(/cdi college/i)).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<About />);
    
    const section = screen.getByLabelText('About Me');
    expect(section).toHaveAttribute('id', 'about');
    expect(section).toHaveClass('portfolio-section', 'card');
  });

  it('describes career transition story', () => {
    render(<About />);
    
    expect(screen.getByText(/truck driver/i)).toBeInTheDocument();
    expect(screen.getByText(/web and mobile app development/i)).toBeInTheDocument();
  });
});