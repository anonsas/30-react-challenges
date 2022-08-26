import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error('Wrong URL');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Fetch Aborted');
        } else {
          setLoading(false);
          setError(error.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);

  return { data, loading, error };
};
export default useFetch;
