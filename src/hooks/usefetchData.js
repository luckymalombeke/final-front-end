import { useCallback, useEffect, useState } from 'react';
import api from '../api/client';

export default function useFetchData(resource) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get(`/${resource}`);
      setData(response.data || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [resource]);

  const createData = useCallback(
    async (item) => {
      await api.post(`/${resource}`, item);
      await fetchData();
    },
    [resource, fetchData],
  );

  const updateData = useCallback(
    async (id, item) => {
      await api.put(`/${resource}/${id}`, item);
      await fetchData();
    },
    [resource, fetchData],
  );

  const deleteData = useCallback(
    async (id) => {
      await api.delete(`/${resource}/${id}`);
      await fetchData();
    },
    [resource, fetchData],
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    createData,
    updateData,
    deleteData,
    refresh: fetchData,
  };
}
