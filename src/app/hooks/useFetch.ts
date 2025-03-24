import { useState } from "react";

export const useFetch = <T>(url: string) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError(`${error} Could not Fetch Data`);
      setLoading(false);
    }
  };

  const resetData = () => {
     setLoading(true);
     setError(null);
     setData(null);
  }

  return { error, loading, data, fetchData, resetData};
};
