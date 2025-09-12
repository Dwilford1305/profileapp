import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  onClick?: () => void;
}

/**
 * ResponsiveImage
 * Provides optimized image loading with WebP support and lazy loading.
 * Falls back to original format if WebP is not supported.
 */
export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  sizes = '100vw',
  loading = 'lazy',
  onClick
}) => {
  // Generate WebP source path by replacing extension
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const fallbackSrc = src;

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        sizes={sizes}
        loading={loading}
        onClick={onClick}
      />
    </picture>
  );
};