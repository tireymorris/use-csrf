# use-csrf

A React hook that retrieves a Rails CSRF token from the DOM

## Usage

```
import React, { useEffect, useState } from 'react';
import useCsrfToken from 'use-csrf/useCsrfToken';
import { performOperation } from 'utils';

const Page = () => {
  const [content, setContent] = useState(null);

  const token = useCsrfToken();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        'https://api.github.com/search/repositories?q=use-csrf',
        {
          headers: { 'X-CSRF-Token': token }
        }
      );

      const data = await result.json();

      setContent(data);
    };

    fetchData();
  }, []);

  return <>{performOperation(content)}</>;
};

```
