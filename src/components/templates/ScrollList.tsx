import React, { useEffect } from 'react';
import styled from 'styled-components';

import { usePageRequest } from '@src/hooks';

export type ScrollListProps = {
  name: 'productItem' | 'coupon';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ListItem: React.FunctionComponent<any>;
};

function ScrollList({ name, ListItem }: ScrollListProps) {
  const { results, loadMore } = usePageRequest(name);

  useEffect(() => {
    const handleScroll = () => {
      const { innerHeight } = window;
      const { scrollHeight } = document.body;
      // IE에서는 document.documentElement 를 사용.
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      // 스크롤링 했을때, 브라우저의 가장 밑에서 500정도 높이가 남았을때에 실행하기위함.
      if (scrollHeight - innerHeight - scrollTop < 500) {
        loadMore();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Wrapper>
      {results?.map((result) => (
        <ListItem key={JSON.stringify(result)} {...result} />
      ))}
    </Wrapper>
  );
}

export default ScrollList;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
`;
