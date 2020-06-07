import React, { useState } from 'react';
import dummy from './dummy.svg';

// couldn't find any working type for image :(
export const Image = ({ src, alt, ...props }: any) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <img
      {...props}
      src={isLoading ? dummy : src}
      onLoad={() => setLoading(false)}
      onError={() => setLoading(false)}
      alt={alt}
    />
  );
};
