import { useQuery } from '@tanstack/react-query';
import { getLearnings } from '../api/learnings';

export function useLearnings() {
  return useQuery({
    queryKey: ['learnings'],
    queryFn: getLearnings,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
    refetchOnWindowFocus: false,
  });
}
