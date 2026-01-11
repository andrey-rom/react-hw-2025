import { useState, useEffect } from 'react';

interface UseFetchOptions extends RequestInit {
  body?: string;
}

interface UseFetchResult<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

interface LogEntity {
  status: number;
  data: unknown;
  url: string;
  requestBody: unknown;
}

const cache = new Map<string, unknown>();

export default function useFetch<T = unknown>(
  url: string,
  options: UseFetchOptions = {}
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (cache.has(url)) {
        setData(cache.get(url) as T);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(url, options);

        const status = response.status;
        const data = (await response.json()) as T;
        cache.set(url, data);
        setData(data);

        const logEntity: LogEntity = {
          status,
          data,
          url,
          requestBody: options?.body ? JSON.parse(options.body) : null,
        };

        const log: LogEntity[] = JSON.parse(localStorage.getItem('log') || '[]');

        log.push(logEntity);

        localStorage.setItem('log', JSON.stringify(log));
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
}

