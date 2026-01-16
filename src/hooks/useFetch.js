import { useState, useEffect } from 'react';

export default function (url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const cache = new Map();

  useEffect(() => {
    const fetchData = async () => {
      if (cache.has(url)) {
        setData(cache.get(url));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(url, options);

        const status = response.status;
        const data = await response.json();
        cache.set(url, data);
        setData(data);

         const logEntity = {
            status,
            data,
            url,
            requestBody: options?.body ? JSON.parse(options.body) : null,
        }

        const log = JSON.parse(localStorage.getItem('log')) || [];

        log.push(logEntity);

        localStorage.setItem('log', JSON.stringify(log));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};