import { useState } from 'react';
import api from '@/lib/axios';

export const usePostRequirement = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postRequirement = async (data: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/requirements', data);
      setLoading(false);
      return response.data;
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.message || 'Something went wrong');
      throw err;
    }
  };

  return { postRequirement, loading, error };
};