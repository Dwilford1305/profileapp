import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ResponsiveImage } from './ResponsiveImage';

describe('ResponsiveImage Component', () => {
  const props = {
    src: '/media/test.png',
    alt: 'Test image description',
    className: 'test-class',
  };

  it('renders picture element with WebP source and fallback', () => {
    render(<ResponsiveImage {...props} />);
    
    const picture = screen.getByRole('img').parentElement;
    expect(picture?.tagName).toBe('PICTURE');
    
    const webpSource = picture?.querySelector('source[type="image/webp"]');
    expect(webpSource).toBeInTheDocument();
    expect(webpSource).toHaveAttribute('srcset', '/media/test.webp');
  });

  it('renders img with proper attributes', () => {
    render(<ResponsiveImage {...props} />);
    
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/media/test.png');
    expect(img).toHaveAttribute('alt', 'Test image description');
    expect(img).toHaveClass('test-class');
  });

  it('applies lazy loading by default', () => {
    render(<ResponsiveImage {...props} />);
    
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('can override loading behavior', () => {
    render(<ResponsiveImage {...props} loading="eager" />);
    
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('loading', 'eager');
  });

  it('handles different image formats', () => {
    render(<ResponsiveImage {...props} src="/media/test.jpg" />);
    
    const webpSource = screen.getByRole('img').parentElement?.querySelector('source');
    expect(webpSource).toHaveAttribute('srcset', '/media/test.webp');
  });
});