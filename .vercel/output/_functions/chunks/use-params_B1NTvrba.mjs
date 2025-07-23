import { useState, useEffect } from 'react';

function useParams() {
  const [params, setParams] = useState({});
  useEffect(() => {
    const params2 = new URLSearchParams(window.location.search);
    const paramsObj = {};
    for (const [key, value] of params2.entries()) {
      paramsObj[key] = value;
    }
    setParams(paramsObj);
  }, []);
  return params;
}

export { useParams as u };
