import { useState, useEffect } from 'react';

const useCsrfToken = () => {
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    const metaTag = document.querySelector('meta[name=csrf-token]');
    const token = metaTag && metaTag.getAttribute('content');

    if (token !== csrfToken && typeof token === 'string') {
      setCsrfToken(token);
    }
  });

  return csrfToken;
};

export default useCsrfToken;
