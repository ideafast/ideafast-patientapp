/**
 * @format
 * @flow strict-local
 */
import {useState, useEffect} from 'react';

function useDevices(getDevices) {
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    await getDevices();
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
    // We want to only load thise once when the hook is invoked
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [loading];
}

export {useDevices};
