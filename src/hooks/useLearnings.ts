import { useInfiniteQuery } from '@tanstack/react-query';
import { getLearnings, LearningsResponse } from '../api/learnings';

export function useLearnings() {
    return useInfiniteQuery<LearningsResponse, Error>({
        queryKey: ['learnings'],
        queryFn: ({ pageParam }) => getLearnings({
            limit: 6,
            cursor: typeof pageParam === 'string' ? pageParam : undefined
        }),
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        initialPageParam: undefined
    });
}
