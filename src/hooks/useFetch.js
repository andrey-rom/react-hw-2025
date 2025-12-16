import { useState, useEffect } from 'react';

export default function (url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('log', url);
        const response = await fetch(url, options);

        const status = response.status;
        const data = await response.json();
        setData(data);

         const logEntity = {
            status,
            data,
            url,
            requestBody: options?.body ? JSON.parse(options.body) : null,
        }
    


        const log = JSON.parse(localStorage.getItem('log')) || [];

        console.log('result', typeof log, log);
        log.push(logEntity);

        localStorage.setItem('log', JSON.stringify(log));
      } catch (error) {
        console.log('error', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};