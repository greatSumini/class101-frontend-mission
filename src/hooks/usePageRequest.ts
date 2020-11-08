import * as datas from '@data/index';
import { ListResponseSchema } from '@src/types';
import { useState } from 'react';

const PAGE_SIZE = 5;

export const usePageRequest = <T>(
  name: string
): ListResponseSchema<T> & { loadMore: () => void } => {
  const data: T[] = datas[name];

  const [page, setPage] = useState(0);

  const loadMore = () => {
    setPage(page + 1);
  };

  return {
    count: data.length,
    results: data.slice(0, (page + 1) * PAGE_SIZE),
    loadMore,
  };
};
