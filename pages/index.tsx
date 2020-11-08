import React from 'react';
import styled from 'styled-components';

import { P } from '@src/components/atoms';

export default function Home() {
  return (
    <Wrapper>
      <P level={5}>안녕 나는 수민이</P>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
`;
