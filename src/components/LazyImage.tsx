import React from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, placeholder, className = '', alt, ...rest }) => {
  return (
    <img
      src={placeholder || ''}
      data-src={src}
      alt={alt}
      className={`lazyload ${className}`}
      {...rest}
    />
  );
};

export default LazyImage;
