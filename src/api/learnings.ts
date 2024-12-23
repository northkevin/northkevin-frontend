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

export const getLearnings = async (): Promise<Learning[]> => {
  return fetchApi<Learning[]>('/api/learnings');
};
