import * as datas from '@data/index';
import { ListResponseSchema } from '@src/types';
import { useState } from 'react';

const PAGE_SIZE = 5;

export const usePageRequest = <T>(
  name: string
): ListResponseSchema<T> & { loadMore: () => void } => {
  const data: T[] = datas[`${name}s`];
  const [page, setPage] = useState(0);

  const count = data.length;
  const results = data.slice(0, (page + 1) * PAGE_SIZE);

  const loadMore = () => {
    if (results.length === count) {
      return;
    }
    setPage(page + 1);
  };

  return {
    count,
    results,
    loadMore,
  };
};
