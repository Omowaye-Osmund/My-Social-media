import { useState, useEffect } from 'react';

const useFetch = (url) => {

   const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

       useEffect(() => {

// const abortError = new AbortController();

  setTimeout(() => {
      fetch(url)
    .then(res => {
          if (!res.ok) {
        throw Error('Could not fetch data from that resource')
      }
        return res.json();
    })
    .then(data => {
     console.log(data);
     setData(data);
     setIsLoading(false);
     setError(null);
    })
    .catch(err => {
        if (err.name === 'AbortError') {
            console.log('fetch aborted')
        }
        else {
            setError(err.message)
            setIsLoading(false);
        }
    })
  }, 1000);

// return () => abortError.abort();

    }, [url]);

    return {data, isLoading, error};

}

export default useFetch;