import { fetchApi } from '../utils/api';

export interface Learning {
  id: number;
  date: string;
  content: string;
  tags?: string[];
  links?: {
    text: string;
    url: string;
    type: string;
  }[];
}

export interface LearningsResponse {
  learnings: Learning[];
  nextCursor?: string;
  total: number;
}

interface GetLearningsParams {
    limit: number;
    cursor?: string;
}

export const getLearnings = async ({ limit, cursor }: GetLearningsParams) => {
    const params = new URLSearchParams({
        limit: limit.toString(),
        ...(cursor && { cursor })
    });
  
    return fetchApi<LearningsResponse>(`/api/learnings?${params}`);
};
